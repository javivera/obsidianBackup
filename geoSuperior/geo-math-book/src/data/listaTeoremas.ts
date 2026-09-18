import { withBase } from "../lib/paths";

export const listaCorazonesTotal = 33;
export const listaCorazonesPresent = 33;

// Entries marked with a heart in ListaTeoremas.pdf, audited one by one.
// PDF entry 53 spans two adjacent BookBlocks.
const listaCorazonesPaths = [
  "/chapters/teo-5:5", // 9
  "/chapters/teo-5:8", // 10
  "/chapters/teo-6:3", // 13
  "/chapters/teo-8:19", // 17
  "/chapters/teo-8:21", // 18
  "/chapters/teo-10:10", // 23
  "/chapters/teo-11:1", // 25
  "/chapters/teo-11:4", // 26
  "/chapters/teo-11:9", // 27
  "/chapters/teo-14:1", // 36
  "/chapters/teo-14:10", // 38
  "/chapters/teo-15:0", // 39
  "/chapters/teo-16:0", // 42
  "/chapters/teo-16:7", // 45
  "/chapters/teo-17:0", // 46
  "/chapters/teo-17:4", // 47
  "/chapters/teo-17:5", // 48
  "/chapters/teo-18:4", // 50
  "/chapters/teo-18:7", // 52
  "/chapters/teo-19:4", // 53, buena definición
  "/chapters/teo-19:5", // 53, propiedades
  "/chapters/teo-19:7", // 54
  "/chapters/teo-19:10", // 57
  "/chapters/teo-19:13", // 59
  "/chapters/teo-19:14", // 60
  "/chapters/teo-19:16", // 61
  "/chapters/teo-21:11", // 68
  "/chapters/teo-21:14", // 70
  "/chapters/teo-21:17", // 71
  "/chapters/teo-21:18", // 72
  "/chapters/teo-22:6", // 73
  "/chapters/teo-23:12", // 74
  "/chapters/teo-23:14", // 75
  "/chapters/teo-24:14" // 81
] as const;

export const listaCorazonesBlockIds = listaCorazonesPaths.map((entry) => {
  const separator = entry.lastIndexOf(":");
  return `${withBase(entry.slice(0, separator))}${entry.slice(separator)}`;
});
