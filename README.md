# Compás Político Criollo

Test político tipo 8values/PolitiScales adaptado a la República Dominicana. Respondes 32, 64, 128 o 256 afirmaciones y
obtienes tu posición en **12 ejes** pensados para la política dominicana. Luego te compara con:
- gobiernos y periodos, partidos, políticos y figuras mediáticas dominicanas;
- países extranjeros, eje por eje;
- figuras históricas de otros países.

Es una SPA estática sin backend: las respuestas se procesan en el navegador y el enlace de resultados lleva solo los 12
puntajes. Nada se guarda en un servidor.

Autor: [Jorge Paniagua](https://jorgepaniagua.com), con las contribuciones de quienes colaboren en el proyecto.

> **Aviso.** Los puntajes de los perfiles son **estimaciones editoriales**. Cada uno lleva su nivel de confianza y sus
> fuentes, y los datos llegan a septiembre de 2026. En personas vivas se puntúan el discurso y las posiciones
> declaradas, no su conducta. La página *Metodología* de la app explica el cálculo y las reglas editoriales.

## Los 12 ejes
Cada eje va de −100 (primer polo) a +100 (segundo polo).

| Eje | −100 | +100 |
|---|---|---|
| Economía | Estatismo | Libre mercado |
| Social | Estado protector | Responsabilidad individual |
| Soberanía | Nacionalismo / frontera dura | Apertura migratoria |
| Identidad | Nación de herencia | Nación cívica y plural |
| Religión | Estado confesional | Laicidad |
| Valores | Conservador | Progresista |
| Orden | Mano dura | Garantismo / DD.HH. |
| Poder | Caudillismo / reelección | Institucionalidad |
| Ética pública | Clientelismo / pragmatismo | Transparencia |
| Geopolítica | Alineado con EE.UU. | Soberanismo / multipolar |
| Desarrollo | Desarrollismo / minería | Ambientalismo |
| Estilo | Partidocracia / establishment | Antisistema / outsider |

En RD hay dos nacionalismos distintos: el que mira hacia Haití (Soberanía e Identidad) y el que mira hacia Estados Unidos
(Geopolítica). Por eso se miden por separado.

## Licencia
El proyecto tiene dos licencias, una para cada tipo de obra:

| Qué | Licencia | Archivo |
|---|---|---|
| **Código**: todo lo que no está en la fila de abajo (`src/engine/`, `src/pages/`, `src/components/`, `src/lib/`, estilos, configuración y scripts, incluido `docs/investigacion/07-paises-calc.py`) | [MIT](https://opensource.org/license/mit) | [`LICENSE`](LICENSE) |
| **Contenido editorial**: las preguntas (`src/data/questions/`), los perfiles y sus puntajes (`src/data/profiles/`), los textos de los ejes y temas (`src/data/axes.ts`, `topics.ts`, `facets.ts`), los textos de las páginas y la documentación (`docs/`) | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.es) | [`LICENSE-CONTENIDO`](LICENSE-CONTENIDO) |

En la práctica:
- **Puedes** usar, copiar, estudiar, modificar y redistribuir el proyecto, y hacer forks, para cualquier fin, incluso
  comercial. Esto incluye periódicos, canales, escuelas, universidades y ONG.
- **Código (MIT):** basta con conservar el aviso de copyright.
- **Contenido (CC BY-SA 4.0):**
  - hay que dar crédito, enlazar la licencia e **indicar si hiciste cambios**, sin sugerir que el proyecto respalda
    tu versión;
  - si modificas las preguntas, los puntajes o los textos y publicas el resultado, tu versión debe llevar la misma
    licencia. Así las versiones derivadas siguen abiertas y se puede auditar qué cambiaron.
- **Material de terceros:** las citas de prensa, leyes y estudios que aparecen en los dossiers y en los `context` son de
  sus autores. Se incluyen como cita con fuente (Ley 65-00 de Derecho de Autor, art. 31); si las reutilizas, sigue
  citando la fuente original.

## Uso en prensa y en clase
- **Prensa:** puedes publicar resultados, capturas, gráficos y fragmentos del contenido. Crédito sugerido:
  > Fuente: *Compás Político Criollo*, de Jorge Paniagua y colaboradores (jorgepaniagua.com), bajo licencia
  > CC BY-SA 4.0.

  Si mencionas el puntaje de una persona o de un partido, conviene aclarar que es una **estimación editorial** con su
  nivel de confianza; las fuentes están en su ficha.
- **Docentes:** puedes usar el test en clase, imprimir las preguntas o adaptarlas a tu curso. Si las cambias, indica que
  es una versión adaptada. La página *Metodología* sirve como material de apoyo sobre cómo se construye un test así.

## Hacer un fork
1. Haz el fork y cámbiale el nombre o añade un distintivo, para que nadie confunda tu versión con la original.
2. Deja una nota visible (por ejemplo, en el `README` y en la página *Metodología*) con lo que cambiaste: preguntas,
   pesos, puntajes o perfiles.
3. Mantén los archivos `LICENSE` y `LICENSE-CONTENIDO`; si modificas el contenido, publícalo bajo CC BY-SA 4.0.

## Colaborar
Los aportes son bienvenidos: correcciones de datos, nuevas fuentes, perfiles, preguntas, traducciones y código.
1. Abre un *issue* para discutir el cambio, sobre todo si toca puntajes de personas o partidos.
2. Envía un *pull request*.
   - Al contribuir, aceptas que tu aporte se publique bajo la misma licencia que la parte que modificas: MIT si es
     código y CC BY-SA 4.0 si es contenido.
   - Para el contenido, sigue las reglas de `docs/PLAN.md` §6 y §7:
     - toda posición de una persona o partido lleva **fuente con fecha**;
     - en personas vivas se puntúan el discurso y las posiciones declaradas, no la conducta;
     - un eje sin evidencia va con confianza `baja`;
     - las preguntas son explícitas sobre los temas candentes, con **balance de polaridad y de grados** (moderada ↔
       radical, en ambas direcciones);
     - el efecto del eje primario de cada pregunta pesa 2 o 3.
3. Antes de enviarlo, corre `npm run test` y `npm run typecheck`. Los tests validan el banco de preguntas, los
   perfiles y que el test siga reconociendo a los perfiles de referencia.

La investigación de fondo está en `docs/investigacion/`: un dossier por tema, con fuentes. Si aportas una investigación
nueva, guárdala allí como dossier numerado.

## Desarrollo
Requiere Node 22.

```bash
npm install
npm run dev        # servidor local de Vite
npm run test       # Vitest: motor, contenido y validez
npm run typecheck
npm run build      # tsc + vite build → dist/
npm run preview    # sirve dist/
```

Para validar un solo archivo de contenido:
`npx vitest run src/data/content.test.ts -t "preguntas eco"` (o `-t "perfiles partidos"`).

## Estructura
- `src/data/questions/`: banco de 256 preguntas, un archivo por eje.
- `src/data/profiles/`: perfiles de referencia con puntajes, confianza y fuentes.
- `src/data/facets.ts`: facetas del eje Identidad (pertenencia, raza, cultura, religión y Haití) para el desglose de
  Resultados.
- `src/engine/`: puntaje, modos anidados, afinidades, enlaces compartibles y simulación.
- `src/pages/` y `src/components/`: la UI (React, gráficos en SVG propio).
- `docs/PLAN.md`: plan maestro. `docs/investigacion/`: dossiers con las fuentes de cada perfil.

## Publicación en GitHub Pages
`vite.config.ts` usa `base: './'` y la app usa `HashRouter`, así que `dist/` funciona en cualquier subruta
(`https://<usuario>.github.io/<repo>/`) sin configuración extra.

El workflow `.github/workflows/deploy.yml` hace esto en cada push a `main`:
1. instala las dependencias;
2. corre los tests;
3. compila;
4. publica.

Para activarlo la primera vez:
1. `git branch -M main` (si la rama se llama `master`).
2. Crea el repositorio en GitHub. Pages gratis exige que sea **público**.
3. `git remote add origin git@github.com:<usuario>/<repo>.git`
4. `git push -u origin main`
5. En GitHub, ve a **Settings → Pages → Build and deployment → Source** y elige **GitHub Actions**. Si el primer
   workflow falló porque Pages no estaba activado, vuelve a lanzarlo desde la pestaña *Actions*
   (*Run workflow*).
