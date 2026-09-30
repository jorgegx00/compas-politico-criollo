import { Link } from 'react-router-dom';
import { AXES } from '../data/axes.ts';

const COUNTRY_INDICES: readonly [string, string][] = [
  ['Economía', 'Índice de Libertad Económica de Heritage 2026'],
  ['Social', 'Gasto social público en % del PIB (OCDE, CEPAL), con ajustes por pensiones y salud privadas'],
  ['Soberanía', 'MIPEX 2020 y política actual de fronteras y deportaciones'],
  ['Identidad', 'Multiculturalism Policy Index; donde no existe, un indicador propio (OIT 169, lenguas, cuotas…)'],
  ['Religión', 'Religión oficial, concordatos, financiamiento y religión en la escuela'],
  ['Valores', 'Legalidad del aborto y derechos LGBT'],
  ['Orden', 'Pena de muerte, tasa de encarcelamiento y WJP (derechos fundamentales)'],
  ['Poder', 'V-Dem (democracia liberal) y límites de mandato'],
  ['Ética pública', 'Índice de Percepción de la Corrupción 2025 (Transparencia Internacional)'],
  ['Geopolítica', 'Coincidencia de votos con EE.UU. en la ONU y alianzas'],
  ['Desarrollo', 'Environmental Performance Index 2026 (Yale)'],
  ['Estilo', 'Discurso populista y carácter outsider del gobierno actual (rúbrica propia)'],
];

export function Methodology() {
  return (
    <div className="stack">
      <h1>Metodología</h1>
      <p className="lead">
        Cómo se construyó el test, cómo se calculan tus puntajes y de dónde salen los perfiles. Datos actualizados a
        septiembre de 2026.
      </p>

      <h2>Los 12 ejes</h2>
      <p>
        Cada eje va de −100 (primer polo) a +100 (segundo polo). En la República Dominicana hay dos nacionalismos
        distintos: el que mira hacia Haití (ejes de Soberanía e Identidad) y el que mira hacia Estados Unidos (eje de
        Geopolítica). Por eso se miden por separado.
      </p>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th scope="col">Eje</th>
              <th scope="col">−100</th>
              <th scope="col">+100</th>
            </tr>
          </thead>
          <tbody>
            {AXES.map((axis) => (
              <tr key={axis.id}>
                <th scope="row">{axis.name}</th>
                <td>
                  <strong>{axis.negative}.</strong> {axis.negativeDescription}
                </td>
                <td>
                  <strong>{axis.positive}.</strong> {axis.positiveDescription}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        El eje de Identidad no mide tu opinión sobre la migración (eso es Soberanía), sino cómo entiendes la
        dominicanidad: quién pertenece, qué herencia la define, el lugar de la raíz africana y de la religión, y la
        relación con Haití. Las encuestas muestran que estas facetas no siempre van juntas; por eso, al terminar el test,
        Resultados desglosa tu puntaje de Identidad por faceta.
      </p>

      <h2>Las preguntas</h2>
      <p>
        El banco tiene 260 afirmaciones. Las versiones de 40, 70 y 130 son subconjuntos: cada versión incluye todas las
        preguntas de la anterior. Cada eje tiene al menos 3, 5, 10 y 21 afirmaciones propias en las versiones de 40, 70,
        130 y 260, y se presentan intercaladas para no agotar un tema seguido.
      </p>
      <p>
        Las afirmaciones nombran sin rodeos los temas que dividen al país: deportaciones y el muro, los "intercambios de
        disparos", la Biblia en las escuelas, las tres causales, el ITBIS, las "botellas", Trujillo y Balaguer. La
        neutralidad no se busca suavizando los temas sino con <strong>balance</strong>: en cada eje y en cada versión
        hay casi tantas afirmaciones que empujan hacia un polo como hacia el otro, y cada tema tiene afirmaciones
        moderadas y radicales en ambas direcciones.
      </p>

      <h2>Cómo se calcula tu puntaje</h2>
      <ul>
        <li>
          Respuestas: totalmente de acuerdo = +1, de acuerdo = +0.5, neutral = 0, en desacuerdo = −0.5, totalmente en
          desacuerdo = −1. "No sé" no cuenta.
        </li>
        <li>
          Cada afirmación tiene un peso de −3 a +3 en uno a tres ejes; el signo indica hacia qué polo empuja estar de
          acuerdo.
        </li>
        <li>
          Puntaje de un eje = 100 × Σ(respuesta × peso) ÷ Σ|peso| de las afirmaciones que respondiste en ese eje (como
          SapplyValues).
        </li>
        <li>Certeza de un eje = qué parte del peso total de ese eje respondiste.</li>
      </ul>

      <h2>Afinidades</h2>
      <p>
        La similitud con cada perfil usa una distancia euclídea ponderada por la confianza de cada puntaje del perfil
        (alta = 1, media = 0.7, baja = 0.35): d = √(Σ wₖ(tuyo − perfil)² ÷ Σ wₖ) y similitud = 100 × (1 − d ÷ 200).
        Así, un eje estimado pesa menos que uno documentado.
      </p>
      <p>
        En las listas de afinidad solo entran los perfiles con al menos 3 ejes de confianza media o alta. Los demás se
        pueden ver en <Link to="/perfiles">Explorar perfiles</Link> con la marca "solo explorar". Tu arquetipo es el
        perfil ideal más cercano entre 16 corrientes con sabor dominicano.
      </p>

      <h2>Países por eje</h2>
      <p>
        Los países no se comparan en bloque sino eje por eje ("económicamente como Chile, en migración como Hungría").
        Sus puntajes salen de índices internacionales normalizados a −100..+100:
      </p>
      <div className="table-scroll">
        <table>
          <tbody>
            {COUNTRY_INDICES.map(([axis, index]) => (
              <tr key={axis}>
                <th scope="row">{axis}</th>
                <td>{index}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="small muted">
        El eje Social mide el gasto real del Estado: casi todos los países en desarrollo, incluida la República
        Dominicana, quedan del lado de la responsabilidad individual porque gastan poco en protección social. Los valores
        estimados de países con pocos datos (Cuba, Haití, Puerto Rico, Venezuela) no se usan para comparar, ni tampoco
        los puntajes de Haití en Social y Orden, que reflejan el colapso del Estado y no una política. La fila del Estado
        dominicano se muestra solo como referencia.
      </p>

      <h2>Perfiles y reglas editoriales</h2>
      <ul>
        <li>
          Los puntajes de gobiernos, partidos, políticos, comunicadores y figuras son <strong>estimaciones editoriales</strong>{' '}
          a partir de posiciones públicas documentadas, con fuentes enlazadas en cada perfil.
        </li>
        <li>
          Una persona se incluye si tiene cargo o candidatura formal, o al menos 3 ejes con posiciones documentadas.
        </li>
        <li>
          En personas vivas, la ética pública mide el <strong>discurso y las posiciones declaradas</strong>, no un juicio
          sobre su conducta. Los casos judiciales solo se mencionan si hay un proceso público.
        </li>
        <li>Los ejes sin evidencia directa se marcan como "posición estimada" y pesan menos.</li>
        <li>
          Los periodos y figuras históricas se miden en relación con su época en religión, valores y estilo. La
          comparación con el siglo XIX es aproximada.
        </li>
      </ul>

      <h2>Privacidad</h2>
      <p>
        No hay servidor ni cuentas. Tus respuestas se procesan en tu navegador; el progreso de un test a medias se guarda
        solo en tu dispositivo, y el enlace de resultados contiene únicamente tus 12 puntajes.
      </p>

      <h2>Límites</h2>
      <p>
        Como cualquier test de este tipo, el resultado depende de las preguntas elegidas, de los pesos y de las
        estimaciones de los perfiles. Tómalo como un punto de partida para conversar, no como una etiqueta definitiva.
      </p>

      <h2>Licencia y reutilización</h2>
      <p>
        Proyecto de <a href="https://jorgepaniagua.com">Jorge Paniagua</a> y colaboradores. El código es libre bajo la
        licencia MIT. Las preguntas, los perfiles y los textos están bajo{' '}
        <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.es">CC BY-SA 4.0</a>: puedes copiarlos,
        adaptarlos y publicarlos, incluso en medios comerciales y en clase, dando crédito, indicando si hiciste cambios y
        compartiendo tus versiones con la misma licencia. Las citas de prensa y leyes siguen siendo de sus autores.
      </p>
    </div>
  );
}
