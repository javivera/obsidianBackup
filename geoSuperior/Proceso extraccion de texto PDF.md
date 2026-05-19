# Proceso de extraccion de texto desde PDF
>[!Summary] Idea general
>El proceso no fue OCR automatico. Primero converti las paginas del PDF en imagenes y despues fui leyendo esas imagenes visualmente para transcribir el contenido a Markdown, respetando la estructura de las notas.
>[!Step] 1. Renderizar el PDF como imagenes
>Use `mutool draw` para convertir cada pagina del PDF en una imagen `.png` de buena resolucion.
>Ejemplo: `mutool draw -r 220 -o /private/tmp/gs-4-30-pages/page-%02d.png '/Users/javivera/Downloads/4-30.pdf'`.
>Esto genera archivos como `page-10.png`, `page-11.png`, etc.
>[!Step] 2. Mirar las paginas pedidas
>Como el pedido era empezar desde la pagina 10, abri solamente las imagenes correspondientes desde `page-10.png` en adelante.
>La lectura se hizo desde las imagenes, no desde texto extraido automaticamente.
>[!Step] 3. Transcribir el contenido
>Copie el texto matematico y narrativo de las notas a mano, manteniendo el orden del PDF.
>Los dibujos se omitieron, salvo cuando habia texto, formulas o etiquetas necesarias para entender el contenido.
>Cuando algo no era confiable, la regla correcta es marcarlo como `[ilegible]` antes que inventar contenido.
>[!Step] 4. Pasar a formato Obsidian
>Converti definiciones, proposiciones, corolarios, ejemplos y observaciones a callouts.
>Use el formato `>[!Definition]`, `>[!Proposition]`, `>[!Corollary]`, `>[!Example]`, `>[!Remark]`.
>Las demostraciones van dentro de `>>[!Proof]-` y con pasos numerados `>>1.`, `>>2.`, `>>3.`, etc.
>[!Step] 5. Formato matematico
>Toda la matematica queda entre `$...$`.
>No se usa `\(...\)` ni `\[...\]`.
>Las formulas se dejan en una sola linea, para evitar cortes raros dentro de Obsidian.
>[!Step] 6. Separacion entre bloques
>Se deja una linea vacia entre callouts.
>Dentro de un callout no se dejan lineas vacias innecesarias.
>Despues de una demostracion, se deja una linea libre antes del siguiente callout.
>[!Step] 7. Verificacion final
>Revise que no quedaran delimitadores de matematica incorrectos con `rg -n '^$|\\\(|\\\)|\\\[|\\\]' 'Teoricos/GS - Teo14.md'`.
>Revise que los signos `$` estuvieran balanceados con `awk '{n=gsub(/\$/,"&"); if(n%2==1) print NR ":" $0}' 'Teoricos/GS - Teo14.md'`.
>Tambien mire una muestra del archivo final con `sed` para revisar visualmente que los callouts y proofs hubieran quedado bien.
