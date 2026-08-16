const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

export function withBase(path: string) {
  if (!path.startsWith("/") || !basePath || path === basePath || path.startsWith(`${basePath}/`)) {
    return path;
  }

  return `${basePath}${path}`;
}
