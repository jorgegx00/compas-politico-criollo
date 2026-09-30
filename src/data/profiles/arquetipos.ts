import type { Profile } from '../types.ts';

// Arquetipos (docs/PLAN.md §5): la etiqueta principal del usuario es el arquetipo más cercano. Son puntos ideales
// calibrados con los perfiles dominicanos de §11 que los encarnan (anotados en cada uno). Entre cada par hay una
// distancia RMS ≥ 25 (`√(Σ(a−b)²/12)`, lo comprueba content.test.ts); el par más cercano es Perredeísta popular ↔
// Centrista pragmático (≈28). No llevan fuentes ni `asOf`: no describen a nadie en particular.
export const arquetipos: Profile[] = [
  {
    // ≈ Bosch 1963 y PLD de Bosch 1973–90.
    id: 'arq-boschista',
    name: 'Boschista socialdemócrata',
    kind: 'arquetipo',
    subtitle: 'Justicia social, honradez y soberanía',
    summary:
      'Cree en un Estado que redistribuya y proteja a trabajadores y campesinos, y en la política como servicio, con honradez absoluta en el manejo de lo público. Defiende la democracia, los derechos civiles y la autonomía frente a EE.UU., en la línea de Juan Bosch en 1963 y del PLD fundacional.',
    scores: { eco: -55, soc: -65, mig: 0, ide: 25, rel: 40, val: 25, ord: 50, pod: 60, eti: 85, geo: 45, des: 10, est: 40 },
  },
  {
    // ≈ Balaguer 1966–78 y 1986–96, PRSC doctrina.
    id: 'arq-balaguerista',
    name: 'Balaguerista',
    kind: 'arquetipo',
    subtitle: 'Orden, obras y tradición',
    summary:
      'Confía en un líder fuerte y experimentado que garantice el orden, construya obras y conserve la tradición hispánica y católica. Acepta la reelección y el uso del Estado para gobernar, con cercanía a EE.UU., como en los gobiernos de Joaquín Balaguer y la doctrina reformista.',
    scores: { eco: -5, soc: -10, mig: -65, ide: -75, rel: -65, val: -65, ord: -50, pod: -70, eti: -65, geo: -60, des: 5, est: -65 },
  },
  {
    // ≈ Era de Trujillo 1930–61, suavizada.
    id: 'arq-trujillista',
    name: 'Trujillista',
    kind: 'arquetipo',
    subtitle: 'Un solo jefe, mano dura y frontera cerrada',
    summary:
      'Añora un poder personal sin contrapesos, la mano dura sin límites legales y una identidad nacional hispánica cerrada frente a Haití. Pone el orden y la unidad nacional por encima de las libertades, como en la Era de Trujillo (1930–61).',
    scores: { eco: -50, soc: -15, mig: -95, ide: -95, rel: -75, val: -65, ord: -95, pod: -95, eti: -65, geo: -40, des: -45, est: -15 },
  },
  {
    // ≈ Instituto Duartiano y FNP.
    id: 'arq-duartiano',
    name: 'Nacionalista duartiano',
    kind: 'arquetipo',
    subtitle: 'Dios, Patria y Libertad',
    summary:
      'Pone la soberanía y la frontera con Haití en el centro: control migratorio estricto, defensa de la identidad hispánica y cristiana y respeto a las instituciones. Invoca a Duarte y el ideario trinitario, como el Instituto Duartiano y la Fuerza Nacional Progresista. Describe el nacionalismo que hoy se llama duartiano, no las ideas del Duarte histórico.',
    scores: { eco: 5, soc: -5, mig: -90, ide: -85, rel: -45, val: -55, ord: -45, pod: 20, eti: 30, geo: 10, des: 0, est: 0 },
  },
  {
    // ≈ PLD en el poder 1996–2020, Leonel 2004–12, Danilo 2012–20.
    id: 'arq-peledeista',
    name: 'Peledeísta tecnocrático',
    kind: 'arquetipo',
    subtitle: 'Estabilidad, obras y partido disciplinado',
    summary:
      'Valora la estabilidad macroeconómica, las grandes obras y la experiencia de gobierno de un partido disciplinado, aunque implique reelección, clientelismo y proyectos con costo ambiental. Mantiene lazos con China y posiciones sociales moderadamente conservadoras, como el PLD en el poder (1996–2020).',
    scores: { eco: 20, soc: -20, mig: -50, ide: -40, rel: -45, val: -45, ord: -30, pod: -40, eti: -60, geo: 10, des: -50, est: -75 },
  },
  {
    // ≈ PRD perredeísta 1961–2000, Guzmán 1978–82, Hipólito 2000–04.
    id: 'arq-perredeista',
    name: 'Perredeísta popular',
    kind: 'arquetipo',
    subtitle: 'El partido del barrio, con el jacho prendío',
    summary:
      'Cree en un partido de masas cercano al barrio, con gasto social, libertades públicas y cargos repartidos entre los compañeros de partido. Es moderado en migración y valores y cercano a EE.UU., como el PRD de Peña Gómez, Antonio Guzmán e Hipólito Mejía.',
    scores: { eco: -30, soc: -55, mig: -5, ide: 20, rel: -15, val: -5, ord: 25, pod: 0, eti: -45, geo: -45, des: -15, est: 15 },
  },
  {
    // ≈ PRSC actual (Quique Antún) con la doctrina social de la Iglesia.
    id: 'arq-socialcristiano',
    name: 'Socialcristiano',
    kind: 'arquetipo',
    subtitle: 'Economía social de mercado con valores cristianos',
    summary:
      'Combina economía de mercado con protección social inspirada en la doctrina social de la Iglesia, defensa de la familia tradicional y del Concordato, y firmeza en la frontera. Prefiere los partidos establecidos y la alianza con EE.UU., como el PRSC actual.',
    scores: { eco: 15, soc: -30, mig: -40, ide: -45, rel: -55, val: -55, ord: -20, pod: 10, eti: 5, geo: -40, des: -5, est: -50 },
  },
  {
    // ≈ 1J4, MPD, PCD y constitucionalistas de 1965.
    id: 'arq-catorcista',
    name: 'Izquierda catorcista / revolucionaria',
    kind: 'arquetipo',
    subtitle: 'Antiimperialismo y cambio de raíz',
    summary:
      'Quiere transformar de raíz la sociedad: propiedad social o estatal de la economía, reparto de la riqueza y ruptura con la tutela de EE.UU. Desconfía de los partidos del sistema y reivindica la tradición del 14 de Junio, el MPD y el constitucionalismo de 1965.',
    scores: { eco: -85, soc: -80, mig: 15, ide: 40, rel: 60, val: 40, ord: 0, pod: 10, eti: 60, geo: 95, des: 10, est: 90 },
  },
  {
    // ≈ Opción Democrática, coalición por las 3 causales.
    id: 'arq-progresista',
    name: 'Progresista liberal',
    kind: 'arquetipo',
    subtitle: 'Derechos, laicidad e instituciones',
    summary:
      'Defiende las tres causales, los derechos LGBT, el Estado laico y un trato digno a los migrantes, junto con instituciones independientes, transparencia y debido proceso. Apoya el gasto social y la protección ambiental, en la línea de Opción Democrática.',
    scores: { eco: -10, soc: -35, mig: 50, ide: 55, rel: 75, val: 90, ord: 60, pod: 65, eti: 70, geo: 0, des: 45, est: 30 },
  },
  {
    // Sin partido dominicano que lo encarne de lleno; eco/soc en el extremo de mercado.
    id: 'arq-libertario',
    name: 'Liberal de mercado / libertario',
    kind: 'arquetipo',
    subtitle: 'Menos Estado, más libertad',
    summary:
      'Quiere un Estado mínimo: impuestos bajos, menos regulación, privatizaciones y ayudas sociales reducidas y temporales. Desconfía de los partidos tradicionales, pone el crecimiento por delante de las trabas ambientales y prefiere la alianza con EE.UU.',
    scores: { eco: 90, soc: 80, mig: -20, ide: -10, rel: 30, val: 10, ord: -10, pod: 40, eti: 45, geo: -50, des: -45, est: 45 },
  },
  {
    // ≈ Generación de Servidores / Carlos Peña, La Batalla de la Fe.
    id: 'arq-evangelico',
    name: 'Conservador evangélico',
    kind: 'arquetipo',
    subtitle: 'La fe cristiana como guía de la nación',
    summary:
      'Quiere que la fe cristiana oriente las leyes y la escuela: Biblia en las aulas, prohibición total del aborto y rechazo al matrimonio igualitario y a la "ideología de género". Suma control migratorio, mano dura y distancia de la clase política tradicional, como Generación de Servidores.',
    scores: { eco: 30, soc: 15, mig: -50, ide: -40, rel: -95, val: -95, ord: -45, pod: 0, eti: 25, geo: -30, des: -5, est: 15 },
  },
  {
    // ≈ PRM y Luis Abinader.
    id: 'arq-tecnocrata',
    name: 'Tecnócrata pro-EE.UU.',
    kind: 'arquetipo',
    subtitle: 'Gestión, institucionalidad y alianza con Washington',
    summary:
      'Apuesta por la gestión eficiente, la inversión privada, un Ministerio Público independiente y los límites a la reelección, con una alianza estrecha con EE.UU. en seguridad y comercio. Es firme en la frontera y moderado en valores, como el PRM y el gobierno de Luis Abinader.',
    scores: { eco: 35, soc: -10, mig: -45, ide: -15, rel: -15, val: 5, ord: -10, pod: 55, eti: 35, geo: -80, des: 5, est: -60 },
  },
  {
    // ≈ Alofoke / Dominicanos Primero, PED.
    id: 'arq-populista',
    name: 'Populista antisistema',
    kind: 'arquetipo',
    subtitle: 'El pueblo contra los políticos de siempre',
    summary:
      'Rechaza a los partidos tradicionales y quiere a alguien de fuera que "limpie" la política, con mano dura contra el crimen y deportación rápida de indocumentados. Pide cero corrupción y decisiones directas, como el movimiento Dominicanos Primero de Santiago Matías (Alofoke).',
    scores: { eco: 15, soc: 5, mig: -80, ide: -60, rel: -15, val: -25, ord: -70, pod: -20, eti: 35, geo: -35, des: 0, est: 90 },
  },
  {
    // `des` muy alto; resto ≈ Alianza País / MPT.
    id: 'arq-ecologista',
    name: 'Ecologista',
    kind: 'arquetipo',
    subtitle: 'Primero el agua, los bosques y las costas',
    summary:
      'Pone la protección de ríos, bosques, costas y áreas protegidas por encima de la minería, las grandes obras y el turismo sin control, como en la defensa de Loma Miranda. Suele sumar justicia social, transparencia y participación ciudadana.',
    scores: { eco: -35, soc: -45, mig: 25, ide: 30, rel: 35, val: 45, ord: 35, pod: 50, eti: 60, geo: 25, des: 95, est: 45 },
  },
  {
    // Cerca de 0 en casi todo (con el leve sesgo dominicano en migración).
    id: 'arq-centrista',
    name: 'Centrista pragmático',
    kind: 'arquetipo',
    subtitle: 'Ni un extremo ni el otro: lo que funcione',
    summary:
      'Evita los extremos y juzga cada propuesta por sus resultados. Acepta el sistema de partidos con reformas graduales, un control migratorio razonable y cambios sociales sin sobresaltos.',
    scores: { eco: 5, soc: -10, mig: -20, ide: -10, rel: 0, val: 0, ord: 0, pod: 10, eti: 5, geo: -15, des: 0, est: -10 },
  },
  {
    // `geo` alto; no necesariamente de izquierda ni duro con Haití.
    id: 'arq-soberanista',
    name: 'Nacionalista soberanista',
    kind: 'arquetipo',
    subtitle: 'Soberanía frente a Washington',
    summary:
      'Defiende la autonomía nacional frente a EE.UU.: rechaza bases e intervenciones extranjeras y busca lazos con China, América Latina y otros polos. Recuerda 1916 y 1965 como agravios a la soberanía, sin que eso implique un programa de izquierda ni una postura dura hacia Haití.',
    scores: { eco: -30, soc: -30, mig: -25, ide: -20, rel: -10, val: -15, ord: -10, pod: 0, eti: 20, geo: 85, des: 15, est: 20 },
  },
];
