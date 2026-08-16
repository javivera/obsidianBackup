import { createServer } from "node:http";
import { randomBytes, scrypt as scryptCallback, timingSafeEqual } from "node:crypto";
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";

const scrypt = promisify(scryptCallback);
const port = Number(process.env.PORT || 4322);
const host = process.env.HOST || "127.0.0.1";
const dataFile = process.env.GEO_MATH_DATA_FILE ||
  join(dirname(fileURLToPath(import.meta.url)), "data", "accounts.json");
const sessions = new Map();
const sessionMaxAge = 60 * 60 * 24 * 30;
let writeQueue = Promise.resolve();

async function readDatabase() {
  try {
    const value = JSON.parse(await readFile(dataFile, "utf8"));
    return value && typeof value === "object" ? value : { users: {} };
  } catch (error) {
    if (error.code === "ENOENT") return { users: {} };
    throw error;
  }
}

let database = await readDatabase();
database.users ||= {};

function persistDatabase() {
  writeQueue = writeQueue.then(async () => {
    await mkdir(dirname(dataFile), { recursive: true });
    const temporaryFile = `${dataFile}.${process.pid}.tmp`;
    await writeFile(temporaryFile, `${JSON.stringify(database, null, 2)}\n`, { mode: 0o600 });
    await rename(temporaryFile, dataFile);
  });
  return writeQueue;
}

function sendJson(response, status, body, headers = {}) {
  response.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
    ...headers
  });
  response.end(JSON.stringify(body));
}

async function readJson(request) {
  let body = "";
  for await (const chunk of request) {
    body += chunk;
    if (body.length > 1_000_000) throw new Error("BODY_TOO_LARGE");
  }
  return body ? JSON.parse(body) : {};
}

function normalizeUsername(value) {
  return String(value || "").trim().toLocaleLowerCase("es");
}

function validUsername(value) {
  return /^[\p{L}\p{N}_.-]{2,32}$/u.test(value);
}

async function hashPassword(password, salt = randomBytes(16).toString("hex")) {
  const hash = await scrypt(password, salt, 64);
  return { salt, hash: Buffer.from(hash).toString("hex") };
}

async function passwordMatches(password, user) {
  const candidate = await scrypt(password, user.salt, 64);
  const expected = Buffer.from(user.passwordHash, "hex");
  return expected.length === candidate.length && timingSafeEqual(expected, candidate);
}

function cookies(request) {
  return Object.fromEntries(
    String(request.headers.cookie || "")
      .split(";")
      .map((part) => part.trim().split("="))
      .filter(([key, value]) => key && value)
      .map(([key, value]) => [key, decodeURIComponent(value)])
  );
}

function currentUser(request) {
  const token = cookies(request).geo_math_session;
  const session = token && sessions.get(token);
  if (!session || session.expiresAt < Date.now()) {
    if (token) sessions.delete(token);
    return null;
  }
  session.expiresAt = Date.now() + sessionMaxAge * 1000;
  return database.users[session.usernameKey] || null;
}

function createSession(request, response, usernameKey) {
  const token = randomBytes(32).toString("hex");
  sessions.set(token, {
    usernameKey,
    expiresAt: Date.now() + sessionMaxAge * 1000
  });
  const secure = request.headers["x-forwarded-proto"] === "https" ? "; Secure" : "";
  response.setHeader(
    "set-cookie",
    `geo_math_session=${token}; Path=/geo-math-book; HttpOnly; SameSite=Lax; Max-Age=${sessionMaxAge}${secure}`
  );
}

function cleanUserData(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  return {
    history: Array.isArray(value.history) ? value.history.slice(0, 100) : [],
    mastery: value.mastery && typeof value.mastery === "object" && !Array.isArray(value.mastery)
      ? value.mastery
      : {},
    disabled: Array.isArray(value.disabled) ? value.disabled : [],
    titles: value.titles && typeof value.titles === "object" && !Array.isArray(value.titles)
      ? value.titles
      : {},
    filters: value.filters && typeof value.filters === "object" && !Array.isArray(value.filters)
      ? value.filters
      : {}
  };
}

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url, `http://${request.headers.host || "localhost"}`);

    if (request.method === "GET" && url.pathname === "/auth") {
      const user = currentUser(request);
      sendJson(response, 200, { authenticated: Boolean(user), username: user?.username || null });
      return;
    }

    if (request.method === "POST" && url.pathname === "/auth/register") {
      const body = await readJson(request);
      const username = String(body.username || "").trim();
      const usernameKey = normalizeUsername(username);
      const password = String(body.password || "");
      if (!validUsername(username) || password.length < 4 || password.length > 200) {
        sendJson(response, 400, {
          error: "Usa un usuario de 2 a 32 caracteres y una contraseña de al menos 4 caracteres."
        });
        return;
      }
      if (database.users[usernameKey]) {
        sendJson(response, 409, { error: "Ese usuario ya existe." });
        return;
      }
      const passwordData = await hashPassword(password);
      database.users[usernameKey] = {
        username,
        salt: passwordData.salt,
        passwordHash: passwordData.hash,
        createdAt: new Date().toISOString(),
        data: cleanUserData({})
      };
      await persistDatabase();
      createSession(request, response, usernameKey);
      sendJson(response, 201, { authenticated: true, username });
      return;
    }

    if (request.method === "POST" && url.pathname === "/auth/login") {
      const body = await readJson(request);
      const usernameKey = normalizeUsername(body.username);
      const user = database.users[usernameKey];
      if (!user || !(await passwordMatches(String(body.password || ""), user))) {
        sendJson(response, 401, { error: "Usuario o contraseña incorrectos." });
        return;
      }
      createSession(request, response, usernameKey);
      sendJson(response, 200, { authenticated: true, username: user.username });
      return;
    }

    if (request.method === "POST" && url.pathname === "/auth/logout") {
      const token = cookies(request).geo_math_session;
      if (token) sessions.delete(token);
      response.setHeader(
        "set-cookie",
        "geo_math_session=; Path=/geo-math-book; HttpOnly; SameSite=Lax; Max-Age=0"
      );
      sendJson(response, 200, { authenticated: false });
      return;
    }

    const user = currentUser(request);
    if (!user) {
      sendJson(response, 401, { error: "Inicia sesión para continuar." });
      return;
    }

    if (request.method === "GET" && url.pathname === "/data") {
      sendJson(response, 200, { data: cleanUserData(user.data) });
      return;
    }

    if (request.method === "PUT" && url.pathname === "/data") {
      const body = await readJson(request);
      user.data = cleanUserData(body.data);
      user.updatedAt = new Date().toISOString();
      await persistDatabase();
      sendJson(response, 200, { data: user.data });
      return;
    }

    sendJson(response, 404, { error: "Ruta no encontrada." });
  } catch (error) {
    console.error(error);
    sendJson(response, error.message === "BODY_TOO_LARGE" ? 413 : 500, {
      error: "No se pudo completar la solicitud."
    });
  }
});

server.listen(port, host, () => {
  console.log(`Geo Math account server listening on http://${host}:${port}`);
});
