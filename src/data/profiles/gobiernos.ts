// Gobiernos y periodos (docs/PLAN.md §11.4, con las correcciones del dossier 12). Justificaciones y fuentes completas:
// docs/investigacion/01-historia-1844-2020.md y docs/investigacion/12-verificaciones.md.
// Los dos periodos de Abinader se derivan de las filas del PRM (§11.2) y de Abinader (§11.3), con los hechos de §11.9.
import type { AxisId, Confidence, Profile } from '../types.ts';

/** Filas con confianza "alta" o "media-alta" en §11.4: 'alta' en los 12 ejes. */
const ALTA: Readonly<Record<AxisId, Confidence>> = {
  eco: 'alta',
  soc: 'alta',
  mig: 'alta',
  ide: 'alta',
  rel: 'alta',
  val: 'alta',
  ord: 'alta',
  pod: 'alta',
  eti: 'alta',
  geo: 'alta',
  des: 'alta',
  est: 'alta',
};

export const gobiernos: Profile[] = [
  {
    id: 'gob-duarte-trinitarios',
    name: 'Duarte y los Trinitarios (ideario)',
    kind: 'gobierno',
    subtitle: '1838–1844 · ideario independentista de La Trinitaria (no llegó a gobernar)',
    summary:
      'Proyecto político de La Trinitaria, fundada por Juan Pablo Duarte el 16 de julio de 1838: independencia frente a Haití y frente a "toda dominación, protectorado, intervención e influencia extranjera", separación de poderes y catolicismo oficial con tolerancia de cultos. Se puntúa un ideario, no un gobierno, y la comparación con el presente es aproximada.',
    scores: { eco: 10, soc: 0, mig: -40, ide: 10, rel: -30, val: 40, ord: 40, pod: 80, eti: 90, geo: 90, des: 0, est: 60 },
    relativeToEra: true,
    sources: [
      {
        title: 'Proyecto de Constitución de Duarte (Mecona, PDF)',
        url: 'https://mecona.org/wp-content/uploads/2021/02/Proyecto-de-Constitucion-de-Duarte-1.pdf',
      },
      {
        title: 'Diario Libre — El pensamiento de Duarte y la unidad de las razas',
        url: 'https://www.diariolibre.com/opinion/columnistas/2025/05/13/el-pensamiento-de-duarte-y-la-unidad-de-las-razas/3110975',
      },
      { title: 'Wikipedia — Juan Pablo Duarte', url: 'https://es.wikipedia.org/wiki/Juan_Pablo_Duarte' },
    ],
  },
  {
    id: 'gob-santana',
    name: 'Pedro Santana (santanismo)',
    kind: 'gobierno',
    subtitle: '1844–1848, 1849, 1853–1856 y 1858–1861 · caudillo hatero; Capitán General en 1861–1862',
    summary:
      'Gobiernos del caudillo hatero Pedro Santana en la Primera República. Se apoyó en el art. 210 de la Constitución de 1844, que le daba poderes ilimitados durante la guerra con Haití, y en comisiones militares que fusilaron a opositores; en 1861 llevó al país a la anexión a España. La comparación con el presente es aproximada.',
    scores: { eco: -10, soc: 40, mig: -80, ide: -80, rel: -80, val: -80, ord: -90, pod: -95, eti: -60, geo: -90, des: -20, est: -70 },
    confidence: ALTA,
    relativeToEra: true,
    sources: [
      { title: 'Country Studies — Santana y Báez', url: 'https://countrystudies.us/dominican-republic/5.htm' },
      { title: 'Wikipedia — First Dominican Republic', url: 'https://en.wikipedia.org/wiki/First_Dominican_Republic' },
      { title: 'Wikipedia — Pedro Santana', url: 'https://es.wikipedia.org/wiki/Pedro_Santana' },
    ],
  },
  {
    id: 'gob-baez',
    name: 'Buenaventura Báez (baecismo)',
    kind: 'gobierno',
    subtitle: 'Cinco presidencias entre 1849 y 1878 · caudillo del Partido Rojo',
    summary:
      'Cinco gobiernos (1849–1853, 1856–1858, 1865–1866, 1868–1874 y 1876–1878) del caudillo del Partido Rojo, con base en el Sur. Contrató el préstamo Hartmont (1869) y negoció la anexión a EE.UU., que el Senado estadounidense rechazó el 30 de junio de 1870 con un empate 28–28; en los "Seis Años" hubo presos políticos, asesinatos y exilios. La comparación con el presente es aproximada.',
    scores: { eco: -30, soc: -20, mig: -30, ide: -40, rel: -60, val: -60, ord: -85, pod: -90, eti: -90, geo: -95, des: -40, est: -30 },
    confidence: ALTA,
    relativeToEra: true,
    sources: [
      { title: 'Wikipedia — Buenaventura Báez', url: 'https://en.wikipedia.org/wiki/Buenaventura_B%C3%A1ez' },
      {
        title: 'Wikipedia — Proposed United States annexation of Santo Domingo',
        url: 'https://en.wikipedia.org/wiki/Proposed_United_States_annexation_of_Santo_Domingo',
      },
      {
        title: 'Acento — Personalismo político en Santo Domingo, 1865–1899',
        url: 'https://acento.com.do/politica/personalismo-politico-en-santo-domingo-1865-1899-rivalidad-y-decepcion-9513734.html',
      },
    ],
  },
  {
    id: 'gob-anexion-espana',
    name: 'Anexión a España',
    kind: 'gobierno',
    subtitle: '1861–1865 · provincia española; Pedro Santana, Capitán General (1861–1862)',
    summary:
      'Periodo en que el país volvió a ser colonia española a petición de Santana (18 de marzo de 1861). Hubo nuevos impuestos, censura, exclusión de dominicanos de los cargos y cierre de templos masónicos y protestantes; la Guerra de la Restauración, iniciada con el Grito de Capotillo (16 de agosto de 1863), terminó con la retirada española en julio de 1865. La comparación es aproximada.',
    scores: { eco: -20, soc: 20, mig: -20, ide: -100, rel: -100, val: -90, ord: -80, pod: -90, eti: -40, geo: -100, des: -20, est: -80 },
    confidence: ALTA,
    relativeToEra: true,
    sources: [
      {
        title: 'Wikipedia — Spanish annexation of the Dominican Republic',
        url: 'https://en.wikipedia.org/wiki/Spanish_annexation_of_the_Dominican_Republic',
      },
      {
        title: 'Acento — La Anexión a España y la situación económica que la rodeó',
        url: 'https://acento.com.do/opinion/la-anexion-a-espana-y-la-situacion-economica-que-la-rodeo-9248281.html',
      },
      { title: 'Wikipedia — Guerra de la Restauración', url: 'https://es.wikipedia.org/wiki/Guerra_de_la_Restauraci%C3%B3n' },
    ],
  },
  {
    id: 'gob-restauracion-azules',
    name: 'Restauración y Partido Azul',
    kind: 'gobierno',
    subtitle: '1863–1880s · restauradores y liberales azules; gobierno provisional de Luperón (1879–1880)',
    summary:
      'Corriente liberal y antianexionista surgida de la Guerra de la Restauración (1863–1865), con base en el Cibao y Puerto Plata. El gobierno provisional de Gregorio Luperón (1879–1880) aprobó la Constitución de 1880 (mandatos de dos años y sufragio universal masculino) y apoyó la Escuela Normal de Hostos. La comparación con el presente es aproximada.',
    scores: { eco: 30, soc: -20, mig: 30, ide: 40, rel: 40, val: 40, ord: 20, pod: 40, eti: 40, geo: 80, des: -10, est: 40 },
    relativeToEra: true,
    sources: [
      { title: 'Wikipedia — Guerra de la Restauración', url: 'https://es.wikipedia.org/wiki/Guerra_de_la_Restauraci%C3%B3n' },
      {
        title: 'Acento — El gobierno provisional del general Gregorio Luperón (1879–1880)',
        url: 'https://acento.com.do/cultura/el-gobierno-provisional-del-general-gregorio-luperon-una-experiencia-de-gestion-ejemplar-1879-1880-9690332.html',
      },
      {
        title: 'Acento — Personalismo político en Santo Domingo, 1865–1899',
        url: 'https://acento.com.do/politica/personalismo-politico-en-santo-domingo-1865-1899-rivalidad-y-decepcion-9513734.html',
      },
    ],
  },
  {
    id: 'gob-lilis',
    name: 'Ulises Heureaux (Lilís)',
    kind: 'gobierno',
    subtitle: '1882–1884 y 1887–1899 · presidente, surgido del Partido Azul',
    summary:
      'Dictadura de Ulises Heureaux, sostenida con fraude electoral, reformas para reelegirse, espías y asesinatos de opositores. Impulsó el azúcar y el ferrocarril con deuda externa e hipotecó las aduanas a la San Domingo Improvement Co. (1893). Tuvo el apoyo de la Iglesia a cambio de frenar el positivismo en la enseñanza, hasta que el proyecto de divorcio de 1897 los distanció. Fue asesinado en Moca en 1899.',
    scores: { eco: 30, soc: 30, mig: 0, ide: 10, rel: -30, val: -40, ord: -95, pod: -100, eti: -95, geo: -60, des: -60, est: -50 },
    confidence: { ...ALTA, rel: 'media' },
    relativeToEra: true,
    sources: [
      { title: 'Wikipedia — Ulises Heureaux', url: 'https://es.wikipedia.org/wiki/Ulises_Heureaux' },
      {
        title: 'González Canalda — Dictadura de Ulises Heureaux y el proceso de modernización (PDF)',
        url: 'https://www.historiadominicana.do/wp-content/uploads/2021/08/Dictadura-de-Ulises-Heureaux-y-el-proceso-de-modernizacion-por-Maria-Filomena-Gonzalez-Canalda.pdf',
      },
      {
        title: 'Domínguez — La dictadura de Heureaux y la Iglesia, Estudios Sociales n.º 61 (1985, PDF)',
        url: 'https://estudiossociales.bono.edu.do/index.php/es/article/download/645/631',
      },
    ],
  },
  {
    id: 'gob-caceres-1906-1911',
    name: 'Ramón Cáceres',
    kind: 'gobierno',
    subtitle: '1906–1911 · presidente, horacista',
    summary:
      'Gobierno que firmó la Convención Domínico-Americana de 1907 (préstamo de 20 millones de dólares y control de las aduanas por EE.UU.) y amplió ministerios, escuelas, telégrafo y caminos. Sus leyes agrarias de 1911 favorecieron el latifundio azucarero y aplicó tierra arrasada contra los alzados de la Línea Noroeste; Cáceres fue asesinado el 19 de noviembre de 1911.',
    scores: { eco: 30, soc: 20, mig: -20, ide: -20, rel: -20, val: -10, ord: -70, pod: -30, eti: -10, geo: -80, des: -60, est: -50 },
    relativeToEra: true,
    sources: [
      {
        title: 'ElBoletínRD — Ramón Cáceres y sus intentos de modernizar el Estado (1906–1911)',
        url: 'https://elboletinrd.com.do/ramon-caceres-y-sus-intentos-de-modernizar-el-estado-1906-1911/',
      },
      {
        title: 'Wikipedia — Convención domínico-americana',
        url: 'https://es.wikipedia.org/wiki/Convenci%C3%B3n_dom%C3%ADnico-americana',
      },
      { title: 'Wikipedia — Ramón Cáceres', url: 'https://es.wikipedia.org/wiki/Ram%C3%B3n_C%C3%A1ceres' },
    ],
  },
  {
    id: 'gob-ocupacion-1916-1924',
    name: 'Ocupación de EE.UU. (1916–1924)',
    kind: 'gobierno',
    subtitle: '1916–1924 · gobierno militar de Estados Unidos',
    summary:
      'Gobierno militar estadounidense instalado en 1916 tras la crisis de la deuda. Desarmó a la población, impuso censura y creó la Guardia Nacional (1917); con la Ley de Aranceles de 1919 y el registro de tierras favoreció el comercio de EE.UU. y el latifundio azucarero. Combatió a los gavilleros del Este, con unos 950 dominicanos muertos o heridos, y se retiró en 1924.',
    scores: { eco: 50, soc: 0, mig: 40, ide: 0, rel: 20, val: 0, ord: -80, pod: -80, eti: 10, geo: -100, des: -60, est: -40 },
    confidence: ALTA,
    relativeToEra: true,
    sources: [
      {
        title: 'Wikipedia — Ocupación estadounidense de la República Dominicana (1916-1924)',
        url: 'https://es.wikipedia.org/wiki/Ocupaci%C3%B3n_estadounidense_de_la_Rep%C3%BAblica_Dominicana_(1916-1924)',
      },
      {
        title: 'A. Paulino — Primera ocupación militar estadounidense 1916 (PDF)',
        url: 'https://www.historiadominicana.do/wp-content/uploads/2021/08/Primera-ocupacion-militar-estadounidense-1916-por-Alejandro-Paulino.pdf',
      },
      {
        title: 'Wikipedia — United States occupation of the Dominican Republic (1916–1924)',
        url: 'https://en.wikipedia.org/wiki/United_States_occupation_of_the_Dominican_Republic_(1916%E2%80%931924)',
      },
    ],
  },
  {
    id: 'gob-horacio-1924-1930',
    name: 'Horacio Vásquez',
    kind: 'gobierno',
    subtitle: '1924–1930 · presidente, Partido Nacional (horacismo)',
    summary:
      'Primer gobierno electo tras la ocupación estadounidense, con libertades cívicas y obras públicas financiadas con deuda; repartió empleos públicos entre partidarios y hubo fraudes en las obras del empréstito de 1926. En 1927 prolongó su mandato hasta 1930, en 1929 una reforma eliminó la prohibición de la reelección y firmó un tratado fronterizo con Haití. Fue derrocado en febrero de 1930 por Estrella Ureña y Trujillo.',
    scores: { eco: 10, soc: 0, mig: 10, ide: -10, rel: -30, val: -20, ord: 40, pod: -60, eti: -50, geo: -50, des: -20, est: -60 },
    relativeToEra: true,
    sources: [
      {
        title: 'Diario Libre — ¿Cuál Constitución juró Horacio Vásquez en 1924?',
        url: 'https://www.diariolibre.com/opinion/columnistas/2025/07/01/cual-constitucion-juro-horacio-vasquez-en-1924/3168850',
      },
      { title: 'Wikipedia — Horacio Vásquez', url: 'https://es.wikipedia.org/wiki/Horacio_V%C3%A1squez' },
      {
        title: 'Wikipedia — Dominican Republic–Haiti border',
        url: 'https://en.wikipedia.org/wiki/Dominican_Republic%E2%80%93Haiti_border',
      },
      {
        title: 'Herrera — La corrupción en el gobierno de Horacio Vásquez, I (Acento, columna)',
        url: 'https://acento.com.do/opinion/la-corrupcion-en-el-gobierno-de-horacio-vasquez-1924-1930-9080442.html',
      },
      {
        title: 'Herrera — La corrupción en el gobierno de Horacio Vásquez, II (Acento, columna)',
        url: 'https://acento.com.do/opinion/la-corrupcion-en-el-gobierno-de-horacio-vasquez-1924-1930-ii-9082764.html',
      },
    ],
  },
  {
    id: 'gob-trujillo',
    name: 'Era de Trujillo',
    kind: 'gobierno',
    subtitle: '1930–1961 · dictadura de Rafael L. Trujillo y el Partido Dominicano',
    summary:
      'Dictadura personal con partido único, culto a la personalidad y monopolios de la familia Trujillo. Hizo del antihaitianismo doctrina de Estado: la matanza del Perejil (28 de septiembre al 8 de octubre de 1937) dejó entre 12,000 y 35,000 muertos según las estimaciones, y la represión total se calcula entre 25,000 y más de 50,000 muertos y desaparecidos. Terminó con el asesinato de Trujillo el 30 de mayo de 1961.',
    scores: { eco: -60, soc: -20, mig: -100, ide: -100, rel: -80, val: -60, ord: -100, pod: -100, eti: -100, geo: -60, des: -60, est: -50 },
    confidence: { ...ALTA, des: 'media' },
    relativeToEra: true,
    sources: [
      { title: 'Wikipedia — Rafael Leónidas Trujillo', url: 'https://es.wikipedia.org/wiki/Rafael_Le%C3%B3nidas_Trujillo' },
      { title: 'Wikipedia — Masacre del Perejil', url: 'https://es.wikipedia.org/wiki/Masacre_del_Perejil' },
      {
        title: 'Listín Diario — Los negocios y monopolios de Trujillo',
        url: 'https://listindiario.com/la-republica/20230523/trujillo-negocios-monopolios-dictador_749540.html',
      },
      {
        title: 'Acento — El SIM, maquinaria de control, persecución y muerte',
        url: 'https://acento.com.do/politica/mecanismo-de-trujillo-para-la-represion-politica-el-sim-se-convirtio-en-maquinaria-de-control-persecucion-y-muerte-21-8697007.html',
      },
    ],
  },
  {
    id: 'gob-consejo-estado-1962',
    name: 'Consejo de Estado',
    kind: 'gobierno',
    subtitle: '1962–1963 · gobierno colegiado de transición (Balaguer y luego Rafael F. Bonnelly)',
    summary:
      'Gobierno colegiado de transición tras la muerte de Trujillo: Balaguer presidió el primer Consejo y Rafael F. Bonnelly el segundo, desde el 18 de enero de 1962. Confiscó los bienes de los Trujillo, creó el Instituto Agrario Dominicano (Ley 5879) y organizó las elecciones de diciembre de 1962; también deportó a dirigentes de izquierda, y bajo su mando ocurrió la masacre de Palma Sola (28 de diciembre de 1962).',
    scores: { eco: -10, soc: 0, mig: -40, ide: -50, rel: -60, val: -50, ord: -60, pod: 20, eti: 0, geo: -80, des: -30, est: -70 },
    relativeToEra: true,
    sources: [
      {
        title: 'El Nacional — El Consejo de Estado que sucedió a Balaguer',
        url: 'https://elnacional.com.do/el-consejo-de-estado-que-sucedio-a-balaguer/',
      },
      { title: 'Wikipedia — Instituto Agrario Dominicano', url: 'https://es.wikipedia.org/wiki/Instituto_Agrario_Dominicano' },
      { title: 'Wikipedia — Masacre de Palma Sola', url: 'https://es.wikipedia.org/wiki/Masacre_de_Palma_Sola' },
    ],
  },
  {
    id: 'gob-bosch-1963',
    name: 'Gobierno de Juan Bosch',
    kind: 'gobierno',
    subtitle: '1963 · presidente Juan Bosch (PRD), derrocado a los siete meses',
    summary:
      'Primer gobierno electo tras la dictadura: Bosch ganó con cerca del 59 % de los votos y gobernó del 27 de febrero al 25 de septiembre de 1963. Promulgó la Constitución del 29 de abril de 1963 (prohibición del latifundio, derechos laborales, educación laica), recortó los salarios altos empezando por el suyo y mantuvo amplias libertades; lo derrocó un golpe militar respaldado por empresarios y sectores de la Iglesia.',
    scores: { eco: -50, soc: -60, mig: 0, ide: 30, rel: 60, val: 50, ord: 80, pod: 80, eti: 90, geo: 20, des: -20, est: 50 },
    confidence: ALTA,
    relativeToEra: true,
    sources: [
      {
        title: 'Acento — Juan Bosch y la Constitución de 1963',
        url: 'https://acento.com.do/opinion/juan-bosch-y-la-constitucion-de-1963-9172361.html',
      },
      {
        title: 'Planlea — El gobierno constitucional de Juan Bosch (1963)',
        url: 'https://planlea.edu.do/2021/02/el-gobierno-constitucional-de-juan-bosch-1963/',
      },
      {
        title: 'El Nacional — Juan Bosch gana las elecciones de 1962 frente a Viriato Fiallo',
        url: 'https://elnacional.com.do/juan-bosch-gana-elecciones-de-1962-con-59-53-de-votos-frente-a-viriato-fiallo/',
      },
    ],
  },
  {
    id: 'gob-triunvirato-1963-1965',
    name: 'Triunvirato',
    kind: 'gobierno',
    subtitle: '1963–1965 · gobierno de facto tras el golpe; presidido por Donald Reid Cabral desde dic-1963',
    summary:
      'Gobierno de facto instalado tras el golpe contra Bosch, con apoyo económico de EE.UU., austeridad y apertura a la inversión extranjera. El 21 de diciembre de 1963 Manolo Tavárez Justo y 14 compañeros fueron fusilados en Las Manaclas después de rendirse, y las fuentes describen un contrabando militar sistemático. Cayó con la revuelta del 24 de abril de 1965.',
    scores: { eco: 40, soc: 40, mig: -30, ide: -40, rel: -60, val: -60, ord: -80, pod: -90, eti: -60, geo: -90, des: -30, est: -90 },
    relativeToEra: true,
    sources: [
      {
        title: 'Planlea — El gobierno del Triunvirato (1963-1965)',
        url: 'https://planlea.edu.do/2023/12/el-gobierno-del-triunvirato-1963-1965/',
      },
      { title: 'Wikipedia — Donald Reid Cabral', url: 'https://en.wikipedia.org/wiki/Donald_Reid_Cabral' },
      {
        title: 'Wikipedia — Movimiento Revolucionario 14 de Junio',
        url: 'https://es.wikipedia.org/wiki/Movimiento_Revolucionario_14_de_Junio',
      },
    ],
  },
  {
    id: 'gob-constitucionalistas-1965',
    name: 'Constitucionalistas de 1965',
    kind: 'gobierno',
    subtitle: '1965 · bando del coronel Francisco A. Caamaño en la Revolución de Abril',
    summary:
      'Movimiento cívico-militar que desde el 24 de abril de 1965 exigió el regreso de Bosch y de la Constitución de 1963, con Francisco A. Caamaño como presidente constitucional. Resistió la intervención de EE.UU. (22,500 soldados en tierra según fuentes estadounidenses; hasta 42,000 según fuentes dominicanas) hasta el Acta de Reconciliación del 31 de agosto; los muertos se cuentan por miles, según la fuente.',
    scores: { eco: -40, soc: -50, mig: 0, ide: 20, rel: 50, val: 50, ord: 10, pod: 60, eti: 50, geo: 100, des: 0, est: 90 },
    confidence: ALTA,
    relativeToEra: true,
    sources: [
      { title: 'Wikipedia — Guerra civil dominicana', url: 'https://es.wikipedia.org/wiki/Guerra_civil_dominicana' },
      { title: 'Wikipedia — Operation Power Pack', url: 'https://en.wikipedia.org/wiki/Operation_Power_Pack' },
      {
        title: 'Wikipedia — Francisco Alberto Caamaño Deñó',
        url: 'https://es.wikipedia.org/wiki/Francisco_Alberto_Caama%C3%B1o_De%C3%B1%C3%B3',
      },
    ],
  },
  {
    id: 'gob-balaguer-1966-1978',
    name: 'Balaguer: los 12 años',
    kind: 'gobierno',
    subtitle: '1966–1978 · Joaquín Balaguer, Partido Reformista',
    summary:
      'Gobiernos de Joaquín Balaguer, electo en 1966 y reelecto en 1970 y 1974 con la oposición retirada. La Ley de Austeridad (1966) recortó los sueldos públicos y congeló los privados, y la Ley 299 (1968) impulsó la industria sustitutiva. Hubo crecimiento cercano al 8 % anual, junto con la represión de grupos como la "Banda Colorá": entre 1,200 y 3,000 asesinatos políticos. Terminó con la crisis electoral de 1978.',
    scores: { eco: -30, soc: -10, mig: -70, ide: -90, rel: -70, val: -80, ord: -95, pod: -90, eti: -80, geo: -80, des: 0, est: -70 },
    confidence: { ...ALTA, des: 'media' },
    relativeToEra: true,
    sources: [
      {
        title: 'Fundación Global — Origen del milagro económico dominicano (2021)',
        url: 'https://lafundacion.do/es/articulos-en-formato-de-texto/2021/origen-del-milagro-economico-dominicano-las-reformas-estructurales-que-se-iniciaron-en-1990/',
      },
      { title: 'CIDOB — Joaquín Balaguer Ricardo', url: 'https://www.cidob.org/lider-politico/joaquin-balaguer-ricardo' },
      {
        title: 'Revista Global — Balaguer, la Banda Colorá y la prensa',
        url: 'https://revistaglobal.org/balaguer-la-banda-colora-y-la-prensa/',
      },
      {
        title: 'AlMomento — Balaguer, la corrupción oficial y sus 300 millonarios',
        url: 'https://almomento.net/balaguer-la-corrupcion-oficial-y-sus-300-millonarios/',
      },
      {
        title: 'Listín Diario — El discurso de Balaguer de 1966: medidas para ajustar la economía (2020)',
        url: 'https://listindiario.com/la-republica/2020/08/15/630865/el-discurso-de-balaguer-de-1966-medidas-para-ajustar-la-economia.html',
      },
    ],
  },
  {
    id: 'gob-guzman-1978-1982',
    name: 'Antonio Guzmán',
    kind: 'gobierno',
    subtitle: '1978–1982 · presidente, PRD',
    summary:
      'Primer traspaso pacífico del poder a la oposición. Decretó una amnistía para presos políticos y exiliados, apartó a los militares de la política partidaria, subió el salario mínimo y amplió el empleo público; su hija Sonia fue subsecretaria administrativa de la Presidencia y hubo denuncias de nepotismo en su entorno. Guzmán se suicidó el 4 de julio de 1982, antes de terminar su mandato.',
    scores: { eco: -40, soc: -40, mig: -10, ide: 0, rel: -20, val: 10, ord: 70, pod: 60, eti: -30, geo: -40, des: -10, est: 20 },
    confidence: { des: 'baja' },
    relativeToEra: true,
    sources: [
      { title: 'Wikipedia — Antonio Guzmán', url: 'https://es.wikipedia.org/wiki/Antonio_Guzm%C3%A1n' },
      { title: 'Wikipedia — Antonio Guzmán Fernández', url: 'https://en.wikipedia.org/wiki/Antonio_Guzm%C3%A1n_Fern%C3%A1ndez' },
      { title: 'Wikipedia — Sonia Guzmán', url: 'https://es.wikipedia.org/wiki/Sonia_Guzm%C3%A1n' },
      {
        title: 'Listín Diario — Sonia Guzmán, una dama de confianza del presidente (2020)',
        url: 'https://listindiario.com/la-republica/2020/07/27/628084/sonia-guzman-una-dama-de-confianza-del-presidente-para-llevar-las-relaciones-con-estados-unidos',
      },
    ],
  },
  {
    id: 'gob-jorge-blanco-1982-1986',
    name: 'Salvador Jorge Blanco',
    kind: 'gobierno',
    subtitle: '1982–1986 · presidente, PRD',
    summary:
      'Gobierno que aplicó un programa de ajuste con el FMI (1983), con devaluación y alzas de precios. En la poblada de abril de 1984 murieron entre 54 y más de 200 personas, según la fuente. Jorge Blanco fue condenado en 1991 por compras militares; la condena se anuló en 2001.',
    scores: { eco: 20, soc: 0, mig: -10, ide: 0, rel: -20, val: 10, ord: -40, pod: 40, eti: -60, geo: -60, des: 5, est: -10 },
    confidence: { ...ALTA, des: 'media' },
    relativeToEra: true,
    sources: [
      { title: 'CIDOB — Salvador Jorge Blanco', url: 'https://www.cidob.org/lider-politico/salvador-jorge-blanco' },
      { title: 'Wikipedia — Poblada de abril de 1984', url: 'https://es.wikipedia.org/wiki/Poblada_de_abril_de_1984' },
      {
        title: 'Global Energy Monitor — Central Termoeléctrica Itabo',
        url: 'https://www.gem.wiki/Central_Termoel%C3%A9ctrica_Itabo',
      },
    ],
  },
  {
    id: 'gob-balaguer-1986-1996',
    name: 'Balaguer: los 10 años',
    kind: 'gobierno',
    subtitle: '1986–1996 · Joaquín Balaguer, PRSC',
    summary:
      'Segundo ciclo de Balaguer, con obra pública masiva, el Faro a Colón (1992) y la apertura económica de 1990. Sus reelecciones de 1990 y 1994 fueron impugnadas por fraude, y la crisis de 1994 terminó en el Pacto por la Democracia, que recortó su mandato y prohibió la reelección consecutiva. El Decreto 233-91 ordenó repatriar braceros haitianos, y en 1994 desapareció el profesor Narciso González.',
    scores: { eco: -10, soc: -10, mig: -80, ide: -90, rel: -70, val: -70, ord: -50, pod: -80, eti: -70, geo: -50, des: 10, est: -70 },
    confidence: { ...ALTA, des: 'media' },
    relativeToEra: true,
    sources: [
      { title: 'CIDOB — Joaquín Balaguer Ricardo', url: 'https://www.cidob.org/lider-politico/joaquin-balaguer-ricardo' },
      {
        title: 'El Caribe — Firma del Pacto por la Democracia de 1994',
        url: 'https://www.elcaribe.com.do/gente/cultura/zona-retro/firma-del-pacto-por-la-democracia-de-1994/',
      },
      { title: 'Wikipedia — Narciso González', url: 'https://es.wikipedia.org/wiki/Narciso_Gonz%C3%A1lez' },
      {
        title: 'Rosario Espinal — Reelección y reforma constitucional: 1994, 2002, 2010 y 2015',
        url: 'https://rosarioespinal.wordpress.com/2021/09/22/reeleccion-y-reforma-constitucional-1994-2002-2010-y-2015/',
      },
      {
        title: 'Global Energy Monitor — Central Termoeléctrica Itabo',
        url: 'https://www.gem.wiki/Central_Termoel%C3%A9ctrica_Itabo',
      },
    ],
  },
  {
    id: 'gob-leonel-1996-2000',
    name: 'Leonel Fernández (1996–2000)',
    kind: 'gobierno',
    subtitle: '1996–2000 · primer gobierno de Leonel Fernández, PLD',
    summary:
      'Primer gobierno del PLD, ganado en segunda vuelta con el apoyo de Balaguer (Frente Patriótico). Capitalizó empresas públicas (Ley 141-97), reformó la Suprema Corte, restableció relaciones con Cuba (16 de abril de 1998) y visitó Haití; continuaron las deportaciones y hubo procesos por malversación en el programa PEME.',
    scores: { eco: 60, soc: 0, mig: -40, ide: -40, rel: -30, val: 0, ord: 0, pod: 40, eti: -40, geo: -20, des: -15, est: -20 },
    confidence: { des: 'baja' },
    relativeToEra: true,
    sources: [
      { title: 'CIDOB — Leonel Fernández Reyna', url: 'https://www.cidob.org/en/lider-politico/leonel-fernandez-reyna' },
      {
        title: 'Ley 141-97 General de Reforma de la Empresa Pública (PDF)',
        url: 'https://mem.gob.do/wp-content/uploads/2019/01/Ley-No.-141-97-General-de-Reforma-de-la-Empresa-Publica.pdf',
      },
      {
        title: 'Wikipedia — Cuba–Dominican Republic relations',
        url: 'https://en.wikipedia.org/wiki/Cuba%E2%80%93Dominican_Republic_relations',
      },
    ],
  },
  {
    id: 'gob-hipolito-2000-2004',
    name: 'Hipólito Mejía',
    kind: 'gobierno',
    subtitle: '2000–2004 · presidente, PRD',
    summary:
      'Creó el Sistema Dominicano de Seguridad Social (Ley 87-01) y recompró las distribuidoras eléctricas de Unión Fenosa. La quiebra de Baninter (2003) trajo un rescate bancario, inflación y devaluación. Su gobierno reformó la Constitución en 2002 para permitir la reelección, firmó el contrato minero de Pueblo Viejo (2002) y envió tropas a Irak, retiradas el 21 de abril de 2004.',
    scores: { eco: -10, soc: -40, mig: -30, ide: -10, rel: -30, val: -30, ord: -30, pod: -60, eti: -30, geo: -80, des: 0, est: 20 },
    relativeToEra: true,
    sources: [
      { title: 'CIDOB — Hipólito Mejía Domínguez', url: 'https://www.cidob.org/lider-politico/hipolito-mejia-dominguez' },
      { title: 'Wikipedia — Hipólito Mejía', url: 'https://es.wikipedia.org/wiki/Hip%C3%B3lito_Mej%C3%ADa' },
      { title: 'Wikipedia — Pueblo Viejo mine', url: 'https://en.wikipedia.org/wiki/Pueblo_Viejo_mine' },
      {
        title: 'SICE/OEA — Ley 158-01 de fomento al desarrollo turístico (PDF)',
        url: 'http://www.sice.oas.org/investment/NatLeg/RDM/L_DevTur_s.pdf',
      },
    ],
  },
  {
    id: 'gob-leonel-2004-2012',
    name: 'Leonel Fernández (2004–2012)',
    kind: 'gobierno',
    subtitle: '2004–2012 · segundo y tercer gobiernos de Leonel Fernández, PLD',
    summary:
      'Periodo de alto crecimiento con el DR-CAFTA (2007), Petrocaribe y el Metro de Santo Domingo. La Constitución de 2010 protegió la vida "desde la concepción", definió el matrimonio como la unión entre un hombre y una mujer y excluyó de la nacionalidad a los hijos de extranjeros en situación irregular; hubo denuncias de corrupción sin condenas y el déficit de 2012 se estima entre el 6.6 % y el 8 % del PIB.',
    scores: { eco: 30, soc: -20, mig: -50, ide: -40, rel: -60, val: -70, ord: -30, pod: -30, eti: -70, geo: -20, des: -35, est: -80 },
    confidence: { ...ALTA, des: 'media' },
    relativeToEra: true,
    sources: [
      { title: 'Wikipedia — Leonel Fernández', url: 'https://es.wikipedia.org/wiki/Leonel_Fern%C3%A1ndez' },
      {
        title: 'Acento — El exceso en el gasto público de Leonel, responsable del déficit',
        url: 'https://acento.com.do/economia/el-exceso-en-el-gasto-publico-que-cometio-leonel-es-el-responsable-del-deficit-22474.html',
      },
      {
        title: 'Amnistía Internacional — "Cállate si no quieres que te matemos" (AMR 27/002/2011)',
        url: 'https://www.amnesty.org/es/documents/amr27/002/2011/es/',
      },
    ],
  },
  {
    id: 'gob-danilo-2012-2020',
    name: 'Danilo Medina',
    kind: 'gobierno',
    subtitle: '2012–2020 · presidente, PLD',
    summary:
      'Destinó el 4 % del PIB a la educación, y la pobreza monetaria bajó del 39.7 % (2012) al 21 % (2019). Aplicó la sentencia TC 168-13 (afectados estimados entre 22,673 y más de 200,000) junto con la Ley 169-14 y un plan de regularización; reformó la Constitución en 2015 para reelegirse, estableció relaciones con China (2018) y su periodo quedó marcado por el caso Odebrecht.',
    scores: { eco: -10, soc: -50, mig: -30, ide: -30, rel: -40, val: -10, ord: -30, pod: -60, eti: -80, geo: 20, des: -45, est: -70 },
    confidence: { ...ALTA, des: 'media' },
    relativeToEra: true,
    sources: [
      {
        title: 'Wikipedia — Presidencia de Danilo Medina',
        url: 'https://es.wikipedia.org/wiki/Presidencia_de_Danilo_Medina',
      },
      { title: 'Wikipedia — Sentencia 168', url: 'https://es.wikipedia.org/wiki/Sentencia_168' },
      {
        title: 'MEPyD — Boletín de Estadísticas Oficiales de Pobreza Monetaria',
        url: 'https://mepyd.gob.do/publicaciones/Boletin-Pobreza-Monetaria-a5-no7',
      },
    ],
  },
  // Derivados de PRM (§11.2) y Abinader (§11.3): la media de ambos periodos queda cerca de esas filas; 2024–hoy lleva
  // `mig` más duro y `geo` más pro-EE.UU. (§11.4 y §11.9).
  {
    id: 'gob-abinader-2020-2024',
    name: 'Luis Abinader (2020–2024)',
    kind: 'gobierno',
    subtitle: '2020–2024 · primer gobierno de Luis Abinader, PRM',
    summary:
      'Primer gobierno del PRM, tras 16 años del PLD. Con un Ministerio Público independiente se abrieron los casos Antipulpo, Coral y Medusa contra exfuncionarios; en 2022 empezó a construirse el muro fronterizo y en 2023 cerró la frontera por el canal del río Masacre. Abinader apoyó públicamente las tres causales de aborto y fue reelecto en 2024 con el 57.44 % de los votos.',
    scores: { eco: 30, soc: -20, mig: -50, ide: -20, rel: -20, val: 0, ord: -15, pod: 40, eti: 35, geo: -60, des: 0, est: -55 },
    confidence: { ide: 'baja', rel: 'baja' },
    sources: [
      { title: 'Wikipedia — Luis Abinader', url: 'https://es.wikipedia.org/wiki/Luis_Abinader' },
      {
        title: 'N Digital — Seis años de Abinader: la política migratoria',
        url: 'https://n.com.do/2026/08/06/seis-anos-de-abinader-las-promesas-los-avances-y-los-desafios-de-la-politica-migratoria/',
      },
      {
        title: 'N Digital — Vinicio Castillo advierte a Abinader que su apoyo al aborto divide al país (dic-2020)',
        url: 'https://n.com.do/2020/12/27/vinicio-castillo-advierte-al-presidente-abinader-que-apoyo-al-aborto-divide-al-pais/',
      },
      { title: 'El Nacional — Condenan a Alexis Medina a 7 años', url: 'https://elnacional.com.do/condenan-alexis-medina-a-7-anos/' },
      { title: 'Powering Past Coal Alliance — Miembros', url: 'https://poweringpastcoal.org/members/' },
    ],
    asOf: '2026-09',
  },
  {
    id: 'gob-abinader-2024',
    name: 'Luis Abinader (2024–hoy)',
    kind: 'gobierno',
    subtitle: '2024–hoy · segundo gobierno de Luis Abinader, PRM, con mayoría calificada en el Congreso',
    summary:
      'Reformó la Constitución en 2024 (cláusula pétrea contra la reelección, Procurador elegido por el CNM) y promulgó un Código Penal sin las tres causales. Las deportaciones pasaron de 276,000 (2024) a 380,000 (2025) y en abril de 2025 anunció 15 medidas migratorias, entre ellas un protocolo hospitalario; permitió a EE.UU. usar San Isidro y Las Américas (2025) y aceptó recibir deportados de terceros países (2026).',
    scores: { eco: 25, soc: -20, mig: -65, ide: -20, rel: -25, val: -10, ord: -15, pod: 50, eti: 20, geo: -85, des: 0, est: -65 },
    confidence: { ide: 'baja', rel: 'baja' },
    sources: [
      {
        title: 'Diario Libre — Abinader: «somos una raza mixta» (18-sep-2023)',
        url: 'https://www.diariolibre.com/usa/actualidad/2023/09/18/luis-abinader-y-estudiante-sostienen-debate-en-nueva-york/2465059',
      },
      {
        title: 'Presidencia — Abinader anuncia 15 medidas contra la migración ilegal',
        url: 'https://presidencia.gob.do/noticias/presidente-abinader-anuncia-15-medidas-para-enfrentar-la-migracion-ilegal-y-garantizar-la',
      },
      {
        title: 'Diario Libre — Deportaciones de haitianos en 2025',
        url: 'https://www.diariolibre.com/actualidad/nacional/2026/01/14/deportaciones-haitianos-2025-rd-aumenta-expulsiones/3404344',
      },
      {
        title: 'Listín Diario — Abinader autoriza a EE.UU. el uso de áreas restringidas (nov-2025)',
        url: 'https://listindiario.com/la-republica/gobierno/20251126/abinader-autoriza-eeuu-areas-restringidas-reforzar-vigilancia-narcotrafico_883934.html',
      },
      {
        title: 'Infobae — RD acuerda con EE.UU. recibir en tránsito a deportados no haitianos',
        url: 'https://www.infobae.com/republica-dominicana/2026/05/12/republica-dominicana-acuerda-con-estados-unidos-recibir-en-transito-a-deportados-no-haitianos/',
      },
      {
        title: 'Diario Libre — Denuncian intervenciones privadas en áreas protegidas (ago-2026)',
        url: 'https://www.diariolibre.com/planeta/medioambiente/2026/08/13/denuncian-intervenciones-privadas-en-areas-protegidas/3628458',
      },
    ],
    asOf: '2026-09',
  },
];
