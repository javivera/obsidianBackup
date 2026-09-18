import katex from "katex";
import { listaCorazonesBlockIds } from "./listaTeoremas";
import { searchCatalog } from "./searchCatalog";
import { withBase } from "../lib/paths";

const labels = {
  definition: "Definicion",
  theorem: "Teorema",
  lemma: "Lema",
  proposition: "Proposicion",
  corollary: "Corolario",
  remark: "Observacion",
  example: "Ejemplo",
  exercise: "Ejercicio"
} as const;

type Kind = keyof typeof labels;

export const chapterSources = import.meta.glob("../pages/chapters/*.mdx", {
  query: "?raw",
  import: "default",
  eager: true
}) as Record<string, string>;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function decodeJsonString(value: string) {
  try {
    return JSON.parse(value);
  } catch {
    return value.slice(1, -1);
  }
}

function renderMath(tex: string, displayMode: boolean) {
  return katex.renderToString(tex, {
    displayMode,
    throwOnError: false,
    strict: false,
    trust: false,
    output: "html"
  });
}

export function renderInlineMdx(source: string) {
  return source
    .replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g, (_match, alt, src) => {
      const safeAlt = escapeHtml(alt);
      const safeSrc = escapeHtml(withBase(src));
      return `<img src="${safeSrc}" alt="${safeAlt}" />`;
    })
    .replace(
      /<Math\b([^>]*)tex=\{("(?:\\.|[^"\\])*")\}([^>]*)\/>/g,
      (_match, before, rawTex, after) => {
        const displayMode = /\bdisplay\b/.test(`${before} ${after}`);
        return renderMath(decodeJsonString(rawTex), displayMode);
      }
    )
    .replace(/<PreviewLink\b[^>]*href="([^"]*)"[^>]*label="([^"]*)"[^>]*\/>/g, (_match, href, label) => {
      const safeHref = escapeHtml(withBase(href));
      const safeLabel = escapeHtml(label);
      return `<span class="preview-link-wrap"><a class="preview-link" href="${safeHref}">${safeLabel}</a><span class="preview-card" role="tooltip"><span class="preview-content"><span>Cargando referencia...</span></span></span></span>`;
    })
    .replace(/<Fragment\b[^>]*slot="title"[^>]*>([\s\S]*?)<\/Fragment>/g, "$1")
    .replace(/<\/?BookBlock\b[^>]*>/g, "")
    .replace(/<\/?Proof\b[^>]*>/g, "")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>");
}

export function renderBlocksAsHtml(source: string) {
  const lines = source
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.trim());
  const out: string[] = [];
  let listType: "ol" | "ul" | null = null;

  const closeList = () => {
    if (!listType) return;
    out.push(`</${listType}>`);
    listType = null;
  };

  for (const line of lines) {
    if (!line) {
      closeList();
      continue;
    }

    const ordered = line.match(/^\d+\.\s+(.+)$/);
    if (ordered) {
      if (listType !== "ol") {
        closeList();
        out.push("<ol>");
        listType = "ol";
      }
      out.push(`<li>${renderInlineMdx(ordered[1])}</li>`);
      continue;
    }

    const unordered = line.match(/^[-*]\s+(.+)$/);
    if (unordered) {
      if (listType !== "ul") {
        closeList();
        out.push("<ul>");
        listType = "ul";
      }
      out.push(`<li>${renderInlineMdx(unordered[1])}</li>`);
      continue;
    }

    closeList();
    out.push(`<p>${renderInlineMdx(line)}</p>`);
  }

  closeList();
  return out.join("\n");
}

export function extractBlocks(source: string) {
  const blocks: Array<{ index: number; attributes: string; body: string }> = [];
  const stack: Array<{ index: number; attributes: string; bodyStart: number }> = [];
  const tagPattern = /<\/?BookBlock\b[^>]*>/g;
  let openingIndex = 0;
  let match;

  while ((match = tagPattern.exec(source)) !== null) {
    if (match[0].startsWith("</")) {
      const opening = stack.pop();
      if (opening) {
        blocks.push({
          index: opening.index,
          attributes: opening.attributes,
          body: source.slice(opening.bodyStart, match.index)
        });
      }
      continue;
    }

    stack.push({
      index: openingIndex,
      attributes: match[0],
      bodyStart: tagPattern.lastIndex
    });
    openingIndex += 1;
  }

  return blocks;
}

function splitProofSource(body: string) {
  const proofMatch = body.match(/<Proof\b[^>]*>([\s\S]*?)<\/Proof>/);
  const proofSource = proofMatch?.[1];
  if (!proofSource) return [];

  const numbered = proofSource
    .replace(/\r\n/g, "\n")
    .split(/\n(?=\s*(?:\d+\.|- \*\*|\*\*|\- \([ivx]+\)|- \([0-9]+\)))/gi)
    .map((step) => step.trim())
    .filter(Boolean);

  return (numbered.length > 1 ? numbered : proofSource.split(/\n\s*\n/g))
    .map((step) => step.replace(/^\s*\d+\.\s+/, "").trim())
    .filter(Boolean);
}

function proofPieces(body: string) {
  return splitProofSource(body)
    .map((step) => renderBlocksAsHtml(step))
    .filter(Boolean);
}

function cueSource(step: string) {
  const compact = step.replace(/\s+/g, " ").trim();
  const sentence = compact.match(/^(.{1,220}?(?:\.|:|;))(?:\s|$)/)?.[1] ?? compact;
  const displayMath = compact.match(/<Math\b[^>]*\bdisplay\b[^>]*\/>/)?.[0];
  const cue = displayMath && !sentence.includes(displayMath)
    ? `${sentence}\n${displayMath}`
    : sentence;

  return cue.length > 360 ? `${cue.slice(0, 357).trim()}...` : cue;
}

function proofCuePieces(body: string) {
  return splitProofSource(body)
    .map(cueSource)
    .map((step) => renderBlocksAsHtml(step))
    .filter(Boolean);
}

function customProofCuePieces(chapterHref: string, blockIndex: number, body?: string) {
  if (chapterHref.endsWith("/chapters/teo-5") && blockIndex === 8) {
    return [
      'Las funciones coordenadas <Math tex={"x_i"} /> están definidas solo en <Math tex={"U"} />, ósea están en <Math tex={"C^\\\\infty(U)"} />.',
      'Extendemos las <Math tex={"x_i"} /> a funciones suaves globales <Math tex={"\\\\widetilde{x}_i\\\\in C^\\\\infty(M)"} /> que coinciden con <Math tex={"x_i"} /> en un abierto <Math tex={"V"} /> de <Math tex={"p"} /> usando <PreviewLink href="/chapters/teo-5#405b16" label="Extensión de funciones suaves" title="Lema: Extensión de funciones suaves" />.',
      'Notamos que <Math display tex={"\\\\left.\\\\frac{\\\\partial}{\\\\partial x_i}\\\\right|_{p}\\\\widetilde{x}_{j}=\\\\left.\\\\frac{\\\\partial}{\\\\partial x_i}\\\\right|_{p}x_{j}"} /> porque <Math tex={"\\\\widetilde{x}_j"} /> y <Math tex={"x_j"} /> coinciden en <Math tex={"V"} /> un abierto, por <PreviewLink href="/chapters/teo-5#b713ca" label="Localidad de los vectores tangentes" title="Proposicion: Localidad de los vectores tangentes" />. Luego aplicamos la definición para obtener <Math display tex={"\\\\left.\\\\frac{\\\\partial}{\\\\partial x_i}\\\\right|_{p}x_j=\\\\left.\\\\frac{\\\\partial}{\\\\partial y_i}\\\\right|_{\\\\varphi(p)}(x_j\\\\circ\\\\varphi^{-1})"} />.',
      'Como <Math tex={"(U,\\\\varphi=(x_1,\\\\ldots,x_n))"} />, tenemos <Math tex={"x_j\\\\circ\\\\varphi^{-1}=\\\\pi_j"} />.',
      'Entonces <Math tex={"\\\\left.\\\\frac{\\\\partial}{\\\\partial y_i}\\\\right|_{\\\\varphi(p)}\\\\pi_j=\\\\delta_{ij}"} />.',
      'Si <Math tex={"t_1\\\\left.\\\\frac{\\\\partial}{\\\\partial x_1}\\\\right|_p+\\\\cdots+t_n\\\\left.\\\\frac{\\\\partial}{\\\\partial x_n}\\\\right|_p=0"} />, aplicamos <Math tex={"\\\\widetilde{x}_j"} /> a esa combinacion lineal y obtenemos <Math tex={"0=t_j"} />.',
      'Por lo tanto todos los coeficientes son cero y los vectores coordenados son linealmente independientes.'
    ].map((step) => renderBlocksAsHtml(step));
  }

  if (chapterHref.endsWith("/chapters/teo-8") && blockIndex === 19) {
    return [
      'Tomar el cubrimiento <Math tex={"\\\\{U,M\\\\setminus A\\\\}"} />.',
      'Tomar una particion de la unidad <Math tex={"\\\\{\\\\rho,\\\\sigma\\\\}"} /> subordinada a ese cubrimiento.',
      'Si <Math tex={"p\\\\in A"} />, entonces <Math tex={"\\\\sigma(p)=0"} /> y por lo tanto <Math tex={"\\\\rho(p)=1"} />.',
      'Definir <Math tex={"f=\\\\rho"} />.'
    ].map((step) => renderBlocksAsHtml(step));
  }

  if (chapterHref.endsWith("/chapters/teo-8") && blockIndex === 21) {
    return [
      'Por definicion tenemos <Math tex={"\\\\widetilde F_p:W_p\\\\to\\\\mathbb R^k"} /> que coincide con <Math tex={"F"} /> en <Math tex={"W_p\\\\cap A"} />, y sin perdida de generalidad tomamos <Math tex={"W_p\\\\subseteq U"} />.',
      'El conjunto <Math tex={"\\\\{W_p\\\\}_{p\\\\in A}\\\\cup\\\\{M\\\\setminus A\\\\}"} /> es un cubrimiento; entonces tomamos una particion estrictamente subordinada <Math tex={"\\\\{\\\\rho_p\\\\}_{p\\\\in A}\\\\cup\\\\{\\\\rho_0\\\\}"} />.',
      'Definir <Math tex={"\\\\widetilde F=\\\\sum_{p\\\\in A}\\\\rho_p\\\\widetilde F_p"} />.',
      'Ver que cada sumando es suave: si <Math tex={"q\\\\notin W_p"} />, entonces <Math tex={"q\\\\notin\\\\operatorname{supp}\\\\rho_p"} /> porque <Math tex={"\\\\operatorname{supp}\\\\rho_p\\\\subseteq W_p"} />.',
      'Luego la sumatoria es suave porque la familia de soportes es localmente finita, y cada sumando es suave por 4.',
      'Probar <Math tex={"\\\\widetilde F(q)=F(q)"} /> en <Math tex={"A"} /> usando que cada <Math tex={"\\\\widetilde F_p"} /> coincide con <Math tex={"F"} /> en <Math tex={"A"} /> y que la suma de la particion da <Math tex={"1"} />.',
      'Probar <Math tex={"\\\\operatorname{supp}\\\\widetilde F\\\\subseteq U"} /> tomando <Math tex={"q\\\\in\\\\operatorname{supp}\\\\widetilde F"} />. Por local finitud, <Math tex={"q"} /> tiene que estar en <Math tex={"\\\\operatorname{supp}\\\\rho_{p_j}"} /> para algun <Math tex={"j"} />; si no, <Math tex={"\\\\widetilde F"} /> valdria <Math tex={"0"} /> cerca de <Math tex={"q"} />, absurdo. Entonces <Math tex={"q\\\\in W_{p_j}\\\\subseteq U"} />.'
    ].map((step) => renderBlocksAsHtml(step));
  }

  if (chapterHref.endsWith("/chapters/teo-10") && blockIndex === 10) {
    return [
      'Definir <Math tex={"\\\\psi"} /> dada por <Math tex={"q\\\\mapsto (y_1(q),\\\\ldots,y_m(q))"} />.',
      'Como el conjunto <Math tex={"\\\\{y_1,\\\\ldots,y_m\\\\}"} /> es independiente en <Math tex={"p"} />, entonces <Math tex={"\\\\{(dy_1)_p,\\\\ldots,(dy_m)_p\\\\}"} /> es linealmente independiente; y como <Math tex={"\\\\dim M=m"} />, forma base de <Math tex={"T_p^*M"} />.',
      'Su base dual es <Math tex={"\\\\{v_1,\\\\ldots,v_m\\\\}"} />.',
      'Escribimos <Math tex={"(d\\\\psi)_p(v_j)"} /> en coordenadas <Math tex={"\\\\partial/\\\\partial r_i"} />; con eso y usando dualidad vemos que manda <Math tex={"v_j"} /> a <Math tex={"\\\\partial/\\\\partial r_j"} />.',
      'Como manda base en base, es isomorfismo.',
      'Por el teorema de funcion inversa existe <Math tex={"V"} /> abierto de <Math tex={"p"} /> tal que <Math tex={"\\\\psi|_V"} /> es difeomorfismo.'
    ].map((step) => renderBlocksAsHtml(step));
  }

  if (chapterHref.endsWith("/chapters/teo-11") && blockIndex === 1) {
    return [
      'Por el <PreviewLink href="/chapters/teo-11#existencia-cartas-dado-diferenciales" label="resultado anterior" title="Proposicion: Existencia de cartas dado diferenciales" />, basta probar que <Math tex={"\\\\{d(x_1\\\\circ F)_p,\\\\ldots,d(x_n\\\\circ F)_p\\\\}"} /> genera <Math tex={"T_p^*M"} />.',
      'Como <Math tex={"(dF)_p"} /> es inyectiva, entonces <Math tex={"(dF)^*_{F(p)}"} /> es sobreyectiva.',
      'Como <Math tex={"\\\\varphi"} /> es carta de <Math tex={"N"} />, entonces <Math tex={"\\\\{(dx_1)_{F(p)},\\\\ldots,(dx_n)_{F(p)}\\\\}"} /> genera <Math tex={"T_{F(p)}^*N"} />.',
      'Por 2, la imagen de <Math tex={"\\\\{(dx_1)_{F(p)},\\\\ldots,(dx_n)_{F(p)}\\\\}"} /> por <Math tex={"(dF)^*_{F(p)}"} /> genera <Math tex={"T_p^*M"} />, y <Math tex={"(dF)^*_{F(p)}((dx_i)_{F(p)})=d(x_i\\\\circ F)_p"} />.'
    ].map((step) => renderBlocksAsHtml(step));
  }

  if (chapterHref.endsWith("/chapters/teo-11") && blockIndex === 4) {
    return [
      'Tomar <Math tex={"q=\\\\widehat F(p)"} /> y una carta <Math tex={"(V,\\\\psi=(y_1,\\\\ldots,y_n))"} /> de <Math tex={"N"} /> alrededor de <Math tex={"F(p)"} />.',
      'Como <Math tex={"g:P\\\\to N"} /> es subvariedad, <Math tex={"(dg)_q"} /> es inyectiva; entonces existen <Math tex={"W"} /> y <Math tex={"\\\\varphi=(y_{i_1}\\\\circ g,\\\\ldots,y_{i_k}\\\\circ g)"} /> que dan una carta suave de <Math tex={"P"} />.',
      'Definir <Math tex={"\\\\pi(s_1,\\\\ldots,s_n)=(s_{i_1},\\\\ldots,s_{i_k})"} />, que es suave. Entonces podemos reescribir <Math tex={"\\\\varphi=\\\\pi\\\\circ\\\\psi\\\\circ g"} />.',
      'Como <Math tex={"\\\\widehat F"} /> es continua, <Math tex={"U=\\\\widehat F^{-1}(W)"} /> es abierto de <Math tex={"M"} /> y contiene a <Math tex={"p"} />.',
      'Ahora <Math tex={"\\\\varphi\\\\circ\\\\widehat F|_U=\\\\pi\\\\circ\\\\psi\\\\circ g\\\\circ\\\\widehat F|_U=\\\\pi\\\\circ\\\\psi\\\\circ F|_U"} />; el ultimo igual es por definicion de <Math tex={"\\\\widehat F"} />.',
      'Esta composicion es suave porque <Math tex={"\\\\pi"} /> es suave y <Math tex={"\\\\psi\\\\circ F|_U"} /> es composicion de funciones suaves.',
      'Luego, dado <Math tex={"p"} /> cualquiera, probamos que <Math tex={"\\\\varphi\\\\circ\\\\widehat F"} /> es suave en un abierto de <Math tex={"p"} />. Por lo tanto, para cualquier carta <Math tex={"\\\\widehat\\\\varphi"} /> de <Math tex={"M"} />, la representacion local <Math tex={"\\\\varphi\\\\circ\\\\widehat F\\\\circ\\\\widehat\\\\varphi^{-1}"} /> es suave, y por ende <Math tex={"\\\\widehat F"} /> es suave.'
    ].map((step) => renderBlocksAsHtml(step));
  }

  if (chapterHref.endsWith("/chapters/teo-11") && blockIndex === 9) {
    return [
      'Suponer que hay dos estructuras <Math tex={"\\\\mathcal F_1"} /> y <Math tex={"\\\\mathcal F_2"} /> de variedad sobre <Math tex={"A"} />, ambas compatibles con la topologia <Math tex={"\\\\tau"} />.',
      'Probamos que <Math tex={"\\\\operatorname{Id}:(A,\\\\mathcal F_1)\\\\to(A,\\\\mathcal F_2)"} /> e <Math tex={"\\\\operatorname{Id}:(A,\\\\mathcal F_2)\\\\to(A,\\\\mathcal F_1)"} /> son difeomorfismos usando el lema de factorizacion.',
      '<img src="/images/Pasted-image-20260429215527.png" alt="Diagrama del lema de factorizacion" />\nNotamos que <Math tex={"\\\\widehat F"} /> tiene que ser la identidad. Como ambas estructuras tienen la misma topologia <Math tex={"\\\\tau"} />, esa identidad es continua; entonces por el lema de factorizacion <Math tex={"\\\\widehat F"} /> es suave.',
      'Cambiando los roles obtenemos suavidad de la identidad inversa. Entonces las dos identidades son difeomorfismos, las cartas de ambas estructuras son compatibles, y por lo tanto son la misma estructura.'
    ].map((step) => renderBlocksAsHtml(step));
  }

  if (chapterHref.endsWith("/chapters/teo-14") && blockIndex === 1) {
    return [
      'Usar la forma local de una inmersion.',
      'Tomar las cartas que nos da la forma local y restringir sus dominios para hacerlas cubicas, mirando la preimagen de un cubo adecuado.',
      'Definir <Math tex={"\\\\pi:\\\\mathbb R^n\\\\to\\\\mathbb R^m"} /> como la funcion que mata las ultimas coordenadas a partir de <Math tex={"m+1"} />, es decir <Math tex={"\\\\pi(y_1,\\\\ldots,y_m,y_{m+1},\\\\ldots,y_n)=(y_1,\\\\ldots,y_m)"} />.',
      'Definimos <Math tex={"\\\\widetilde g=g\\\\circ\\\\varphi^{-1}\\\\circ\\\\pi\\\\circ\\\\psi"} />. Es composicion de funciones suaves, asi que es suave. Esta bien definida sobre <Math tex={"V"} />, que es el dominio de <Math tex={"\\\\psi"} />. Aca es donde usamos la parte de cubicas, para que <Math tex={"\\\\pi\\\\circ\\\\psi"} /> caiga en el dominio de <Math tex={"\\\\varphi^{-1}"} />.',
      'Ver que cumple <Math tex={"\\\\widetilde g\\\\circ i(q)=g(q)"} />. Para eso arrancar componiendo <Math tex={"\\\\widetilde g\\\\circ i"} /> con <Math tex={"\\\\varphi^{-1}\\\\circ\\\\varphi"} />, luego usar la definicion de <Math tex={"\\\\widetilde g"} /> y despues hacer aparecer la identidad en el cubo de tamaño <Math tex={"m"} />.'
    ].map((step) => renderBlocksAsHtml(step));
  }

  if (chapterHref.endsWith("/chapters/teo-14") && blockIndex === 10 && body) {
    return [
      renderBlocksAsHtml('**<Math tex={"1\\\\Rightarrow 2"} />**\nUsar la carta inducida <Math tex={"\\\\widetilde\\\\varphi"} /> y despues usar que <Math tex={"\\\\widetilde\\\\varphi\\\\circ X|_U"} /> es suave por ser composición de suaves.'),
      renderBlocksAsHtml('**<Math tex={"2\\\\Rightarrow 3"} />**\nTomamos carta en <Math tex={"V"} />, <Math tex={"(U,\\\\varphi)"} />.'),
      renderBlocksAsHtml('<Math display tex={"(Xf)(p)=X_p f=\\\\sum_i a_i(p)\\\\left.\\\\frac{\\\\partial}{\\\\partial x_i}\\\\right|_p f"} />'),
      renderBlocksAsHtml('Sabemos <Math tex={"a_i"} /> es suave por hipótesis, y por definición vemos que <Math tex={"\\\\left.\\\\frac{\\\\partial}{\\\\partial x_i}\\\\right|_p f"} /> es suave.'),
      renderBlocksAsHtml('**<Math tex={"3\\\\Rightarrow 1"} />**\nTomar <Math tex={"(U,\\\\varphi)"} /> carta y queremos ver <Math tex={"X|_U"} /> es suave.'),
      renderBlocksAsHtml('Para eso vemos que <Math tex={"\\\\widetilde\\\\varphi\\\\circ X|_U"} /> es suave, donde <Math tex={"\\\\widetilde\\\\varphi"} /> es la carta inducida. Las primeras coordenadas son suaves por ser carta; las ultimas son las coordenadas de <Math tex={"X_p"} />.'),
      renderBlocksAsHtml('Escribimos <Math tex={"X_p"} /> en la base de la carta y vemos que las coordenadas son <Math tex={"X_p x_i"} />. Por hipótesis es suave porque <Math tex={"x_i"} /> es suave.'),
      renderBlocksAsHtml('**<Math tex={"4\\\\Rightarrow 3"} />**\nTenemos <Math tex={"f\\\\in C^\\\\infty(V)"} /> y extendemos a <Math tex={"\\\\widetilde f"} />. Entonces <Math tex={"\\\\widetilde f\\\\in C^\\\\infty(M)"} /> y <Math tex={"\\\\widetilde f|_U=f|_U"} />.'),
      renderBlocksAsHtml('Como coinciden en el abierto <Math tex={"U"} />, para todo <Math tex={"q\\\\in U"} /> se tiene <Math tex={"X_q(\\\\widetilde f|_U)=X_q(f|_U)"} />.'),
      renderBlocksAsHtml('Entonces, usando la definición, <Math tex={"(X\\\\widetilde f)(q)=(Xf)(q)"} /> para todo <Math tex={"q\\\\in U"} />.'),
      renderBlocksAsHtml('Por hipótesis <Math tex={"X\\\\widetilde f"} /> es suave; entonces <Math tex={"X\\\\widetilde f"} /> es suave en <Math tex={"U"} /> también.')
    ];
  }

  if (chapterHref.endsWith("/chapters/teo-15") && blockIndex === 0) {
    return [
      renderBlocksAsHtml('<Math tex={"\\\\Rightarrow"} /> trivial.'),
      renderBlocksAsHtml('**<Math tex={"\\\\Leftarrow"} />**\nTomar carta inducida <Math tex={"\\\\widetilde\\\\varphi"} />. Basta con ver que <Math tex={"\\\\widetilde\\\\varphi\\\\circ X"} /> es suave porque, para cualquier <Math tex={"p\\\\in U"} />, encontramos cartas a ambos lados tal que localmente es suave.'),
      renderBlocksAsHtml('La suavidad de <Math tex={"\\\\widetilde\\\\varphi\\\\circ X"} /> sale por definición y usando que las coordenadas son suaves.')
    ];
  }

  if (chapterHref.endsWith("/chapters/teo-21") && blockIndex === 17) {
    return [
      '<Math tex={"\\\\omega=\\\\omega_1-\\\\omega_2"} /> y queremos ver <Math tex={"(d\\\\omega)|_U\\\\equiv0"} />.',
      'Usar extensión con <Math tex={"f|_{\\\\overline V}\\\\equiv1"} /> y <Math tex={"\\\\operatorname{supp}f\\\\subset U"} />. Entonces <Math tex={"f\\\\omega\\\\equiv0"} /> en todo <Math tex={"M"} />.',
      'Usar <Math tex={"d(f\\\\omega)=df\\\\wedge\\\\omega+f\\\\,d\\\\omega"} />. Evaluando en <Math tex={"p\\\\in U"} />, como <Math tex={"\\\\omega_p=0"} /> y <Math tex={"f(p)=1"} />, llegamos a <Math tex={"(d\\\\omega)_p=0"} />.'
    ].map((step) => renderBlocksAsHtml(step));
  }

  if (chapterHref.endsWith("/chapters/teo-16") && blockIndex === 0) {
    return [
      'Proponer <Math tex={"(a(p),b(p))"} /> como la union de todos los intervalos abiertos que contienen a <Math tex={"0"} /> y que son dominios de curvas integrales de <Math tex={"X"} /> que pasan por <Math tex={"p"} /> en <Math tex={"0"} />.',
      'Para construir tal curva, basta en hacerlo dentro del dominio de una carta <Math tex={"(U,\\\\varphi=(x_1,\\\\ldots,x_n))"} /> y bajar el problema a <Math tex={"\\\\mathbb R^n"} />. Si <Math tex={"\\\\widetilde\\\\sigma=\\\\varphi\\\\circ\\\\sigma"} />, entonces',
      '<Math display tex={"\\\\widetilde\\\\sigma(t)=(y_1(t),\\\\ldots,y_n(t))"} />',
      '<Math display tex={"\\\\sigma^{\\\\prime}(t)=\\\\sum_{k=1}^{n}y_k^{\\\\prime}(t)\\\\left.\\\\frac{\\\\partial}{\\\\partial x_k}\\\\right|_{\\\\sigma(t)}"} />',
      '<Math display tex={"X_{\\\\sigma(t)}=\\\\sum_{k=1}^n a_k(\\\\sigma(t))\\\\left.\\\\frac{\\\\partial}{\\\\partial x_k}\\\\right|_{\\\\sigma(t)}"} />',
      'Entonces queda un sistema autonomo en coordenadas con condicion inicial <Math tex={"\\\\varphi(p)=(y_1(0),\\\\ldots,y_n(0))"} />. Por el <PreviewLink href="/chapters/teo-15#81ef7e" label="teorema fundamental de EDO autonomas" title="Teorema: Fundamental theorem for autonomous ODEs" />, existe solucion local.',
      'Levantando la solucion por <Math tex={"\\\\varphi^{-1}"} /> obtenemos una curva integral local que pasa por <Math tex={"p"} />; por tanto la union que define <Math tex={"(a(p),b(p))"} /> es no vacia.',
      'Definir <Math tex={"\\\\gamma_p(t)"} /> usando cualquier curva integral <Math tex={"\\\\alpha:I\\\\to M"} /> de <Math tex={"X"} /> que pasa por <Math tex={"p"} /> en <Math tex={"0"} /> y tal que <Math tex={"t\\\\in I"} />.',
      'La buena definicion sale comparando dos curvas <Math tex={"\\\\alpha"} /> y <Math tex={"\\\\beta"} />: el conjunto donde coinciden en <Math tex={"I\\\\cap J"} /> es no vacio, abierto y cerrado.',
      'Como <Math tex={"I\\\\cap J"} /> es conexo, las dos curvas coinciden en todo <Math tex={"I\\\\cap J"} />.',
      '<Math tex={"(a(p),b(p))"} /> es abierto porque es union de intervalos abiertos; ademas, si <Math tex={"t\\\\in I"} />, entonces <Math tex={"I\\\\subset(a(p),b(p))"} /> y <Math tex={"\\\\gamma_p|_I=\\\\alpha"} />.',
      'Entonces <Math tex={"\\\\gamma_p"} /> es suave y cumple <Math tex={"\\\\gamma_p^{\\\\prime}(t)=X_{\\\\gamma_p(t)}"} />. Recordar usar devuelta unicidad y existencia de EDO.',
      'La maximalidad sale porque cualquier otra curva integral que pasa por <Math tex={"p"} /> en <Math tex={"0"} /> aparece en la union que define <Math tex={"(a(p),b(p))"} />.',
      'La unicidad sale comparando dos curvas maximales: cada una contiene a la otra, luego tienen el mismo dominio y coinciden.'
    ].map((step) => renderBlocksAsHtml(step));
  }

  if (chapterHref.endsWith("/chapters/teo-17") && blockIndex === 0) {
    return [
      '**Parte (i)**\nTomar la curva maximal que en <Math tex={"0"} /> es <Math tex={"p"} />. Entonces existe algun <Math tex={"t>0"} /> en su intervalo maximal, luego <Math tex={"p\\\\in D_t"} /> y <Math display tex={"\\\\bigcup_{t>0}D_t=M."} />',
      '**Parte (ii)**\n<Math display tex={"q=\\\\theta_s(p)"} />\n<Math display tex={"t\\\\in(a(q),b(q))=(a(p)-s,b(p)-s)"} />',
      '<Math tex={"p\\\\in D_{t+s}"} />.\n<Math display tex={"s+t\\\\in(a(p),b(p))\\\\quad\\\\text{y}\\\\quad 0<s<s+t"} />\n<Math display tex={"s\\\\in(a(p),b(p))"} />\n<Math display tex={"p\\\\in D_s"} />\n<Math display tex={"t\\\\in(a(p)-s,b(p)-s)=(a(q),b(q))"} />\n<Math display tex={"\\\\theta_s(p)=q\\\\in D_t"} />',
      '**Parte (iii)**\n<Math display tex={"\\\\theta_s(\\\\theta_t(p))=\\\\theta_s(q)=\\\\gamma_q(s)=\\\\gamma_p(t+s)=\\\\theta_{s+t}(p)"} />',
      '**Parte (iv)**\n<Math tex={"p\\\\in D_t"} />.\n<Math display tex={"(a(q),b(q))=(a(p)-t,b(p)-t)"} />\nComo <Math tex={"0\\\\in(a(p),b(p))"} />, entonces <Math tex={"-t\\\\in(a(q),b(q))"} />.\n<Math display tex={"q\\\\in D_{-t}"} />',
      '<Math display tex={"\\\\theta_{-t}(\\\\theta_t(p))=\\\\theta_0(p)=\\\\gamma_p(0)=p"} />\n<Math display tex={"\\\\theta_t(\\\\theta_{-t}(q))=\\\\theta_0(q)=\\\\gamma_q(0)=q"} />',
      'Ahora consideramos la restricción <Math display tex={"\\\\iota_t|_{D_t}:D_t\\\\to\\\\mathcal D"} /> dada por <Math tex={"\\\\iota_t|_{D_t}(p)=(t,p)"} />. Esta aplicación es suave, porque en coordenadas solo agrega la coordenada constante <Math tex={"t"} />.',
      'Entonces <Math display tex={"\\\\Theta_t(p)=\\\\Theta(t,p)=\\\\Theta\\\\big(\\\\iota_t|_{D_t}(p)\\\\big)."} /> es suave, por ser composición de suaves.',
      'Además, ya se probó que <Math tex={"\\\\Theta_t(D_t)\\\\subseteq D_{-t}"} />. Como <Math tex={"D_{-t}"} /> es un abierto de <Math tex={"M"} />, la misma aplicación puede verse como <Math display tex={"\\\\Theta_t:D_t\\\\to D_{-t}."} />',
      'Termina el ejercicio usando lema triangular y la continuidad de <Math tex={"\\\\theta_t"} />.'
    ].map((step) => renderBlocksAsHtml(step));
  }

  if (chapterHref.endsWith("/chapters/teo-17") && blockIndex === 4) {
    return [
      'Supongamos que no es completa y supongamos que <Math tex={"b(p)<+\\\\infty"} />. El otro caso es analogo.',
      'Tomamos <Math tex={"t_0\\\\in(a(p),b(p))"} /> tal que <Math display tex={"b(p)-\\\\varepsilon<t_0<b(p)."} />',
      'Definimos la funcion partida <Math display tex={"\\\\alpha(t)=\\\\begin{cases}\\\\gamma_p(t),&a(p)<t<b(p),\\\\\\\\\\\\gamma_q(t-t_0),&t_0-\\\\varepsilon<t<t_0+\\\\varepsilon.\\\\end{cases}"} />',
      'Esta bien definida porque en el solapamiento <Math display tex={"\\\\gamma_q(t-t_0)=\\\\Theta_{t-t_0}(q)=\\\\Theta_{t-t_0}(\\\\Theta_{t_0}(p))=\\\\Theta_t(p)=\\\\gamma_p(t)."} />',
      'Lo cual es absurdo porque entonces <Math tex={"\\\\alpha(t)"} /> seria una curva que contiene estrictamente a la curva maximal <Math tex={"\\\\gamma_p"} />.'
    ].map((step) => renderBlocksAsHtml(step));
  }

  if (chapterHref.endsWith("/chapters/teo-17") && blockIndex === 5) {
    return [
      'Si <Math tex={"p"} /> no esta en <Math tex={"K=\\\\operatorname{Sop}X"} />, entonces <Math tex={"X"} /> es nulo en un abierto de <Math tex={"p"} />. Para cualquier punto de ese abierto tenemos la curva maximal constantemente dicho punto, que esta definida obviamente sobre todo <Math tex={"\\\\mathbb R"} />, asi que no hay problema.',
      'Veamos si <Math tex={"p\\\\in K"} />. Por <PreviewLink href="/chapters/teo-16#3b18e6" label="uniformidad local del tiempo" title="Corolario: Uniformidad local del tiempo" /> existe <Math tex={"V_p"} /> abierto de <Math tex={"M"} /> con <Math tex={"p\\\\in V_p"} /> y <Math tex={"\\\\varepsilon_p>0"} /> tal que para todo <Math tex={"q\\\\in V_p"} /> la curva integral maximal que inicia en <Math tex={"q"} /> esta definida en <Math tex={"(-\\\\varepsilon_p,\\\\varepsilon_p)"} />.',
      'Estos abiertos <Math tex={"V_p"} /> cubren todo <Math tex={"K"} />, que es compacto, entonces nos quedamos con una cantidad finita.',
      'Definimos <Math tex={"\\\\varepsilon"} /> como el minimo de los <Math tex={"\\\\varepsilon_p"} /> para cada abierto de estos finitos.',
      'Por el lema de uniformidad global, <Math tex={"X"} /> es completo.'
    ].map((step) => renderBlocksAsHtml(step));
  }

  if (chapterHref.endsWith("/chapters/teo-18") && blockIndex === 4 && body) {
    const steps = proofCuePieces(body);
    steps[4] = renderBlocksAsHtml(
      '<Math display tex={"A_k=\\\\begin{cases}a_k\\\\circ\\\\varphi^{-1}\\\\circ\\\\pi\\\\circ\\\\psi,&1\\\\le k\\\\le m,\\\\\\\\0,&m<k\\\\le n,\\\\end{cases}"} />\nEsta esta bien definido porque <Math tex={"\\\\psi"} /> y <Math tex={"\\\\varphi"} /> son cubicas.'
    );
    return steps;
  }

  if (chapterHref.endsWith("/chapters/teo-19") && blockIndex === 6 && body) {
    const steps = proofCuePieces(body);
    steps[3] = renderBlocksAsHtml(
      'Tomemos <Math tex={"f\\\\in C^\\\\infty(U)"} />.\n<Math display tex={"\\\\begin{aligned}\\\\left.\\\\frac{\\\\partial}{\\\\partial x_i}\\\\right|_p\\\\left(\\\\frac{\\\\partial f}{\\\\partial x_j}\\\\right)&=\\\\frac{\\\\partial}{\\\\partial r_i}\\\\left[\\\\left(\\\\frac{\\\\partial f}{\\\\partial x_j}\\\\right)\\\\circ\\\\varphi^{-1}\\\\right](\\\\varphi(p))\\\\\\\\&=\\\\frac{\\\\partial}{\\\\partial r_i}\\\\left[\\\\left(\\\\left(\\\\frac{\\\\partial}{\\\\partial r_j}(f\\\\circ\\\\varphi^{-1})\\\\right)\\\\circ\\\\varphi\\\\right)\\\\circ\\\\varphi^{-1}\\\\right](\\\\varphi(p))\\\\\\\\&=\\\\frac{\\\\partial}{\\\\partial r_i}\\\\left[\\\\frac{\\\\partial}{\\\\partial r_j}(f\\\\circ\\\\varphi^{-1})\\\\circ(\\\\varphi\\\\circ\\\\varphi^{-1})\\\\right](\\\\varphi(p))\\\\\\\\&=\\\\frac{\\\\partial}{\\\\partial r_i}\\\\left[\\\\frac{\\\\partial}{\\\\partial r_j}(f\\\\circ\\\\varphi^{-1})\\\\right](\\\\varphi(p))\\\\\\\\&=\\\\frac{\\\\partial^2(f\\\\circ\\\\varphi^{-1})}{\\\\partial r_i\\\\partial r_j}(\\\\varphi(p)).\\\\end{aligned}"} />'
    );
    return steps;
  }

  if (chapterHref.endsWith("/chapters/teo-19") && blockIndex === 11 && body) {
    return lieDerivativeCorazonGuide();
  }

  if (chapterHref.endsWith("/chapters/teo-19") && blockIndex === 15) {
    return [
      'Usar que los flujos conmutan para probar <Math tex={"(d\\\\theta_t)_pY_p=Y_{\\\\theta_t(p)}"} />.',
      'Pasar el diferencial para el otro lado y usar la definicion de corchete. Como la funcion es constante, su derivada es <Math tex={"0"} />.'
    ].map((step) => renderBlocksAsHtml(step));
  }

  return null;
}

function lieDerivativeCorazonGuide() {
  return [
    `Por el teorema de rectificación de campos, existe una carta suave <Math tex={"(U,\\\\varphi=(x_1,\\\\ldots,x_n))"} /> centrada en <Math tex={"p"} /> tal que
<Math display tex={"X=\\\\frac{\\\\partial}{\\\\partial x_1}."} />`,
    `Calcular <Math tex={"[X,Y]"} /> usando <Math tex={"Y"} /> escrito en coordenadas en la base <Math tex={"\\\\left\\\\{\\\\frac{\\\\partial}{\\\\partial x_i}\\\\right\\\\}"} /> y la propiedad
<Math display tex={"[X,gY]=g[X,Y]+X(g)Y."} />`,
    `Por lo tanto,
<Math display tex={"[X,Y]_p=\\\\sum_{j=1}^n \\\\frac{\\\\partial a_j}{\\\\partial x_1}(p)\\\\frac{\\\\partial}{\\\\partial x_j}\\\\bigg|_p."} />
Por otro lado, consideremos la curva suave
<Math display tex={"\\\\alpha(t)=(d\\\\theta_{-t})_{\\\\theta_t(p)}Y_{\\\\theta_t(p)}\\\\in T_pM."} />`,
    `Entonces
<Math display tex={"\\\\alpha'(0)=\\\\sum_{j=1}^n \\\\alpha'(0)(x_j)\\\\frac{\\\\partial}{\\\\partial x_j}\\\\bigg|_p."} />`,
    `<Math display tex={"\\\\alpha'(0)(x_j)=\\\\frac{d}{dt}\\\\bigg|_{t=0}\\\\alpha(t)(x_j)."} />
<Math display tex={"Y_{\\\\theta_t(p)}(x_j\\\\circ\\\\theta_{-t})=\\\\sum_{i=1}^n a_i(\\\\theta_t(p))\\\\frac{\\\\partial}{\\\\partial x_i}\\\\bigg|_{\\\\theta_t(p)}(x_j\\\\circ\\\\theta_{-t})."} />`,
    `Como <Math tex={"X=\\\\frac{\\\\partial}{\\\\partial x_1}"} />, entonces
<Math display tex={"\\\\frac{\\\\partial}{\\\\partial x_i}\\\\bigg|_{\\\\theta_t(p)}(x_j\\\\circ\\\\theta_{-t})=\\\\delta_{ij}."} />
<Math display tex={"\\\\alpha'(0)(x_j)=\\\\frac{d}{dt}\\\\bigg|_{t=0}a_j(\\\\theta_t(p))=X_pa_j=\\\\frac{\\\\partial a_j}{\\\\partial x_1}(p)."} />`,
    `Supongamos <Math tex={"X_p=0"} />. En este caso, la curva integral de <Math tex={"X"} /> que parte de <Math tex={"p"} /> es constante, luego
<Math display tex={"\\\\theta_t(p)=p."} />`,
    `Entonces la curva queda
<Math display tex={"\\\\alpha(t)=(d\\\\theta_{-t})_pY_p."} />`,
    `Para toda <Math tex={"f\\\\in C^\\\\infty(M)"} />,
<Math display tex={"\\\\alpha'(0)(f)=\\\\frac{d}{dt}\\\\bigg|_{t=0}\\\\alpha(t)(f)=\\\\frac{d}{dt}\\\\bigg|_{t=0}Y_p(f\\\\circ\\\\theta_{-t})."} />`,
    `Es decir,
<Math display tex={"\\\\frac{d}{dt}\\\\bigg|_{t=0}f\\\\circ\\\\theta_{-t}=-Xf."} />`,
    `Por lo tanto,
<Math display tex={"\\\\alpha'(0)(f)=-Y_p(Xf)."} />`,
    `Como <Math tex={"X_p=0"} />, también
<Math display tex={"[X,Y]_pf=X_p(Yf)-Y_p(Xf)=-Y_p(Xf)."} />`
  ].map((step) => renderBlocksAsHtml(step));
}

export function blockTitle(attributes: string, body: string) {
  return (
    attributes.match(/\btitle="([^"]+)"/)?.[1] ??
    body.match(/<Fragment\b[^>]*slot="title"[^>]*>([\s\S]*?)<\/Fragment>/)?.[1] ??
    ""
  );
}

const catalogById = new Map(searchCatalog.map((entry) => [`${entry.chapterHref}:${entry.index}`, entry]));

export const corazonTheorems = listaCorazonesBlockIds
  .map((id) => {
    const entry = catalogById.get(id);
    if (!entry) return null;
    const slug = entry.chapterHref.split("/").filter(Boolean).at(-1);
    const sourceFile = slug ? `src/pages/chapters/${slug}.mdx` : "";
    const source = slug ? chapterSources[`../pages/chapters/${slug}.mdx`] : undefined;
    const block = source ? extractBlocks(source).find((item) => item.index === entry.index) : undefined;
    if (!block) return null;

    const kind = (block.attributes.match(/\bkind="([^"]+)"/)?.[1] ?? entry.kind) as Kind;
    const statementSource = block.body
      .replace(/<Proof\b[\s\S]*?<\/Proof>/g, "")
      .replace(/<Fragment\b[^>]*slot="title"[^>]*>[\s\S]*?<\/Fragment>/g, "");

    return {
      id,
      kind,
      kindLabel: labels[kind] ?? entry.kindLabel,
      titleHtml: renderInlineMdx(blockTitle(block.attributes, block.body)),
      chapterLabel: entry.chapterLabel,
      chapterHref: entry.chapterHref,
      sourceFile,
      blockIndex: entry.index,
      statementHtml: renderBlocksAsHtml(statementSource),
      proofStepsHtml: proofPieces(block.body),
      proofCueStepsHtml: customProofCuePieces(entry.chapterHref, entry.index, block.body) ?? proofCuePieces(block.body)
    };
  })
  .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));
