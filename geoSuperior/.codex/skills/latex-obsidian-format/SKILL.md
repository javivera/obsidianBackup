---
name: latex-obsidian-format
description: Formatear ejercicios, demostraciones y contenido matemático en notas Markdown de Obsidian de este vault. Usar siempre al crear o editar prácticos en `Practicos/`, especialmente archivos de Geometría Superior, o cuando se pida reproducir el estilo de `Practicos/GS - Pr3.md` en otra nota.
---

# Formato LaTeX para prácticos de Obsidian

Usar como referencia canónica `Practicos/GS - Pr3.md`. Antes de editar, inspeccionar también las secciones cercanas del archivo de destino y preservar su contenido matemático.

## Secciones de ejercicios

- Comenzar cada ejercicio con un encabezado de nivel tres: `### Ejercicio 1`.
- No agregar un título general al documento salvo que el archivo de referencia ya lo tenga.

## Callout del enunciado

Colocar todo el enunciado dentro de un callout de ejercicio:

```markdown
>[!Exercise]
>Sea ...
>$$...$$
```

Anteponer `>` a todas las líneas del enunciado, incluidas las líneas vacías y los delimitadores de matemática display.

## Callout de la demostración

Colocar la solución inmediatamente después del enunciado como un callout de demostración anidado:

```markdown
>
>>[!Proof]-
>>1. Primer paso de la demostración.
>>$$\text{identidad importante}$$
>>2. Siguiente paso.
>>$$...$$
```

Anteponer `>>` a todas las líneas de la demostración, incluidas las líneas vacías y los delimitadores de matemática display.

## Ejercicios con varias partes

Mantener todas las proposiciones o incisos dentro del mismo ejercicio:

```markdown
>[!Exercise]
>**Proposición 1.**
>...
>
>**Proposición 2.**
>...
>
>>[!Proof]-
>>1. **Solución 1.**
>>2. ...
>>
>>3. **Solución 2.**
>>4. ...
```

Usar etiquetas en negrita como `**Proposición 1.**`, `**Solución 1.**`, `**(a)**` o etiquetas descriptivas cuando aclaren la estructura.

## Reglas de estilo

- Usar `### Ejercicio n`, nunca `##`.
- Usar `>[!Exercise]` para el enunciado y `>>[!Proof]-` para la solución.
- Numerar los pasos como `>>1.`, `>>2.`, `>>3.`, cada uno en una línea nueva. Reiniciar la numeración al comenzar cada callout de demostración.
- Escribir matemática display entre `$$ ... $$`.
- Destacar en display las identidades importantes, conclusiones finales, intervalos maximales, conclusiones sobre completitud, corchetes y flujos calculados.
- Si el display contiene una sola afirmación matemática, escribirlo en una línea, por ejemplo `>>$$X \text{ no es completo.}$$`.
- Usar displays multilínea solamente para derivaciones, casos, matrices o cálculos alineados que sean genuinamente multilínea.
- Escribir en español.
- Preservar el contenido matemático tal como está y corregir únicamente errores tipográficos claros.

## Verificación obligatoria

Después de editar, revisar el bloque completo y comprobar que:

1. no haya líneas del enunciado sin `>`;
2. no haya líneas de la demostración sin `>>`;
3. el callout de demostración esté dentro del callout del ejercicio;
4. las fórmulas display respeten el nivel de cita correspondiente.
