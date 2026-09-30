# Compás Político Criollo

Test político tipo 8values/PolitiScales adaptado a la República Dominicana: 32/64/128/256 preguntas → 12 ejes
dominicanos → afinidad con gobiernos/periodos, partidos, políticos y figuras mediáticas/outsiders dominicanos, países
extranjeros **por eje** y figuras históricas no dominicanas. Todo el contenido y la UI van en español.

## Fuente de verdad
- **[`docs/PLAN.md`](docs/PLAN.md)** — plan maestro aprobado: decisiones, ejes, arquitectura, modelo de datos, motor,
  reglas del banco de preguntas, perfiles, UI, pasos, verificación, matrices de puntajes (§11) e investigación
  pendiente (§12). Leerlo antes de trabajar.
- **[`docs/investigacion/`](docs/investigacion/README.md)** — dossiers completos con justificaciones y fuentes.

## Estado (2026-09-29, fin de la 3.ª sesión)
- **Fase 0** (documentación) ✅.
- **Fase 1** (investigación) ✅ parcial: dossiers 01–23 en `docs/investigacion/`. El 22 rediseñó el eje `ide` y el 23
  cubre a los Salcedo, Antigua Orden y Melymel. Lo pendiente está en `docs/PLAN.md` §12.
- **Fase 2** (app) ✅:
  - banco de 256 preguntas (`src/data/questions/`);
  - 244 perfiles más el Estado dominicano (`src/data/profiles/`);
  - motor en `src/engine/`;
  - UI en `src/pages/` y `src/components/`.
- **Fase 3** ✅:
  - revisión humana de todas las preguntas y perfiles;
  - eje `ide` con polos «Nación de herencia ↔ Nación cívica y plural» y desglose por facetas;
  - publicación preparada: `.github/workflows/deploy.yml` y `README.md`.
- **Verificación:** `npm run test` (73 tests: motor, contenido y validez), `npm run typecheck` y `npm run build` en
  verde. El recorrido en navegador se hizo con Playwright, sirviendo `dist/` bajo una subruta.
- **Validar solo un archivo de contenido:** `npx vitest run src/data/content.test.ts -t "preguntas eco"` (o
  `-t "perfiles partidos"`).
- **Siguiente:**
  - el usuario hace el commit, crea el repo en GitHub y activa Pages (Settings → Pages → *GitHub Actions*);
  - lo pendiente de §12.
- **Commits:** los hace el usuario. Dejar el trabajo listo y no hacer `git commit` ni `push`.
- **Cupo de búsquedas web:** 200 por sesión, compartidas por los subagentes. Repartirlas con topes por agente y
  **no** pasar buscadores por WebFetch. Con curl, User-Agent genérico y sin datos personales en las cabeceras.

## Decisiones clave
- Stack: Vite + React + TypeScript, SPA estática sin backend; HashRouter; gráficos en SVG propio; tests con Vitest.
- Modos 32/64/128/256 anidados por tiers (cada modo corto ⊂ el siguiente).
- Resultados compartibles por URL (12 puntajes codificados); nada se guarda en servidor.
- Ejes (ids): `eco soc mig ide rel val ord pod eti geo des est`, puntajes −100..+100. Dos nacionalismos: antihaitiano
  (`mig`/`ide`) y antiestadounidense (`geo`). `mig` = qué hace el Estado con quien entra o reside; `ide` = quién es
  dominicano y qué es lo dominicano (Nación de herencia ↔ Nación cívica y plural); `rel` = religión y Estado.
- El efecto del eje primario de cada pregunta pesa 2 (moderada) o 3 (radical); el peso 1 es solo para efectos
  secundarios.
- "Tolentino" = **Ramón Tolentino** (*Esto No Es Radio*, *A la Clara*).
- Licencias: código **MIT** (`LICENSE`) y contenido editorial **CC BY-SA 4.0** (`LICENSE-CONTENIDO`: preguntas,
  perfiles, textos de ejes y páginas, `docs/`). Titular: Jorge Paniagua (jorgepaniagua.com). Detalle en `README.md`.

## Reglas de contenido
- **Preguntas explícitas sobre temas candentes** (mano dura y "intercambios de disparos", deportaciones y muro, Biblia en
  las escuelas, aborto y tres causales, impuestos, LGBT, corrupción, Trujillo/Balaguer…). La neutralidad se logra con
  **balance de polaridad y de grados** (moderado ↔ radical en ambas direcciones), no suavizando el tema.
- `eti` de personas vivas = discurso/posición declarada, no juicio de conducta.
- Ejes sin evidencia → confianza `baja` + "posición estimada"; perfiles vivos con `asOf` y fuentes.
- Personas entran solo con cargo/candidatura formal o ≥3 ejes documentados.
- Periodos históricos: `rel`/`val`/`est` relativos a su época (`relativeToEra`).
