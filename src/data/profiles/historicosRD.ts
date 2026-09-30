// Figuras históricas dominicanas (docs/PLAN.md §7). Puntajes derivados de las filas de §11.4 y de los movimientos
// históricos de docs/investigacion/01-historia-1844-2020.md §21; la derivación de cada figura va en su comentario.
// Confianza: 'media' por defecto (son derivados) y 'baja' en los ejes más especulativos.
import type { Profile } from '../types.ts';

export const historicosRD: Profile[] = [
  // = fila "Duarte / Trinitarios (ideario)". `eco`, `soc` y `des`: sin programa ("no aplica" en el dossier) → baja.
  {
    id: 'his-duarte',
    name: 'Juan Pablo Duarte',
    kind: 'historicoRD',
    subtitle: '1813–1876 · fundador de La Trinitaria y prócer de la Independencia',
    summary:
      'Fundó La Trinitaria (16 de julio de 1838), sociedad secreta que preparó la independencia de 1844 con el lema "Dios, Patria y Libertad". Su proyecto de Ley Fundamental defendía la separación de poderes y la independencia frente a toda potencia extranjera; Santana lo expulsó en 1844 y murió en Caracas en 1876. La comparación con el presente es aproximada.',
    scores: { eco: 10, soc: 0, mig: -40, ide: 10, rel: -30, val: 40, ord: 40, pod: 80, eti: 90, geo: 90, des: 0, est: 60 },
    confidence: { eco: 'baja', soc: 'baja', des: 'baja' },
    relativeToEra: true,
    sources: [
      { title: 'Wikipedia — Juan Pablo Duarte', url: 'https://es.wikipedia.org/wiki/Juan_Pablo_Duarte' },
      {
        title: 'Proyecto de Constitución de Duarte (Mecona, PDF)',
        url: 'https://mecona.org/wp-content/uploads/2021/02/Proyecto-de-Constitucion-de-Duarte-1.pdf',
      },
      {
        title: 'Diario Libre — El pensamiento de Duarte y la unidad de las razas',
        url: 'https://www.diariolibre.com/opinion/columnistas/2025/05/13/el-pensamiento-de-duarte-y-la-unidad-de-las-razas/3110975',
      },
    ],
  },
  // = fila "Restauración / Partido Azul (Luperón)". `des` (concesiones mineras y de guano) → baja.
  {
    id: 'his-luperon',
    name: 'Gregorio Luperón',
    kind: 'historicoRD',
    subtitle: '1839–1897 · general de la Restauración y líder del Partido Azul',
    summary:
      'General de la Guerra de la Restauración (1863–1865) y jefe del Partido Azul, liberal y antianexionista; ante Grant sostuvo que América "debía pertenecer a sí misma". Presidió el gobierno provisional de 1879–1880, que aprobó la Constitución de 1880 y apoyó la Escuela Normal de Hostos. La comparación con el presente es aproximada.',
    scores: { eco: 30, soc: -20, mig: 30, ide: 40, rel: 40, val: 40, ord: 20, pod: 40, eti: 40, geo: 80, des: -10, est: 40 },
    confidence: { des: 'baja' },
    relativeToEra: true,
    sources: [
      { title: 'Wikipedia — Gregorio Luperón', url: 'https://es.wikipedia.org/wiki/Gregorio_Luper%C3%B3n' },
      {
        title: 'Acento — El gobierno provisional del general Gregorio Luperón (1879–1880)',
        url: 'https://acento.com.do/cultura/el-gobierno-provisional-del-general-gregorio-luperon-una-experiencia-de-gestion-ejemplar-1879-1880-9690332.html',
      },
      { title: 'Wikipedia — Guerra de la Restauración', url: 'https://es.wikipedia.org/wiki/Guerra_de_la_Restauraci%C3%B3n' },
    ],
  },
  // Promedio simple de "Juan Bosch 1963 (PRD)" y "PLD de Bosch 1973–90". `des` → baja.
  {
    id: 'his-bosch',
    name: 'Juan Bosch',
    kind: 'historicoRD',
    subtitle: '1909–2001 · escritor; presidente en 1963; fundador del PRD (1939) y del PLD (1973)',
    summary:
      'Escritor y cofundador del PRD en el exilio (1939). Ganó las elecciones de 1962 y gobernó del 27 de febrero al 25 de septiembre de 1963, cuando lo derrocó un golpe militar; su Constitución de 1963 prohibía el latifundio y establecía la educación laica. En 1973 dejó el PRD y fundó el PLD, partido de cuadros por el que fue candidato presidencial hasta 1994.',
    scores: { eco: -60, soc: -65, mig: -5, ide: 40, rel: 50, val: 35, ord: 60, pod: 60, eti: 90, geo: 50, des: -15, est: 60 },
    confidence: { des: 'baja' },
    relativeToEra: true,
    sources: [
      { title: 'Wikipedia — Juan Bosch', url: 'https://es.wikipedia.org/wiki/Juan_Bosch' },
      {
        title: 'Acento — Juan Bosch y la Constitución de 1963',
        url: 'https://acento.com.do/opinion/juan-bosch-y-la-constitucion-de-1963-9172361.html',
      },
      {
        title: 'Acento — Lo que fue el PLD y lo que es hoy',
        url: 'https://acento.com.do/politica/lo-que-fue-el-pld-y-lo-que-es-hoy-a-proposito-de-sus-39-anos-de-fundado-28155.html',
      },
      {
        title: 'Acento — Bosch y el caso haitiano (IX): la carta de 1943 contra el antihaitianismo (columna, 2026)',
        url: 'https://acento.com.do/opinion/bosch-y-el-caso-haitiano-ix-9734698.html',
      },
    ],
  },
  // Promedio simple de "Balaguer 1966–78" y "Balaguer 1986–96"; `ord` (−72.5) se redondea a −75 porque los 12 años
  // fueron el periodo más largo. `des` (conservación forestal junto a minería) → baja.
  {
    id: 'his-balaguer',
    name: 'Joaquín Balaguer',
    kind: 'historicoRD',
    subtitle: '1906–2002 · presidente 1960–1962, 1966–1978 y 1986–1996; Partido Reformista (PRSC)',
    summary:
      'Intelectual y funcionario de la dictadura de Trujillo, de la que fue vicepresidente y luego presidente (1960–1962). Gobernó de 1966 a 1978 y de 1986 a 1996: en los "12 años" hubo entre 1,200 y 3,000 asesinatos políticos según las estimaciones, y sus reelecciones de 1990 y 1994 fueron impugnadas por fraude. Publicó La isla al revés (1983), de tesis hispanista y antihaitiana.',
    scores: { eco: -20, soc: -10, mig: -75, ide: -90, rel: -70, val: -75, ord: -75, pod: -85, eti: -75, geo: -65, des: 15, est: -70 },
    relativeToEra: true,
    sources: [
      { title: 'Wikipedia — Joaquín Balaguer', url: 'https://es.wikipedia.org/wiki/Joaqu%C3%ADn_Balaguer' },
      { title: 'CIDOB — Joaquín Balaguer Ricardo', url: 'https://www.cidob.org/lider-politico/joaquin-balaguer-ricardo' },
      {
        title: 'Estudios Sociales — Sobre La isla al revés',
        url: 'https://estudiossociales.bono.edu.do/index.php/es/article/view/472',
      },
    ],
  },
  // = fila "Era de Trujillo 1930–61". `des` (azúcar e industria junto a los primeros parques) → baja.
  {
    id: 'his-trujillo',
    name: 'Rafael L. Trujillo',
    kind: 'historicoRD',
    subtitle: '1891–1961 · dictador (1930–1961); jefe del Partido Dominicano',
    summary:
      'Militar formado en la Guardia Nacional creada durante la ocupación estadounidense; gobernó de 1930 a 1961, directamente o mediante presidentes designados. Su régimen perpetró la matanza del Perejil (28 de septiembre al 8 de octubre de 1937; entre 12,000 y 35,000 muertos según las estimaciones) y el asesinato de las hermanas Mirabal (1960). Fue asesinado el 30 de mayo de 1961.',
    scores: { eco: -60, soc: -20, mig: -100, ide: -100, rel: -80, val: -60, ord: -100, pod: -100, eti: -100, geo: -60, des: -60, est: -50 },
    relativeToEra: true,
    sources: [
      { title: 'Wikipedia — Rafael Leónidas Trujillo', url: 'https://es.wikipedia.org/wiki/Rafael_Le%C3%B3nidas_Trujillo' },
      { title: 'Wikipedia — Masacre del Perejil', url: 'https://es.wikipedia.org/wiki/Masacre_del_Perejil' },
      { title: 'Wikipedia — Rafael Trujillo', url: 'https://en.wikipedia.org/wiki/Rafael_Trujillo' },
    ],
  },
  // Fila "PRD perredeísta 1961–2000", ajustada por su trayectoria:
  //   ide +20 → +30 (baja): el dossier 01 §22 lo sitúa en la contratradición al antihaitianismo, y fue blanco de campañas
  //     racistas en 1994 y 1996;
  //   pod +20 → +40: impulsó el Pacto por la Democracia (1994: sin reelección consecutiva, CNM);
  //   eti −40 → −20 (baja): el clientelismo del PRD en el poder (1978–86) es menos atribuible a él, que no gobernó el país.
  // `mig`, `rel`, `val` y `des`: sin posiciones propias documentadas → baja.
  {
    id: 'his-pena-gomez',
    name: 'José Francisco Peña Gómez',
    kind: 'historicoRD',
    subtitle: '1937–1998 · líder del PRD; alcalde del Distrito Nacional (1982–1986)',
    summary:
      'Dirigente del PRD desde los años sesenta y vicepresidente de la Internacional Socialista; en abril de 1965 llamó por radio a exigir la vuelta a la constitucionalidad. Fue alcalde del Distrito Nacional (1982–1986) y candidato presidencial en 1990, 1994 y 1996; en las campañas de 1994 y 1996 fue blanco de ataques racistas y antihaitianos, y tras la crisis de 1994 impulsó el Pacto por la Democracia.',
    scores: { eco: -30, soc: -50, mig: 0, ide: 30, rel: -10, val: 0, ord: 40, pod: 40, eti: -20, geo: -10, des: -20, est: 30 },
    confidence: { mig: 'baja', ide: 'baja', rel: 'baja', val: 'baja', eti: 'baja', geo: 'baja', des: 'baja' },
    relativeToEra: true,
    sources: [
      {
        title: 'Wikipedia — José Francisco Peña Gómez',
        url: 'https://es.wikipedia.org/wiki/Jos%C3%A9_Francisco_Pe%C3%B1a_G%C3%B3mez',
      },
      { title: 'Hoy — Peña Gómez, Balaguer y el racismo (III)', url: 'https://hoy.com.do/pena-gomez-balaguer-y-el-racismo-iii/' },
      {
        title: 'Nueva Sociedad — La evolución del Partido Revolucionario Dominicano',
        url: 'https://nuso.org/articulo/la-evolucion-del-partido-revolucionario-dominicano/',
      },
    ],
  },
  // = fila "Constitucionalistas 1965 (Caamaño)". `mig`, `ide` y `des`: sin datos propios → baja.
  {
    id: 'his-caamano',
    name: 'Francisco Alberto Caamaño Deñó',
    kind: 'historicoRD',
    subtitle: '1932–1973 · coronel; presidente constitucionalista en 1965',
    summary:
      'Coronel que encabezó a los constitucionalistas en la Revolución de Abril de 1965, que exigían el regreso de Bosch y de la Constitución de 1963; ocupó la presidencia constitucional durante la guerra y la intervención de EE.UU. Tras el exilio, desembarcó con una guerrilla en Playa Caracoles el 3 de febrero de 1973 y murió el 16 de febrero en Nizaíto (San José de Ocoa).',
    scores: { eco: -40, soc: -50, mig: 0, ide: 20, rel: 50, val: 50, ord: 10, pod: 60, eti: 50, geo: 100, des: 0, est: 90 },
    confidence: { mig: 'baja', ide: 'baja', des: 'baja' },
    relativeToEra: true,
    sources: [
      {
        title: 'Wikipedia — Francisco Alberto Caamaño Deñó',
        url: 'https://es.wikipedia.org/wiki/Francisco_Alberto_Caama%C3%B1o_De%C3%B1%C3%B3',
      },
      { title: 'Wikipedia — Guerra civil dominicana', url: 'https://es.wikipedia.org/wiki/Guerra_civil_dominicana' },
    ],
  },
  // = movimiento "1J4" (dossier 01 §21), cuyo líder fue hasta su muerte en 1963. `mig`, `ide`, `rel`, `val` y `des`
  // (escalas finas de confianza media-baja en el dossier) → baja.
  {
    id: 'his-manolo-tavarez',
    name: 'Manolo Tavárez Justo',
    kind: 'historicoRD',
    subtitle: '1931–1963 · abogado; líder del Movimiento Revolucionario 14 de Junio (1J4)',
    summary:
      'Abogado y líder del Movimiento Revolucionario 14 de Junio (1J4), surgido contra la dictadura de Trujillo; estuvo preso hasta 1961 y era esposo de Minerva Mirabal. Tras el golpe contra Bosch encabezó un alzamiento guerrillero (noviembre de 1963) y fue fusilado en Las Manaclas el 21 de diciembre de 1963, junto con 14 compañeros que se habían rendido.',
    scores: { eco: -60, soc: -60, mig: 0, ide: 30, rel: 40, val: 40, ord: 0, pod: 40, eti: 70, geo: 90, des: 0, est: 100 },
    confidence: { mig: 'baja', ide: 'baja', rel: 'baja', val: 'baja', des: 'baja' },
    relativeToEra: true,
    sources: [
      { title: 'Wikipedia — Manolo Tavárez Justo', url: 'https://es.wikipedia.org/wiki/Manolo_Tav%C3%A1rez_Justo' },
      {
        title: 'Wikipedia — Movimiento Revolucionario 14 de Junio',
        url: 'https://es.wikipedia.org/wiki/Movimiento_Revolucionario_14_de_Junio',
      },
    ],
  },
  // "1J4" en su fase fundacional (1960): el dossier 01 §21 dice que el movimiento pasó de un programa nacional-democrático
  // al marxismo-leninismo después de su muerte. Ajustes: eco −60 → −40, soc −60 → −50, geo 90 → 70 y val 40 → 50 (figura
  // de la lucha antidictatorial de las mujeres), todos baja; también baja `mig`, `ide`, `rel` y `des`. Quedan con
  // confianza media `ord`, `pod`, `eti` y `est`, los ejes de la lucha antitrujillista.
  {
    id: 'his-minerva-mirabal',
    name: 'Minerva Mirabal',
    kind: 'historicoRD',
    subtitle: '1926–1960 · militante antitrujillista; cofundadora del Movimiento 14 de Junio',
    summary:
      'Participó con su esposo, Manolo Tavárez Justo, en las reuniones clandestinas que dieron origen al Movimiento 14 de Junio, y el SIM la apresó varias veces. Agentes del régimen la asesinaron el 25 de noviembre de 1960 junto con sus hermanas Patria y María Teresa y el chofer Rufino de la Cruz; en 1999 la ONU declaró esa fecha Día Internacional de la Eliminación de la Violencia contra la Mujer.',
    scores: { eco: -40, soc: -50, mig: 0, ide: 30, rel: 40, val: 50, ord: 0, pod: 40, eti: 70, geo: 70, des: 0, est: 100 },
    confidence: {
      eco: 'baja',
      soc: 'baja',
      mig: 'baja',
      ide: 'baja',
      rel: 'baja',
      val: 'baja',
      geo: 'baja',
      des: 'baja',
    },
    relativeToEra: true,
    sources: [
      { title: 'Wikipedia — Minerva Mirabal', url: 'https://es.wikipedia.org/wiki/Minerva_Mirabal' },
      { title: 'Wikipedia — Hermanas Mirabal', url: 'https://es.wikipedia.org/wiki/Hermanas_Mirabal' },
      {
        title: 'Wikipedia — Movimiento Revolucionario 14 de Junio',
        url: 'https://es.wikipedia.org/wiki/Movimiento_Revolucionario_14_de_Junio',
      },
    ],
  },
  // = fila "Pedro Santana". `soc` (ausencia de política social, anacrónico) y `des` → baja.
  {
    id: 'his-santana',
    name: 'Pedro Santana',
    kind: 'historicoRD',
    subtitle: '1801–1864 · caudillo hatero; presidente en cuatro periodos (1844–1861); marqués de Las Carreras',
    summary:
      'Hatero del Este que dirigió tropas en la guerra contra Haití y fue el primer presidente constitucional (1844–1848), además de 1849, 1853–1856 y 1858–1861. Gobernó con poderes excepcionales (art. 210) y comisiones militares que fusilaron a opositores, y en 1861 promovió la anexión a España, que lo nombró Capitán General y marqués de Las Carreras. La comparación con el presente es aproximada.',
    scores: { eco: -10, soc: 40, mig: -80, ide: -80, rel: -80, val: -80, ord: -90, pod: -95, eti: -60, geo: -90, des: -20, est: -70 },
    confidence: { soc: 'baja', des: 'baja' },
    relativeToEra: true,
    sources: [
      { title: 'Wikipedia — Pedro Santana', url: 'https://es.wikipedia.org/wiki/Pedro_Santana' },
      { title: 'Country Studies — Santana y Báez', url: 'https://countrystudies.us/dominican-republic/5.htm' },
      { title: 'Wikipedia — First Dominican Republic', url: 'https://en.wikipedia.org/wiki/First_Dominican_Republic' },
    ],
  },
];
