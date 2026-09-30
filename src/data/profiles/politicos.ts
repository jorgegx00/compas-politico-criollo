// Políticos (docs/PLAN.md §11.3, con las revisiones del dossier 11). Justificaciones y fuentes completas en
// docs/investigacion/: 02-elecciones-2024-partidos.md, 03-outsiders-religion-progresismo-periodistas-metodologia.md,
// 05-comunicadores.md (Guido Gómez Mazara, Pedro Jiménez, Vinicio Castillo, Carlos Peña), 11-huecos-posiciones.md y
// 24-izquierda-radical.md (Isa Conde, Manuel Salazar, Miguel Mejía y Fulgencio Severino).
// `eti` puntúa el discurso y las posiciones declaradas, no un juicio de conducta.
// Confianza: `*` del PLAN → 'baja'; confianza explícita de los dossiers ('A'/'media-alta' → 'alta', 'baja' → 'baja').
// Filas promediadas de dos dossiers (Vinicio Castillo: 02 y 05; Carlos Peña: 02 frente a 05 y 03; Ramfis: 03 y la
// fila del PED en 02; Roque Espaillat: 02 y 03): 'baja' donde los dossiers difieren en 25 puntos o más; 'alta' solo
// donde un dossier la da explícitamente y los demás coinciden.
import type { AxisId, Confidence, Profile } from '../types.ts';

/** Perfiles sin posiciones de política pública documentadas: solo aparecen en "Explorar". */
const BAJA: Readonly<Record<AxisId, Confidence>> = {
  eco: 'baja',
  soc: 'baja',
  mig: 'baja',
  ide: 'baja',
  rel: 'baja',
  val: 'baja',
  ord: 'baja',
  pod: 'baja',
  eti: 'baja',
  geo: 'baja',
  des: 'baja',
  est: 'baja',
};

const PROPUESTAS_2024 = {
  title: 'Listín Diario — Propuestas íntegras de los nueve candidatos presidenciales (2024)',
  url: 'https://listindiario.com/la-republica/politica/20240515/propuestas-integras-nueve-candidatos-presidenciales_808418.html',
};

const DEBATE_ALTERNATIVOS_2024 = {
  title: 'Listín Diario — Debate de candidatos presidenciales alternativos (2024)',
  url: 'https://listindiario.com/la-republica/politica/20240417/debate-candidatos-presidenciales-alternativos-elecciones-2024_804582.html',
};

const ENCUESTA_IDEAME = {
  title: '7 Días — Encuesta IDEAME rumbo a 2028 (septiembre de 2026)',
  url: 'https://7dias.com.do/2026/09/28/leonel-ganaria-la-primera-vuelta-de-las-elecciones-del-2028-independiente-de-que-david-collado-o-carolina-mejia-encabecen-boleta-prm-datos-corresponden-encuesta-ideame/',
};

export const politicos: Profile[] = [
  {
    id: 'pol-abinader',
    name: 'Luis Abinader',
    kind: 'politico',
    subtitle: 'Presidente de la República desde 2020 · PRM · reelegido en 2024 (57.44 %)',
    summary:
      'Presidente desde 2020 por el PRM, reelegido en 2024 con 57.44 %. Impulsó la reforma de 2024 que fija como cláusula pétrea el límite de dos periodos, las 15 medidas migratorias de 2025 (muro, protocolo hospitalario, deportaciones récord) y un alineamiento estrecho con EE.UU. Dijo apoyar las tres causales, pero promulgó el Código Penal sin ellas; en 2026 detuvo el proyecto minero Romero.',
    scores: { eco: 30, soc: -20, mig: -55, ide: -20, rel: -20, val: 0, ord: -15, pod: 55, eti: 30, geo: -75, des: 0, est: -65 },
    confidence: { soc: 'alta', geo: 'alta' },
    sources: [
      {
        title: 'Diario Libre — Abinader: «somos una raza mixta» (18-sep-2023)',
        url: 'https://www.diariolibre.com/usa/actualidad/2023/09/18/luis-abinader-y-estudiante-sostienen-debate-en-nueva-york/2465059',
      },
      {
        title: 'JCE — Plan de Gobierno 2024-2028 del PRM (PDF)',
        url: 'https://jce.gob.do/portaltransparencia/Repositorio/Vista-Escritorio?EntryId=29905&Command=Core_Download&Method=attachment',
      },
      { title: 'Wikipedia — Luis Abinader', url: 'https://es.wikipedia.org/wiki/Luis_Abinader' },
      {
        title: 'Listín Diario — Abinader: no podía "imponer mi posición" sobre las causales',
        url: 'https://listindiario.com/la-republica/20250803/imponer-mi-posicion-sobre-causales-abinader-pasado-sobre-reforma-codigo-penal_868637.html',
      },
      {
        title: 'Diario Libre — Las 15 medidas de Abinader para frenar la inmigración de haitianos',
        url: 'https://www.diariolibre.com/actualidad/nacional/2025/04/06/las-15-medidas-de-abinader-para-frenar-la-inmigracion-de-haitianos/3062556',
      },
      {
        title: 'Diario Libre — Abinader detiene el proyecto minero Romero en San Juan',
        url: 'https://www.diariolibre.com/politica/gobierno/2026/05/04/abinader-detiene-el-proyecto-minero-romero-en-san-juan/3523239',
      },
      {
        title: 'CIF — Plan de inversión para la transición del carbón en RD (2025, PDF)',
        url: 'https://www.cif.org/sites/cif_enc/files/meeting-documents/ctf_tfc.33_agenda-item-4-dominican-republic-act-ip_02262025.pdf',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'pol-leonel-fernandez',
    name: 'Leonel Fernández',
    kind: 'politico',
    subtitle: 'Presidente 1996–2000 y 2004–2012 · presidente de Fuerza del Pueblo · 28.85 % en 2024',
    summary:
      'Presidente en 1996–2000 y 2004–2012 por el PLD, con la capitalización de empresas públicas y el DR-CAFTA. Fundó la Fuerza del Pueblo en 2019 y obtuvo 28.85 % en 2024. Se opone a nuevos impuestos como la Ley 30-26, rechaza la "haitianización del comercio" y defiende las deportaciones. Encabeza las encuestas para 2028.',
    scores: { eco: 15, soc: -20, mig: -55, ide: -40, rel: -30, val: -30, ord: -25, pod: -50, eti: -35, geo: 25, des: -10, est: -65 },
    sources: [
      {
        title: 'JCE — Plan de Gobierno 2024-2028 de la Fuerza del Pueblo (PDF)',
        url: 'https://jce.gob.do/portaltransparencia/Repositorio/Vista-Escritorio?EntryId=29934&Command=Core_Download&Method=attachment',
      },
      { title: 'Wikipedia — Leonel Fernández', url: 'https://es.wikipedia.org/wiki/Leonel_Fern%C3%A1ndez' },
      {
        title: 'N Digital — Leonel propone modernizar los controles fronterizos y reorganizar los mercados binacionales',
        url: 'https://n.com.do/2026/08/02/leonel-propone-modernizar-los-controles-fronterizos-y-reorganizar-los-mercados-binacionales/',
      },
      {
        title: '7 Días — Leonel solicita retirar los nuevos impuestos de la reforma fiscal',
        url: 'https://7dias.com.do/2026/06/16/leonel-solicita-retirar-propuesta-de-nuevos-impuestos-de-la-reforma-fiscal-y-reformular-el-presupuesto-de-2026/',
      },
      ENCUESTA_IDEAME,
    ],
    asOf: '2026-09',
  },
  {
    id: 'pol-danilo-medina',
    name: 'Danilo Medina',
    kind: 'politico',
    subtitle: 'Presidente 2012–2020 · presidente del PLD',
    summary:
      'Presidente en 2012–2020 por el PLD, que preside. Promovió la reforma constitucional de 2015 que le permitió reelegirse, el plan de regularización de extranjeros y la Ley 169-14 (2014), la central de carbón Punta Catalina y el establecimiento de relaciones con China en 2018. En 2026 sostiene que el PLD competirá con fuerza propia en 2028.',
    scores: { eco: -10, soc: -30, mig: -35, ide: -25, rel: -20, val: -10, ord: -20, pod: -60, eti: -60, geo: 35, des: -45, est: -65 },
    confidence: { des: 'alta' },
    sources: [
      { title: 'Wikipedia — Presidencia de Danilo Medina', url: 'https://es.wikipedia.org/wiki/Presidencia_de_Danilo_Medina' },
      {
        title: 'Listín Diario — La Asamblea restablece la reelección presidencial (2015)',
        url: 'https://listindiario.com/la-republica/2015/06/13/376321/asamblea-restablece-la-reeleccin-presidencial',
      },
      {
        title: 'France 24 — República Dominicana establece relaciones con China y rompe con Taiwán',
        url: 'https://www.france24.com/es/20180501-republica-dominicana-establece-relaciones-diplomaticas-con-china-y-rompe-con-taiwan',
      },
      {
        title: 'Diario Libre — Danilo Medina reafirma que el PLD no cederá su fuerza en elecciones',
        url: 'https://www.diariolibre.com/politica/partidos/2026/04/26/danilo-medina-reafirma-que-el-pld-no-cedera-su-fuerza-en-elecciones/3514797',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'pol-abel-martinez',
    name: 'Abel Martínez',
    kind: 'politico',
    subtitle: 'Candidato presidencial del PLD en 2024 (10.39 %) · exalcalde de Santiago',
    summary:
      'Candidato presidencial del PLD en 2024 (10.39 %) y exalcalde de Santiago. Su programa daba 30 días a los extranjeros irregulares antes de detenerlos, con muro en tramos de la frontera, 10 mil policías y reconocimiento facial, y ampliaba las transferencias sociales. Al presentarlo prometió además la primera cárcel de máxima seguridad y "tres anillos" de patrullaje, que el documento depositado en la JCE no incluye.',
    scores: { eco: 10, soc: -25, mig: -65, ide: -45, rel: -40, val: -30, ord: -40, pod: -20, eti: -10, geo: 5, des: -15, est: -40 },
    confidence: { soc: 'alta', mig: 'alta' },
    sources: [
      {
        title: 'JCE — Programa de Gobierno 2024-2028 del PLD (PDF)',
        url: 'https://jce.gob.do/portaltransparencia/Repositorio/Vista-Escritorio?EntryId=29932&Command=Core_Download&Method=attachment',
      },
      {
        title: 'Diario Libre — ¿Cuáles son las propuestas de Abel Martínez?',
        url: 'https://www.diariolibre.com/actualidad/politica/2024/04/18/cuales-son-las-propuestas-de-abel-martinez-en-un-posible-gobierno-suyo/2678668',
      },
      {
        title: 'AMCHAMDR — Abel Martínez plantea su agenda y plan de gobierno',
        url: 'https://amcham.org.do/abel-martinez-en-segundo-encuentro-de-ciclo-de-candidatos-2024-de-amchamdr-plantea-agenda-transformadora-y-plan-de-gobierno-para-el-desarrollo-nacional/',
      },
      {
        title: 'El Día — Abel Martínez presenta su programa de gobierno 2024-2028 (abr-2024)',
        url: 'https://eldia.com.do/abel-martinez-presenta-programa-de-gobierno-2024-2028/',
      },
      PROPUESTAS_2024,
    ],
    asOf: '2026-09',
  },
  {
    id: 'pol-omar-fernandez',
    name: 'Omar Fernández',
    kind: 'politico',
    subtitle: 'Senador del Distrito Nacional desde 2024 · Fuerza del Pueblo',
    summary:
      'Senador del Distrito Nacional desde 2024 por la Fuerza del Pueblo, tras vencer a Guillermo Moreno; hijo de Leonel Fernández. Se declara a favor de la vida "desde la concepción" y en contra de las tres causales. Votó a favor del Código Penal (2025); en 2026 propuso sin éxito cambios a favor de la libertad de expresión y su bancada votó contra la reforma. Encabeza encuestas para la candidatura del FP en 2028.',
    scores: { eco: 10, soc: -15, mig: -45, ide: -30, rel: -45, val: -45, ord: -20, pod: -10, eti: 0, geo: 10, des: 10, est: -20 },
    confidence: { des: 'baja' },
    sources: [
      { title: 'Wikipedia — Omar Fernández (político)', url: 'https://es.wikipedia.org/wiki/Omar_Fern%C3%A1ndez_(pol%C3%ADtico)' },
      {
        title: 'Acento — Tres causales: qué postura tienen los candidatos a senadores del DN',
        url: 'https://acento.com.do/politica/tres-causales-que-postura-tienen-los-candidatos-a-senadores-del-distrito-nacional-9312017.html',
      },
      {
        title: 'El Nuevo Diario — Omar Fernández lidera preferencias para la candidatura del FP',
        url: 'https://elnuevodiario.com.do/omar-fernandez-lidera-preferencias-para-candidatura-presidencial-de-fp-con-57-3-segun-rd-elige/',
      },
      {
        title: 'Listín Diario — Omar Fernández: en la reforma constitucional "la rapidez no es la mejor aliada" (oct-2024)',
        url: 'https://listindiario.com/la-republica/20241001/omar-fernandez-advierte-sobre-reforma-constitucional-rapidez-mejor-aliada_827859.html',
      },
      {
        title: 'Listín Diario — El Senado convierte en ley la reforma del Código Penal (jul-2025)',
        url: 'https://listindiario.com/la-republica/congreso/20250731/senado-convierte-ley-reforma-codigo-penal_868380.html',
      },
      {
        title: 'Hoy — El Senado rechaza las propuestas de Omar Fernández sobre libertad de expresión (jul-2026)',
        url: 'https://hoy.com.do/el-pais/senado-rechaza-propuestas-omar-fernandez-reforzar-libertad-expresion-nuevo-codigo-penal_1095937_amp.html',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'pol-david-collado',
    name: 'David Collado',
    kind: 'politico',
    subtitle: 'Ministro de Turismo desde 2020 · PRM · aspirante presidencial 2028',
    summary:
      'Dirigente del PRM, ministro de Turismo desde 2020, exalcalde del Distrito Nacional (2016–2020) y exdiputado (2010–2016). Encabeza la preferencia de los simpatizantes del PRM para 2028. Su discurso es de gestión (turismo, obras); no se hallaron posiciones públicas sobre aborto, LGBT ni religión, por lo que esos ejes son estimados.',
    scores: { eco: 45, soc: 5, mig: -50, ide: -20, rel: -20, val: -10, ord: -25, pod: 20, eti: 10, geo: -60, des: -30, est: -45 },
    confidence: { rel: 'baja', val: 'baja' },
    sources: [
      { title: 'Wikipedia — David Collado', url: 'https://es.wikipedia.org/wiki/David_Collado' },
      {
        title: 'Diario Libre — David Collado lidera la encuesta ACD Media para 2028',
        url: 'https://www.diariolibre.com/politica/partidos/2026/07/13/david-collado-lidera-encuesta-acd-media-para-elecciones-2028/3597849',
      },
      {
        title: 'N Digital — Collado deja dudas sobre su permanencia en Turismo',
        url: 'https://n.com.do/2026/09/02/se-despidio-david-collado-ministro-deja-dudas-sobre-su-permanencia-en-turismo-tras-discurso-en-asonahores/',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'pol-carolina-mejia',
    name: 'Carolina Mejía',
    kind: 'politico',
    subtitle: 'Alcaldesa del Distrito Nacional desde 2020 · PRM · aspirante presidencial 2028',
    summary:
      'Alcaldesa del Distrito Nacional desde 2020 por el PRM y aspirante declarada a la candidatura presidencial de 2028. En 2025 avaló que se promulgara el Código Penal sin las tres causales y que estas se trataran en una ley aparte. En 2026 pidió seguir construyendo el muro fronterizo y complementarlo con un "muro económico".',
    scores: { eco: 20, soc: -20, mig: -45, ide: -15, rel: -15, val: -10, ord: -10, pod: 30, eti: 20, geo: -50, des: 15, est: -50 },
    confidence: { rel: 'baja' },
    sources: [
      { title: 'Wikipedia — Carolina Mejía', url: 'https://es.wikipedia.org/wiki/Carolina_Mej%C3%ADa' },
      {
        title: 'Listín Diario — Carolina Mejía entiende que las tres causales deberían conocerse en la próxima legislación',
        url: 'https://listindiario.com/la-republica/20250805/carolina-mejia-entiende-tres-causales-deberia-conocerse-proxima-legislacion_868982.html',
      },
      {
        title: 'N Digital — Carolina Mejía plantea complementar la verja fronteriza con un "muro económico"',
        url: 'https://n.com.do/2026/09/21/carolina-mejia-plantea-complementar-verja-fronteriza-con-un-muro-economico-en-dajabon/',
      },
      {
        title: 'Acento — Carolina Mejía: "Seré candidata presidencial del PRM"',
        url: 'https://acento.com.do/politica/carolina-mejia-sere-candidata-presidencial-del-prm-9680145.html',
      },
      {
        title: 'Acento — La Alcaldía del DN supera los 110,000 árboles plantados en seis años',
        url: 'https://acento.com.do/ecologia/la-alcaldia-del-dn-supera-los-110000-arboles-plantados-en-seis-anos-9709795.html',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'pol-faride-raful',
    name: 'Faride Raful',
    kind: 'politico',
    subtitle: 'Ministra de Interior y Policía desde 2024 · PRM · exsenadora del Distrito Nacional',
    summary:
      'Ministra de Interior y Policía desde agosto de 2024 por el PRM; fue diputada (2016–2020) y senadora del Distrito Nacional (2020–2024). Como diputada defendió el Estado laico frente a la Biblia obligatoria en las escuelas (2018); como senadora, las tres causales. Dirige la reforma policial. En 2026 el TC ordenó a su ministerio juramentar a 16 naturalizados que esperaban desde 2020 (TC/0473/26).',
    scores: { eco: 10, soc: -20, mig: -40, ide: -5, rel: 35, val: 40, ord: -20, pod: 30, eti: 30, geo: -45, des: 5, est: -60 },
    confidence: { des: 'baja' },
    sources: [
      {
        title: 'Diario Libre — El TC ordena concluir la naturalización de 16 personas (jul-2026)',
        url: 'https://www.diariolibre.com/amp/actualidad/nacional/2026/07/02/tc-ordena-concluir-naturalizacion-de-haitianos-plan-de-regularizacion/3586298',
      },
      { title: 'Wikipedia — Faride Raful', url: 'https://es.wikipedia.org/wiki/Faride_Raful' },
      {
        title: 'Listín Diario — Faride apoya las tres causales en el Código Penal, no en una ley especial (2021)',
        url: 'https://listindiario.com/la-republica/2021/03/08/660264/faride-apoya-las-tres-causales-del-aborto-en-el-codigo-penal-no-en-una-ley-especial.html',
      },
      {
        title: 'Revista Mercado — La reforma policial de Faride Raful',
        url: 'https://revistamercado.do/money-invest/daily-news/reforma-policial-republica-dominicana-faride-raful/',
      },
      {
        title: 'Hoy — Faride Raful se defiende por su postura sobre la lectura de la Biblia en las escuelas (2018)',
        url: 'https://hoy.com.do/video-faride-raful-se-defiende-de-las-criticas-en-su-contra-por-postura-sobre-ley-que-impondria-lectura-de-la-biblia-en-escuelas/',
      },
      {
        title: 'N Digital — Faride sobre el Código Penal y la igualdad de derechos (2021)',
        url: 'https://n.com.do/2021/07/01/faride-sobre-codigo-penal-hasta-que-no-entendamos-que-el-estado-tiene-que-garantizar-la-igualdad-de-derechos-estaremos-perdidos/',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'pol-gonzalo-castillo',
    name: 'Gonzalo Castillo',
    kind: 'politico',
    subtitle: 'Candidato presidencial del PLD en 2020 · aspirante a la candidatura de 2028',
    summary:
      'Exministro de Obras Públicas (2012–2019) en los gobiernos de Danilo Medina y candidato presidencial del PLD en 2020. Es uno de los ocho aspirantes oficiales del PLD para 2028 y marca 9 % en la encuesta IDEAME de septiembre de 2026. Perfil estimado sobre todo a partir de la línea del PLD.',
    scores: { eco: 20, soc: -15, mig: -50, ide: -35, rel: -30, val: -30, ord: -35, pod: -40, eti: -55, geo: 0, des: -35, est: -55 },
    sources: [
      {
        title: 'Diario Libre — Carrera interna del PLD: conoce a los aspirantes presidenciales',
        url: 'https://www.diariolibre.com/politica/partidos/2026/02/23/pld-carrera-interna-conoce-a-los-aspirantes-presidenciales/3446095',
      },
      ENCUESTA_IDEAME,
      {
        title: 'Wikipedia — Elecciones generales de la República Dominicana de 2020',
        url: 'https://es.wikipedia.org/wiki/Elecciones_generales_de_la_Rep%C3%BAblica_Dominicana_de_2020',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'pol-guido-gomez-mazara',
    name: 'Guido Gómez Mazara',
    kind: 'politico',
    subtitle: 'Presidente de INDOTEL desde 2024 · dirigente del PRM · aspirante 2028',
    summary:
      'Dirigente del PRM y presidente de INDOTEL desde septiembre de 2024. Aspirante a la candidatura presidencial de 2028, en 2026 pidió al PRM "procesos abiertos, competitivos y transparentes" en lugar de fórmulas de consenso. Calificó las interferencias de emisoras haitianas como "un tema de identidad nacional" y criticó públicamente a los imputados del caso SENASA.',
    scores: { eco: -15, soc: -25, mig: -30, ide: -20, rel: 10, val: 0, ord: -25, pod: 40, eti: 50, geo: -10, des: 0, est: -40 },
    confidence: {
      eco: 'baja',
      soc: 'baja',
      ide: 'baja',
      rel: 'baja',
      val: 'baja',
      geo: 'baja',
      des: 'baja',
      est: 'alta',
    },
    sources: [
      {
        title: 'N Digital — Guido pide al PRM preservar la democracia interna',
        url: 'https://n.com.do/2026/05/05/guido-pide-al-prm-preservar-democracia-interna-y-expresa-preocupacion-por-mecanismos-de-eleccion/',
      },
      {
        title: 'N Digital — INDOTEL y radiodifusores enfrentarán interferencias de emisoras haitianas',
        url: 'https://n.com.do/2024/10/12/indotel-y-radiodifusores-trabajaran-para-enfrentar-interferencias-de-emisoras-haitianas/',
      },
      {
        title: 'N Digital — Solo Carolina, Tony Peña y Guido no han respondido la advertencia de Abinader sobre proselitismo',
        url: 'https://n.com.do/2025/07/10/solo-carolina-tony-pena-y-guido-no-han-respondido-advertencia-de-abinader-sobre-proselitismo/',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'pol-guillermo-moreno',
    name: 'Guillermo Moreno',
    kind: 'politico',
    subtitle: 'Presidente de Alianza País · candidato a senador del Distrito Nacional en 2024',
    summary:
      'Exfiscal, autor del Código Procesal Penal y presidente de Alianza País; cuatro veces candidato presidencial con la anticorrupción como bandera. En 2024 fue candidato a senador del Distrito Nacional con apoyo del PRM y perdió ante Omar Fernández (39 % contra 56 %). Apoya las tres causales y se opone a la minería a cielo abierto; en 2025–2026 marcó distancia del gobierno.',
    scores: { eco: -40, soc: -50, mig: 10, ide: 20, rel: 45, val: 45, ord: 40, pod: 70, eti: 90, geo: 20, des: 60, est: 20 },
    sources: [
      {
        title: 'Diario Libre — Alianza País no tiene acuerdos con Abinader ni el PRM',
        url: 'https://www.diariolibre.com/politica/partidos/2025/07/17/alianza-pais-no-tiene-acuerdos-con-abinader-ni-el-prm/3186051',
      },
      {
        title: 'Acento — Tres causales: qué postura tienen los candidatos a senadores del DN',
        url: 'https://acento.com.do/politica/tres-causales-que-postura-tienen-los-candidatos-a-senadores-del-distrito-nacional-9312017.html',
      },
      {
        title: 'SFM Digital — Guillermo Moreno llama a elegir candidatos propios de Alianza País',
        url: 'https://www.sfmacoris.com/guillermo-moreno-encabeza-concurrida-jornada-politica-de-alianza-pais-y-llama-a-elegir-candidatos-propios/',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'pol-virginia-antares',
    name: 'Virginia Antares',
    kind: 'politico',
    subtitle: 'Candidata presidencial de Opción Democrática en 2024 (0.58 %) · aspirante 2028',
    summary:
      'Economista, candidata presidencial de Opción Democrática en 2024 (0.58 %): despenalizar el aborto, igualdad para todas las parejas, semana de 4 días e impuestos progresivos. Critica el uso "electorero" del tema haitiano y las deportaciones masivas, aunque acepta las que "deban hacerse" con respeto a los DD.HH.; rechaza intervenir militarmente en Haití y en 2025 juzgó negativo el balance de las 15 medidas migratorias.',
    scores: { eco: -50, soc: -70, mig: 45, ide: 50, rel: 70, val: 90, ord: 65, pod: 70, eti: 70, geo: 30, des: 80, est: 40 },
    confidence: { eco: 'alta', soc: 'alta', ord: 'alta', pod: 'alta', des: 'alta' },
    sources: [
      {
        title: 'JCE — Programa de Gobierno 2024 de Opción Democrática (PDF)',
        url: 'https://jce.gob.do/portaltransparencia/Repositorio/Vista-Escritorio?EntryId=29911&Command=Core_Download&Method=attachment',
      },
      {
        title: 'El Día — Virginia Antares: el gobierno usa el tema haitiano y las deportaciones con fines electorales',
        url: 'https://eldia.com.do/virginia-antares-gobierno-usa-tema-haitiano-y-las-deportaciones-con-fines-electorales/',
      },
      {
        title: 'Listín Diario — Virginia Antares favorece la cooperación con Haití y no la intervención militar',
        url: 'https://listindiario.com/la-republica/politica/20240510/virginia-antares-favorece-gestionar-cooperacion-haiti-intervencion-militar_807709.html',
      },
      {
        title: 'Listín Diario — Virginia Antares, la candidata más joven a la presidencia',
        url: 'https://listindiario.com/la-republica/politica/20240516/virginia-antares-candidata-mas-joven-presidencia-republica_808553.html',
      },
      {
        title: 'Política Dominicana — Virginia Antares, aspirante a la presidencia',
        url: 'https://politicadominicana.com/2026/05/19/virginia-antares-aspirante-a-la-presidencia-de-la-republica/',
      },
      {
        title: 'Rumba FM — Virginia Antares: balance negativo de las medidas migratorias (nov-2025)',
        url: 'https://www.youtube.com/watch?v=s0W_sUNRZgc',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'pol-maria-teresa-cabrera',
    name: 'María Teresa Cabrera',
    kind: 'politico',
    subtitle: 'Candidata presidencial del Frente Amplio en 2024 (0.14 %)',
    summary:
      'Candidata presidencial del Frente Amplio en 2024 (0.14 %). Su programa proponía un Congreso unicameral y un presidente con menos poder, una Asamblea Constituyente, devolver al Estado las empresas privatizadas con participación obrera, reducir el ITBIS e incluir educación sexual en las escuelas.',
    scores: { eco: -70, soc: -75, mig: 30, ide: 45, rel: 60, val: 65, ord: 50, pod: 70, eti: 65, geo: 65, des: 45, est: 10 },
    confidence: { soc: 'alta', mig: 'baja', ide: 'baja', rel: 'alta', pod: 'alta', est: 'baja' },
    sources: [
      {
        title: 'JCE — Plan de Gobierno 2024 del Frente Amplio, parte 1 de 2 (PDF)',
        url: 'https://jce.gob.do/portaltransparencia/Repositorio/Vista-Escritorio?EntryId=29907&Command=Core_Download&Method=attachment',
      },
      {
        title: 'JCE — Plan de Gobierno 2024 del Frente Amplio, parte 2 de 2 (PDF)',
        url: 'https://jce.gob.do/portaltransparencia/Repositorio/Vista-Escritorio?EntryId=29908&Command=Core_Download&Method=attachment',
      },
      {
        title: 'El Nacional — María Teresa Cabrera propone un Congreso unicameral',
        url: 'https://elnacional.com.do/maria-teresa-cabrera-propone-un-congreso-unicameral/',
      },
      DEBATE_ALTERNATIVOS_2024,
      PROPUESTAS_2024,
    ],
    asOf: '2026-09',
  },
  {
    id: 'pol-miguel-vargas',
    name: 'Miguel Vargas',
    kind: 'politico',
    subtitle: 'Presidente del PRD · candidato presidencial en 2024 (0.45 %)',
    summary:
      'Presidente del PRD y candidato presidencial en 2024 (0.45 %), dentro de la alianza opositora Rescate RD con FP y PLD. En 2015 pactó con Danilo Medina la reforma constitucional que facilitó su reelección y luego fue canciller (2016–2020). Su programa de 2024 proponía bajar el ISR al 15 %, concesionar las distribuidoras eléctricas y "mano dura" contra el delito.',
    scores: { eco: 35, soc: -5, mig: -30, ide: -15, rel: -30, val: -25, ord: -35, pod: -25, eti: -25, geo: -10, des: -10, est: -55 },
    confidence: { ide: 'baja', ord: 'alta', eti: 'baja', est: 'alta' },
    sources: [
      {
        title: 'JCE — Plan de Gobierno 2024 del PRD (PDF)',
        url: 'https://jce.gob.do/portaltransparencia/Repositorio/Vista-Escritorio?EntryId=29906&Command=Core_Download&Method=attachment',
      },
      PROPUESTAS_2024,
      {
        title: 'SWI swissinfo — PLD, FP y PRD firman una alianza para las elecciones de 2024',
        url: 'https://www.swissinfo.ch/spa/pld-fp-y-prd-firman-una-alianza-para-las-elecciones-generales-de-2024/48970024',
      },
      { title: 'Wikipedia (inglés) — Dominican Revolutionary Party', url: 'https://en.wikipedia.org/wiki/Dominican_Revolutionary_Party' },
    ],
    asOf: '2026-09',
  },
  {
    id: 'pol-quique-antun',
    name: 'Quique Antún',
    kind: 'politico',
    subtitle: 'Presidente del PRSC · aliado del PRM en 2024',
    summary:
      'Ingeniero civil nacido en San Pedro de Macorís en 1952; preside el Partido Reformista Social Cristiano en 2005–2009 y desde 2014. Fue nominado candidato presidencial en 2015, antes del pacto con el PRM; luego el PRSC apoyó al FP en 2020 y al PRM en 2024. En 2019 denunció una ocupación ilegal del territorio por inmigrantes haitianos y en 2021 participó en una caravana contra las tres causales.',
    scores: { eco: 30, soc: 5, mig: -65, ide: -55, rel: -55, val: -60, ord: -40, pod: -15, eti: -30, geo: -45, des: -30, est: -55 },
    confidence: { est: 'baja' },
    sources: [
      {
        title: 'Wikipedia (inglés) — Federico Antún Batlle',
        url: 'https://en.wikipedia.org/wiki/Federico_Ant%C3%BAn_Batlle',
      },
      {
        title: 'Acento — El PRSC de Quique Antún proclama oficialmente a Leonel (2019)',
        url: 'https://acento.com.do/politica/el-prsc-de-quique-antun-proclama-oficialmente-a-leonel-8744267.html',
      },
      {
        title: 'Diario Libre — Tema del aborto desata posiciones encontradas entre políticos y sus partidos (2021)',
        url: 'https://www.diariolibre.com/actualidad/politica/tema-del-aborto-desata-posiciones-encontradas-entre-politicos-y-sus-partidos-GF25021025',
      },
      {
        title: 'El Nacional — El PRSC abre sus puertas a Alofoke para que busque la presidencia en 2028',
        url: 'https://elnacional.com.do/politica/prsc-abre-puertas-alofoke-busque-presidencia-republica-2028_573694.html',
      },
      { title: 'Wikipedia — Partido Reformista Social Cristiano', url: 'https://es.wikipedia.org/wiki/Partido_Reformista_Social_Cristiano' },
    ],
    asOf: '2026-09',
  },
  {
    id: 'pol-eduardo-estrella',
    name: 'Eduardo Estrella',
    kind: 'politico',
    subtitle: 'Candidato del PRSC en 2004 · Dominicanos por el Cambio · ministro de Obras Públicas',
    summary:
      'Ingeniero y exsecretario de Obras Públicas (1991–1994). Candidato del PRSC en 2004 (8.65 %) con obra pública, vivienda y rechazo a la reelección de Hipólito Mejía. En 2007 fundó Dominicanos por el Cambio, aliado del PRM; presidió el Senado (2020–2023) y es ministro de Obras Públicas desde 2025: ejecuta la autopista del Ámbar (2026), cuestionada por sacerdotes y ambientalistas de la cordillera Septentrional.',
    scores: { eco: 25, soc: -15, mig: -50, ide: -40, rel: -40, val: -35, ord: -20, pod: -5, eti: 50, geo: -20, des: -30, est: -45 },
    confidence: { ide: 'baja', rel: 'baja', pod: 'baja', geo: 'baja' },
    sources: [
      {
        title: 'Wikipedia — Eduardo Estrella',
        url: 'https://es.wikipedia.org/wiki/Eduardo_Estrella',
      },
      {
        title: 'Hoy — Eduardo Estrella pide a cibaeños votar por PRSC (2-may-2004)',
        url: 'https://hoy.com.do/eduardo-estrella-pide-a-cibaenos-votar-por-prsc-2/',
      },
      {
        title: 'Hoy — Estrella abandona PRSC; trabajará por el cambio (22-jul-2007)',
        url: 'https://hoy.com.do/el-pais/estrella-abandona-prsctrabajara-por-el-cambio_200973.html',
      },
      {
        title: 'Listín Diario — Eduardo Estrella es el nuevo ministro de Obras Públicas (2025)',
        url: 'https://listindiario.com/la-republica/20250202/eduardo-estrella-nuevo-ministro-obras-publicas_843920.html',
      },
      {
        title: 'Diario Libre — Raquel Peña anuncia el inicio de la autopista del Ámbar (jul-2026)',
        url: 'https://www.diariolibre.com/politica/gobierno/2026/07/25/raquel-pena-anuncia-inicio-de-la-autopista-del-ambar/3610675',
      },
      {
        title: 'Acento — "La carretera del Ámbar es la excusa para explotar la cordillera" (ago-2026)',
        url: 'https://acento.com.do/actualidad/carretera-del-ambar-es-la-excusa-para-explotar-la-cordillera-9730936.html',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'pol-pelegrin-castillo',
    name: 'Pelegrín Castillo',
    kind: 'politico',
    subtitle: 'Presidente de la Fuerza Nacional Progresista (FNP) · posible candidato 2028',
    summary:
      'Presidente de la Fuerza Nacional Progresista. En agosto de 2026 lanzó la iniciativa popular "Dominicanos, enfrentemos la invasión y ocupación haitiana", pidió un estado de excepción en la frontera y anunció una querella contra Amnistía Internacional. La FNP, que en 2024 hizo alianza congresual con el PRM, evalúa postularlo a la presidencia en 2028.',
    scores: { eco: 10, soc: 0, mig: -95, ide: -85, rel: -70, val: -80, ord: -50, pod: 10, eti: 20, geo: -30, des: -15, est: 5 },
    confidence: { des: 'baja' },
    sources: [
      {
        title: '7 Días — Pelegrín Castillo anuncia la iniciativa "Dominicanos, enfrentemos la invasión y ocupación haitiana"',
        url: 'https://7dias.com.do/2026/08/11/pelegrin-castillo-anuncia-iniciativa-dominicanos-enfrentemos-la-invasion-y-ocupacion-haitiana/',
      },
      {
        title: 'Listín Diario — La FNP no apoyará a ningún candidato a nivel presidencial',
        url: 'https://listindiario.com/la-republica/politica/20240227/fuerza-nacional-progresista-apoyara-ningun-candidato-nivel-presidencial_797458.html',
      },
      { title: 'Wikipedia — Pelegrín Castillo', url: 'https://es.wikipedia.org/wiki/Pelegr%C3%ADn_Castillo' },
    ],
    asOf: '2026-09',
  },
  {
    id: 'pol-vinicio-castillo',
    name: 'Vinicio Castillo Semán',
    kind: 'politico',
    subtitle: 'Dirigente de la FNP · exdiputado y comentarista',
    summary:
      'Dirigente de la Fuerza Nacional Progresista, exdiputado y comentarista. Ha propuesto un muro fronterizo; en 2025 apoyó visas temporales nominales para trabajadores haitianos y rechazó una regularización masiva, y respalda la postura de que "no habrá solución dominicana" a la crisis de Haití. En 2020 advirtió a Abinader que su apoyo al aborto "divide al país".',
    scores: { eco: 10, soc: 0, mig: -80, ide: -70, rel: -55, val: -65, ord: -55, pod: 5, eti: 30, geo: -10, des: -5, est: 15 },
    confidence: { mig: 'alta', val: 'alta', ord: 'baja', pod: 'baja', eti: 'baja', geo: 'baja' },
    sources: [
      { title: 'Wikipedia — Vinicio Castillo Semán', url: 'https://es.wikipedia.org/wiki/Vinicio_Castillo_Sem%C3%A1n' },
      {
        title: 'N Digital — Vinicio Castillo respalda visas temporales para trabajadores haitianos',
        url: 'https://n.com.do/2025/06/04/vinicio-castillo-respalda-otorguen-visas-temporales-para-trabajadores-haitianos/',
      },
      {
        title: 'N Digital — Vinicio Castillo advierte a Abinader que su apoyo al aborto divide al país',
        url: 'https://n.com.do/2020/12/27/vinicio-castillo-advierte-al-presidente-abinader-que-apoyo-al-aborto-divide-al-pais/',
      },
      {
        title: 'El Día — Vinicio Castillo respalda ante la ONU la postura de Abinader sobre Haití',
        url: 'https://eldia.com.do/vinicio-castillo-respalda-ante-la-onu-postura-de-abinader-de-que-haiti-debe-resolver-sus-propios-problemas/',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'pol-carlos-pena',
    name: 'Carlos Peña',
    kind: 'politico',
    subtitle: 'Presidente de GenS · candidato presidencial en 2024 (0.72 %)',
    summary:
      'Ingeniero, pastor evangélico y exdiputado del PLD (2006–2010); fundó GenS en 2018 y obtuvo 0.72 % en 2024. Propone prohibir en la Constitución el aborto y el matrimonio igualitario y en 2025 pidió juicio político a los jueces del TC por la TC/1225/25. Calificó el islam de "inconstitucional" (2023), propuso dar 30 días a los indocumentados (2024) y promete recuperar el territorio fijado en 1777, hoy haitiano.',
    scores: { eco: -10, soc: -40, mig: -75, ide: -65, rel: -85, val: -90, ord: -45, pod: 5, eti: 35, geo: -35, des: -5, est: 65 },
    confidence: { eco: 'baja', soc: 'alta', rel: 'alta', val: 'alta', eti: 'baja', geo: 'baja', est: 'baja' },
    sources: [
      {
        title: 'JCE — Programa de Gobierno 2024-2028 de GenS (PDF)',
        url: 'https://jce.gob.do/portaltransparencia/Repositorio/Vista-Escritorio?EntryId=29910&Command=Core_Download&Method=attachment',
      },
      {
        title: 'Diario Libre — Cafecito político con Carlos Peña, candidato presidencial de GenS',
        url: 'https://www.diariolibre.com/politica/partidos/2024/04/28/cafecito-politico-con-carlos-pena-candidato-presidencial-de-gens/2705260',
      },
      {
        title: 'En Segundos — Carlos Peña promete recuperar territorio fronterizo',
        url: 'https://ensegundos.do/2026/08/20/carlos-pena-promete-recuperar-territorio-fronterizo-y-desconoce-tratados-limitrofes-con-haiti-posteriores-a-1777',
      },
      {
        title: 'N Digital — Carlos Peña pide juicio político contra jueces del TC',
        url: 'https://n.com.do/2025/11/24/carlos-pena-pide-juicio-politico-contra-jueces-del-tc-y-califica-la-sentencia-como-ilegal-y-aberrante/',
      },
      {
        title: 'El Oasis Digital — Carlos Peña propone habilitar a Luis Abinader y Danilo Medina',
        url: 'https://www.eloasisdigital.com/2026/08/carlos-pena-propone-habilitar-luis.html',
      },
      {
        title: 'Ensegundos — Carlos Peña: "el islam es inconstitucional" (oct-2023)',
        url: 'https://ensegundos.do/2023/10/11/pastor-carlos-pena-el-islam-es-inconstitucional-en-la-republica-dominicana/',
      },
      {
        title: 'Listín Diario — Carlos Peña, pastor evangélico, busca la presidencia (abr-2024)',
        url: 'https://listindiario.com/la-republica/politica/20240411/carlos-pena-pastor-evangelico-busca-presidencia-republica_803706.html',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'pol-ramfis-dominguez-trujillo',
    name: 'Ramfis Domínguez-Trujillo',
    kind: 'politico',
    subtitle: 'Líder del Partido Esperanza Democrática (PED) · aspirante presidencial 2028',
    summary:
      'Nieto de Rafael Trujillo, nacido en Nueva York en 1970 y líder del Partido Esperanza Democrática. La JCE lo inhabilitó en 2020 y 2024 por doble nacionalidad; en 2026 anunció que ya no tiene impedimento y que aspira en 2028. Propone muro y repatriación de todos los irregulares, "mano dura", "cero corrupción" y principios cristianos como guía de gobierno. Reivindica la figura de su abuelo.',
    scores: { eco: 15, soc: -35, mig: -95, ide: -90, rel: -55, val: -65, ord: -85, pod: -50, eti: 30, geo: -30, des: 15, est: 70 },
    confidence: { soc: 'baja', mig: 'alta', ide: 'alta', ord: 'alta', pod: 'baja', geo: 'baja', est: 'baja' },
    sources: [
      {
        title: 'JCE — Programa de Gobierno 2024-2028 del PED (PDF)',
        url: 'https://jce.gob.do/portaltransparencia/Repositorio/Vista-Escritorio?EntryId=29933&Command=Core_Download&Method=attachment',
      },
      {
        title: 'Hoy — Ramfis asegura estar listo para disputar en 2028',
        url: 'https://hoy.com.do/el-pais/ramfis-asegura-listo-disputar-2028_1090203.html',
      },
      {
        title: 'Gacela Digital — La ruta de Ramfis Domínguez-Trujillo hacia 2028',
        url: 'https://www.gaceladigital.do/articulo/politica/ramfis-dominguez-trujillo-ruta-2028-orden-soberania-transformacion-nacional/20260828200750001474.html',
      },
      {
        title: 'Listín Diario — Ramfis Trujillo dice que levantará un muro con Haití (2018)',
        url: 'https://listindiario.com/la-republica/2018/06/01/517624/ramfis-trujillo-dice-levantara-un-muro-con-haiti-y-que-repatriara-a-todos-los-haitianos-irregulares',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'pol-roque-espaillat',
    name: 'Roque Espaillat',
    kind: 'politico',
    subtitle: 'Candidato presidencial del PED en 2024 (1.36 %) · aspirante 2028',
    summary:
      'Médico conocido como "El Cobrador"; fue el candidato presidencial del PED en 2024 (1.36 %), luego rompió con Ramfis Domínguez-Trujillo y aspira a 2028. Propuso cero tolerancia con la corrupción (30 años por peculado; dijo que apresaría a unos 1,000 políticos), muro de concreto y visas de trabajo temporales, eliminar el anticipo, bajar el ITBIS, elegir jueces por voto y quitar el financiamiento a los partidos.',
    scores: { eco: 30, soc: 5, mig: -85, ide: -65, rel: -45, val: -55, ord: -80, pod: -20, eti: 60, geo: -5, des: 15, est: 85 },
    confidence: { ide: 'baja', eti: 'alta', geo: 'baja' },
    sources: [
      {
        title: 'JCE — Programa de Gobierno 2024-2028 del PED (PDF)',
        url: 'https://jce.gob.do/portaltransparencia/Repositorio/Vista-Escritorio?EntryId=29933&Command=Core_Download&Method=attachment',
      },
      {
        title: 'Listín Diario — Roque Espaillat busca llegar a la presidencia para "cobrarle" a los políticos',
        url: 'https://listindiario.com/la-republica/politica/20240516/roque-espaillat-candidato-busca-llegar-presidencia-cobrarle-politicos_808556.html',
      },
      {
        title: 'El Día — Corrupción y migración, centro de las propuestas de Roque Espaillat',
        url: 'https://eldia.com.do/corrupcion-y-migracion-centro-de-propuestas-de-roque-espaillat/',
      },
      {
        title: 'Proceso — El PED se desvincula de Roque Espaillat',
        url: 'https://proceso.com.do/2024/05/21/partido-esperanza-democratica-se-desvincula-de-roque-espaillat-el-cobrador/',
      },
      {
        title: 'Listín Diario — Roque Espaillat asegura que combatirá la corrupción (may-2024)',
        url: 'https://listindiario.com/la-republica/20240510/roque-espaillat-asegura-combatir-corrupcion-solucion-problemas-pais_807789.html',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'pol-fernando-abreu',
    name: 'Fernando Abreu',
    kind: 'politico',
    subtitle: 'Aspirante presidencial 2028 · Patria Libre (sin reconocimiento de la JCE)',
    summary:
      'Abogado y fundador del centro de pensamiento UnicaVia; aspira a la presidencia en 2028 con Patria Libre, que la JCE aún no reconoce. Se define como de nueva derecha: libertario, provida y nacionalista (muro, deportaciones masivas, rechazo a la "injerencia extranjera"). Marcó 2.6 % en un sondeo difundido por elCaribe y 0.5 % en la encuesta CESP.',
    scores: { eco: 75, soc: 65, mig: -90, ide: -65, rel: -40, val: -80, ord: -60, pod: 10, eti: 40, geo: 0, des: -35, est: 75 },
    confidence: { ide: 'baja', rel: 'baja', ord: 'baja', pod: 'baja', geo: 'baja', des: 'baja' },
    sources: [
      {
        title: 'elCaribe — Fernando Abreu irrumpe en las presidenciales y alcanza 2.6 % en encuesta nacional',
        url: 'https://www.elcaribe.com.do/panorama/pais/fernando-abreu-irrumpe-en-las-presidenciales-y-alcanza-2-6-en-encuesta-nacional/',
      },
      {
        title: 'Lan 103 FM — Fernando Abreu promete dar la batalla por su candidatura presidencial',
        url: 'https://lan103fm.com/fernando-abreu-promete-dar-la-batalla-por-su-candidatura-presidencial-rumbo-al-2028/',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'pol-dio-astacio',
    name: 'Dío Astacio',
    kind: 'politico',
    subtitle: 'Alcalde de Santo Domingo Este desde 2024 · PRM · pastor evangélico',
    summary:
      'Pastor evangélico y alcalde de Santo Domingo Este desde 2024 por el PRM. Fue candidato del PQDC en 2016 y pasó al PRM en 2018. Una encuesta de septiembre de 2026 lo sitúa como favorito para el Senado por la provincia Santo Domingo. No se hallaron posiciones de política pública documentadas: casi todo el perfil es estimado.',
    scores: { eco: 10, soc: -15, mig: -30, ide: -20, rel: -60, val: -65, ord: -40, pod: 20, eti: 0, geo: -20, des: 25, est: -30 },
    confidence: BAJA,
    sources: [
      {
        title: 'Acento — Dío Astacio, el pastor y político que aspira a la alcaldía de SDE',
        url: 'https://acento.com.do/politica/dio-astacio-el-pastor-y-politico-que-aspira-a-la-alcaldia-de-sde-9252142.html',
      },
      {
        title: 'El Faro RD — Dío Astacio irrumpe como favorito (encuesta Cosecha, septiembre de 2026)',
        url: 'https://www.elfarord.com/2026/09/dio-astacio-irrumpe-como-favorito-al.html',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'pol-pedro-jimenez',
    name: 'Pedro Jiménez',
    kind: 'politico',
    subtitle: 'Dirigente de Fuerza del Pueblo · comunicador (El Sol de la Mañana)',
    summary:
      'Abogado y periodista, panelista de El Sol de la Mañana. Fue candidato de la Fuerza del Pueblo a diputado por la circunscripción 2 del Distrito Nacional en 2024 y es miembro de su dirección central. Su perfil se apoya en su discurso en medios y en su trabajo territorial; la mayoría de los ejes son estimados.',
    scores: { eco: -15, soc: -40, mig: -35, ide: -20, rel: -10, val: -10, ord: -10, pod: -20, eti: 30, geo: 0, des: 0, est: 10 },
    confidence: {
      eco: 'baja',
      mig: 'baja',
      ide: 'baja',
      rel: 'baja',
      val: 'baja',
      ord: 'baja',
      geo: 'baja',
      des: 'baja',
    },
    sources: [
      {
        title: 'N Digital — Fuerza del Pueblo declara a Pedro Jiménez candidato a diputado por la circunscripción 2 del DN',
        url: 'https://n.com.do/2023/10/18/fuerza-del-pueblo-declara-a-pedro-jimenez-candidato-oficial-a-diputado-por-circunscripcion-2-del-dn/',
      },
      {
        title: 'N Digital — Entregan útiles escolares a cientos de niños en la circunscripción 2 del DN',
        url: 'https://n.com.do/2025/08/25/entregan-utiles-escolares-a-cientos-de-ninos-en-circunscripcion-2-del-dn/',
      },
    ],
    asOf: '2026-09',
  },

  // ——— Izquierda radical (dossier 24) ———
  {
    id: 'pol-narciso-isa-conde',
    name: 'Narciso Isa Conde',
    kind: 'politico',
    subtitle: 'Partido del Poder Popular (2026) · exdirigente del PCD y de Fuerza de la Revolución',
    summary:
      'Cofundador del PCD (1965) y su candidato presidencial en 1978, 1982 y 1986; luego dirigió Fuerza de la Revolución y el Movimiento Caamañista, fusionados en 2026 en el Partido del Poder Popular. Pide la salida de las tropas de EE.UU., defiende a Cuba, Venezuela y Nicaragua frente a las "democracias liberales", rechaza el racismo antihaitiano y la minería, y apoya las tres causales y el Estado laico.',
    scores: { eco: -95, soc: -90, mig: 70, ide: 80, rel: 80, val: 75, ord: 60, pod: -40, eti: 65, geo: 100, des: 85, est: 95 },
    confidence: { eco: 'alta', mig: 'alta', ide: 'alta', rel: 'alta', val: 'alta', geo: 'alta', des: 'alta', est: 'alta' },
    sources: [
      {
        title: 'El Nacional — Izquierdistas se unen y forman el Partido del Poder Popular (jun-2026)',
        url: 'https://elnacional.com.do/politica/izquierdistas-unen-forman-partido-popular-encabezado-narciso-isa-conde_574192.html',
      },
      {
        title: 'Aporrea — Isa Conde: Cuba, Nicaragua y Venezuela como "fortalezas sitiadas" (feb-2026)',
        url: 'https://www.aporrea.org/internacionales/a349835.html',
      },
      {
        title: 'Kaos en la Red — Isa Conde: de la bendición de Pompeo al fascismo de Trump (sep-2026)',
        url: 'https://kaosenlared.net/republica-dominicana-de-la-bendicion-de-pompeo-al-fascismo-de-trump/',
      },
      {
        title: 'Kaos en la Red — Isa Conde sobre la ocupación de Haití y el racismo antihaitiano (ago-2026)',
        url: 'https://kaosenlared.net/haiti-actual-punteo-del-impacto-de-la-ocupacion-imperial/',
      },
      {
        title: 'AlMomento — Organizaciones repudian la deportación masiva de haitianos (oct-2024)',
        url: 'https://almomento.net/organizaciones-de-rd-repudian-deportacion-masiva-de-haitianos/',
      },
      { title: 'PDBA Georgetown — Elecciones presidenciales de 1982', url: 'https://pdba.georgetown.edu/Elecdata/DomRep/drpres82.html' },
      { title: 'Diccionario Funglode — Narciso Isa Conde', url: 'https://diccionario.funglode.org/isa-conde-narciso/' },
    ],
    asOf: '2026-09',
  },
  {
    id: 'pol-manuel-salazar',
    name: 'Manuel Salazar',
    kind: 'politico',
    subtitle: 'Exsecretario general del Partido Comunista del Trabajo (1994–2026) · columnista',
    summary:
      'Economista y columnista de Acento. Fue secretario general del Partido Comunista del Trabajo (PCT) de 1994 a febrero de 2026. Propone una Asamblea Constituyente y una candidatura unitaria de izquierda para 2028, defiende a Cuba frente a EE.UU., celebró la paralización de la mina Romero y critica el rechazo a las tres causales.',
    scores: { eco: -85, soc: -80, mig: 50, ide: 45, rel: 50, val: 60, ord: 30, pod: -10, eti: 60, geo: 95, des: 65, est: 40 },
    confidence: { rel: 'baja', ord: 'baja', pod: 'baja', geo: 'alta' },
    sources: [
      {
        title: 'Acento — Manuel Salazar: La democracia dominicana en retroceso (jun-2026)',
        url: 'https://acento.com.do/opinion/la-democracia-dominicana-en-retroceso-9697981.html',
      },
      {
        title: 'Acento — Manuel Salazar: Cuba es el eslabón vital y hay que darle más solidaridad (jun-2026)',
        url: 'https://acento.com.do/opinion/cuba-es-el-eslabon-vital-y-hay-que-darle-mas-solidaridad-9693465.html',
      },
      {
        title: 'Acento — Manuel Salazar: La opción necesaria, con quiénes y cómo (jul-2026)',
        url: 'https://acento.com.do/opinion/la-opcion-necesaria-con-quienes-y-como-9727384.html',
      },
      {
        title: 'Acento — Manuel Salazar: San Juan de la Maguana, triunfo de la lucha organizada (may-2026)',
        url: 'https://acento.com.do/opinion/san-juan-de-la-maguana-triunfo-lucha-organizada-es-victoria-asegurada-9672691.html',
      },
      {
        title: 'Acento — El PCT elige a Aquiles Castro secretario general en su XI Congreso (feb-2026)',
        url: 'https://acento.com.do/politica/partido-comunista-del-trabajo-elige-a-aquiles-castro-como-nuevo-secretario-general-en-su-xi-congreso-nacional-9623627.html',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'pol-miguel-mejia',
    name: 'Miguel Mejía',
    kind: 'politico',
    subtitle: 'Movimiento Izquierda Unida · exministro sin cartera (destituido en enero de 2025)',
    summary:
      'Secretario general del Movimiento Izquierda Unida (MIU), aliado del PLD durante unos 30 años. Fue ministro sin cartera hasta enero de 2025, cuando Abinader lo destituyó tras criticar la recepción a Edmundo González. Defiende a Cuba, Venezuela y China. En migración apoyó que el Gobierno rechazara crear campos de refugiados para haitianos y habla de "dos naciones con realidades distintas".',
    scores: { eco: -55, soc: -60, mig: -25, ide: -35, rel: 20, val: 10, ord: 0, pod: -30, eti: 10, geo: 95, des: 35, est: -35 },
    confidence: { soc: 'baja', rel: 'baja', val: 'baja', ord: 'baja', eti: 'baja', geo: 'alta' },
    sources: [
      {
        title: 'Listín Diario — Miguel Mejía, ministro sin cartera, destituido por Abinader (ene-2025)',
        url: 'https://listindiario.com/la-republica/gobierno/20250110/miguel-mejia-ministro-cartera-destituido-abinader_840890.html',
      },
      {
        title: 'MIU — Líder político dominicano condena el bloqueo contra Cuba; posición sobre Haití (abr-2024)',
        url: 'https://miu.do/lider-politico-dominicano-condena-bloqueo-estadounidense-contra-cuba/',
      },
      {
        title: 'MIU — El MIU y el PCT presentan manifiesto por el rescate de la soberanía (jun-2025)',
        url: 'https://miu.do/miu-y-pct-presentan-manifiesto-al-pais-por-el-rescate-de-la-soberania/',
      },
      { title: 'MIU — Liderazgo político vs populismo (sep-2026)', url: 'https://miu.do/liderazgo-politico-vs-populismo/' },
      { title: 'MIU — Trump y la soberanía nacional (sep-2026)', url: 'https://miu.do/trump-y-la-soberania-nacional/' },
    ],
    asOf: '2026-09',
  },
  {
    id: 'pol-fulgencio-severino',
    name: 'Fulgencio Severino',
    kind: 'politico',
    subtitle: 'Patria para Todos y Todas (MPT) · candidato presidencial en 2024 (0.06 %)',
    summary:
      'Cardiólogo y dirigente del MPT, candidato presidencial en 2024 (0.06 %). Propone impuestos progresivos, pensión universal, reforma agraria y un tope a los salarios públicos. Critica la privatización eléctrica, el endeudamiento y la minería sin regulación, y llama a rechazar a los partidos tradicionales.',
    scores: { eco: -75, soc: -80, mig: 25, ide: 15, rel: 50, val: 55, ord: 20, pod: 40, eti: 70, geo: 30, des: 50, est: 55 },
    confidence: { ide: 'baja', ord: 'baja', pod: 'baja', geo: 'baja' },
    sources: [
      {
        title: 'Listín Diario — Fulgencio Severino, cardiólogo que busca ser presidente (may-2024)',
        url: 'https://listindiario.com/la-republica/politica/20240516/fulgencio-severino-cruz-cardiologo-busca-presidente-republica_808555.html',
      },
      {
        title: 'JCE — Plan de Gobierno 2024 del MPT/PPT (PDF)',
        url: 'https://jce.gob.do/portaltransparencia/Repositorio/Vista-Escritorio?EntryId=29909&Command=Core_Download&Method=attachment',
      },
      {
        title: 'Ciudad Oriental — Severino exige destituir a Celso Marranzini de la EDE (feb-2025)',
        url: 'https://ciudadoriental.com/fulgencio-severino-exige-destitucion-de-celso-marranzini-de-la-ede-y-denuncia-colusion-con-generadores/',
      },
      {
        title: 'Acento — Fulgencio Severino: El poder empresarial y los desafíos estructurales (jun-2025)',
        url: 'https://acento.com.do/opinion/el-poder-empresarial-y-los-desafios-estructurales-9509037.html',
      },
    ],
    asOf: '2026-09',
  },
];
