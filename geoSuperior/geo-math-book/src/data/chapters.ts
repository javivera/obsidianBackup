import { withBase } from "../lib/paths";

const chapterData = [
  {
    "href": "/chapters/teo-1",
    "label": "Teo 1",
    "title": "Diferenciabilidad en espacios normados",
    "section": "theory"
  },
  {
    "href": "/chapters/teo-2",
    "label": "Teo 2",
    "title": "Curvas y diferenciabilidad",
    "section": "theory"
  },
  {
    "href": "/chapters/teo-3",
    "label": "Teo 3",
    "title": "Topología cociente",
    "section": "theory"
  },
  {
    "href": "/chapters/teo-4",
    "label": "Teo 4",
    "title": "Atlas",
    "section": "theory"
  },
  {
    "href": "/chapters/teo-5",
    "label": "Teo 5",
    "title": "Vectores tangentes",
    "section": "theory"
  },
  {
    "href": "/chapters/teo-6",
    "label": "Teo 6",
    "title": "El espacio tangente de una carta",
    "section": "theory"
  },
  {
    "href": "/chapters/teo-7",
    "label": "Teo 7",
    "title": "La diferencial de una función en coordenadas",
    "section": "theory"
  },
  {
    "href": "/chapters/teo-8",
    "label": "Teo 8",
    "title": "Funciones de corte y funciones campana",
    "section": "theory"
  },
  {
    "href": "/chapters/teo-9",
    "label": "Teo 9",
    "title": "Ejemplos",
    "section": "theory"
  },
  {
    "href": "/chapters/teo-10",
    "label": "Teo 10",
    "title": "Repaso de algebra lineal",
    "section": "theory"
  },
  {
    "href": "/chapters/teo-11",
    "label": "Teo 11",
    "title": "Lema de factorización MUY IMPORTANTE",
    "section": "theory"
  },
  {
    "href": "/chapters/teo-12",
    "label": "Teo 12",
    "title": "Orientacion",
    "section": "theory"
  },
  {
    "href": "/chapters/teo-13",
    "label": "Teo 13",
    "title": "Ejemplos de aplicacion",
    "section": "theory"
  },
  {
    "href": "/chapters/teo-14",
    "label": "Teo 14",
    "title": "Extension de funciones suaves",
    "section": "theory"
  },
  {
    "href": "/chapters/teo-15",
    "label": "Teo 15",
    "title": "Campos suaves y subvariedades",
    "section": "theory"
  },
  {
    "href": "/chapters/teo-16",
    "label": "Teo 16",
    "title": "Curvas integrales",
    "section": "theory"
  },
  {
    "href": "/chapters/teo-17",
    "label": "Teo 17",
    "title": "Groundwork de generador infinitesimal",
    "section": "theory"
  },
  {
    "href": "/chapters/teo-18",
    "label": "Teo 18",
    "title": "Extensión local de campos",
    "section": "theory"
  },
  {
    "href": "/chapters/teo-19",
    "label": "Teo 19",
    "title": "Corchete de Lie",
    "section": "theory"
  },
  {
    "href": "/chapters/teo-20",
    "label": "Teo 20",
    "title": "Tensores covariantes",
    "section": "theory"
  },
  {
    "href": "/chapters/teo-21",
    "label": "Teo 21",
    "title": "Conjunto de formas diferenciales",
    "section": "theory"
  },
  {
    "href": "/chapters/teo-22",
    "label": "Teo 22",
    "title": "Complejo de de Rham",
    "section": "theory"
  },
  {
    "href": "/chapters/teo-23",
    "label": "Teo 23",
    "title": "Distribuciones",
    "section": "theory"
  },
  {
    "href": "/chapters/teo-24",
    "label": "Teo 24",
    "title": "Orientacion de espacios vectoriales",
    "section": "theory"
  },
  {
    "href": "/chapters/teo-25",
    "label": "Teo 25",
    "title": "Integracion sobre variedades",
    "section": "theory"
  },
  {
    "href": "/chapters/pr-0",
    "label": "Pr 0",
    "title": "Soluciones de `Pr0CF.pdf`",
    "section": "practice"
  },
  {
    "href": "/chapters/pr-1",
    "label": "Pr 1",
    "title": "Practico 1",
    "section": "practice"
  },
  {
    "href": "/chapters/pr-2",
    "label": "Pr 2",
    "title": "Practico 2",
    "section": "practice"
  },
  {
    "href": "/chapters/pr-3",
    "label": "Pr 3",
    "title": "Practico 3",
    "section": "practice"
  },
  {
    "href": "/chapters/pr-4",
    "label": "Pr 4",
    "title": "Practico 4",
    "section": "practice"
  },
  {
    "href": "/chapters/pr-5",
    "label": "Pr 5",
    "title": "Practico 5",
    "section": "practice"
  },
  {
    "href": "/chapters/pr-6",
    "label": "Pr 6",
    "title": "Practico 6",
    "section": "practice"
  },
  {
    "href": "/chapters/pr-7",
    "label": "Pr 7",
    "title": "Practico 7",
    "section": "practice"
  },
  {
    "href": "/chapters/glosario",
    "label": "Glosario",
    "title": "Glosario",
    "section": "reference"
  }
];

export const chapters = chapterData.map((chapter) => ({
  ...chapter,
  href: withBase(chapter.href)
}));
