// Figuras extranjeras (docs/PLAN.md §7). Sin dossier: puntajes estimados a partir de la trayectoria y las posiciones
// públicas de cada figura, leídos en su contexto y su época.
// Convenciones:
//   - Fallecidos → relativeToEra (rel/val/est relativos a su época). Vivos → asOf '2026-09'.
//   - eti de personas vivas = discurso y posiciones declaradas, no juicio de conducta.
//   - geo de presidentes de EE.UU.: proyección de la hegemonía / intervencionismo en América Latina = muy −.
//   - rel de regímenes comunistas: el Estado antirreligioso puntúa alto en laicidad.
//   - Confianza por defecto 'media'; 'alta' en los ejes que definen a la figura, 'baja' en los especulativos.
import type { Profile } from '../types.ts';

const wiki = (article: string): { title: string; url: string } => ({
  title: `Wikipedia: ${article.replace(/_/g, ' ')}`,
  url: `https://es.wikipedia.org/wiki/${encodeURIComponent(article)}`,
});

export const figurasExtranjeras: Profile[] = [
  // ── Próceres y pensadores del siglo XIX ────────────────────────────────────────────────────────────────────────
  {
    id: 'ext-simon-bolivar',
    name: 'Simón Bolívar',
    kind: 'figuraExtranjera',
    subtitle: 'Venezuela · Libertador; presidente de la Gran Colombia (1819–1830)',
    summary:
      'Dirigió la independencia de Venezuela, Nueva Granada, Ecuador, Perú y Bolivia (1810–1825) y promovió la unión ' +
      'hispanoamericana en el Congreso de Panamá (1826). Propuso una presidencia vitalicia en la Constitución boliviana ' +
      'y gobernó como dictador en 1828–1830. En 1821 el Estado Independiente de Haití Español, proclamado en Santo ' +
      'Domingo, quiso unirse a la Gran Colombia.',
    scores: { eco: -10, soc: -20, mig: 20, ide: 20, rel: 10, val: 10, ord: -60, pod: -60, eti: 40, geo: 70, des: -10, est: 50 },
    confidence: { eco: 'baja', soc: 'baja', mig: 'baja', ide: 'baja', rel: 'baja', val: 'baja', eti: 'baja', des: 'baja' },
    relativeToEra: true,
    sources: [wiki('Simón_Bolívar'), wiki('Estado_Independiente_de_Haití_Español')],
  },
  {
    id: 'ext-jose-marti',
    name: 'José Martí',
    kind: 'figuraExtranjera',
    subtitle: 'Cuba · Escritor; fundador del Partido Revolucionario Cubano (1892)',
    summary:
      'Escritor y organizador de la guerra de independencia de Cuba de 1895; fundó el Partido Revolucionario Cubano en ' +
      '1892. Firmó con Máximo Gómez el Manifiesto de Montecristi en la República Dominicana (1895) y murió en combate ' +
      'ese año. Advirtió contra el expansionismo de Estados Unidos y rechazó las divisiones raciales («Mi raza», 1893).',
    scores: { eco: -15, soc: -30, mig: 40, ide: 75, rel: 50, val: 30, ord: 20, pod: 70, eti: 70, geo: 85, des: 0, est: 70 },
    confidence: { eco: 'baja', soc: 'baja', mig: 'baja', ide: 'alta', val: 'baja', ord: 'baja', geo: 'alta', des: 'baja' },
    relativeToEra: true,
    sources: [wiki('José_Martí'), wiki('Manifiesto_de_Montecristi')],
  },
  {
    id: 'ext-eugenio-maria-de-hostos',
    name: 'Eugenio María de Hostos',
    kind: 'figuraExtranjera',
    subtitle: 'Puerto Rico · Educador y pensador; vivió en la República Dominicana (1879–1888 y 1900–1903)',
    summary:
      'Educador, sociólogo e independentista puertorriqueño, defensor de una confederación antillana. En la República ' +
      'Dominicana fundó en 1880 la primera Escuela Normal, con enseñanza laica y de moral social, y en 1902 fue director ' +
      'general de Enseñanza. Se trasladó a Chile en 1888, durante el gobierno de Ulises Heureaux, regresó en 1900 y murió ' +
      'en Santo Domingo en 1903.',
    scores: { eco: 10, soc: -35, mig: 30, ide: 40, rel: 85, val: 60, ord: 40, pod: 75, eti: 80, geo: 65, des: 0, est: 30 },
    confidence: { eco: 'baja', mig: 'baja', rel: 'alta', ord: 'baja', des: 'baja', est: 'baja' },
    relativeToEra: true,
    sources: [
      wiki('Eugenio_María_de_Hostos'),
      {
        title: 'Wikipedia (inglés): Eugenio María de Hostos',
        url: 'https://en.wikipedia.org/wiki/Eugenio_Mar%C3%ADa_de_Hostos',
      },
    ],
  },
  {
    id: 'ext-toussaint-louverture',
    name: 'Toussaint Louverture',
    kind: 'figuraExtranjera',
    subtitle: 'Saint-Domingue (Haití) · Líder de la Revolución haitiana; gobernador (1797–1802)',
    summary:
      'Nacido esclavo, dirigió la Revolución haitiana y gobernó Saint-Domingue con autonomía frente a Francia. En enero ' +
      'de 1801 ocupó la parte española de la isla, la unificó bajo su mando y abolió allí la esclavitud. Su Constitución ' +
      'de 1801 lo nombró gobernador vitalicio, hizo oficial el catolicismo y mantuvo el trabajo obligatorio en las ' +
      'plantaciones. Murió preso en Francia en 1803.',
    scores: { eco: -40, soc: -10, mig: 20, ide: 60, rel: -60, val: 30, ord: -60, pod: -80, eti: 0, geo: 30, des: -40, est: 70 },
    confidence: { soc: 'baja', mig: 'baja', val: 'baja', eti: 'baja', geo: 'baja', des: 'baja', pod: 'alta' },
    relativeToEra: true,
    sources: [wiki('Toussaint_Louverture')],
  },

  // ── Revolución, izquierda y antiimperialismo latinoamericano ──────────────────────────────────────────────────
  {
    id: 'ext-fidel-castro',
    name: 'Fidel Castro',
    kind: 'figuraExtranjera',
    subtitle: 'Cuba · Primer ministro (1959–1976) y presidente (1976–2008)',
    summary:
      'Líder de la Revolución cubana de 1959; instauró un Estado socialista de partido único aliado de la URSS, ' +
      'nacionalizó la economía y creó sistemas universales de salud y educación. Gobernó hasta 2008 con encarcelamiento ' +
      'y ejecución de opositores. En 1947 participó en la expedición de Cayo Confites contra Trujillo y en 1959 su ' +
      'gobierno apoyó la expedición de Constanza, Maimón y Estero Hondo.',
    scores: { eco: -95, soc: -85, mig: -40, ide: 55, rel: 85, val: 10, ord: -90, pod: -100, eti: -40, geo: 100, des: -30, est: 70 },
    confidence: {
      eco: 'alta', soc: 'alta', mig: 'baja', rel: 'alta', val: 'baja', ord: 'alta', pod: 'alta',
      eti: 'baja', geo: 'alta', des: 'baja',
    },
    relativeToEra: true,
    sources: [
      wiki('Fidel_Castro'),
      wiki('Expedición_de_Cayo_Confites'),
      {
        title: 'Discurso de Fidel Castro del 22 de diciembre de 1975 ("país latinoafricano")',
        url: 'http://www.cuba.cu/gobierno/discursos/1975/esp/c221275e.html',
      },
    ],
  },
  {
    id: 'ext-che-guevara',
    name: 'Ernesto «Che» Guevara',
    kind: 'figuraExtranjera',
    subtitle: 'Argentina y Cuba · Comandante guerrillero; ministro de Industrias de Cuba (1961–1965)',
    summary:
      'Médico argentino y comandante de la Revolución cubana. Estuvo al frente de la fortaleza de La Cabaña, donde se ' +
      'hicieron juicios sumarios y fusilamientos (1959); presidió el Banco Nacional y, como ministro de Industrias, ' +
      'defendió la planificación centralizada y los incentivos morales. Promovió guerrillas en el Congo y en Bolivia, ' +
      'donde fue capturado y ejecutado en 1967.',
    scores: { eco: -95, soc: -80, mig: 30, ide: 40, rel: 80, val: -10, ord: -85, pod: -60, eti: 40, geo: 100, des: -40, est: 95 },
    confidence: {
      eco: 'alta', mig: 'baja', ide: 'baja', val: 'baja', ord: 'alta', eti: 'baja', geo: 'alta', des: 'baja', est: 'alta',
    },
    relativeToEra: true,
    sources: [wiki('Che_Guevara')],
  },
  {
    id: 'ext-hugo-chavez',
    name: 'Hugo Chávez',
    kind: 'figuraExtranjera',
    subtitle: 'Venezuela · Presidente (1999–2013)',
    summary:
      'Militar que encabezó el intento de golpe de 1992 y ganó la presidencia en 1998. Impulsó la Constitución de 1999, ' +
      'el «socialismo del siglo XXI», nacionalizaciones y programas sociales financiados con el petróleo, y logró en ' +
      '2009 la reelección indefinida. Creó Petrocaribe (2005), al que se sumó la República Dominicana, y la ALBA.',
    scores: { eco: -80, soc: -80, mig: 30, ide: 65, rel: 10, val: -10, ord: -45, pod: -90, eti: -70, geo: 95, des: -70, est: 80 },
    confidence: { eco: 'alta', soc: 'alta', mig: 'baja', rel: 'baja', val: 'baja', pod: 'alta', geo: 'alta', est: 'alta' },
    relativeToEra: true,
    sources: [wiki('Hugo_Chávez'), wiki('Petrocaribe')],
  },
  {
    id: 'ext-salvador-allende',
    name: 'Salvador Allende',
    kind: 'figuraExtranjera',
    subtitle: 'Chile · Presidente (1970–1973), Unidad Popular',
    summary:
      'Médico y dirigente socialista, primer marxista que llegó a la presidencia por elecciones en América Latina. Su ' +
      'gobierno nacionalizó el cobre (1971), aceleró la reforma agraria y amplió el área estatal de la economía. Murió ' +
      'en La Moneda durante el golpe militar del 11 de septiembre de 1973.',
    scores: { eco: -85, soc: -80, mig: 20, ide: 30, rel: 70, val: 35, ord: 50, pod: 50, eti: 40, geo: 85, des: -40, est: -20 },
    confidence: { eco: 'alta', soc: 'alta', mig: 'baja', ide: 'baja', val: 'baja', eti: 'baja', geo: 'alta', des: 'baja' },
    relativeToEra: true,
    sources: [wiki('Salvador_Allende')],
  },
  {
    id: 'ext-lazaro-cardenas',
    name: 'Lázaro Cárdenas',
    kind: 'figuraExtranjera',
    subtitle: 'México · Presidente (1934–1940)',
    summary:
      'General revolucionario que repartió tierras a gran escala y expropió el petróleo a compañías extranjeras en ' +
      '1938. Impulsó la educación socialista y el indigenismo, organizó el partido oficial en sectores corporativos y ' +
      'recibió a miles de exiliados republicanos españoles. Entregó el poder al terminar su sexenio.',
    scores: { eco: -75, soc: -60, mig: 60, ide: 55, rel: 70, val: 30, ord: 30, pod: 30, eti: 20, geo: 80, des: 10, est: -20 },
    confidence: { eco: 'alta', val: 'baja', ord: 'baja', eti: 'baja', geo: 'alta', des: 'baja', est: 'baja' },
    relativeToEra: true,
    sources: [wiki('Lázaro_Cárdenas')],
  },
  {
    id: 'ext-jean-bertrand-aristide',
    name: 'Jean-Bertrand Aristide',
    kind: 'figuraExtranjera',
    subtitle: 'Haití · Presidente (1991, 1994–1996 y 2001–2004), Fanmi Lavalas',
    summary:
      'Sacerdote salesiano de la teología de la liberación, primer presidente elegido democráticamente en Haití (1990). ' +
      'Derrocado por los militares en 1991, volvió en 1994 con apoyo de EE.UU. y disolvió el ejército. Reconoció el ' +
      'vudú como religión (2003) y pidió a Francia restituir la deuda de la independencia. Dejó el poder en 2004 tras ' +
      'una rebelión de exmilitares que habían operado desde territorio dominicano.',
    scores: { eco: -45, soc: -60, mig: 40, ide: 75, rel: -20, val: 0, ord: -20, pod: -40, eti: 10, geo: 55, des: 0, est: 70 },
    confidence: { mig: 'baja', rel: 'baja', val: 'baja', ord: 'baja', eti: 'baja', des: 'baja', est: 'alta' },
    asOf: '2026-09',
    sources: [wiki('Jean-Bertrand_Aristide')],
  },

  // ── Populismo, nacionalismo y desarrollismo latinoamericano ───────────────────────────────────────────────────
  {
    id: 'ext-juan-domingo-peron',
    name: 'Juan Domingo Perón',
    kind: 'figuraExtranjera',
    subtitle: 'Argentina · Presidente (1946–1955 y 1973–1974)',
    summary:
      'Militar fundador del justicialismo. Amplió los derechos laborales, nacionalizó ferrocarriles y servicios ' +
      'públicos, promovió el voto femenino (1947) y la «tercera posición» internacional. Reformó la Constitución en 1949 ' +
      'para permitir su reelección y fue derrocado en 1955. En el exilio vivió en la República Dominicana de Trujillo ' +
      '(1958–1960).',
    scores: { eco: -60, soc: -75, mig: 20, ide: -35, rel: 0, val: 20, ord: -50, pod: -80, eti: -60, geo: 60, des: -50, est: 50 },
    confidence: { eco: 'alta', soc: 'alta', mig: 'baja', rel: 'baja', val: 'baja', pod: 'alta', geo: 'alta' },
    relativeToEra: true,
    sources: [
      wiki('Juan_Domingo_Perón'),
      {
        title: 'Historia del Peronismo: discurso de Perón en el Día de la Hispanidad (1947)',
        url: 'https://historiadelperonismo.com/?p=4081',
      },
    ],
  },
  {
    id: 'ext-getulio-vargas',
    name: 'Getúlio Vargas',
    kind: 'figuraExtranjera',
    subtitle: 'Brasil · Presidente (1930–1945 y 1951–1954)',
    summary:
      'Llegó al poder con la Revolución de 1930 y gobernó como dictador durante el Estado Novo (1937–1945), con censura ' +
      'y persecución de opositores. Creó la legislación laboral (CLT, 1943), la siderúrgica de Volta Redonda y Petrobras ' +
      '(1953), y restringió la inmigración con cuotas y campañas de nacionalización. Volvió electo en 1951 y se suicidó ' +
      'en el cargo en 1954.',
    scores: { eco: -60, soc: -60, mig: -60, ide: -20, rel: -30, val: -10, ord: -70, pod: -85, eti: -40, geo: 30, des: -70, est: 20 },
    confidence: { eco: 'alta', rel: 'baja', val: 'baja', pod: 'alta', eti: 'baja', geo: 'baja', est: 'baja' },
    relativeToEra: true,
    sources: [
      wiki('Getúlio_Vargas'),
      {
        title: 'Wikipedia (inglés): Nationalization campaign (Brasil, 1938–1945)',
        url: 'https://en.wikipedia.org/wiki/Nationalization_campaign',
      },
    ],
  },
  {
    id: 'ext-luis-munoz-marin',
    name: 'Luis Muñoz Marín',
    kind: 'figuraExtranjera',
    subtitle: 'Puerto Rico · Gobernador (1949–1965), Partido Popular Democrático',
    summary:
      'Fundador del Partido Popular Democrático y primer gobernador electo de Puerto Rico. Pasó del independentismo a ' +
      'crear el Estado Libre Asociado con Estados Unidos (1952) e impulsó la industrialización de «Operación Manos a la ' +
      'Obra» con exenciones al capital estadounidense. Bajo su liderazgo legislativo se aprobó la Ley de la Mordaza ' +
      '(1948), usada contra el nacionalismo independentista.',
    scores: { eco: 0, soc: -40, mig: 20, ide: -20, rel: 60, val: 30, ord: -40, pod: 10, eti: 20, geo: -80, des: -60, est: -40 },
    confidence: { eco: 'baja', mig: 'baja', ide: 'baja', val: 'baja', pod: 'baja', eti: 'baja', geo: 'alta' },
    relativeToEra: true,
    sources: [wiki('Luis_Muñoz_Marín')],
  },

  // ── Socialdemocracia y democracia liberal en el Caribe ────────────────────────────────────────────────────────
  {
    id: 'ext-jose-figueres-ferrer',
    name: 'José Figueres Ferrer',
    kind: 'figuraExtranjera',
    subtitle: 'Costa Rica · Presidente (1948–1949, 1953–1958 y 1970–1974), Liberación Nacional',
    summary:
      'Presidió la junta que, tras la guerra civil de 1948, abolió el ejército y nacionalizó la banca; la Constitución ' +
      'de 1949 estableció el voto femenino y la ciudadanía de los afrodescendientes de Limón. Fundó el socialdemócrata ' +
      'Partido Liberación Nacional. Respaldó a la Legión del Caribe, que agrupaba a exiliados dominicanos y de otros ' +
      'países contra Trujillo y Somoza.',
    scores: { eco: -45, soc: -60, mig: 20, ide: 40, rel: 0, val: 30, ord: 40, pod: 55, eti: -10, geo: -30, des: -20, est: 20 },
    confidence: { mig: 'baja', rel: 'baja', val: 'baja', eti: 'baja', des: 'baja', est: 'baja' },
    relativeToEra: true,
    sources: [wiki('José_Figueres_Ferrer'), wiki('Legión_del_Caribe')],
  },
  {
    id: 'ext-romulo-betancourt',
    name: 'Rómulo Betancourt',
    kind: 'figuraExtranjera',
    subtitle: 'Venezuela · Presidente (1945–1948 y 1959–1964), Acción Democrática',
    summary:
      'Fundador de Acción Democrática y del sistema bipartidista del Pacto de Puntofijo (1958). Promovió la «doctrina ' +
      'Betancourt» de no reconocer gobiernos surgidos de golpes, enfrentó a la guerrilla de izquierda y se alineó con ' +
      'EE.UU. frente a Cuba. En 1960 sobrevivió a un atentado organizado por el régimen de Trujillo, que llevó a la OEA ' +
      'a sancionar a la República Dominicana.',
    scores: { eco: -35, soc: -50, mig: 30, ide: 0, rel: 20, val: 10, ord: -30, pod: 70, eti: 20, geo: -40, des: -50, est: -40 },
    confidence: { mig: 'baja', ide: 'baja', rel: 'baja', val: 'baja', pod: 'alta', eti: 'baja' },
    relativeToEra: true,
    sources: [wiki('Rómulo_Betancourt')],
  },

  // ── Dictaduras del siglo XX ───────────────────────────────────────────────────────────────────────────────────
  {
    id: 'ext-augusto-pinochet',
    name: 'Augusto Pinochet',
    kind: 'figuraExtranjera',
    subtitle: 'Chile · Jefe de la junta militar y presidente de facto (1973–1990)',
    summary:
      'General que encabezó el golpe de 1973 y gobernó Chile en dictadura hasta 1990; las comisiones Rettig y Valech ' +
      'documentaron miles de ejecutados, desaparecidos y torturados. Aplicó las reformas de libre mercado de los ' +
      '«Chicago Boys», privatizó las pensiones (1980) e impuso la Constitución de 1980. Dejó el poder tras perder el ' +
      'plebiscito de 1988.',
    scores: { eco: 80, soc: 75, mig: -50, ide: -60, rel: -30, val: -70, ord: -100, pod: -90, eti: -60, geo: -70, des: -50, est: -30 },
    confidence: { eco: 'alta', soc: 'alta', mig: 'baja', rel: 'baja', val: 'alta', ord: 'alta', pod: 'alta', des: 'baja', est: 'baja' },
    relativeToEra: true,
    sources: [wiki('Augusto_Pinochet')],
  },
  {
    id: 'ext-francisco-franco',
    name: 'Francisco Franco',
    kind: 'figuraExtranjera',
    subtitle: 'España · Jefe del Estado (1939–1975)',
    summary:
      'General que encabezó el alzamiento de 1936 y, tras la Guerra Civil, gobernó España en dictadura hasta su muerte ' +
      'en 1975. Su régimen se basó en el nacionalcatolicismo, el partido único y la represión de opositores y de las ' +
      'lenguas regionales, y pasó de la autarquía al desarrollismo de los años sesenta. Mantuvo relaciones estrechas con ' +
      'el régimen de Trujillo.',
    scores: { eco: -40, soc: -20, mig: -50, ide: -95, rel: -95, val: -95, ord: -100, pod: -100, eti: -60, geo: -40, des: -60, est: -40 },
    confidence: { soc: 'baja', mig: 'baja', ide: 'alta', rel: 'alta', val: 'alta', ord: 'alta', pod: 'alta', est: 'baja' },
    relativeToEra: true,
    sources: [wiki('Francisco_Franco')],
  },
  {
    id: 'ext-anastasio-somoza-garcia',
    name: 'Anastasio Somoza García',
    kind: 'figuraExtranjera',
    subtitle: 'Nicaragua · Jefe de la Guardia Nacional y presidente (1937–1947 y 1950–1956)',
    summary:
      'Como Trujillo, ascendió desde una Guardia Nacional creada durante la ocupación estadounidense. Ordenó el ' +
      'asesinato de Augusto C. Sandino (1934), tomó el poder en 1937 y gobernó con respaldo de EE.UU. mientras su ' +
      'familia acumulaba tierras y empresas. Fue asesinado en 1956; sus hijos gobernaron Nicaragua hasta 1979.',
    scores: { eco: 20, soc: 20, mig: -30, ide: -30, rel: -40, val: -50, ord: -90, pod: -95, eti: -95, geo: -95, des: -40, est: -50 },
    confidence: {
      eco: 'baja', soc: 'baja', mig: 'baja', ide: 'baja', rel: 'baja', val: 'baja', ord: 'alta', pod: 'alta', eti: 'alta',
      geo: 'alta', des: 'baja',
    },
    relativeToEra: true,
    sources: [wiki('Anastasio_Somoza_García')],
  },
  {
    id: 'ext-fulgencio-batista',
    name: 'Fulgencio Batista',
    kind: 'figuraExtranjera',
    subtitle: 'Cuba · Presidente (1940–1944) y gobernante de facto (1952–1959)',
    summary:
      'Sargento que dominó la política cubana desde la revuelta de 1933. Fue presidente electo bajo la Constitución de ' +
      '1940 y en 1952 volvió al poder con un golpe de Estado; su gobierno reprimió a la oposición y favoreció la ' +
      'inversión estadounidense y el negocio de los casinos. Tras la victoria revolucionaria huyó el 1 de enero de 1959 ' +
      'a la República Dominicana, bajo la protección de Trujillo.',
    scores: { eco: 30, soc: 0, mig: 0, ide: 0, rel: -10, val: -30, ord: -85, pod: -85, eti: -90, geo: -85, des: -30, est: -30 },
    confidence: {
      soc: 'baja', mig: 'baja', ide: 'baja', rel: 'baja', val: 'baja', ord: 'alta', pod: 'alta', eti: 'alta', geo: 'alta',
      des: 'baja', est: 'baja',
    },
    relativeToEra: true,
    sources: [wiki('Fulgencio_Batista')],
  },
  {
    id: 'ext-francois-duvalier',
    name: 'François Duvalier',
    kind: 'figuraExtranjera',
    subtitle: 'Haití · Presidente (1957–1964) y presidente vitalicio (1964–1971)',
    summary:
      'Médico y teórico del noirismo; se proclamó presidente vitalicio en 1964 y gobernó con la milicia de los Tonton ' +
      'Macoutes, que asesinó y persiguió a miles de opositores. Expulsó a obispos y fue excomulgado en 1961. En 1963 el ' +
      'asedio de sus fuerzas a la embajada dominicana en Puerto Príncipe llevó a Juan Bosch a movilizar tropas hacia la ' +
      'frontera. Le sucedió su hijo Jean-Claude.',
    scores: { eco: -20, soc: 10, mig: -40, ide: 40, rel: -20, val: -40, ord: -100, pod: -100, eti: -95, geo: -40, des: -50, est: 20 },
    confidence: {
      eco: 'baja', soc: 'baja', mig: 'baja', ide: 'baja', rel: 'baja', val: 'baja', ord: 'alta', pod: 'alta', eti: 'alta',
      des: 'baja', est: 'baja',
    },
    relativeToEra: true,
    sources: [wiki('François_Duvalier')],
  },

  // ── Presidentes de Estados Unidos ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'ext-franklin-d-roosevelt',
    name: 'Franklin D. Roosevelt',
    kind: 'figuraExtranjera',
    subtitle: 'Estados Unidos · Presidente (1933–1945), Partido Demócrata',
    summary:
      'Único presidente elegido cuatro veces. Enfrentó la Gran Depresión con el New Deal y la Ley de Seguridad Social ' +
      '(1935), dirigió al país en la Segunda Guerra Mundial y ordenó el internamiento de los japoneses-estadounidenses ' +
      '(1942). Con la política del Buen Vecino retiró los marines de Haití (1934), y su gobierno firmó el tratado ' +
      'Trujillo-Hull (1940), que devolvió a la República Dominicana el control de sus aduanas.',
    scores: { eco: -55, soc: -65, mig: -50, ide: -30, rel: 0, val: 0, ord: -40, pod: -60, eti: 10, geo: -40, des: 20, est: -50 },
    confidence: { eco: 'alta', soc: 'alta', ide: 'baja', rel: 'baja', val: 'baja', pod: 'alta', eti: 'baja', des: 'baja' },
    relativeToEra: true,
    sources: [wiki('Franklin_D._Roosevelt'), wiki('Política_de_buena_vecindad'), wiki('Tratado_Trujillo-Hull')],
  },
  {
    id: 'ext-john-f-kennedy',
    name: 'John F. Kennedy',
    kind: 'figuraExtranjera',
    subtitle: 'Estados Unidos · Presidente (1961–1963), Partido Demócrata',
    summary:
      'Primer presidente católico de EE.UU. Lanzó la Alianza para el Progreso, autorizó la invasión de Bahía de ' +
      'Cochinos (1961), enfrentó la crisis de los misiles (1962) y propuso la ley de derechos civiles. Tras el ' +
      'asesinato de Trujillo (1961), su gobierno presionó con buques de guerra la salida de la familia Trujillo y apoyó ' +
      'la transición que llevó a Juan Bosch al poder. Fue asesinado en 1963.',
    scores: { eco: -20, soc: -35, mig: 40, ide: 35, rel: 50, val: 10, ord: 0, pod: 40, eti: 0, geo: -80, des: 0, est: -50 },
    confidence: { val: 'baja', ord: 'baja', eti: 'baja', geo: 'alta', des: 'baja' },
    relativeToEra: true,
    sources: [wiki('John_F._Kennedy'), wiki('Alianza_para_el_Progreso')],
  },
  {
    id: 'ext-ronald-reagan',
    name: 'Ronald Reagan',
    kind: 'figuraExtranjera',
    subtitle: 'Estados Unidos · Presidente (1981–1989), Partido Republicano',
    summary:
      'Redujo impuestos y regulaciones («reaganomics»), aumentó el gasto militar y endureció la «guerra contra las ' +
      'drogas». En América Latina invadió Granada (1983) y apoyó a la Contra nicaragüense, lo que derivó en el ' +
      'escándalo Irán-Contra. Firmó la amnistía migratoria de 1986 y lanzó la Iniciativa de la Cuenca del Caribe (1983), ' +
      'que impulsó las zonas francas dominicanas.',
    scores: { eco: 75, soc: 60, mig: 20, ide: -30, rel: -50, val: -60, ord: -60, pod: 30, eti: -20, geo: -95, des: -60, est: 20 },
    confidence: { eco: 'alta', soc: 'alta', ide: 'baja', pod: 'baja', eti: 'baja', geo: 'alta', est: 'baja' },
    relativeToEra: true,
    sources: [wiki('Ronald_Reagan'), wiki('Iniciativa_de_la_Cuenca_del_Caribe')],
  },
  {
    id: 'ext-barack-obama',
    name: 'Barack Obama',
    kind: 'figuraExtranjera',
    subtitle: 'Estados Unidos · Presidente (2009–2017), Partido Demócrata',
    summary:
      'Primer presidente afroestadounidense. Aprobó la reforma de salud conocida como Obamacare, creó el programa DACA ' +
      'para inmigrantes llegados de niños mientras mantenía cifras altas de deportaciones, apoyó el matrimonio ' +
      'igualitario desde 2012, firmó el Acuerdo de París y restableció relaciones con Cuba (2015).',
    scores: { eco: -20, soc: -40, mig: 20, ide: 50, rel: 35, val: 60, ord: 10, pod: 60, eti: 40, geo: -45, des: 45, est: -30 },
    confidence: { val: 'alta', ord: 'baja', eti: 'baja' },
    asOf: '2026-09',
    sources: [wiki('Barack_Obama')],
  },
  {
    id: 'ext-donald-trump',
    name: 'Donald Trump',
    kind: 'figuraExtranjera',
    subtitle: 'Estados Unidos · Presidente (2017–2021 y desde 2025), Partido Republicano',
    summary:
      'Empresario que ganó la presidencia en 2016 y en 2024 con el lema «América primero». Sus gobiernos ' +
      'impusieron aranceles amplios, deportaciones masivas y restricciones al asilo, sacaron a EE.UU. del Acuerdo de ' +
      'París y nombraron a jueces que anularon Roe v. Wade. En su segundo mandato ordenó ataques contra lanchas en el ' +
      'Caribe y, en enero de 2026, una operación militar en Venezuela que capturó a Nicolás Maduro.',
    scores: { eco: 25, soc: 40, mig: -95, ide: -80, rel: -50, val: -65, ord: -80, pod: -75, eti: -40, geo: -95, des: -85, est: 65 },
    confidence: { mig: 'alta', ide: 'alta', ord: 'alta', pod: 'alta', geo: 'alta', des: 'alta', est: 'alta' },
    asOf: '2026-09',
    sources: [wiki('Donald_Trump')],
  },

  // ── Europa ────────────────────────────────────────────────────────────────────────────────────────────────────
  {
    id: 'ext-margaret-thatcher',
    name: 'Margaret Thatcher',
    kind: 'figuraExtranjera',
    subtitle: 'Reino Unido · Primera ministra (1979–1990), Partido Conservador',
    summary:
      'Primera mujer en dirigir el gobierno británico. Privatizó empresas públicas, redujo el poder sindical tras la ' +
      'huelga minera de 1984–1985 y aplicó políticas monetaristas. Dirigió la guerra de las Malvinas (1982), fue aliada ' +
      'estrecha de Reagan y aprobó la Sección 28 (1988), que prohibía a las autoridades locales «promover» la ' +
      'homosexualidad.',
    scores: { eco: 85, soc: 70, mig: -45, ide: -40, rel: -20, val: -40, ord: -50, pod: 10, eti: 20, geo: -75, des: -10, est: -30 },
    confidence: { eco: 'alta', soc: 'alta', rel: 'baja', pod: 'baja', eti: 'baja', geo: 'alta', des: 'baja', est: 'baja' },
    relativeToEra: true,
    sources: [
      wiki('Margaret_Thatcher'),
      { title: 'Wikipedia (inglés): Margaret Thatcher', url: 'https://en.wikipedia.org/wiki/Margaret_Thatcher' },
    ],
  },
  {
    id: 'ext-winston-churchill',
    name: 'Winston Churchill',
    kind: 'figuraExtranjera',
    subtitle: 'Reino Unido · Primer ministro (1940–1945 y 1951–1955), Partido Conservador',
    summary:
      'Dirigió al Reino Unido en la Segunda Guerra Mundial y defendió la «relación especial» con EE.UU. y la contención ' +
      'de la URSS («telón de acero», 1946). Defensor del Imperio británico, se opuso a la independencia de la India; su ' +
      'gobierno de los años cincuenta reprimió la rebelión Mau Mau en Kenia. Recibió el Nobel de Literatura en 1953.',
    scores: { eco: 30, soc: 0, mig: -40, ide: -75, rel: -10, val: -40, ord: -50, pod: 55, eti: 0, geo: -70, des: -30, est: -30 },
    confidence: { soc: 'baja', mig: 'baja', rel: 'baja', val: 'baja', eti: 'baja', geo: 'alta', des: 'baja', est: 'baja' },
    relativeToEra: true,
    sources: [wiki('Winston_Churchill')],
  },
  {
    id: 'ext-charles-de-gaulle',
    name: 'Charles de Gaulle',
    kind: 'figuraExtranjera',
    subtitle: 'Francia · Líder de la Francia Libre y presidente (1959–1969)',
    summary:
      'General que dirigió la Francia Libre en la Segunda Guerra Mundial y fundó la Quinta República (1958), con un ' +
      'Ejecutivo fuerte. Aceptó la independencia de Argelia (1962), sacó a Francia del mando integrado de la OTAN ' +
      '(1966), reconoció a la China comunista y criticó la guerra de Vietnam. Renunció en 1969 tras perder un ' +
      'referéndum.',
    scores: { eco: -30, soc: -40, mig: -20, ide: -50, rel: 10, val: -20, ord: -40, pod: -20, eti: 40, geo: 60, des: -40, est: 40 },
    confidence: { mig: 'baja', rel: 'baja', val: 'baja', ord: 'baja', eti: 'baja', geo: 'alta', des: 'baja' },
    relativeToEra: true,
    sources: [wiki('Charles_de_Gaulle')],
  },
  {
    id: 'ext-olof-palme',
    name: 'Olof Palme',
    kind: 'figuraExtranjera',
    subtitle: 'Suecia · Primer ministro (1969–1976 y 1982–1986), Partido Socialdemócrata',
    summary:
      'Líder socialdemócrata que amplió el Estado de bienestar, aprobó la ley de aborto de 1974 y mantuvo una política ' +
      'de refugiados abierta. Criticó la guerra de Vietnam y el apartheid, apoyó a movimientos del Tercer Mundo y ' +
      'visitó Cuba en 1975. Fue asesinado en Estocolmo en 1986.',
    scores: { eco: -55, soc: -85, mig: 60, ide: 60, rel: 60, val: 70, ord: 60, pod: 80, eti: 75, geo: 65, des: 20, est: -50 },
    confidence: { soc: 'alta', val: 'alta', geo: 'alta', des: 'baja' },
    relativeToEra: true,
    sources: [wiki('Olof_Palme')],
  },
  {
    id: 'ext-angela-merkel',
    name: 'Angela Merkel',
    kind: 'figuraExtranjera',
    subtitle: 'Alemania · Canciller federal (2005–2021), Unión Demócrata Cristiana',
    summary:
      'Primera mujer canciller de Alemania; gobernó 16 años en coaliciones encabezadas por la CDU. Exigió disciplina ' +
      'fiscal en la crisis del euro, decidió el abandono de la energía nuclear tras Fukushima (2011) y mantuvo abiertas ' +
      'las fronteras a más de un millón de solicitantes de asilo en 2015–2016. En 2017 permitió el voto libre sobre el ' +
      'matrimonio igualitario, aunque votó en contra. Se retiró de la política en 2021.',
    scores: { eco: 25, soc: -10, mig: 60, ide: 10, rel: -20, val: -10, ord: 30, pod: 55, eti: 40, geo: -35, des: 35, est: -70 },
    confidence: { mig: 'alta', rel: 'baja', ord: 'baja', pod: 'alta', eti: 'baja', est: 'alta' },
    asOf: '2026-09',
    sources: [
      wiki('Angela_Merkel'),
      { title: 'Wikipedia (inglés): Angela Merkel', url: 'https://en.wikipedia.org/wiki/Angela_Merkel' },
    ],
  },

  // ── Derechos civiles, descolonización y no violencia ──────────────────────────────────────────────────────────
  {
    id: 'ext-nelson-mandela',
    name: 'Nelson Mandela',
    kind: 'figuraExtranjera',
    subtitle: 'Sudáfrica · Presidente (1994–1999), Congreso Nacional Africano',
    summary:
      'Dirigente del Congreso Nacional Africano, estuvo preso 27 años por su lucha contra el apartheid. Como primer ' +
      'presidente elegido por sufragio universal promovió la reconciliación, la Comisión de la Verdad y una ' +
      'Constitución (1996) que prohíbe la discriminación por orientación sexual. Dejó el poder tras un solo mandato.',
    scores: { eco: -15, soc: -50, mig: 30, ide: 90, rel: 40, val: 65, ord: 60, pod: 90, eti: 60, geo: 55, des: 0, est: 30 },
    confidence: { mig: 'baja', ide: 'alta', rel: 'baja', val: 'alta', ord: 'alta', pod: 'alta', des: 'baja' },
    relativeToEra: true,
    sources: [wiki('Nelson_Mandela')],
  },
  {
    id: 'ext-martin-luther-king',
    name: 'Martin Luther King Jr.',
    kind: 'figuraExtranjera',
    subtitle: 'Estados Unidos · Pastor bautista y líder del movimiento por los derechos civiles (1955–1968)',
    summary:
      'Pastor bautista que encabezó la lucha no violenta contra la segregación racial, desde el boicot de autobuses de ' +
      'Montgomery (1955) hasta la Marcha sobre Washington (1963). Recibió el Nobel de la Paz en 1964, se opuso a la ' +
      'guerra de Vietnam y organizaba la Campaña de los Pobres cuando fue asesinado en 1968.',
    scores: { eco: -45, soc: -60, mig: 40, ide: 90, rel: -10, val: 40, ord: 85, pod: 50, eti: 50, geo: 60, des: 0, est: 70 },
    confidence: { mig: 'baja', ide: 'alta', rel: 'baja', val: 'baja', ord: 'alta', pod: 'baja', eti: 'baja', des: 'baja' },
    relativeToEra: true,
    sources: [wiki('Martin_Luther_King')],
  },
  {
    id: 'ext-mahatma-gandhi',
    name: 'Mahatma Gandhi',
    kind: 'figuraExtranjera',
    subtitle: 'India · Líder del movimiento de independencia (1915–1948)',
    summary:
      'Abogado y dirigente del Congreso Nacional Indio que condujo la independencia de la India mediante la ' +
      'desobediencia civil no violenta, como la Marcha de la Sal (1930). Defendió la autosuficiencia de las aldeas y la ' +
      'producción local (swadeshi), la unidad entre hindúes y musulmanes y el fin de la intocabilidad. Fue asesinado en ' +
      '1948 por un nacionalista hindú.',
    scores: { eco: -20, soc: -20, mig: 20, ide: 55, rel: 10, val: 0, ord: 95, pod: 30, eti: 80, geo: 75, des: 60, est: 75 },
    confidence: { eco: 'baja', soc: 'baja', mig: 'baja', rel: 'baja', val: 'baja', ord: 'alta', pod: 'baja' },
    relativeToEra: true,
    sources: [wiki('Mahatma_Gandhi')],
  },

  // ── Comunismo del siglo XX ────────────────────────────────────────────────────────────────────────────────────
  {
    id: 'ext-vladimir-lenin',
    name: 'Vladímir Lenin',
    kind: 'figuraExtranjera',
    subtitle: 'Rusia · Líder bolchevique; jefe del gobierno soviético (1917–1924)',
    summary:
      'Dirigió la Revolución de Octubre de 1917 y fundó el Estado soviético de partido único. Nacionalizó la industria y ' +
      'la tierra, creó la policía política (Cheka) y aplicó el «Terror Rojo» en la guerra civil; en 1921 introdujo la ' +
      'Nueva Política Económica, que permitió un mercado limitado. Su gobierno legalizó el aborto (1920) y persiguió a ' +
      'la Iglesia ortodoxa.',
    scores: { eco: -90, soc: -70, mig: -30, ide: 40, rel: 95, val: 60, ord: -95, pod: -85, eti: -30, geo: 85, des: -50, est: 95 },
    confidence: {
      eco: 'alta', mig: 'baja', rel: 'alta', ord: 'alta', pod: 'alta', eti: 'baja', des: 'baja', est: 'alta',
    },
    relativeToEra: true,
    sources: [
      wiki('Lenin'),
      { title: 'Wikipedia (inglés): Vladimir Lenin', url: 'https://en.wikipedia.org/wiki/Vladimir_Lenin' },
    ],
  },
  {
    id: 'ext-mao-zedong',
    name: 'Mao Zedong',
    kind: 'figuraExtranjera',
    subtitle: 'China · Presidente del Partido Comunista (1943–1976); fundador de la República Popular',
    summary:
      'Fundó la República Popular China en 1949 tras la guerra civil. Colectivizó la agricultura y lanzó el Gran Salto ' +
      'Adelante (1958–1962), seguido de una hambruna con decenas de millones de muertos, y la Revolución Cultural ' +
      '(1966–1976) contra la propia dirigencia del partido. Rompió con la URSS y en 1972 recibió a Nixon.',
    scores: { eco: -100, soc: -60, mig: -60, ide: -30, rel: 95, val: 30, ord: -100, pod: -100, eti: -40, geo: 85, des: -85, est: 85 },
    confidence: {
      eco: 'alta', mig: 'baja', ide: 'baja', rel: 'alta', val: 'baja', ord: 'alta', pod: 'alta', eti: 'baja', geo: 'alta',
    },
    relativeToEra: true,
    sources: [wiki('Mao_Zedong')],
  },
  {
    id: 'ext-deng-xiaoping',
    name: 'Deng Xiaoping',
    kind: 'figuraExtranjera',
    subtitle: 'China · Líder supremo (1978–1989)',
    summary:
      'Tras la muerte de Mao impulsó la «reforma y apertura»: descolectivizó el campo, creó zonas económicas especiales ' +
      'y abrió China a la inversión extranjera bajo el control del partido único. Estableció relaciones con EE.UU. ' +
      '(1979), aplicó la política del hijo único y ordenó la represión de las protestas de Tiananmén en 1989.',
    scores: { eco: -25, soc: 30, mig: -40, ide: -40, rel: 75, val: -20, ord: -90, pod: -20, eti: -30, geo: 40, des: -80, est: -60 },
    confidence: { soc: 'baja', mig: 'baja', ide: 'baja', val: 'baja', ord: 'alta', eti: 'baja' },
    relativeToEra: true,
    sources: [wiki('Deng_Xiaoping')],
  },

  // ── América Latina en el siglo XXI ────────────────────────────────────────────────────────────────────────────
  {
    id: 'ext-lula-da-silva',
    name: 'Luiz Inácio Lula da Silva',
    kind: 'figuraExtranjera',
    subtitle: 'Brasil · Presidente (2003–2010 y desde 2023), Partido de los Trabajadores',
    summary:
      'Exobrero metalúrgico y sindicalista, fundador del Partido de los Trabajadores. Sus gobiernos ampliaron programas ' +
      'sociales como Bolsa Família, impulsaron los BRICS y una política exterior multipolar y, en su tercer mandato, la ' +
      'reducción de la deforestación amazónica. Estuvo preso en 2018–2019; el Supremo anuló sus condenas en 2021.',
    scores: { eco: -40, soc: -70, mig: 45, ide: 60, rel: 10, val: 25, ord: 40, pod: 20, eti: 0, geo: 65, des: 15, est: -40 },
    confidence: { soc: 'alta', rel: 'baja', eti: 'baja', geo: 'alta' },
    asOf: '2026-09',
    sources: [wiki('Luiz_Inácio_Lula_da_Silva')],
  },
  {
    id: 'ext-jose-mujica',
    name: 'José Mujica',
    kind: 'figuraExtranjera',
    subtitle: 'Uruguay · Presidente (2010–2015), Frente Amplio',
    summary:
      'Exguerrillero tupamaro, estuvo preso de 1972 a 1985, casi todo ese tiempo bajo la dictadura. Durante su ' +
      'presidencia se legalizaron el aborto (2012), el matrimonio igualitario (2013) y la producción y venta regulada de ' +
      'marihuana (2013); fue conocido por su vida austera. Murió en 2025.',
    scores: { eco: -40, soc: -55, mig: 45, ide: 40, rel: 85, val: 85, ord: 45, pod: 80, eti: 75, geo: 40, des: 10, est: 30 },
    confidence: { ide: 'baja', rel: 'alta', val: 'alta', des: 'baja' },
    relativeToEra: true,
    sources: [wiki('José_Mujica')],
  },
  {
    id: 'ext-andres-manuel-lopez-obrador',
    name: 'Andrés Manuel López Obrador',
    kind: 'figuraExtranjera',
    subtitle: 'México · Presidente (2018–2024), Morena',
    summary:
      'Fundador de Morena; gobernó con la «Cuarta Transformación»: pensiones y becas universales, apoyo a Pemex y a la ' +
      'refinería de Dos Bocas, el Tren Maya y una Guardia Nacional bajo mando militar. Promovió la elección popular de ' +
      'jueces (2024) y la eliminación de órganos autónomos, y defendió la no intervención en política exterior. Se ' +
      'retiró de la vida pública al dejar el cargo.',
    scores: { eco: -50, soc: -55, mig: -20, ide: 50, rel: 0, val: -10, ord: -10, pod: -55, eti: 10, geo: 45, des: -70, est: 45 },
    confidence: { rel: 'baja', eti: 'baja' },
    asOf: '2026-09',
    sources: [wiki('Andrés_Manuel_López_Obrador')],
  },
  {
    id: 'ext-nayib-bukele',
    name: 'Nayib Bukele',
    kind: 'figuraExtranjera',
    subtitle: 'El Salvador · Presidente (desde 2019), Nuevas Ideas',
    summary:
      'Exalcalde de San Salvador que ganó la presidencia en 2019 frente a ARENA y el FMLN. Desde 2022 mantiene un ' +
      'régimen de excepción contra las pandillas con decenas de miles de detenidos, adoptó el bitcoin (2021) y fue ' +
      'reelegido en 2024; en 2025 una reforma constitucional habilitó la reelección indefinida. Su política de ' +
      'seguridad se invoca como modelo en el debate dominicano.',
    scores: { eco: 25, soc: 0, mig: -20, ide: -10, rel: -30, val: -55, ord: -95, pod: -90, eti: -40, geo: -60, des: -65, est: 80 },
    confidence: { soc: 'baja', mig: 'baja', ide: 'baja', rel: 'baja', ord: 'alta', pod: 'alta', est: 'alta' },
    asOf: '2026-09',
    sources: [wiki('Nayib_Bukele'), wiki('Régimen_de_excepción_en_El_Salvador')],
  },
  {
    id: 'ext-javier-milei',
    name: 'Javier Milei',
    kind: 'figuraExtranjera',
    subtitle: 'Argentina · Presidente (desde 2023), La Libertad Avanza',
    summary:
      'Economista que se define como anarcocapitalista y llegó a la presidencia en 2023 con un discurso contra «la ' +
      'casta» política. Aplicó un fuerte recorte del gasto público, desreguló la economía, redujo ministerios y se ' +
      'alineó con EE.UU. e Israel. Se opone al aborto legal y a lo que llama «ideología de género», y ha calificado el ' +
      'calentamiento global de invento del socialismo.',
    scores: { eco: 95, soc: 85, mig: -45, ide: -35, rel: -25, val: -60, ord: -60, pod: -30, eti: 30, geo: -85, des: -75, est: 85 },
    confidence: { eco: 'alta', soc: 'alta', ide: 'baja', rel: 'baja', eti: 'baja', geo: 'alta', des: 'alta', est: 'alta' },
    asOf: '2026-09',
    sources: [wiki('Javier_Milei')],
  },
  {
    id: 'ext-alvaro-uribe',
    name: 'Álvaro Uribe',
    kind: 'figuraExtranjera',
    subtitle: 'Colombia · Presidente (2002–2010), Centro Democrático',
    summary:
      'Gobernó con la «seguridad democrática» contra las guerrillas, apoyada en el Plan Colombia de EE.UU., e impulsó la ' +
      'reforma constitucional que permitió su reelección en 2006. Lideró el «No» al acuerdo de paz con las FARC (2016) ' +
      'y dirige el Centro Democrático. En 2025 fue condenado en primera instancia por soborno a testigos y absuelto en ' +
      'segunda instancia.',
    scores: { eco: 60, soc: 30, mig: 0, ide: -30, rel: -40, val: -60, ord: -85, pod: -60, eti: 10, geo: -90, des: -45, est: 10 },
    confidence: { mig: 'baja', ide: 'baja', rel: 'baja', ord: 'alta', pod: 'alta', eti: 'baja', geo: 'alta', est: 'baja' },
    asOf: '2026-09',
    sources: [wiki('Álvaro_Uribe_Vélez'), wiki('Política_de_seguridad_democrática')],
  },
  {
    id: 'ext-jair-bolsonaro',
    name: 'Jair Bolsonaro',
    kind: 'figuraExtranjera',
    subtitle: 'Brasil · Presidente (2019–2022), Partido Liberal',
    summary:
      'Capitán retirado y diputado durante 27 años. Como presidente flexibilizó el acceso a las armas, redujo la ' +
      'fiscalización ambiental en la Amazonía, defendió la dictadura de 1964 y se opuso al aborto y a la «ideología de ' +
      'género». En 2025 el Supremo Tribunal Federal lo condenó a 27 años de prisión por intento de golpe de Estado; ' +
      'comenzó a cumplir la pena en noviembre de 2025.',
    scores: { eco: 55, soc: 40, mig: -45, ide: -70, rel: -75, val: -90, ord: -85, pod: -85, eti: -20, geo: -65, des: -90, est: 55 },
    confidence: { rel: 'alta', val: 'alta', ord: 'alta', pod: 'alta', eti: 'baja', des: 'alta' },
    asOf: '2026-09',
    sources: [wiki('Jair_Bolsonaro')],
  },
];
