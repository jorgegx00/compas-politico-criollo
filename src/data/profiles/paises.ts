import type { Profile } from '../types.ts';

// Países por eje (docs/PLAN.md §11.11; dossiers docs/investigacion/07-paises.md y 20-paises-2026.md, datos a
// 2026-09). Puntajes calculados con índices proxy; ver fórmulas en el dossier 07 §3 y el script 07-paises-calc.py.
// Confianza por celda: 'alta' = medida con índice; sin marcar (media) = estimada en país de confianza alta/media
// o codificada con rúbrica propia (toda la columna `est`); 'baja' = estimada en Cuba, Haití, Puerto Rico y
// Venezuela, más Haití `soc` y `ord`, que reflejan el colapso del Estado y no una política. Haití sigue en
// confianza baja aunque, con los datos del dossier 20, la regla automática del script lo subiría a media
// (`FORCE_BAJA` en 07-paises-calc.py). `countriesByAxis` excluye las celdas 'baja'.

const HERITAGE = {
  title: 'Heritage Foundation, Index of Economic Freedom 2026 (tabla en Wikipedia)',
  url: 'https://es.wikipedia.org/wiki/%C3%8Dndice_de_Libertad_Econ%C3%B3mica',
};
const MIPEX = {
  title: 'MIPEX 2020, índice de políticas de integración de migrantes',
  url: 'https://www.mipex.eu/key-findings',
};
const VDEM = { title: 'V-Dem, índice de democracia liberal (edición 2026)', url: 'https://www.v-dem.net/' };
const EPI = { title: 'Yale, Environmental Performance Index 2026', url: 'https://epi.yale.edu/' };
const MCP = { title: 'Multiculturalism Policy Index (Queen’s University)', url: 'https://www.queensu.ca/mcp/' };
const TI = {
  title: 'Transparencia Internacional, Índice de Percepción de la Corrupción 2025',
  url: 'https://www.transparency.org/en/cpi/2025',
};
const CEPAL = { title: 'CEPALSTAT, gasto público social', url: 'https://statistics.cepal.org/portal/cepalstat/' };
const ONU = {
  title: 'Departamento de Estado de EE.UU., Voting Practices in the United Nations 2023',
  url: 'https://www.state.gov/wp-content/uploads/2024/10/Voting-Practices-of-UN-Members_2023-Report.pdf',
};
const UNIONES_AM = {
  title: 'Reconocimiento de uniones del mismo sexo en las Américas (Wikipedia)',
  url: 'https://en.wikipedia.org/wiki/Recognition_of_same-sex_unions_in_the_Americas',
};
const WJP = {
  title: 'World Justice Project, Rule of Law Index 2025',
  url: 'https://worldjusticeproject.org/rule-of-law-index/',
};
const EPI2024 = {
  title: 'Environmental Performance Index 2024 (Wikipedia)',
  url: 'https://en.wikipedia.org/wiki/Environmental_Performance_Index',
};
const SOCX = {
  title: 'OCDE, base de datos de gasto social (SOCX)',
  url: 'https://www.oecd.org/social/expenditure.htm',
};
const PRISON = { title: 'World Prison Brief, tasas de encarcelamiento', url: 'https://www.prisonstudies.org/' };
const UNIONES_PL = {
  title: 'Reconocimiento de uniones del mismo sexo en Polonia (Wikipedia)',
  url: 'https://en.wikipedia.org/wiki/Recognition_of_same-sex_unions_in_Poland',
};
const COFOG = {
  title: 'FMI, Government Finance Statistics por función (COFOG), gobierno general',
  url: 'https://data.imf.org/en/datasets/IMF.STA:GFS_COFOG',
};
const OIT_WSPR = {
  title: 'OIT, World Social Protection Report 2024–26, anexo 6 (gasto en protección social y salud)',
  url: 'https://www.ilo.org/sites/default/files/2024-09/WSPR_2024_EN_WEB_1.pdf',
};
const GPC_AR = {
  title: 'Ministerio de Economía de Argentina, Gasto Público Consolidado 2009–2024',
  url: 'https://www.argentina.gob.ar/sites/default/files/gasto_publico_consolidado_2009-2024.pdf',
};
const FEDREG_PE = {
  title: 'Federal Register: Perú, aliado mayor extra-OTAN (determinación del 14-ene-2026)',
  url: 'https://www.federalregister.gov/documents/2026/01/23/2026-01422/presidential-determination-on-designation-of-the-republic-of-peru-as-a-major-non-nato-ally',
};
const FEDREG_SA = {
  title: 'Federal Register: Arabia Saudita, aliado mayor extra-OTAN (determinación del 13-ene-2026)',
  url: 'https://www.federalregister.gov/documents/2026/01/23/2026-01421/presidential-determination-on-designation-of-the-kingdom-of-saudi-arabia-as-a-major-non-nato-ally',
};
const DPTL_IL = {
  title: 'Ley de pena de muerte para terroristas de Israel, 2026 (Wikipedia)',
  url: 'https://en.wikipedia.org/wiki/Death_Penalty_for_Terrorists_Law',
};
const HRW_HU = {
  title: 'Human Rights Watch, reformas a las leyes anti-LGBT de Hungría (2026)',
  url: 'https://www.hrw.org/news/2026/09/16/reforms-to-hungarys-anti-lgbt-laws-welcome-but-more-to-do',
};

/** 45 países comparables por eje. La fila de control del Estado dominicano va aparte (`estadoDominicano`). */
export const paises: Profile[] = [
  {
    id: 'pais-eeuu',
    name: 'EE.UU.',
    kind: 'pais',
    flag: '🇺🇸',
    subtitle: 'Norteamérica · república federal presidencial',
    summary:
      'Economía de mercado con pensiones públicas y seguro de salud mayormente privado. El aborto lo regula cada estado y el matrimonio igualitario es legal en todo el país. Aplica la pena de muerte. En 2025–26 impulsó deportaciones masivas, restringió el asilo en la frontera y salió del Acuerdo de París. Miembro fundador de la OTAN.',
    scores: { eco: 65, soc: -20, mig: -35, ide: 20, rel: 50, val: 50, ord: -35, pod: 30, eti: 30, geo: -100, des: 30, est: 60 },
    confidence: {
      eco: 'alta', soc: 'alta', mig: 'alta', ide: 'alta', rel: 'alta', val: 'alta', ord: 'alta', pod: 'alta',
      eti: 'alta', geo: 'alta', des: 'alta',
    },
    sources: [HERITAGE, MIPEX, VDEM, EPI],
  },
  {
    id: 'pais-canada',
    name: 'Canadá',
    kind: 'pais',
    flag: '🇨🇦',
    subtitle: 'Norteamérica · monarquía constitucional parlamentaria federal',
    summary:
      'Economía de mercado abierta con sanidad pública universal. Aborto sin restricciones penales y matrimonio igualitario desde 2005. Pena de muerte abolida. Política oficial de multiculturalismo desde 1971 e inmigración selectiva por puntos. Miembro de la OTAN.',
    scores: { eco: 80, soc: -30, mig: 15, ide: 85, rel: 75, val: 100, ord: 75, pod: 55, eti: 50, geo: -55, des: 50, est: -75 },
    confidence: {
      eco: 'alta', soc: 'alta', mig: 'alta', ide: 'alta', rel: 'alta', val: 'alta', ord: 'alta', pod: 'alta',
      eti: 'alta', geo: 'alta', des: 'alta',
    },
    sources: [HERITAGE, MIPEX, MCP, TI],
  },
  {
    id: 'pais-mexico',
    name: 'México',
    kind: 'pais',
    flag: '🇲🇽',
    subtitle: 'Norteamérica · república federal presidencial',
    summary:
      'Economía mixta con petróleo y electricidad bajo predominio estatal y pensiones en cuentas individuales (Afores). La Constitución reconoce una nación pluricultural y un Estado laico. Aborto despenalizado en la mayoría de los estados y matrimonio igualitario en todo el país. Guardia Nacional con mando militar. Sin reelección presidencial.',
    scores: { eco: 0, soc: 60, mig: -30, ide: 75, rel: 100, val: 90, ord: 0, pod: -30, eti: -45, geo: -10, des: 5, est: 0 },
    confidence: {
      eco: 'alta', soc: 'alta', mig: 'alta', rel: 'alta', val: 'alta', ord: 'alta', pod: 'alta', eti: 'alta',
      geo: 'alta', des: 'alta',
    },
    sources: [HERITAGE, CEPAL, VDEM, TI],
  },
  {
    id: 'pais-cuba',
    name: 'Cuba',
    kind: 'pais',
    flag: '🇨🇺',
    subtitle: 'Caribe · Estado socialista de partido único',
    summary:
      'Economía de planificación central con salud y educación exclusivamente estatales y reformas de mercado parciales en 2026. Partido único por Constitución. Aborto legal desde 1965 y matrimonio igualitario desde el Código de las Familias (2022). Pena de muerte vigente sin ejecuciones recientes. Bajo sanciones y bloqueo petrolero de EE.UU.; aliada de Rusia y China.',
    scores: { eco: -100, soc: -60, mig: -25, ide: -60, rel: 80, val: 100, ord: -85, pod: -65, eti: -20, geo: 90, des: 10, est: -60 },
    confidence: {
      eco: 'alta', soc: 'alta', mig: 'baja', ide: 'baja', rel: 'alta', val: 'alta', ord: 'baja', pod: 'alta',
      eti: 'alta', geo: 'alta', des: 'baja',
    },
    sources: [HERITAGE, VDEM, TI, ONU],
  },
  {
    id: 'pais-haiti',
    name: 'Haití',
    kind: 'pais',
    flag: '🇭🇹',
    subtitle: 'Caribe · gobierno interino sin presidente',
    summary:
      'Estado con capacidad muy reducida: grupos armados controlan buena parte de la capital y el gasto social es mínimo. Aborto prohibido (un nuevo Código Penal lo despenalizaría hasta la semana 12 desde enero de 2027) y sin reconocimiento de parejas del mismo sexo. Sin presidente desde febrero de 2026: gobierna un primer ministro interino, con elecciones el 13-dic. Gasto social y orden reflejan el colapso del Estado.',
    scores: { eco: -70, soc: 100, mig: -20, ide: -10, rel: 50, val: -50, ord: 10, pod: -65, eti: -70, geo: -15, des: -50, est: -40 },
    confidence: {
      eco: 'alta', soc: 'baja', mig: 'baja', ide: 'baja', rel: 'alta', val: 'alta', ord: 'baja', pod: 'alta',
      eti: 'alta', geo: 'alta', des: 'alta', est: 'baja',
    },
    sources: [
      HERITAGE,
      VDEM,
      TI,
      EPI,
      OIT_WSPR,
      {
        title: 'Elecciones generales de Haití de 2026 (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/2026_Haitian_general_election',
      },
    ],
  },
  {
    id: 'pais-puerto-rico',
    name: 'Puerto Rico',
    kind: 'pais',
    flag: '🇵🇷',
    subtitle: 'Caribe · Estado Libre Asociado (territorio de EE.UU.)',
    summary:
      'Territorio de EE.UU. sin voto en el Congreso federal: migración, defensa y política exterior las fija Washington. Aborto legal por ley local y matrimonio igualitario desde 2015. Operativos federales de inmigración en 2025–26. Casi todos sus puntajes son estimados porque los índices internacionales no lo miden por separado.',
    scores: { eco: 10, soc: -20, mig: -35, ide: -50, rel: 90, val: 90, ord: 25, pod: 20, eti: -10, geo: -95, des: 20, est: -60 },
    confidence: {
      eco: 'baja', soc: 'baja', mig: 'alta', ide: 'baja', rel: 'alta', val: 'alta', ord: 'baja', pod: 'baja',
      eti: 'baja', geo: 'alta', des: 'baja',
    },
    sources: [MIPEX, ONU, UNIONES_AM],
  },
  {
    id: 'pais-jamaica',
    name: 'Jamaica',
    kind: 'pais',
    flag: '🇯🇲',
    subtitle: 'Caribe · monarquía constitucional parlamentaria',
    summary:
      'Democracia parlamentaria de la Commonwealth con economía abierta y reformas fiscales desde 2013. Aborto permitido solo para proteger la vida o la salud de la mujer; las relaciones sexuales entre hombres siguen penalizadas. Pena de muerte vigente sin ejecuciones desde 1988. Socio de seguridad de EE.UU.',
    scores: { eco: 40, soc: 75, mig: -15, ide: -40, rel: 75, val: -60, ord: 25, pod: 45, eti: -10, geo: -20, des: -5, est: -75 },
    confidence: {
      eco: 'alta', rel: 'alta', val: 'alta', ord: 'alta', pod: 'alta', eti: 'alta', geo: 'alta', des: 'alta',
    },
    sources: [HERITAGE, VDEM, TI, WJP],
  },
  {
    id: 'pais-venezuela',
    name: 'Venezuela',
    kind: 'pais',
    flag: '🇻🇪',
    subtitle: 'Sudamérica · régimen presidencial en transición',
    summary:
      'Economía de fuerte control estatal dependiente del petróleo; en 2026 abrió el sector petrolero a privados. Reelección indefinida desde 2009 y democracia liberal muy baja según V-Dem. Aborto solo para salvar la vida y sin reconocer parejas del mismo sexo. Tras el cambio de gobierno de enero de 2026, EE.UU. reconoció al gobierno interino (marzo) y el país salió de la CPI (julio). Los índices son anteriores.',
    scores: { eco: -100, soc: 30, mig: -15, ide: 75, rel: 50, val: -25, ord: -30, pod: -90, eti: -80, geo: 10, des: 15, est: -40 },
    confidence: {
      eco: 'alta', soc: 'baja', mig: 'baja', ide: 'baja', rel: 'alta', val: 'alta', ord: 'alta', pod: 'alta',
      eti: 'alta', geo: 'baja', des: 'baja', est: 'baja',
    },
    sources: [
      HERITAGE,
      VDEM,
      TI,
      EPI2024,
      {
        title: '2026 en Venezuela (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/2026_in_Venezuela',
      },
    ],
  },
  {
    id: 'pais-colombia',
    name: 'Colombia',
    kind: 'pais',
    flag: '🇨🇴',
    subtitle: 'Sudamérica · república presidencial',
    summary:
      'Economía de mercado con peso del sector minero-energético. Constitución pluriétnica con derechos indígenas y afrodescendientes. Aborto a petición hasta la semana 24 (2022) y matrimonio igualitario desde 2016. Mantiene el permiso de protección para unos 2 millones de venezolanos, pero desde agosto de 2026 ordena deportar a los irregulares. Aliado mayor extra-OTAN de EE.UU.; presidente outsider de derecha desde 2026.',
    scores: { eco: 0, soc: 10, mig: 5, ide: 75, rel: 40, val: 100, ord: 15, pod: 35, eti: -25, geo: -45, des: 15, est: 90 },
    confidence: {
      eco: 'alta', soc: 'alta', rel: 'alta', val: 'alta', ord: 'alta', pod: 'alta', eti: 'alta', geo: 'alta',
      des: 'alta',
    },
    sources: [
      HERITAGE,
      CEPAL,
      VDEM,
      TI,
      {
        title: 'Infobae: la Defensoría critica la orden de deportar a migrantes irregulares (9-sep-2026)',
        url: 'https://www.infobae.com/colombia/2026/09/09/defensora-del-pueblo-critico-a-abelardo-de-la-espriella-por-impulsar-la-deportacion-de-migrantes-irregulares-de-colombia-tambien-tienen-derechos/',
      },
    ],
  },
  {
    id: 'pais-brasil',
    name: 'Brasil',
    kind: 'pais',
    flag: '🇧🇷',
    subtitle: 'Sudamérica · república federal presidencial',
    summary:
      'Economía con fuerte intervención estatal, bancos públicos y sistema universal de salud (SUS). Aborto solo en tres supuestos y matrimonio igualitario por decisión judicial desde 2013. Acogida de venezolanos con la Operação Acolhida. Miembro fundador de los BRICS y aliado mayor extra-OTAN de EE.UU.',
    scores: { eco: -40, soc: -40, mig: 45, ide: 50, rel: 40, val: 50, ord: -10, pod: 55, eti: -30, geo: 20, des: 15, est: -40 },
    confidence: {
      eco: 'alta', soc: 'alta', mig: 'alta', rel: 'alta', val: 'alta', ord: 'alta', pod: 'alta', eti: 'alta',
      geo: 'alta', des: 'alta',
    },
    sources: [HERITAGE, CEPAL, MIPEX, VDEM],
  },
  {
    id: 'pais-argentina',
    name: 'Argentina',
    kind: 'pais',
    flag: '🇦🇷',
    subtitle: 'Sudamérica · república federal presidencial',
    summary:
      'Programa de desregulación y ajuste fiscal desde fines de 2023: el gasto social consolidado bajó a cerca del 18 % del PIB en 2024. Aborto legal hasta la semana 14 (2020) y matrimonio igualitario desde 2010; un decreto de 2025 restringió tratamientos de género a menores. Endurecimiento migratorio por decreto en 2025. Aliado mayor extra-OTAN y de los países que más votan con EE.UU. en la ONU.',
    scores: { eco: -15, soc: -20, mig: -5, ide: 10, rel: 25, val: 90, ord: 30, pod: 20, eti: -30, geo: -60, des: 5, est: 90 },
    confidence: {
      eco: 'alta', soc: 'alta', mig: 'alta', rel: 'alta', val: 'alta', ord: 'alta', pod: 'alta', eti: 'alta',
      geo: 'alta', des: 'alta',
    },
    sources: [HERITAGE, CEPAL, GPC_AR, VDEM, ONU],
  },
  {
    id: 'pais-chile',
    name: 'Chile',
    kind: 'pais',
    flag: '🇨🇱',
    subtitle: 'Sudamérica · república presidencial',
    summary:
      'Economía abierta con pensiones de capitalización individual (AFP) y salud mixta pública y privada. Aborto en tres causales (2017) y matrimonio igualitario desde 2022. Desde 2026 aplica un plan de zanjas en la frontera norte y vuelos de expulsión de migrantes. Sin reelección presidencial inmediata. Puntaje alto de democracia liberal en V-Dem.',
    scores: { eco: 70, soc: 35, mig: -40, ide: 10, rel: 75, val: 50, ord: 25, pod: 75, eti: 25, geo: -35, des: 25, est: 10 },
    confidence: {
      eco: 'alta', soc: 'alta', mig: 'alta', rel: 'alta', val: 'alta', ord: 'alta', pod: 'alta', eti: 'alta',
      geo: 'alta', des: 'alta',
    },
    sources: [HERITAGE, SOCX, MIPEX, TI],
  },
  {
    id: 'pais-uruguay',
    name: 'Uruguay',
    kind: 'pais',
    flag: '🇺🇾',
    subtitle: 'Sudamérica · república presidencial',
    summary:
      'Protección social amplia y empresas públicas en energía y telecomunicaciones. Separación entre Iglesia y Estado desde 1918. Aborto a petición hasta la semana 12 (2012), matrimonio igualitario (2013) y mercado regulado de cannabis. Política migratoria de acogida. Sin reelección presidencial inmediata.',
    scores: { eco: 50, soc: -40, mig: 40, ide: -25, rel: 100, val: 100, ord: 35, pod: 75, eti: 45, geo: 0, des: -30, est: -60 },
    confidence: {
      eco: 'alta', soc: 'alta', rel: 'alta', val: 'alta', ord: 'alta', pod: 'alta', eti: 'alta', geo: 'alta',
      des: 'alta',
    },
    sources: [HERITAGE, CEPAL, VDEM, TI],
  },
  {
    id: 'pais-peru',
    name: 'Perú',
    kind: 'pais',
    flag: '🇵🇪',
    subtitle: 'Sudamérica · república presidencial',
    summary:
      'Economía abierta con pensiones privadas (AFP) y gasto social bajo. La Constitución reconoce el papel de la Iglesia católica (acuerdo de 1980). Aborto solo para proteger la vida o la salud de la mujer y sin reconocimiento de parejas del mismo sexo. Estados de emergencia en Lima y Callao. Alta rotación presidencial desde 2018; nuevo gobierno desde julio de 2026. Aliado mayor extra-OTAN de EE.UU. desde enero de 2026.',
    scores: { eco: 30, soc: 80, mig: -35, ide: 60, rel: -10, val: -40, ord: 0, pod: 25, eti: -40, geo: -40, des: -15, est: -10 },
    confidence: {
      eco: 'alta', soc: 'alta', rel: 'alta', val: 'alta', ord: 'alta', pod: 'alta', eti: 'alta', geo: 'alta',
      des: 'alta',
    },
    sources: [HERITAGE, SOCX, VDEM, TI, FEDREG_PE],
  },
  {
    id: 'pais-ecuador',
    name: 'Ecuador',
    kind: 'pais',
    flag: '🇪🇨',
    subtitle: 'Sudamérica · república presidencial',
    summary:
      'Economía dolarizada con peso estatal en el petróleo. La Constitución de 2008 define un Estado plurinacional e intercultural y reconoce derechos de la naturaleza. Aborto por violación o riesgo para la vida y matrimonio igualitario desde 2019. Declaró un "conflicto armado interno" contra el crimen organizado en 2024. Socio de seguridad de EE.UU.',
    scores: { eco: -20, soc: 25, mig: -30, ide: 90, rel: 50, val: 50, ord: -5, pod: -5, eti: -35, geo: -35, des: 0, est: 40 },
    confidence: {
      eco: 'alta', soc: 'alta', rel: 'alta', val: 'alta', ord: 'alta', pod: 'alta', eti: 'alta', geo: 'alta',
      des: 'alta',
    },
    sources: [HERITAGE, WJP, VDEM, TI, OIT_WSPR],
  },
  {
    id: 'pais-bolivia',
    name: 'Bolivia',
    kind: 'pais',
    flag: '🇧🇴',
    subtitle: 'Sudamérica · república presidencial (Estado Plurinacional)',
    summary:
      'Estado Plurinacional por la Constitución de 2009, con idiomas indígenas oficiales junto al castellano y control estatal amplio de hidrocarburos y minería. Aborto en causales limitadas; uniones libres para parejas del mismo sexo desde 2023, sin matrimonio igualitario. Tras el cambio de gobierno de noviembre de 2025 restableció relaciones con EE.UU.',
    scores: { eco: -90, soc: 40, mig: -5, ide: 100, rel: 50, val: 25, ord: 0, pod: -15, eti: -45, geo: 0, des: -25, est: 0 },
    confidence: {
      eco: 'alta', soc: 'alta', rel: 'alta', val: 'alta', ord: 'alta', pod: 'alta', eti: 'alta', geo: 'alta',
      des: 'alta',
    },
    sources: [HERITAGE, CEPAL, VDEM, TI],
  },
  {
    id: 'pais-costa-rica',
    name: 'Costa Rica',
    kind: 'pais',
    flag: '🇨🇷',
    subtitle: 'Centroamérica · república presidencial',
    summary:
      'Democracia sin ejército desde 1948, con seguro social universal (CCSS). El catolicismo es la religión oficial del Estado por Constitución. Aborto solo para proteger la vida o la salud de la mujer y matrimonio igualitario desde 2020. Sin reelección presidencial inmediata. Pagos por servicios ambientales desde los años noventa.',
    scores: { eco: 45, soc: 25, mig: -10, ide: 25, rel: -50, val: 25, ord: 40, pod: 80, eti: 10, geo: -25, des: 15, est: 50 },
    confidence: {
      eco: 'alta', soc: 'alta', rel: 'alta', val: 'alta', ord: 'alta', pod: 'alta', eti: 'alta', geo: 'alta',
      des: 'alta',
    },
    sources: [HERITAGE, CEPAL, VDEM, EPI],
  },
  {
    id: 'pais-panama',
    name: 'Panamá',
    kind: 'pais',
    flag: '🇵🇦',
    subtitle: 'Centroamérica · república presidencial',
    summary:
      'Economía de servicios dolarizada en torno al Canal y la banca, con seguro social público (CSS) y gasto social bajo. Aborto en causales limitadas y sin reconocimiento de parejas del mismo sexo. Memorando de seguridad con EE.UU. (2025) y control reforzado del paso migratorio del Darién. Sin reelección presidencial inmediata.',
    scores: { eco: 25, soc: 55, mig: -40, ide: 0, rel: 25, val: 0, ord: 10, pod: 35, eti: -35, geo: -35, des: 0, est: -10 },
    confidence: {
      eco: 'alta', soc: 'alta', rel: 'alta', val: 'alta', ord: 'alta', pod: 'alta', eti: 'alta', geo: 'alta',
      des: 'alta',
    },
    sources: [HERITAGE, VDEM, TI, WJP, OIT_WSPR],
  },
  {
    id: 'pais-el-salvador',
    name: 'El Salvador',
    kind: 'pais',
    flag: '🇸🇻',
    subtitle: 'Centroamérica · república presidencial con reelección indefinida',
    summary:
      'Régimen de excepción contra las pandillas desde 2022, prorrogado hasta octubre de 2026, y la tasa de encarcelamiento más alta del mundo según el World Prison Brief. Reelección presidencial indefinida desde 2025. Aborto prohibido en todos los casos y sin reconocimiento de parejas del mismo sexo. Pensiones privadas (AFP). Acceso militar de EE.UU. al aeropuerto de Comalapa.',
    scores: { eco: -10, soc: 65, mig: -30, ide: -60, rel: 40, val: -60, ord: -80, pod: -80, eti: -35, geo: -40, des: -60, est: 60 },
    confidence: {
      eco: 'alta', soc: 'alta', rel: 'alta', val: 'alta', ord: 'alta', pod: 'alta', eti: 'alta', geo: 'alta',
      des: 'alta',
    },
    sources: [HERITAGE, WJP, PRISON, VDEM],
  },
  {
    id: 'pais-nicaragua',
    name: 'Nicaragua',
    kind: 'pais',
    flag: '🇳🇮',
    subtitle: 'Centroamérica · régimen presidencial de partido dominante',
    summary:
      'Reelección indefinida y copresidencia creadas por la reforma constitucional de 2025; su índice de democracia liberal en V-Dem está entre los más bajos del mundo. Aborto prohibido en todos los casos desde 2006 y sin reconocimiento de parejas del mismo sexo. Cierre de miles de ONG y universidades y expulsión de sacerdotes. Bajo sanciones de EE.UU.; alineada con Rusia, China y Cuba.',
    scores: { eco: -30, soc: 50, mig: -20, ide: 40, rel: 80, val: -50, ord: -30, pod: -90, eti: -70, geo: 100, des: -15, est: -40 },
    confidence: {
      eco: 'alta', rel: 'alta', val: 'alta', ord: 'alta', pod: 'alta', eti: 'alta', geo: 'alta', des: 'alta',
    },
    sources: [HERITAGE, VDEM, TI, ONU],
  },
  {
    id: 'pais-guatemala',
    name: 'Guatemala',
    kind: 'pais',
    flag: '🇬🇹',
    subtitle: 'Centroamérica · república presidencial',
    summary:
      'Economía de mercado con recaudación tributaria y gasto social entre los más bajos de la región. Más del 40 % de la población es indígena; la Constitución reconoce a los pueblos indígenas sin definir un Estado plurinacional. Aborto solo para salvar la vida de la mujer y sin reconocimiento de parejas del mismo sexo. Sin reelección presidencial.',
    scores: { eco: 20, soc: 80, mig: -30, ide: 40, rel: 50, val: -25, ord: 20, pod: 25, eti: -50, geo: -30, des: -55, est: 0 },
    confidence: {
      eco: 'alta', soc: 'alta', rel: 'alta', val: 'alta', ord: 'alta', pod: 'alta', eti: 'alta', geo: 'alta',
      des: 'alta',
    },
    sources: [HERITAGE, CEPAL, TI, EPI],
  },
  {
    id: 'pais-honduras',
    name: 'Honduras',
    kind: 'pais',
    flag: '🇭🇳',
    subtitle: 'Centroamérica · república presidencial',
    summary:
      'Economía con alta dependencia de las remesas y gasto social público bajo. Aborto prohibido en todos los casos y matrimonio igualitario vetado en la Constitución (reforma de 2021). Estado de excepción contra la extorsión entre 2022 y enero de 2026. Cooperación militar con EE.UU. en la base de Soto Cano.',
    scores: { eco: -5, soc: 75, mig: -30, ide: 10, rel: 75, val: -60, ord: 0, pod: -15, eti: -55, geo: -40, des: -30, est: -50 },
    confidence: {
      eco: 'alta', rel: 'alta', val: 'alta', ord: 'alta', pod: 'alta', eti: 'alta', geo: 'alta', des: 'alta',
    },
    sources: [HERITAGE, WJP, VDEM, TI],
  },
  {
    id: 'pais-espana',
    name: 'España',
    kind: 'pais',
    flag: '🇪🇸',
    subtitle: 'Europa · monarquía parlamentaria',
    summary:
      'Estado de bienestar con sanidad pública universal y comunidades autónomas con lenguas cooficiales. Acuerdos con la Santa Sede y asignación tributaria a la Iglesia. Aborto a petición hasta la semana 14 y matrimonio igualitario desde 2005. Regularización extraordinaria de inmigrantes en 2026, con 1.2 millones de solicitudes. Miembro de la UE y la OTAN.',
    scores: { eco: 35, soc: -85, mig: 40, ide: 10, rel: 25, val: 100, ord: 65, pod: 55, eti: 10, geo: -35, des: 85, est: -50 },
    confidence: {
      eco: 'alta', soc: 'alta', mig: 'alta', ide: 'alta', rel: 'alta', val: 'alta', ord: 'alta', pod: 'alta',
      eti: 'alta', geo: 'alta', des: 'alta',
    },
    sources: [HERITAGE, SOCX, MIPEX, EPI],
  },
  {
    id: 'pais-francia',
    name: 'Francia',
    kind: 'pais',
    flag: '🇫🇷',
    subtitle: 'Europa · república semipresidencial',
    summary:
      'Gasto social público entre los más altos del mundo (≈31 % del PIB). Laicidad estricta desde la ley de 1905. El aborto está garantizado en la Constitución desde 2024 y el matrimonio igualitario es legal desde 2013. Modelo de integración republicano que no reconoce a las minorías como grupos. Miembro de la UE y la OTAN, con armas nucleares propias.',
    scores: { eco: 25, soc: -100, mig: -10, ide: -60, rel: 90, val: 100, ord: 55, pod: 70, eti: 30, geo: -50, des: 100, est: -60 },
    confidence: {
      eco: 'alta', soc: 'alta', mig: 'alta', ide: 'alta', rel: 'alta', val: 'alta', ord: 'alta', pod: 'alta',
      eti: 'alta', geo: 'alta', des: 'alta',
    },
    sources: [HERITAGE, SOCX, MIPEX, EPI],
  },
  {
    id: 'pais-alemania',
    name: 'Alemania',
    kind: 'pais',
    flag: '🇩🇪',
    subtitle: 'Europa · república federal parlamentaria',
    summary:
      'Economía social de mercado con seguridad social amplia. Las iglesias se financian con un impuesto eclesiástico que recauda el Estado y hay enseñanza religiosa en la escuela pública. Aborto sin pena hasta la semana 12 con asesoría obligatoria y matrimonio igualitario desde 2017. Controles fronterizos reforzados en 2024–26. Miembro de la UE y la OTAN.',
    scores: { eco: 60, soc: -100, mig: -20, ide: -25, rel: -10, val: 100, ord: 85, pod: 60, eti: 55, geo: -60, des: 100, est: -90 },
    confidence: {
      eco: 'alta', soc: 'alta', mig: 'alta', ide: 'alta', rel: 'alta', val: 'alta', ord: 'alta', pod: 'alta',
      eti: 'alta', geo: 'alta', des: 'alta',
    },
    sources: [HERITAGE, SOCX, MIPEX, TI],
  },
  {
    id: 'pais-reino-unido',
    name: 'Reino Unido',
    kind: 'pais',
    flag: '🇬🇧',
    subtitle: 'Europa · monarquía constitucional parlamentaria',
    summary:
      'Sanidad pública universal (NHS). La Iglesia de Inglaterra es la iglesia establecida, con obispos en la Cámara de los Lores. Aborto con autorización médica amplia en Gran Bretaña y matrimonio igualitario. Endurecimiento del asilo y de las llegadas en bote en 2024–26. Fuera de la UE desde 2020; miembro de la OTAN con armas nucleares.',
    scores: { eco: 50, soc: -60, mig: -25, ide: 65, rel: -40, val: 90, ord: 65, pod: 45, eti: 40, geo: -70, des: 100, est: -40 },
    confidence: {
      eco: 'alta', soc: 'alta', mig: 'alta', ide: 'alta', rel: 'alta', val: 'alta', ord: 'alta', pod: 'alta',
      eti: 'alta', geo: 'alta', des: 'alta',
    },
    sources: [HERITAGE, MIPEX, MCP, EPI],
  },
  {
    id: 'pais-italia',
    name: 'Italia',
    kind: 'pais',
    flag: '🇮🇹',
    subtitle: 'Europa · república parlamentaria',
    summary:
      'Gasto en pensiones entre los más altos de Europa. Concordato con la Santa Sede y clase de religión católica optativa en la escuela pública. Aborto a petición en los primeros 90 días (ley de 1978); uniones civiles para parejas del mismo sexo desde 2016, sin matrimonio igualitario. Acuerdos para tramitar solicitudes de asilo fuera de su territorio. Miembro de la UE y la OTAN.',
    scores: { eco: 15, soc: -95, mig: -20, ide: -25, rel: 25, val: 75, ord: 55, pod: 35, eti: 5, geo: -65, des: 65, est: -10 },
    confidence: {
      eco: 'alta', soc: 'alta', mig: 'alta', ide: 'alta', rel: 'alta', val: 'alta', ord: 'alta', pod: 'alta',
      eti: 'alta', geo: 'alta', des: 'alta',
    },
    sources: [HERITAGE, SOCX, MIPEX, TI],
  },
  {
    id: 'pais-suecia',
    name: 'Suecia',
    kind: 'pais',
    flag: '🇸🇪',
    subtitle: 'Europa · monarquía constitucional parlamentaria',
    summary:
      'Estado de bienestar universal financiado con impuestos altos, con mercados abiertos y pensiones con un componente de cuentas individuales. Iglesia separada del Estado desde 2000. Aborto a petición hasta la semana 18 y matrimonio igualitario desde 2009. Leyes migratorias endurecidas desde 2022. Miembro de la UE y de la OTAN desde 2024. Gobierno en funciones tras la victoria opositora de septiembre de 2026.',
    scores: { eco: 90, soc: -85, mig: 5, ide: 50, rel: 90, val: 100, ord: 85, pod: 75, eti: 60, geo: -55, des: 95, est: -90 },
    confidence: {
      eco: 'alta', soc: 'alta', mig: 'alta', ide: 'alta', rel: 'alta', val: 'alta', ord: 'alta', pod: 'alta',
      eti: 'alta', geo: 'alta', des: 'alta',
    },
    sources: [
      HERITAGE, MIPEX, MCP, TI,
      {
        title: 'Wikipedia — Elecciones generales de Suecia de 2026',
        url: 'https://en.wikipedia.org/wiki/2026_Swedish_general_election',
      },
    ],
  },
  {
    id: 'pais-noruega',
    name: 'Noruega',
    kind: 'pais',
    flag: '🇳🇴',
    subtitle: 'Europa · monarquía constitucional parlamentaria',
    summary:
      'Estado de bienestar universal respaldado por un fondo soberano petrolero. La Iglesia de Noruega sigue siendo iglesia nacional con financiación pública. Aborto a petición y matrimonio igualitario desde 2009. Pena de muerte abolida y una de las tasas de encarcelamiento más bajas de Europa. Miembro de la OTAN, fuera de la UE.',
    scores: { eco: 95, soc: -70, mig: 5, ide: 15, rel: -10, val: 100, ord: 100, pod: 75, eti: 60, geo: -55, des: 95, est: -90 },
    confidence: {
      eco: 'alta', soc: 'alta', mig: 'alta', ide: 'alta', rel: 'alta', val: 'alta', ord: 'alta', pod: 'alta',
      eti: 'alta', geo: 'alta', des: 'alta',
    },
    sources: [HERITAGE, SOCX, WJP, TI],
  },
  {
    id: 'pais-dinamarca',
    name: 'Dinamarca',
    kind: 'pais',
    flag: '🇩🇰',
    subtitle: 'Europa · monarquía constitucional parlamentaria',
    summary:
      'Estado de bienestar universal con un mercado laboral flexible. La Iglesia evangélica luterana es la iglesia del pueblo danés por Constitución. Aborto a petición y matrimonio igualitario desde 2012. Política de asilo e integración de las más restrictivas de Europa occidental. IPC 2025 de 89 sobre 100. Miembro de la UE y la OTAN.',
    scores: { eco: 95, soc: -85, mig: -45, ide: -30, rel: -40, val: 100, ord: 95, pod: 75, eti: 80, geo: -45, des: 85, est: -75 },
    confidence: {
      eco: 'alta', soc: 'alta', mig: 'alta', ide: 'alta', rel: 'alta', val: 'alta', ord: 'alta', pod: 'alta',
      eti: 'alta', geo: 'alta', des: 'alta',
    },
    sources: [HERITAGE, MIPEX, TI, WJP],
  },
  {
    id: 'pais-paises-bajos',
    name: 'Países Bajos',
    kind: 'pais',
    flag: '🇳🇱',
    subtitle: 'Europa · monarquía constitucional parlamentaria',
    summary:
      'Economía abierta con seguro de salud privado obligatorio y regulado. Primer país en aprobar el matrimonio igualitario (2001); aborto a petición y eutanasia legal. Integración cívica obligatoria para inmigrantes y endurecimiento del asilo en 2024–26. Miembro de la UE y la OTAN.',
    scores: { eco: 90, soc: -10, mig: -25, ide: -75, rel: 75, val: 100, ord: 85, pod: 60, eti: 55, geo: -55, des: 100, est: -75 },
    confidence: {
      eco: 'alta', soc: 'alta', mig: 'alta', ide: 'alta', rel: 'alta', val: 'alta', ord: 'alta', pod: 'alta',
      eti: 'alta', geo: 'alta', des: 'alta',
    },
    sources: [HERITAGE, SOCX, MIPEX, EPI],
  },
  {
    id: 'pais-suiza',
    name: 'Suiza',
    kind: 'pais',
    flag: '🇨🇭',
    subtitle: 'Europa · confederación con democracia directa',
    summary:
      'Economía de mercado con seguro de salud privado obligatorio y pensiones con un pilar ocupacional obligatorio. Ejecutivo colegiado de siete miembros y referendos frecuentes. Iglesias reconocidas y financiadas por los cantones. Aborto a petición hasta la semana 12 y matrimonio igualitario desde 2022. Neutralidad militar: no pertenece a la OTAN ni a la UE.',
    scores: { eco: 100, soc: 10, mig: -15, ide: -40, rel: 10, val: 100, ord: 90, pod: 85, eti: 60, geo: -10, des: 75, est: -100 },
    confidence: {
      eco: 'alta', soc: 'alta', mig: 'alta', ide: 'alta', rel: 'alta', val: 'alta', pod: 'alta', eti: 'alta',
      geo: 'alta', des: 'alta',
    },
    sources: [HERITAGE, VDEM, TI, EPI],
  },
  {
    id: 'pais-irlanda',
    name: 'Irlanda',
    kind: 'pais',
    flag: '🇮🇪',
    subtitle: 'Europa · república parlamentaria',
    summary:
      'Economía abierta con impuesto corporativo bajo y fuerte presencia de multinacionales. Legalizó por referendo el matrimonio igualitario (2015) y el aborto (2018). La Constitución invoca a la Santísima Trinidad y la mayoría de las escuelas públicas tienen patrono católico. Neutralidad militar: miembro de la UE, no de la OTAN.',
    scores: { eco: 100, soc: -45, mig: 0, ide: 10, rel: 25, val: 100, ord: 80, pod: 70, eti: 50, geo: -5, des: 70, est: -90 },
    confidence: {
      eco: 'alta', mig: 'alta', ide: 'alta', rel: 'alta', val: 'alta', ord: 'alta', pod: 'alta', eti: 'alta',
      geo: 'alta', des: 'alta',
    },
    sources: [HERITAGE, MIPEX, MCP, TI],
  },
  {
    id: 'pais-polonia',
    name: 'Polonia',
    kind: 'pais',
    flag: '🇵🇱',
    subtitle: 'Europa · república parlamentaria',
    summary:
      'Aborto permitido solo por violación o riesgo para la vida de la mujer; sin reconocimiento legal de parejas del mismo sexo tras un veto presidencial en 2026. Concordato con la Santa Sede y clase de religión en la escuela pública. Valla en la frontera con Bielorrusia y suspensión temporal del derecho de asilo en 2025. Miembro de la UE y la OTAN.',
    scores: { eco: 40, soc: -60, mig: -55, ide: -50, rel: 10, val: -10, ord: 35, pod: 40, eti: 5, geo: -70, des: 65, est: -75 },
    confidence: {
      eco: 'alta', soc: 'alta', mig: 'alta', rel: 'alta', val: 'alta', ord: 'alta', pod: 'alta', eti: 'alta',
      geo: 'alta', des: 'alta',
    },
    sources: [HERITAGE, MIPEX, VDEM, UNIONES_PL],
  },
  {
    id: 'pais-hungria',
    name: 'Hungría',
    kind: 'pais',
    flag: '🇭🇺',
    subtitle: 'Europa · república parlamentaria',
    summary:
      'Cerco fronterizo desde 2015 y asilo solo a través de embajadas. Aborto a petición con requisitos previos, uniones civiles y prohibición constitucional del matrimonio igualitario; en 2026 se levantó la prohibición de la marcha del orgullo y se reforma la ley de 2021 sobre contenidos LGBT. Nuevo gobierno desde mayo de 2026, tras 16 años del mismo partido. Miembro de la UE y la OTAN.',
    scores: { eco: 10, soc: -20, mig: -50, ide: -55, rel: -10, val: 60, ord: 15, pod: -25, eti: -20, geo: -60, des: 40, est: 40 },
    confidence: {
      eco: 'alta', soc: 'alta', mig: 'alta', rel: 'alta', val: 'alta', ord: 'alta', pod: 'alta', eti: 'alta',
      geo: 'alta', des: 'alta',
    },
    sources: [HERITAGE, VDEM, MIPEX, HRW_HU],
  },
  {
    id: 'pais-rusia',
    name: 'Rusia',
    kind: 'pais',
    flag: '🇷🇺',
    subtitle: 'Eurasia · república federal presidencial (autocracia electoral según V-Dem)',
    summary:
      'Poder concentrado en la presidencia, con límites de mandato reiniciados por la reforma constitucional de 2020. El "movimiento LGBT" está catalogado como extremista desde 2023; el aborto es legal a petición. Moratoria de la pena de muerte desde 1996. Fuerte peso estatal en energía y defensa. Bajo sanciones occidentales por la guerra en Ucrania; miembro de los BRICS.',
    scores: { eco: -50, soc: -5, mig: -50, ide: -60, rel: 0, val: 10, ord: -35, pod: -85, eti: -55, geo: 90, des: -15, est: -50 },
    confidence: {
      eco: 'alta', soc: 'alta', mig: 'alta', rel: 'alta', val: 'alta', ord: 'alta', pod: 'alta', eti: 'alta',
      geo: 'alta',
      des: 'alta',
    },
    sources: [HERITAGE, VDEM, TI, ONU, COFOG],
  },
  {
    id: 'pais-turquia',
    name: 'Turquía',
    kind: 'pais',
    flag: '🇹🇷',
    subtitle: 'Eurasia · república presidencial',
    summary:
      'Sistema presidencial desde 2018 con amplios poderes del Ejecutivo. Estado laico por Constitución, pero con una Dirección de Asuntos Religiosos estatal y clase de religión obligatoria. Aborto a petición hasta la semana 10 y sin reconocimiento de parejas del mismo sexo. Acoge a millones de refugiados sirios. Miembro de la OTAN.',
    scores: { eco: -25, soc: 20, mig: -20, ide: -80, rel: -40, val: 10, ord: -35, pod: -75, eti: -40, geo: -30, des: -45, est: 0 },
    confidence: {
      eco: 'alta', soc: 'media', mig: 'alta', rel: 'alta', val: 'alta', ord: 'alta', pod: 'alta', eti: 'alta',
      geo: 'alta', des: 'alta',
    },
    sources: [HERITAGE, VDEM, WJP, TI],
  },
  {
    id: 'pais-israel',
    name: 'Israel',
    kind: 'pais',
    flag: '🇮🇱',
    subtitle: 'Oriente Medio · república parlamentaria',
    summary:
      'Se define como Estado judío (Ley del Estado-Nación, 2018). No hay matrimonio civil, pero se reconocen los celebrados en el extranjero, incluidos los de parejas del mismo sexo. Aborto con autorización de comités. Desde 2026 la pena de muerte es la sanción por defecto para palestinos condenados por atentados mortales en tribunales militares (ley impugnada). Aliado mayor extra-OTAN de EE.UU.; elecciones el 27-oct-2026.',
    scores: { eco: 40, soc: 10, mig: -30, ide: -40, rel: -90, val: 50, ord: -5, pod: 25, eti: 25, geo: -90, des: 25, est: -25 },
    confidence: {
      eco: 'alta', soc: 'alta', mig: 'alta', rel: 'alta', val: 'alta', pod: 'alta', eti: 'alta', geo: 'alta',
      des: 'alta',
    },
    sources: [HERITAGE, VDEM, TI, ONU, DPTL_IL],
  },
  {
    id: 'pais-china',
    name: 'China',
    kind: 'pais',
    flag: '🇨🇳',
    subtitle: 'Asia oriental · Estado socialista de partido único',
    summary:
      'Partido único con economía mixta dirigida por el Estado y grandes empresas públicas. Sin límite de mandatos presidenciales desde 2018. Aborto legal sin restricciones y sin reconocimiento de parejas del mismo sexo. Control estatal de las religiones. Aplica la pena de muerte. Rival estratégico de EE.UU. y miembro de los BRICS.',
    scores: { eco: -60, soc: 35, mig: -50, ide: -85, rel: 80, val: 40, ord: -50, pod: -90, eti: -15, geo: 80, des: -45, est: -60 },
    confidence: {
      eco: 'alta', soc: 'alta', mig: 'alta', rel: 'alta', val: 'alta', ord: 'alta', pod: 'alta', eti: 'alta',
      geo: 'alta',
      des: 'alta',
    },
    sources: [HERITAGE, VDEM, WJP, EPI, COFOG],
  },
  {
    id: 'pais-japon',
    name: 'Japón',
    kind: 'pais',
    flag: '🇯🇵',
    subtitle: 'Asia oriental · monarquía constitucional parlamentaria',
    summary:
      'Economía de mercado con seguro de salud y pensiones públicas universales. Aborto por causales amplias con consentimiento del cónyuge; sin reconocimiento nacional de parejas del mismo sexo. Aplica la pena de muerte. Inmigración históricamente restrictiva y sin política de minorías. Tratado de seguridad con EE.UU. y bases estadounidenses en su territorio.',
    scores: { eco: 50, soc: -75, mig: -35, ide: -85, rel: 100, val: 25, ord: 45, pod: 50, eti: 40, geo: -60, des: 75, est: -50 },
    confidence: {
      eco: 'alta', soc: 'alta', mig: 'alta', ide: 'alta', rel: 'alta', val: 'alta', ord: 'alta', pod: 'alta',
      eti: 'alta', geo: 'alta', des: 'alta',
    },
    sources: [HERITAGE, SOCX, MCP, WJP],
  },
  {
    id: 'pais-corea-del-sur',
    name: 'Corea del Sur',
    kind: 'pais',
    flag: '🇰🇷',
    subtitle: 'Asia oriental · república presidencial',
    summary:
      'Economía industrial abierta con seguro de salud nacional. Aborto despenalizado desde 2021 tras un fallo constitucional; sin reconocimiento de parejas del mismo sexo. Pena de muerte vigente sin ejecuciones desde 1997. Presidencia de un solo mandato de cinco años. Tratado de defensa con EE.UU. y tropas estadounidenses en su territorio.',
    scores: { eco: 70, soc: 0, mig: -10, ide: -40, rel: 100, val: 40, ord: 45, pod: 65, eti: 25, geo: -55, des: 30, est: -10 },
    confidence: {
      eco: 'alta', soc: 'alta', mig: 'alta', rel: 'alta', val: 'alta', ord: 'alta', pod: 'alta', eti: 'alta',
      geo: 'alta', des: 'alta',
    },
    sources: [HERITAGE, SOCX, VDEM, TI],
  },
  {
    id: 'pais-singapur',
    name: 'Singapur',
    kind: 'pais',
    flag: '🇸🇬',
    subtitle: 'Sudeste asiático · república parlamentaria de partido dominante',
    summary:
      'Economía abierta con ahorro obligatorio en cuentas individuales (CPF) y gasto social público bajo. El mismo partido gobierna desde 1959. Aplica la pena de muerte y los azotes judiciales. Despenalizó las relaciones entre hombres en 2022, pero la Constitución deja al Parlamento la definición del matrimonio. Aborto a petición hasta la semana 24.',
    scores: { eco: 100, soc: 100, mig: -35, ide: -15, rel: 75, val: 40, ord: -20, pod: -15, eti: 70, geo: -10, des: 5, est: -100 },
    confidence: {
      eco: 'alta', soc: 'alta', rel: 'alta', val: 'alta', ord: 'alta', pod: 'alta', eti: 'alta', geo: 'alta',
      des: 'alta',
    },
    sources: [HERITAGE, TI, WJP, VDEM, COFOG],
  },
  {
    id: 'pais-india',
    name: 'India',
    kind: 'pais',
    flag: '🇮🇳',
    subtitle: 'Asia meridional · república federal parlamentaria',
    summary:
      'Constitución secular, con leyes estatales contra la conversión y estatuto personal según la religión. Aborto por causales amplias y sin reconocer parejas del mismo sexo (fallo de 2023). Pena de muerte vigente. Frontera cercada con Bangladés y ley de 2019 que agiliza la ciudadanía de refugiados no musulmanes. Entre los peores del EPI 2026. En 2026 presidió los BRICS y firmó un acuerdo comercial interino con EE.UU.',
    scores: { eco: -40, soc: 85, mig: -70, ide: -25, rel: 10, val: 25, ord: 10, pod: -35, eti: -20, geo: 20, des: -90, est: 0 },
    confidence: {
      eco: 'alta', soc: 'alta', mig: 'alta', rel: 'alta', val: 'alta', ord: 'alta', pod: 'alta', eti: 'alta',
      geo: 'alta',
      des: 'alta',
    },
    sources: [
      HERITAGE,
      EPI,
      MIPEX,
      VDEM,
      OIT_WSPR,
      {
        title: '18.ª cumbre de los BRICS, Nueva Delhi 2026 (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/18th_BRICS_summit',
      },
    ],
  },
  {
    id: 'pais-emiratos',
    name: 'Emiratos Árabes Unidos',
    kind: 'pais',
    flag: '🇦🇪',
    subtitle: 'Oriente Medio · federación de monarquías hereditarias',
    summary:
      'Federación de siete emiratos sin elección popular del gobierno. El islam es la religión oficial y la ley islámica es fuente de legislación. Los nacionales reciben subsidios y empleo público amplios; la mayoría de los residentes son trabajadores extranjeros sin vía a la ciudadanía. Relaciones entre personas del mismo sexo penalizadas. Aplica la pena de muerte.',
    scores: { eco: 60, soc: 55, mig: -50, ide: -90, rel: -100, val: -40, ord: -45, pod: -95, eti: 40, geo: 5, des: 20, est: -90 },
    confidence: {
      eco: 'alta', soc: 'alta', mig: 'alta', rel: 'alta', val: 'alta', pod: 'alta', eti: 'alta', geo: 'alta',
      des: 'alta',
    },
    sources: [HERITAGE, TI, VDEM, MIPEX, COFOG],
  },
  {
    id: 'pais-arabia-saudita',
    name: 'Arabia Saudita',
    kind: 'pais',
    flag: '🇸🇦',
    subtitle: 'Oriente Medio · monarquía absoluta',
    summary:
      'Monarquía absoluta cuya ley fundamental declara el Corán y la sunna como constitución; la ley islámica rige el derecho. Economía petrolera con plan de diversificación (Visión 2030). Aplica la pena de muerte y castigos corporales; las relaciones entre personas del mismo sexo pueden castigarse con la muerte. Aliado mayor extra-OTAN de EE.UU. desde enero de 2026 (anunciado en noviembre de 2025).',
    scores: { eco: 25, soc: 15, mig: -85, ide: -100, rel: -100, val: -75, ord: -75, pod: -100, eti: 15, geo: -25, des: -25, est: -60 },
    confidence: {
      eco: 'alta', soc: 'alta', mig: 'alta', rel: 'alta', val: 'alta', pod: 'alta', eti: 'alta', geo: 'alta',
      des: 'alta',
    },
    sources: [HERITAGE, VDEM, TI, MIPEX, OIT_WSPR, FEDREG_SA],
  },
];

/** Fila de control: la política del Estado dominicano medida con los mismos índices. No se ofrece como "país parecido". */
export const estadoDominicano: Profile = {
  id: 'pais-rd',
  name: 'Estado dominicano (referencia)',
  kind: 'pais',
  flag: '🇩🇴',
  subtitle: 'Caribe · república presidencial (fila de control, no se compara)',
  summary:
    'Fila de referencia: mide la política del Estado dominicano, no el programa de un partido. Gasto social ≈4.7 % del PIB con AFP y ARS privadas. Aborto prohibido en todos los casos y prohibición constitucional del matrimonio igualitario. Concordato de 1954. Deportaciones masivas, muro fronterizo y sentencia TC 168-13. Pena de muerte abolida. Reelección limitada por cláusula pétrea (2024).',
  scores: { eco: 20, soc: 100, mig: -80, ide: -60, rel: -40, val: -60, ord: 20, pod: 20, eti: -25, geo: -45, des: -25, est: -60 },
  confidence: {
    eco: 'alta', soc: 'alta', rel: 'alta', val: 'alta', ord: 'alta', pod: 'alta', eti: 'alta', geo: 'alta',
    des: 'alta',
  },
  sources: [HERITAGE, CEPAL, TI, WJP],
};
