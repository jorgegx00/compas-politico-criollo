// Partidos (docs/PLAN.md §7, §11.2 y §11.4). Justificaciones y fuentes completas en docs/investigacion/:
// 02-elecciones-2024-partidos.md (partidos contemporáneos), 03-outsiders-religion-progresismo-periodistas-metodologia.md
// (PPP, Patria Libre), 12-verificaciones.md §5 (FNP en 2024, afiliaciones) y 01-historia-1844-2020.md §21 (históricos).
// Confianza: `*` del PLAN → 'baja'; "confianza baja" o "muy baja" explícita del PLAN o del dossier → 'baja' en todo el
// perfil (PRD, MPT, Justicia Social); los ⚠️ del dossier 02 en Dominicanos Primero → 'baja'. El PPP tiene
// confianza media en eco, mig, eti, geo y est con la evidencia fechada del dossier 18.
// Patria Libre copia la fila de Fernando Abreu (§11.3) con la confianza un escalón más baja ('baja' en todo).
// Izquierda radical (dossier 24-izquierda-radical.md, §11.13): PCT, MPD de hoy, MST y MIU; el PCD en dos etapas
// (1944–1977 y legal 1977–1996). El PPP sube a confianza media (alta en geo) con las columnas de Isa Conde.
import type { AxisId, Confidence, Profile } from '../types.ts';

/** Perfiles con confianza baja o muy baja en todo: solo aparecen en "Explorar". */
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

const JCE_2024 = {
  title: 'Wikipedia — Elecciones generales de la República Dominicana de 2024',
  url: 'https://es.wikipedia.org/wiki/Elecciones_generales_de_la_Rep%C3%BAblica_Dominicana_de_2024',
};

const PROPUESTAS_2024 = {
  title: 'Listín Diario — Propuestas íntegras de los nueve candidatos presidenciales (2024)',
  url: 'https://listindiario.com/la-republica/politica/20240515/propuestas-integras-nueve-candidatos-presidenciales_808418.html',
};

export const partidos: Profile[] = [
  // ——— Contemporáneos (§11.2) ———
  {
    id: 'par-prm',
    name: 'Partido Revolucionario Moderno (PRM)',
    kind: 'partido',
    subtitle: 'Partido de gobierno desde 2020 · Luis Abinader',
    summary:
      'Fundado en 2014 como escisión del PRD, gobierna desde 2020 con Luis Abinader, reelegido en 2024 con 57.44 % y más de dos tercios de ambas cámaras. En 2024–2026 aprobó la reforma constitucional contra la reelección y la Ley 30-26, llevó las deportaciones a cifras récord, amplió el muro fronterizo y se alineó con EE.UU. Miembro de la Alianza Progresista y la COPPPAL.',
    scores: { eco: 25, soc: -20, mig: -55, ide: -20, rel: -25, val: -10, ord: -15, pod: 40, eti: 25, geo: -70, des: -10, est: -60 },
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
      {
        title: 'PRM — Plan de Gobierno 2024-2028 (PDF)',
        url: 'https://lavozdelprm.org/wp-content/uploads/2024/05/PG-2024-2028-version-preliminar-2.pdf',
      },
      {
        title: 'Diario Libre — Las 15 medidas de Abinader para frenar la inmigración de haitianos',
        url: 'https://www.diariolibre.com/actualidad/nacional/2025/04/06/las-15-medidas-de-abinader-para-frenar-la-inmigracion-de-haitianos/3062556',
      },
      {
        title: 'Listín Diario — Abinader autoriza a EE.UU. áreas restringidas para vigilancia antinarcóticos',
        url: 'https://listindiario.com/la-republica/gobierno/20251126/abinader-autoriza-eeuu-areas-restringidas-reforzar-vigilancia-narcotrafico_883934.html',
      },
      { title: 'Progressive Alliance — Partidos y organizaciones', url: 'https://progressive-alliance.info/parties-organisations/' },
    ],
    asOf: '2026-09',
  },
  {
    id: 'par-fp',
    name: 'Fuerza del Pueblo (FP)',
    kind: 'partido',
    subtitle: 'Fundado en 2019 · Leonel Fernández · 28.85 % en 2024',
    summary:
      'Fundado en 2019 por Leonel Fernández tras salir del PLD; se define "progresista y patriótico". Principal partido de oposición: 28.85 % en 2024, con candidaturas congresuales comunes con PLD y PRD (Rescate RD). Rechazó la reforma constitucional de 2024 y la Ley 30-26, calificó de "entrega" el permiso a EE.UU. para usar San Isidro y Las Américas y propone reordenar los mercados binacionales.',
    scores: { eco: 5, soc: -25, mig: -45, ide: -35, rel: -35, val: -35, ord: -15, pod: -35, eti: -15, geo: 30, des: 5, est: -45 },
    confidence: { soc: 'alta', rel: 'baja', est: 'alta' },
    sources: [
      {
        title: 'JCE — Plan de Gobierno 2024-2028 de la Fuerza del Pueblo (PDF)',
        url: 'https://jce.gob.do/portaltransparencia/Repositorio/Vista-Escritorio?EntryId=29934&Command=Core_Download&Method=attachment',
      },
      { title: 'Wikipedia — Fuerza del Pueblo', url: 'https://es.wikipedia.org/wiki/Fuerza_del_Pueblo' },
      {
        title: 'Listín Diario — Leonel Fernández presenta su programa de gobierno con 2,024 propuestas',
        url: 'https://listindiario.com/la-republica/politica/20240418/leonel-fernandez-presenta-programa-gobierno-2-024-propuestas_804645.html',
      },
      {
        title: 'N Digital — Leonel propone modernizar los controles fronterizos y reorganizar los mercados binacionales',
        url: 'https://n.com.do/2026/08/02/leonel-propone-modernizar-los-controles-fronterizos-y-reorganizar-los-mercados-binacionales/',
      },
      {
        title: '7 Días — Leonel solicita retirar los nuevos impuestos de la reforma fiscal',
        url: 'https://7dias.com.do/2026/06/16/leonel-solicita-retirar-propuesta-de-nuevos-impuestos-de-la-reforma-fiscal-y-reformular-el-presupuesto-de-2026/',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'par-pld',
    name: 'PLD en la oposición (2020–hoy)',
    kind: 'partido',
    subtitle: 'En la oposición desde 2020 · preside Danilo Medina · 10.39 % en 2024',
    summary:
      'Fundado por Juan Bosch en 1973, gobernó en 1996–2000 y 2004–2020; lo preside Danilo Medina. Abel Martínez obtuvo 10.39 % en 2024 con un programa que daba 30 días a los extranjeros irregulares antes de detenerlos, y el partido quedó sin senadores. Se opuso a la reforma constitucional de 2024 y a la Ley 30-26. Exfuncionarios suyos enfrentan procesos judiciales (Antipulpo, Calamar, Medusa).',
    scores: { eco: -5, soc: -25, mig: -55, ide: -35, rel: -30, val: -25, ord: -35, pod: -45, eti: -50, geo: 25, des: -25, est: -55 },
    confidence: { soc: 'alta', est: 'alta' },
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
        title: 'Diario Libre — Danilo Medina reafirma que el PLD no cederá su fuerza en elecciones',
        url: 'https://www.diariolibre.com/politica/partidos/2026/04/26/danilo-medina-reafirma-que-el-pld-no-cedera-su-fuerza-en-elecciones/3514797',
      },
      {
        title: 'Acento — Los casos que definirán el alcance de la justicia contra la corrupción',
        url: 'https://acento.com.do/actualidad/del-escandalo-mediatico-a-la-prueba-en-tribunales-los-casos-que-definiran-el-alcance-real-de-la-justicia-contra-la-corrupcion-9727307.html',
      },
      { title: 'Wikipedia (inglés) — Dominican Liberation Party', url: 'https://en.wikipedia.org/wiki/Dominican_Liberation_Party' },
      {
        title: 'El Día — Abel Martínez presenta su programa de gobierno 2024-2028 (abr-2024)',
        url: 'https://eldia.com.do/abel-martinez-presenta-programa-de-gobierno-2024-2028/',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'par-prd',
    name: 'PRD de Miguel Vargas (2014–hoy)',
    kind: 'partido',
    subtitle: 'Desde 2014, tras la salida del PRM · Miguel Vargas · 0.45 % en 2024',
    summary:
      'Fundado en 1939 en el exilio y presidido por Miguel Vargas; es el único partido dominicano en la Internacional Socialista. En 2024 formó con FP y PLD la alianza Rescate RD y su candidato obtuvo 0.45 %. Su programa se define socialdemócrata, pero propone bajar el ISR al 15 %, concesionar las distribuidoras eléctricas y "mano dura" contra el delito. En 2015 pactó con Danilo Medina la reforma que habilitó su reelección.',
    scores: { eco: 30, soc: -5, mig: -25, ide: -15, rel: -30, val: -25, ord: -35, pod: -20, eti: -20, geo: -10, des: -10, est: -50 },
    confidence: { ide: 'baja', rel: 'baja', val: 'baja', ord: 'alta', pod: 'baja', eti: 'baja', est: 'alta' },
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
      { title: 'Internacional Socialista — Partidos miembros', url: 'https://www.internacionalsocialista.org/politicas-progresistas/miembros/' },
      { title: 'Wikipedia (inglés) — Dominican Revolutionary Party', url: 'https://en.wikipedia.org/wiki/Dominican_Revolutionary_Party' },
    ],
    asOf: '2026-09',
  },
  {
    id: 'par-prsc',
    name: 'PRSC aliado (2012–hoy)',
    kind: 'partido',
    subtitle: 'Desde 2012 sin candidato presidencial propio · Quique Antún',
    summary:
      'Partido democratacristiano heredero del balaguerismo, miembro de la IDC y de la ODCA; lo preside Quique Antún desde 2014. No lleva candidato presidencial propio desde 2012: apoyó al PLD (2012), al PRM (2016), al FP (2020) y al PRM (2024), mientras su voto caía del 5.87 % al 0.87 %. Tiene 1 senador, 4 diputados y 7 alcaldes. En 2026 abrió sus puertas a Alofoke, sin romper formalmente con el PRM.',
    scores: { eco: 30, soc: 5, mig: -65, ide: -55, rel: -55, val: -60, ord: -40, pod: -15, eti: -35, geo: -45, des: -15, est: -50 },
    confidence: { soc: 'baja' },
    sources: [
      {
        title: 'El Día — 22 años desde que el PRSC obtuvo más de un 5 % con candidato propio (jun-2026)',
        url: 'https://eldia.com.do/han-pasado-22-anos-desde-la-ultima-vez-que-prsc-obtuvo-mas-de-un-5-con-un-candidato-propio/',
      },
      {
        title: 'Listín Diario — Radiografía al PRSC: desde 2008 sin candidatura presidencial propia (2026)',
        url: 'https://listindiario.com/la-republica/politica/20260622/radiografia-prsc-partido-mas-ganador-lleva-2008-candidatura-presidencial-propia_910874.html',
      },
      {
        title: 'Acento — El PRSC de Quique Antún proclama oficialmente a Leonel (2019)',
        url: 'https://acento.com.do/politica/el-prsc-de-quique-antun-proclama-oficialmente-a-leonel-8744267.html',
      },
      {
        title: 'El Nacional — El PRSC abre sus puertas a Alofoke para que busque la presidencia en 2028',
        url: 'https://elnacional.com.do/politica/prsc-abre-puertas-alofoke-busque-presidencia-republica-2028_573694.html',
      },
      { title: 'Wikipedia — Partido Reformista Social Cristiano', url: 'https://es.wikipedia.org/wiki/Partido_Reformista_Social_Cristiano' },
      {
        title: 'Wikipedia (inglés) — Social Christian Reformist Party',
        url: 'https://en.wikipedia.org/wiki/Social_Christian_Reformist_Party',
      },
      {
        title: 'El Nacional — El PRSC abre sus puertas a Alofoke para que busque la presidencia en 2028',
        url: 'https://elnacional.com.do/politica/prsc-abre-puertas-alofoke-busque-presidencia-republica-2028_573694.html',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'par-alianza-pais',
    name: 'Alianza País (AP)',
    kind: 'partido',
    subtitle: 'Izquierda democrática · Guillermo Moreno · aliado del PRM en 2024',
    summary:
      'Partido de izquierda democrática dirigido por Guillermo Moreno, con la lucha anticorrupción como bandera ("¡Por un gobierno honesto!"). Apoya las tres causales y se opone a la minería a cielo abierto. Fue aliado del PRM en 2024; en 2025 declaró que no tiene acuerdos con el gobierno y en 2026 prepara candidaturas propias.',
    scores: { eco: -40, soc: -50, mig: 15, ide: 25, rel: 45, val: 45, ord: 40, pod: 65, eti: 80, geo: 25, des: 60, est: 15 },
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
        title: 'Wikipedia (inglés) — Country Alliance (Dominican Republic)',
        url: 'https://en.wikipedia.org/wiki/Country_Alliance_(Dominican_Republic)',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'par-od',
    name: 'Opción Democrática (OD)',
    kind: 'partido',
    subtitle: 'Fundada en 2014 · Virginia Antares · 0.58 % en 2024',
    summary:
      'Fundada en 2014 por Minou Tavárez Mirabal; centroizquierda socialdemócrata. Su candidata Virginia Antares obtuvo 0.58 % en 2024 con un programa de despenalización del aborto, igualdad de derechos para todas las parejas, semana laboral de 4 días, impuestos progresivos, adhesión al Pacto Mundial sobre Migración y apoyo a la demanda de reparaciones de Haití a Francia.',
    scores: { eco: -50, soc: -70, mig: 40, ide: 50, rel: 65, val: 90, ord: 65, pod: 70, eti: 70, geo: 30, des: 80, est: 35 },
    confidence: { eco: 'alta', soc: 'alta', val: 'alta', ord: 'alta', pod: 'alta', des: 'alta' },
    sources: [
      {
        title: 'JCE — Programa de Gobierno 2024 de Opción Democrática (PDF)',
        url: 'https://jce.gob.do/portaltransparencia/Repositorio/Vista-Escritorio?EntryId=29911&Command=Core_Download&Method=attachment',
      },
      {
        title: 'Listín Diario — Virginia Antares, la candidata más joven a la presidencia',
        url: 'https://listindiario.com/la-republica/politica/20240516/virginia-antares-candidata-mas-joven-presidencia-republica_808553.html',
      },
      {
        title: 'N Digital — Opción Democrática realiza protestas simultáneas en cuatro ciudades',
        url: 'https://n.com.do/2026/07/15/opcion-democratica-realiza-protestas-simultaneas-en-santo-domingo-santiago-la-romana-y-nueva-york/',
      },
      {
        title: 'Wikipedia (inglés) — Democratic Choice (Dominican Republic)',
        url: 'https://en.wikipedia.org/wiki/Democratic_Choice_(Dominican_Republic)',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'par-frente-amplio',
    name: 'Frente Amplio (FA)',
    kind: 'partido',
    subtitle: 'Izquierda · ex MIUCA, vehículo electoral del PCT · María Teresa Cabrera · 0.14 % en 2024',
    summary:
      'Nació como MIUCA (1992), frente electoral del PCT, y se llama Frente Amplio desde 2011. Proclamó a Abinader en 2020 y en 2024 fue en alianza congresual con el PRM, con candidata propia: María Teresa Cabrera (0.14 %), que propuso una Constituyente y devolver al Estado las empresas privatizadas. En 2025 rechazó que EE.UU. usara San Isidro y en enero de 2026 encabezó la protesta por la captura de Maduro.',
    scores: { eco: -70, soc: -75, mig: 30, ide: 45, rel: 60, val: 45, ord: 50, pod: 70, eti: 65, geo: 80, des: 45, est: 10 },
    confidence: { soc: 'alta', mig: 'baja', ide: 'baja', rel: 'alta', val: 'baja', pod: 'alta' },
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
      {
        title: 'Roberto Cavada — Autorización a fuerzas estadounidenses vulnera la soberanía, advierte el Frente Amplio',
        url: 'https://robertocavada.com/nacionales/2025/11/27/autorizacion-a-fuerzas-estadounidenses-vulnera-el-orden-constitucional-y-la-soberania-advierte-el-frente-amplio/',
      },
      {
        title: 'Listín Diario — Debate de candidatos presidenciales alternativos (2024)',
        url: 'https://listindiario.com/la-republica/politica/20240417/debate-candidatos-presidenciales-alternativos-elecciones-2024_804582.html',
      },
      {
        title: 'Diario Libre — El Frente Amplio entra al Gobierno por el Ministerio de Justicia (feb-2026)',
        url: 'https://www.diariolibre.com/politica/partidos/2026/02/05/el-frente-amplio-entra-al-gobierno-por-el-ministerio-de-justicia/3427605',
      },
      {
        title: 'Diario Libre — El Frente Amplio niega que los funcionarios designados sean sus miembros (feb-2026)',
        url: 'https://www.diariolibre.com/politica/partidos/2026/02/17/frente-amplio-niega-que-funcionarios-designados-sean-sus-miembros/3439657',
      },
      {
        title: 'Listín Diario — El Frente Amplio lidera la protesta por el encarcelamiento de Nicolás Maduro (ene-2026)',
        url: 'https://listindiario.com/la-republica/20260104/frente-amplio-lidera-protesta-encarcelamiento-nicolas-maduro_888345.html',
      },
      {
        title: 'Ciudad Oriental — El PCT se perfila con cuota de poder en SDE; origen del Frente Amplio (mar-2020)',
        url: 'https://ciudadoriental.com/el-partido-comunista-del-trabajo-se-perfila-con-importante-cuota-de-poder-en-el-mayor-municipio-de-rd/',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'par-mpt',
    name: 'Patria para Todos y Todas (MPT)',
    kind: 'partido',
    subtitle: 'Izquierda · Fulgencio Severino · 0.06 % en 2024 · perdió la personería tras esa elección',
    summary:
      'Su candidato Fulgencio Severino obtuvo 0.06 % en 2024 con un "Programa Mínimo" de unidad de izquierda (con PUC, PCML y REDES): Asamblea Constituyente, eliminar las AFP y las ARS, educación pública laica, aborto por tres causales "y por otras razones atendibles", fin de la "minería lesiva" y derechos para los migrantes junto con control de la migración ilegal.',
    scores: { eco: -60, soc: -75, mig: 15, ide: 10, rel: 50, val: 60, ord: 35, pod: 40, eti: 60, geo: 40, des: 65, est: 60 },
    confidence: { eco: 'alta', soc: 'alta', rel: 'alta', eti: 'alta', des: 'alta', est: 'alta' },
    sources: [
      {
        title: 'JCE — Plan de Gobierno 2024 del MPT/PPT (PDF)',
        url: 'https://jce.gob.do/portaltransparencia/Repositorio/Vista-Escritorio?EntryId=29909&Command=Core_Download&Method=attachment',
      },
      PROPUESTAS_2024,
      {
        title: 'En Segundos — Las propuestas más osadas de los candidatos presidenciales',
        url: 'https://ensegundos.do/2024/05/15/las-propuestas-mas-osadas-de-los-candidatos-presidenciales/',
      },
      {
        title: 'Listín Diario — Patria para Todos intentará recuperar su reconocimiento para 2028 (may-2024)',
        url: 'https://listindiario.com/la-republica/20240522/patria-todos-intentara-recuperar-reconocimiento-politico-participar-sufragios-2028_809454.html',
      },
      JCE_2024,
    ],
    asOf: '2026-09',
  },
  {
    id: 'par-gens',
    name: 'Generación de Servidores (GenS)',
    kind: 'partido',
    subtitle: 'Fundado en 2018 · Carlos Peña · 0.72 % en 2024',
    summary:
      'Fundado en 2018 por el pastor evangélico Carlos Peña (0.72 % en 2024). Su programa combina la familia cristiana y la Biblia en las escuelas con un Estado amplio: ARS y AFP estatales únicas, pensión universal y empresas públicas, eliminando seis impuestos. En entrevistas propuso 30 días a los indocumentados antes de deportarlos y financiar el tercer hijo (2024), y dijo reconocer solo la frontera de 1777 (2026).',
    scores: { eco: -10, soc: -40, mig: -75, ide: -65, rel: -85, val: -90, ord: -40, pod: 5, eti: 20, geo: -25, des: -10, est: 55 },
    confidence: { eco: 'baja', soc: 'alta' },
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
        title: 'Listín Diario — Carlos Peña, el candidato que divide su vida entre la política y la religión',
        url: 'https://listindiario.com/la-republica/politica/20240516/carlos-pena-candidato-presidencial-divide-vida-politica-religion_808570.html',
      },
      {
        title: 'Diario Libre — Carlos Peña apoya la reforma constitucional',
        url: 'https://www.diariolibre.com/politica/partidos/2024/09/01/carlos-pena-apoya-reforma-constitucional/2836528',
      },
      {
        title: 'Listín Diario — Carlos Peña, pastor evangélico, busca la presidencia (abr-2024)',
        url: 'https://listindiario.com/la-republica/politica/20240411/carlos-pena-pastor-evangelico-busca-presidencia-republica_803706.html',
      },
      {
        title: 'Ensegundos — Carlos Peña promete recuperar territorio fronterizo (ago-2026)',
        url: 'https://ensegundos.do/2026/08/20/carlos-pena-promete-recuperar-territorio-fronterizo-y-desconoce-tratados-limitrofes-con-haiti-posteriores-a-1777',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'par-ped',
    name: 'Partido Esperanza Democrática (PED)',
    kind: 'partido',
    subtitle: 'Ramfis Domínguez-Trujillo · candidato en 2024: Roque Espaillat (1.36 %)',
    summary:
      'Partido de Ramfis Domínguez-Trujillo, nieto de Trujillo. Su candidato Roque Espaillat fue el minoritario más votado en 2024 (1.36 %) con un programa de "cero tolerancia a la corrupción" (30 años por malversación), muro de hormigón, deportación de los irregulares y 7 % del PIB para educación. Espaillat rompió después con Ramfis, que en 2026 anunció que aspirará en 2028.',
    scores: { eco: 25, soc: 0, mig: -90, ide: -80, rel: -55, val: -60, ord: -85, pod: -30, eti: 60, geo: -10, des: 15, est: 85 },
    confidence: { eti: 'alta' },
    sources: [
      {
        title: 'JCE — Programa de Gobierno 2024-2028 del PED (PDF)',
        url: 'https://jce.gob.do/portaltransparencia/Repositorio/Vista-Escritorio?EntryId=29933&Command=Core_Download&Method=attachment',
      },
      {
        title: 'Diario Libre — Ramfis Trujillo cede su candidatura a Roque Espaillat',
        url: 'https://www.diariolibre.com/politica/partidos/2024/03/07/ramfis-trujillo-cede-candidatura-a-roque-espaillat/2636023',
      },
      {
        title: 'El Día — Corrupción y migración, centro de las propuestas de Roque Espaillat',
        url: 'https://eldia.com.do/corrupcion-y-migracion-centro-de-propuestas-de-roque-espaillat/',
      },
      {
        title: 'Hoy — Ramfis asegura estar listo para disputar en 2028',
        url: 'https://hoy.com.do/el-pais/ramfis-asegura-listo-disputar-2028_1090203.html',
      },
      {
        title: 'Listín Diario — Roque Espaillat asegura que combatirá la corrupción (may-2024)',
        url: 'https://listindiario.com/la-republica/20240510/roque-espaillat-asegura-combatir-corrupcion-solucion-problemas-pais_807789.html',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'par-fnp',
    name: 'Fuerza Nacional Progresista (FNP)',
    kind: 'partido',
    subtitle: 'Fundada en 1980 · Pelegrín Castillo · alianza congresual con el PRM en 2024',
    summary:
      'Fundada en 1980 por Marino Vinicio "Vincho" Castillo y presidida por Pelegrín Castillo; nacionalconservadora, miembro de la IDU y la UPLA. En 2024 no apoyó a ningún candidato presidencial e hizo alianza congresual con el PRM. En 2026 lanzó la iniciativa "Dominicanos, enfrentemos la invasión y ocupación haitiana" y evalúa postular a Pelegrín a la presidencia.',
    scores: { eco: 10, soc: 0, mig: -95, ide: -85, rel: -65, val: -75, ord: -55, pod: 0, eti: 15, geo: -35, des: -10, est: 10 },
    sources: [
      {
        title: 'Listín Diario — La FNP no apoyará a ningún candidato a nivel presidencial',
        url: 'https://listindiario.com/la-republica/politica/20240227/fuerza-nacional-progresista-apoyara-ningun-candidato-nivel-presidencial_797458.html',
      },
      {
        title: '7 Días — Pelegrín Castillo anuncia la iniciativa "Dominicanos, enfrentemos la invasión y ocupación haitiana"',
        url: 'https://7dias.com.do/2026/08/11/pelegrin-castillo-anuncia-iniciativa-dominicanos-enfrentemos-la-invasion-y-ocupacion-haitiana/',
      },
      { title: 'Wikipedia — Fuerza Nacional Progresista', url: 'https://es.wikipedia.org/wiki/Fuerza_Nacional_Progresista' },
    ],
    asOf: '2026-09',
  },
  {
    id: 'par-dominicanos-primero',
    name: 'Dominicanos Primero',
    kind: 'partido',
    subtitle: 'En formación (solicitud a la JCE, agosto de 2026) · Santiago Matías (Alofoke)',
    summary:
      'Partido que Santiago Matías (Alofoke) pidió registrar en la JCE el 11 de agosto de 2026 ("La RD no se vende, se defiende"). Propone 60 días para que los haitianos indocumentados se vayan, impedir cargos electivos a dominicanos hijos de haitianos, voto de policías y militares, facilitar la importación de armas y una campaña sin "dádivas ni pica pollo". Marca 3.6–6.6 % en encuestas.',
    scores: { eco: 25, soc: 20, mig: -85, ide: -70, rel: -25, val: -30, ord: -65, pod: 0, eti: 30, geo: -40, des: 0, est: 90 },
    confidence: { rel: 'baja', val: 'baja', pod: 'baja', des: 'baja' },
    sources: [
      {
        title: 'Listín Diario — Santiago Matías deposita en la JCE la solicitud para registrar Dominicanos Primero',
        url: 'https://listindiario.com/entretenimiento/20260811/santiago-matias-deposita-jce-solicitud-registrar-partido-dominicanos-primero_917653.html',
      },
      {
        title: 'Roberto Cavada — Santiago Matías propone dar 60 días a haitianos indocumentados para salir del país',
        url: 'https://robertocavada.com/santiago-matias-propone-dar-60-dias-a-haitianos-indocumentados-para-salir-del-pais/',
      },
      {
        title: 'El Nacional — Alofoke: "Mi partido no dará dádivas, ni dinero, ni pica pollo"',
        url: 'https://elnacional.com.do/politica/alofoke-mi-partido-daremos-dadivas-dinero-pica-pollo_580430.html',
      },
      {
        title: '7 Días — Alofoke presenta Dominicanos Primero a la embajadora de Estados Unidos',
        url: 'https://7dias.com.do/2026/09/08/alofoke-presenta-proyecto-dominicanos-primero-a-embajadora-de-estados-unidos-en-reunion-de-alto-nivel/',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'par-justicia-social',
    name: 'Justicia Social (JS)',
    kind: 'partido',
    subtitle: 'Reconocido en 2024 · Julio César Valentín · aliado del PRM',
    summary:
      'Reconocido en 2024 y presidido por Julio César Valentín (ex-PLD); se describe como de "igualitarismo social" y es observador en la COPPPAL. Proclamó a Abinader en 2024, obtuvo 49,418 votos y ganó 12 alcaldías. No tiene programa propio publicado: puntajes muy tentativos, cercanos a la línea del PRM.',
    scores: { eco: -10, soc: -35, mig: -40, ide: -25, rel: -25, val: -20, ord: -20, pod: 10, eti: 0, geo: -40, des: 0, est: -45 },
    confidence: BAJA,
    sources: [
      {
        title: 'El Dinero — Justicia Social: resultados en las elecciones presidenciales de 2024',
        url: 'https://eldinero.com.do/280061/justicia-social-resultados-en-las-elecciones-presidenciales-de-2024/',
      },
      { title: 'COPPPAL — Partidos miembros', url: 'https://copppal.org/partidos-miembros/' },
    ],
    asOf: '2026-09',
  },
  {
    id: 'par-ppp',
    name: 'Partido del Poder Popular (PPP)',
    kind: 'partido',
    subtitle: 'Fundado en junio de 2026, sin reconocimiento de la JCE · Narciso Isa Conde',
    summary:
      'Fusión de Fuerza de la Revolución y el Movimiento Caamañista (junio de 2026), encabezada por Narciso Isa Conde, que se propone "enfrentar el sistema imperante" y "crear poder popular, primero como poder paralelo". Sus organizaciones fundadoras exigieron en 2024 detener las deportaciones masivas de haitianos y llamaron a derrotar en la calle la reforma fiscal.',
    scores: { eco: -95, soc: -90, mig: 70, ide: 80, rel: 80, val: 70, ord: 55, pod: -35, eti: 60, geo: 95, des: 85, est: 90 },
    confidence: { geo: 'alta' },
    sources: [
      {
        title: 'RD Música — De Alofoke hasta izquierdistas: los partidos que buscan ser parte del 2028',
        url: 'https://www.rdmusica.com/de-alofoke-hasta-izquierdistas-los-partidos-que-buscan-ser-parte-del-2028/',
      },
      { title: 'Diccionario Funglode — Narciso Isa Conde', url: 'https://diccionario.funglode.org/isa-conde-narciso/' },
      {
        title: 'AlMomento — Organizaciones repudian la deportación masiva de haitianos (oct-2024)',
        url: 'https://almomento.net/organizaciones-de-rd-repudian-deportacion-masiva-de-haitianos/',
      },
      {
        title: 'Acento — Isa Conde llama a la lucha popular contra la reforma fiscal (oct-2024)',
        url: 'https://acento.com.do/politica/narciso-isa-conde-llama-a-lucha-popular-para-forzar-el-retiro-del-proyecto-de-reforma-fiscal-9408234.html',
      },
      {
        title: 'Barrigaverde — Isa Conde cuestiona el alcance de la investigación de SeNaSa (sep-2026)',
        url: 'https://barrigaverde.net/narciso-isa-conde-cuestiona-alcance-de-investigacion-por-fraude-millonario-en-senasa/',
      },
      {
        title: 'El Nacional — Izquierdistas se unen y forman el Partido del Poder Popular (jun-2026)',
        url: 'https://elnacional.com.do/politica/izquierdistas-unen-forman-partido-popular-encabezado-narciso-isa-conde_574192.html',
      },
      {
        title: 'Kaos en la Red — Isa Conde: de la bendición de Pompeo al fascismo de Trump (sep-2026)',
        url: 'https://kaosenlared.net/republica-dominicana-de-la-bendicion-de-pompeo-al-fascismo-de-trump/',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'par-patria-libre',
    name: 'Patria Libre',
    kind: 'partido',
    subtitle: 'Sin reconocimiento de la JCE · Fernando Abreu · aspirante presidencial 2028',
    summary:
      'Partido con el que Fernando Abreu aspira a la presidencia en 2028; la JCE aún no lo ha reconocido. Se presenta como nueva derecha: libertario en economía, provida y profamilia, y nacionalista (muro, deportaciones masivas, rechazo a la "injerencia extranjera"). Sin programa propio documentado: puntajes tomados del perfil de Abreu.',
    scores: { eco: 75, soc: 65, mig: -90, ide: -65, rel: -40, val: -80, ord: -60, pod: 10, eti: 40, geo: 0, des: -35, est: 75 },
    confidence: BAJA,
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

  // ——— Izquierda radical contemporánea (dossier 24) ———
  {
    id: 'par-pct',
    name: 'Partido Comunista del Trabajo (PCT)',
    kind: 'partido',
    subtitle: 'Fundado en 1980 · marxista-leninista (CIPOML) · sin registro en la JCE · Aquiles Castro',
    summary:
      'Partido marxista-leninista fundado en 1980 como escisión del MPD y miembro de la CIPOML. Sin registro en la JCE, actúa en elecciones a través del Frente Amplio, con el que llamó a votar por Abinader en 2020. Desde 2025 rechaza el uso de San Isidro y Las Américas por EE.UU., defiende a Cuba y Venezuela, apoyó el paro de San Juan contra la mina Romero y busca una candidatura unitaria de izquierda para 2028.',
    scores: { eco: -85, soc: -85, mig: 55, ide: 60, rel: 65, val: 70, ord: 65, pod: -15, eti: 60, geo: 95, des: 50, est: 45 },
    confidence: { eco: 'alta', geo: 'alta' },
    sources: [
      {
        title: 'CIPOML — Partido Comunista del Trabajo (PCT), República Dominicana',
        url: 'https://www.cipoml.net/es/partido-comunista-del-trabajo-pct-republica-dominicana/',
      },
      {
        title: 'Acento — El PCT elige a Aquiles Castro secretario general en su XI Congreso (feb-2026)',
        url: 'https://acento.com.do/politica/partido-comunista-del-trabajo-elige-a-aquiles-castro-como-nuevo-secretario-general-en-su-xi-congreso-nacional-9623627.html',
      },
      {
        title: 'Acento — Marxistas piden votar por Abinader y por los candidatos del Frente Amplio (jun-2020)',
        url: 'https://acento.com.do/politica/marxistas-piden-votar-por-abinader-y-candidatos-del-frente-amplio-8832507.html',
      },
      {
        title: 'Prensa Latina — El PCT condiciona el diálogo con el Gobierno a medidas en favor de las mayorías (abr-2026)',
        url: 'https://www.prensa-latina.cu/2026/04/17/pct-condiciona-dialogo-en-dominicana-a-medidas-en-favor-de-mayorias/',
      },
      {
        title: 'Lucha — Proclama por la Soberanía Nacional y los Derechos del Pueblo (feb-2026)',
        url: 'https://lucha.com.do/proclama-por-la-soberania-nacional-y-los-derechos-del-pueblo/',
      },
      {
        title: 'El Nacional — El PCT propone unificar a la izquierda para 2028 (jul-2026)',
        url: 'https://elnacional.com.do/politica/pct-propone-unificar-izquierda-dominicana-candidatura-elecciones-2028_576206.html',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'par-mpd-actual',
    name: 'Movimiento Popular Dominicano (MPD) hoy',
    kind: 'partido',
    subtitle: 'Facción de Fernando Hernández (2020–2026) · marxista-leninista · sin registro en la JCE',
    summary:
      'El MPD, fundado en La Habana en 1956, está dividido desde 2006; esta ficha es la facción de Fernando Hernández. Rechaza aliarse con PRM, PLD, FP, PRD o PRSC ("todos son hijos del imperio") y ve 2028 como una etapa de acumulación. Propone una "República Democrática y Popular" de transición al socialismo, una moratoria de la deuda externa y anular el contrato de Barrick, y defiende a Cuba y a Maduro.',
    scores: { eco: -90, soc: -85, mig: 50, ide: 55, rel: 60, val: 65, ord: 50, pod: -25, eti: 75, geo: 100, des: 65, est: 80 },
    confidence: { eco: 'alta', soc: 'baja', mig: 'baja', ide: 'baja', geo: 'alta', est: 'alta' },
    sources: [
      {
        title: 'Acento — El MPD propone la unidad de las fuerzas progresistas para desplazar a la oligarquía (feb-2025)',
        url: 'https://acento.com.do/politica/mpd-propone-la-unidad-de-las-fuerzas-progresistas-para-desplazar-del-poder-a-la-oligarquia-9460336.html',
      },
      {
        title: 'Ciudad Oriental — En su 70 aniversario, el MPD ratifica su compromiso con las luchas del pueblo (feb-2026)',
        url: 'https://ciudadoriental.com/en-su-70-aniversario-el-mpd-ratifica-su-compromiso-con-las-luchas-del-pueblo-dominicano/',
      },
      {
        title: 'Acento — El MPD llama a forjar un frente de izquierda y denuncia entrega de soberanía (may-2026)',
        url: 'https://acento.com.do/politica/mpd-llama-a-forjar-un-frente-de-izquierda-y-denuncia-entrega-de-soberania-9685014.html',
      },
      {
        title: 'Prensa Latina — El MPD califica de crimen el proyecto minero Romero (abr-2026)',
        url: 'https://www.prensa-latina.cu/2026/04/14/movimiento-popular-dominicano-califica-de-crimen-proyecto-minero/',
      },
      {
        title: 'Vértice Crítico — El MPD plantea reconstruir la izquierda desde las bases (sep-2026)',
        url: 'https://verticecritico.net/2026/09/24/mpd-plantea-reconstruir-la-izquierda-desde-las-bases-y-convertir-2028-en-un-proceso-de-acumulacion-popular/',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'par-mst',
    name: 'Movimiento Socialista de Trabajadoras y Trabajadores (MST)',
    kind: 'partido',
    subtitle: 'Trotskista (UIT-CI) · sin registro en la JCE · no se presenta a elecciones',
    summary:
      'Grupo trotskista, sección dominicana de la UIT-CI, que edita La Voz de los Trabajadores. Propone nacionalizar las multinacionales, reestatizar la electricidad, disolver la Policía Nacional, regularizar a los migrantes haitianos y legalizar el aborto. Se opone a la política de EE.UU. y también critica a Maduro, Ortega, Rusia y China. En 2024 llamó a votar por el MPT.',
    scores: { eco: -95, soc: -90, mig: 95, ide: 95, rel: 85, val: 95, ord: 90, pod: 35, eti: 75, geo: 75, des: 90, est: 90 },
    confidence: { eco: 'alta', mig: 'alta', ide: 'alta', val: 'alta', ord: 'alta', geo: 'alta', des: 'alta', est: 'alta' },
    sources: [
      { title: 'MST — Quiénes somos', url: 'https://mst-rd.org/quienes-somos/' },
      { title: 'MST — Maduro y su falso socialismo (jul-2025)', url: 'https://mst-rd.org/2025/07/21/maduro-y-su-falso-socialismo/' },
      {
        title: 'MST — Por un verdadero plan de regularización sin discriminación (jun-2025)',
        url: 'https://mst-rd.org/2025/06/03/por-un-verdadero-plan-de-regularizacion-sin-discriminacion/',
      },
      {
        title: 'MST — El apagón nacional demuestra el fracaso de la privatización eléctrica (nov-2025)',
        url: 'https://mst-rd.org/2025/11/12/el-apagon-nacional-demuestra-el-fracaso-de-la-privatizacion-de-la-industria-electrica/',
      },
      {
        title: 'MST — Estalla el descontento contra el gobierno: luchemos por un cambio revolucionario (jul-2026)',
        url: 'https://mst-rd.org/2026/07/18/estalla-el-descontento-contra-el-gobierno-y-el-neofascismo-pesca-en-rio-revuelto-luchemos-por-un-cambio-revolucionario/',
      },
      { title: 'MST — El MST ante las elecciones de 2024 (dic-2023)', url: 'https://mst-rd.org/2023/12/08/el-mst-ante-las-elecciones-de-2024/' },
    ],
    asOf: '2026-09',
  },
  {
    id: 'par-miu',
    name: 'Movimiento Izquierda Unida (MIU)',
    kind: 'partido',
    subtitle: 'Escisión del MPD (1982) · Miguel Mejía · aliado del PLD durante tres décadas',
    summary:
      'Escisión del MPD (1982) que dirige Miguel Mejía, aliada del PLD durante unas tres décadas; en 2024 no participó. Mejía fue ministro sin cartera hasta enero de 2025, cuando Abinader lo destituyó tras criticar la recepción a Edmundo González. El MIU defiende a Cuba, Venezuela y China, propone un frente nacional por la soberanía frente a EE.UU. y respalda una verja fronteriza "con control civil".',
    scores: { eco: -45, soc: -45, mig: -25, ide: -20, rel: 15, val: 10, ord: 25, pod: -35, eti: 15, geo: 95, des: 35, est: -40 },
    confidence: {
      eco: 'baja',
      soc: 'baja',
      ide: 'baja',
      rel: 'baja',
      val: 'baja',
      ord: 'baja',
      eti: 'baja',
      geo: 'alta',
    },
    sources: [
      {
        title: 'MIU — Izquierda Unida propone verja fronteriza con control civil (may-2025)',
        url: 'https://miu.do/izquierda-unida-propone-verja-fronteriza-con-control-civil-y-de-vision-integradora/',
      },
      { title: 'MIU — Decidimos preservarnos (feb-2024)', url: 'https://miu.do/decidimos-preservarnos/' },
      {
        title: 'MIU — El MIU y el PCT presentan manifiesto por el rescate de la soberanía (jun-2025)',
        url: 'https://miu.do/miu-y-pct-presentan-manifiesto-al-pais-por-el-rescate-de-la-soberania/',
      },
      {
        title: 'Diario Libre — Lo que dice Miguel Mejía sobre su destitución (ene-2025)',
        url: 'https://www.diariolibre.com/politica/gobierno/2025/01/12/lo-que-dice-miguel-mejia-sobre-su-destitucion/2965073',
      },
      {
        title: 'Hoy — El MIU sigue en el gobierno del PLD y aspira a un gobierno socialista (2015)',
        url: 'https://hoy.com.do/miu-sigue-en-gobierno-del-pld-aspira-a-un-gobierno-socialista/',
      },
    ],
    asOf: '2026-09',
  },

  // ——— Históricos (§11.4; rel/val/est relativos a su época) ———
  {
    id: 'par-1j4',
    name: 'Movimiento Revolucionario 14 de Junio (1J4)',
    kind: 'partido',
    subtitle: '1960–1968 · Manolo Tavárez Justo y Minerva Mirabal',
    summary:
      'Movimiento surgido tras las expediciones antitrujillistas de junio de 1959 y dirigido por Manolo Tavárez Justo y Minerva Mirabal. Llamó a la abstención en 1962, pasó de un programa nacional-democrático al marxismo-leninismo y en 1963, tras el golpe contra Bosch, se alzó en guerrillas (Las Manaclas). De sus divisiones salió la Línea Roja maoísta (1968), origen de la UPA y del PTD.',
    scores: { eco: -60, soc: -60, mig: 0, ide: 30, rel: 40, val: 40, ord: 0, pod: 40, eti: 70, geo: 90, des: 0, est: 100 },
    relativeToEra: true,
    sources: [
      {
        title: 'Wikipedia — Movimiento Revolucionario 14 de Junio',
        url: 'https://es.wikipedia.org/wiki/Movimiento_Revolucionario_14_de_Junio',
      },
      {
        title: 'Acento — Apuntes para la historia de los partidos dominicanos',
        url: 'https://acento.com.do/opinion/apuntes-para-la-historia-de-los-partidos-dominicanos-8840951.html',
      },
    ],
  },
  {
    id: 'par-mpd',
    name: 'Movimiento Popular Dominicano (MPD), 1956–1978',
    kind: 'partido',
    subtitle: '1956–1978 · maoísta · Maximiliano Gómez ("El Moreno")',
    summary:
      'Fundado en La Habana el 20 de febrero de 1956 por exiliados antitrujillistas encabezados por Máximo López Molina. Tras 1965 adoptó el maoísmo y la "guerra popular prolongada"; su secretario general Maximiliano Gómez murió en Bruselas en 1971. En 1976 proponía una "revolución nacional democrática" dirigida por la clase obrera "a través de su Partido", como paso al socialismo y al comunismo.',
    scores: { eco: -100, soc: -90, mig: 20, ide: 40, rel: 80, val: 50, ord: -40, pod: -40, eti: 60, geo: 100, des: -20, est: 100 },
    confidence: {
      eco: 'alta',
      soc: 'baja',
      mig: 'baja',
      ide: 'baja',
      rel: 'baja',
      val: 'baja',
      eti: 'baja',
      geo: 'alta',
      des: 'baja',
      est: 'alta',
    },
    relativeToEra: true,
    sources: [
      {
        title: 'MPD — Documento de la Dirección Nacional "Pablo Martínez" (oct-1976), en marxists.org (PDF)',
        url: 'https://www.marxists.org/espanol/tematica/repdom/docs/mpd/mpd-4octubre1976.pdf',
      },
      { title: 'Hoy — La Guardia Roja en la división del MPD (2019)', url: 'https://hoy.com.do/la-guardia-roja-en-la-division-del-mpd/' },
      {
        title: 'Listín Diario — La izquierda también tuvo sus paredones (2021)',
        url: 'https://listindiario.com/la-republica/2021/06/01/672920/la-izquierda-tambien-tuvo-sus-paredones.html',
      },
      { title: 'Wikipedia (inglés) — Maximiliano Gómez', url: 'https://en.wikipedia.org/wiki/Maximiliano_G%C3%B3mez' },
      {
        title: 'Acento — Apuntes para la historia de los partidos dominicanos',
        url: 'https://acento.com.do/opinion/apuntes-para-la-historia-de-los-partidos-dominicanos-8840951.html',
      },
    ],
  },
  {
    id: 'par-pcd',
    name: 'PSP y Partido Comunista Dominicano en la clandestinidad (1944–1977)',
    kind: 'partido',
    subtitle: '1944–1977 · PSP desde 1946, PCD desde 1965 · prosoviético y clandestino',
    summary:
      'Nació el 27 de febrero de 1944 como Partido Revolucionario Democrático Dominicano y fue Partido Socialista Popular (PSP) desde 1946. Proscrito bajo Trujillo, pidió la abstención en 1962 y combatió en 1965. En agosto de 1965 una escisión, con Narciso y Antonio Isa Conde entre sus fundadores, formó el PCD, que siguió en la clandestinidad bajo Balaguer.',
    scores: { eco: -100, soc: -90, mig: 45, ide: 60, rel: 80, val: 60, ord: -20, pod: -35, eti: 60, geo: 100, des: -10, est: 95 },
    confidence: { soc: 'baja', rel: 'baja', val: 'baja', ord: 'baja', eti: 'baja', des: 'baja' },
    relativeToEra: true,
    sources: [
      {
        title: 'PCD — "Una repatriación incalificable" (may-1977), en marxists.org (PDF)',
        url: 'https://www.marxists.org/espanol/tematica/repdom/docs/pcd158-1.pdf',
      },
      {
        title: 'PSP — Declaración ante la comisión de la OEA (may-1965), en marxists.org (PDF)',
        url: 'https://www.marxists.org/espanol/tematica/repdom/docs/psp/psp1965.pdf',
      },
      {
        title: 'Listín Diario — El ocaso de la izquierda (2023)',
        url: 'https://listindiario.com/la-republica/2023/02/23/764125/el-ocaso-de-la-izquierda.html',
      },
      {
        title: 'Primicias — 82 aniversario de la fundación del primer partido comunista en RD (mar-2026)',
        url: 'https://primicias.net/web/conmemoran-con-ofrenda-floral-82-aniversario-de-la-fundacion-del-primer-partido-comunista-en-rd/',
      },
      { title: 'Wikipedia (inglés) — Dominican Communist Party', url: 'https://en.wikipedia.org/wiki/Dominican_Communist_Party' },
      { title: 'Diccionario Funglode — Narciso Isa Conde', url: 'https://diccionario.funglode.org/isa-conde-narciso/' },
    ],
  },
  {
    id: 'par-pcd-legal',
    name: 'Partido Comunista Dominicano (PCD) legal (1977–1996)',
    kind: 'partido',
    subtitle: '1977–1996 · Narciso Isa Conde · candidato presidencial en 1978, 1982 y 1986',
    summary:
      'Legalizado por la Ley 692 de 1977, fue el primer partido comunista en unas elecciones dominicanas: Isa Conde sacó 0.59 % en 1978 y 1.01 % en 1982, en alianza con el MPS. Su programa de 1984 proponía socializar las grandes empresas, una "democracia socialista" con libertad de partidos, legalizar el aborto y una política de amistad con Haití. En 1996 se fusionó en Fuerza de la Revolución, antecesora del PPP.',
    scores: { eco: -95, soc: -90, mig: 45, ide: 70, rel: 70, val: 90, ord: 10, pod: -10, eti: 70, geo: 100, des: -25, est: 70 },
    confidence: { eco: 'alta', ide: 'alta', rel: 'alta', val: 'alta', ord: 'baja', geo: 'alta' },
    relativeToEra: true,
    sources: [
      {
        title: 'AGN — Programa del PCD aprobado en su III Congreso (1984)',
        url: 'https://colecciones.agn.gob.do/opac/ficha.php?informatico=00167549PI&codopac=OP003',
      },
      {
        title: 'PCD — Manifiesto ante el gobierno del PRD (ago-1982), en marxists.org (PDF)',
        url: 'https://www.marxists.org/espanol/tematica/repdom/docs/pcd/pcd-manifiesto-agosto1982.pdf',
      },
      {
        title: 'IDEA — Regulación jurídica de los partidos políticos en la República Dominicana (Ley 692 de 1977)',
        url: 'https://www.idea.int/sites/default/files/publications/chapters/regulacion-juridica-de-los-partidos-politicos-en-america-latina/regulacion-juridica-de-los-partidos-politicos-ena-america-latina-rep-dominicana-16.pdf',
      },
      { title: 'PDBA Georgetown — Elecciones presidenciales de 1982', url: 'https://pdba.georgetown.edu/Elecdata/DomRep/drpres82.html' },
      {
        title: 'Primicias — 82 aniversario de la fundación del primer partido comunista en RD (mar-2026)',
        url: 'https://primicias.net/web/conmemoran-con-ofrenda-floral-82-aniversario-de-la-fundacion-del-primer-partido-comunista-en-rd/',
      },
    ],
  },
  {
    id: 'par-prd-bosch',
    name: 'PRD de Juan Bosch (1939–1973)',
    kind: 'partido',
    subtitle: '1939–1973 · fundado en el exilio · gobierno de 1963',
    summary:
      'El PRD que Juan Bosch y otros exiliados antitrujillistas fundaron el 21 de enero de 1939 en La Habana. Llegó al país en 1961, ganó las elecciones de 1962 y gobernó en 1963 con una Constitución de reforma agraria y educación laica, hasta el golpe del 25 de septiembre. Tras la guerra de 1965 y la derrota de 1966, Bosch giró a la izquierda y en 1973 dejó el partido para fundar el PLD.',
    scores: { eco: -50, soc: -60, mig: 0, ide: 30, rel: 50, val: 40, ord: 70, pod: 70, eti: 85, geo: 45, des: -20, est: 60 },
    relativeToEra: true,
    sources: [
      {
        title: 'Wikipedia — Partido Revolucionario Dominicano',
        url: 'https://es.wikipedia.org/wiki/Partido_Revolucionario_Dominicano',
      },
      {
        title: 'Wikipedia — Juan Bosch',
        url: 'https://es.wikipedia.org/wiki/Juan_Bosch',
      },
      {
        title: 'Nueva Sociedad — La evolución del Partido Revolucionario Dominicano',
        url: 'https://nuso.org/articulo/la-evolucion-del-partido-revolucionario-dominicano/',
      },
    ],
  },
  {
    id: 'par-prd-pena-gomez',
    name: 'PRD de Peña Gómez (1973–1998)',
    kind: 'partido',
    subtitle: '1973–1998 · José Francisco Peña Gómez · gobiernos de Guzmán (1978–1982) y Jorge Blanco (1982–1986)',
    summary:
      'Tras la salida de Bosch, el PRD se consolidó como partido socialdemócrata de masas, miembro de la Internacional Socialista, con el liderazgo de José Francisco Peña Gómez. Gobernó con Antonio Guzmán (amnistía y despolitización militar) y con Salvador Jorge Blanco (ajuste del FMI y la poblada de 1984). Peña Gómez, blanco de campañas racistas, perdió en 1994 y 1996 y murió en 1998.',
    scores: { eco: -20, soc: -35, mig: -5, ide: 20, rel: -15, val: 5, ord: 25, pod: 40, eti: -40, geo: -40, des: -10, est: 15 },
    confidence: { des: 'baja' },
    relativeToEra: true,
    sources: [
      {
        title: 'Wikipedia — José Francisco Peña Gómez',
        url: 'https://es.wikipedia.org/wiki/José_Francisco_Peña_Gómez',
      },
      {
        title: 'Wikipedia — Antonio Guzmán Fernández',
        url: 'https://es.wikipedia.org/wiki/Antonio_Guzmán_Fernández',
      },
      {
        title: 'Hoy — Peña Gómez, Balaguer y el racismo',
        url: 'https://hoy.com.do/pena-gomez-balaguer-y-el-racismo-iii/',
      },
      {
        title: 'Nueva Sociedad — La evolución del Partido Revolucionario Dominicano',
        url: 'https://nuso.org/articulo/la-evolucion-del-partido-revolucionario-dominicano/',
      },
    ],
  },
  {
    id: 'par-prd-hipolito',
    name: 'PRD de Hipólito Mejía (1998–2014)',
    kind: 'partido',
    subtitle: '1998–2014 · gobierno de Hipólito Mejía (2000–2004)',
    summary:
      'Tras la muerte de Peña Gómez, Hipólito Mejía ganó en 2000 y gobernó hasta 2004: Ley 87-01 de Seguridad Social, recompra del 50 % de Edenorte y Edesur a Unión Fenosa, crisis de Baninter (2003), reforma de 2002 para permitir la reelección y tropas en Irak. El partido perdió en 2004, 2008 y 2012, y en 2014 la corriente de Hipólito y Luis Abinader salió para formar el PRM.',
    scores: { eco: -10, soc: -40, mig: -30, ide: -10, rel: -30, val: -25, ord: -25, pod: -50, eti: -35, geo: -65, des: 0, est: 10 },
    relativeToEra: true,
    sources: [
      {
        title: 'Wikipedia — Hipólito Mejía',
        url: 'https://es.wikipedia.org/wiki/Hipólito_Mejía',
      },
      {
        title: 'Wikipedia — Partido Revolucionario Dominicano',
        url: 'https://es.wikipedia.org/wiki/Partido_Revolucionario_Dominicano',
      },
      {
        title: 'Wikipedia — Partido Revolucionario Moderno',
        url: 'https://es.wikipedia.org/wiki/Partido_Revolucionario_Moderno',
      },
    ],
  },
  {
    id: 'par-prsc-balaguer',
    name: 'PRSC de Balaguer (1963–2002)',
    kind: 'partido',
    subtitle: '1963–2002 · Joaquín Balaguer · Partido Reformista (1963) y PRSC (1984)',
    summary:
      'El reformismo de Joaquín Balaguer: el Partido Reformista (1963) gobernó en 1966–1978, se fusionó en 1984 con el Partido Revolucionario Social Cristiano y volvió al poder en 1986–1996. Balaguer fue su candidato de 1966 a 2000, salvo en 1996. El 13 de julio de 2002, víspera de su muerte, sus asambleístas votaron con el PRD la reelección consecutiva, no la rebaja del umbral al 45 %. Democracia cristiana e hispanismo.',
    scores: { eco: 0, soc: -10, mig: -70, ide: -80, rel: -70, val: -70, ord: -65, pod: -75, eti: -70, geo: -70, des: -10, est: -65 },
    relativeToEra: true,
    sources: [
      {
        title: 'Wikipedia — Partido Reformista Social Cristiano',
        url: 'https://es.wikipedia.org/wiki/Partido_Reformista_Social_Cristiano',
      },
      {
        title: 'Wikipedia — Joaquín Balaguer',
        url: 'https://es.wikipedia.org/wiki/Joaqu%C3%ADn_Balaguer',
      },
      { title: 'CIDOB — Joaquín Balaguer Ricardo', url: 'https://www.cidob.org/lider-politico/joaquin-balaguer-ricardo' },
      {
        title: 'CIDOB — Hipólito Mejía Domínguez (reforma constitucional de 2002)',
        url: 'https://www.cidob.org/lider-politico/hipolito-mejia-dominguez',
      },
    ],
  },
  {
    id: 'par-prsc-post-balaguer',
    name: 'PRSC tras Balaguer (2002–2012)',
    kind: 'partido',
    subtitle: '2002–2012 · candidatos Eduardo Estrella (2004) y Amable Aristy (2008)',
    summary:
      'Tras la muerte de Balaguer (14 de julio de 2002), el PRSC peleó su sucesión: llevó candidatos propios con cada vez menos votos (Eduardo Estrella, 8.65 % en 2004; Amable Aristy Castro, 4.59 % en 2008) y sufrió escisiones hacia el PLD y hacia Dominicanos por el Cambio, que Estrella fundó en 2007. Alternó alianzas congresuales con el PRD (2006) y con el PLD (2010).',
    scores: { eco: 10, soc: -10, mig: -60, ide: -60, rel: -60, val: -55, ord: -40, pod: -40, eti: -45, geo: -50, des: -20, est: -40 },
    confidence: { ide: 'baja', rel: 'baja', val: 'baja', ord: 'baja', geo: 'baja', des: 'baja' },
    relativeToEra: true,
    sources: [
      {
        title: 'Wikipedia — Partido Reformista Social Cristiano',
        url: 'https://es.wikipedia.org/wiki/Partido_Reformista_Social_Cristiano',
      },
      {
        title: 'Wikipedia — Elecciones presidenciales de la República Dominicana de 2004',
        url: 'https://es.wikipedia.org/wiki/Elecciones_presidenciales_de_la_Rep%C3%BAblica_Dominicana_de_2004',
      },
      {
        title: 'Wikipedia — Elecciones presidenciales de la República Dominicana de 2008',
        url: 'https://es.wikipedia.org/wiki/Elecciones_presidenciales_de_la_Rep%C3%BAblica_Dominicana_de_2008',
      },
      {
        title: 'Hoy — Estrella abandona PRSC; trabajará por el cambio (22-jul-2007)',
        url: 'https://hoy.com.do/el-pais/estrella-abandona-prsctrabajara-por-el-cambio_200973.html',
      },
      {
        title: 'Listín Diario — En dos décadas el PRSC pierde parte de fuselaje (2022)',
        url: 'https://listindiario.com/la-republica/2022/11/29/750587/en-dos-decadas-el-prsc-pierde-parte-de-fuselaje.html',
      },
    ],
  },
  {
    id: 'par-pld-bosch',
    name: 'PLD de Juan Bosch (1973–1994)',
    kind: 'partido',
    subtitle: '1973–1994 · Juan Bosch, candidato hasta 1994 · en la oposición',
    summary:
      'El Partido de la Liberación Dominicana que fundó Juan Bosch el 15 de diciembre de 1973 tras salir del PRD: partido de cuadros, con análisis marxista, centralismo democrático y un proyecto de "liberación nacional", y una ética de que nadie se enriquecería en la política. Etapa anterior a su llegada al poder.',
    scores: { eco: -70, soc: -70, mig: -10, ide: 30, rel: 40, val: 20, ord: 40, pod: 40, eti: 90, geo: 80, des: -10, est: 70 },
    relativeToEra: true,
    sources: [
      {
        title: 'Acento — Lo que fue el PLD y lo que es hoy',
        url: 'https://acento.com.do/politica/lo-que-fue-el-pld-y-lo-que-es-hoy-a-proposito-de-sus-39-anos-de-fundado-28155.html',
      },
      { title: 'Wikipedia (inglés) — Dominican Liberation Party', url: 'https://en.wikipedia.org/wiki/Dominican_Liberation_Party' },
    ],
  },
  {
    id: 'par-pld-leonel',
    name: 'PLD de Leonel Fernández (1996–2012)',
    kind: 'partido',
    subtitle: '1996–2012 · gobiernos de Leonel Fernández (1996–2000 y 2004–2012)',
    summary:
      'El PLD bajo el liderazgo de Leonel Fernández, que llegó al poder en 1996 con el apoyo de Balaguer (Frente Patriótico) y gobernó en 1996–2000 y 2004–2012: capitalización de empresas públicas (Ley 141-97), DR-CAFTA, Petrocaribe, metro de Santo Domingo y la Constitución de 2010 (arts. 18, 37 y 55). Sus críticos señalan el clientelismo y casos como el PEME y Sun Land.',
    scores: { eco: 40, soc: -15, mig: -45, ide: -40, rel: -50, val: -45, ord: -20, pod: -5, eti: -60, geo: -20, des: -30, est: -60 },
    relativeToEra: true,
    sources: [
      {
        title: 'Wikipedia — Leonel Fernández',
        url: 'https://es.wikipedia.org/wiki/Leonel_Fernández',
      },
      {
        title: 'El Día — Constitución, reelección y fractura: las reformas de 2010 y 2015 en el PLD',
        url: 'https://eldia.com.do/constitucion-reeleccion-y-fractura-como-las-reformas-de-2010-y-2015-sacudieron-al-pld/',
      },
      {
        title: 'Acento — Lo que fue el PLD y lo que es hoy',
        url: 'https://acento.com.do/politica/lo-que-fue-el-pld-y-lo-que-es-hoy-a-proposito-de-sus-39-anos-de-fundado-28155.html',
      },
    ],
  },
  {
    id: 'par-pld-danilo',
    name: 'PLD de Danilo Medina (2012–2020)',
    kind: 'partido',
    subtitle: '2012–2020 · gobiernos de Danilo Medina',
    summary:
      'El PLD durante los gobiernos de Danilo Medina: reforma fiscal de 2012, 4 % del PIB para educación y tanda extendida, la sentencia TC 168-13 seguida de la Ley 169-14 y el plan de regularización, relaciones con China (2018), la reforma de 2015 para la reelección, Odebrecht y Punta Catalina. La ruptura con Leonel en 2019 dio origen a la Fuerza del Pueblo.',
    scores: { eco: -10, soc: -50, mig: -30, ide: -30, rel: -40, val: -10, ord: -30, pod: -60, eti: -80, geo: 20, des: -45, est: -70 },
    relativeToEra: true,
    sources: [
      {
        title: 'Wikipedia — Danilo Medina',
        url: 'https://es.wikipedia.org/wiki/Danilo_Medina',
      },
      {
        title: 'El Día — Constitución, reelección y fractura: las reformas de 2010 y 2015 en el PLD',
        url: 'https://eldia.com.do/constitucion-reeleccion-y-fractura-como-las-reformas-de-2010-y-2015-sacudieron-al-pld/',
      },
      {
        title: 'France 24 — República Dominicana establece relaciones con China y rompe con Taiwán',
        url: 'https://www.france24.com/es/20180501-republica-dominicana-establece-relaciones-diplomaticas-con-china-y-rompe-con-taiwan',
      },
    ],
  },
  {
    id: 'par-fnp-historica',
    name: 'FNP histórica (Vincho Castillo)',
    kind: 'partido',
    subtitle: 'Desde 1980 · Marino Vinicio "Vincho" Castillo · aliada del PLD de 1996 a 2023',
    summary:
      'La Fuerza Nacional Progresista fundada el 6 de julio de 1980 por Marino Vinicio "Vincho" Castillo: nacionalconservadora, contraria a la inmigración haitiana y a la "injerencia" extranjera, y muy conservadora en temas morales. Fue aliada del PLD desde 1996 hasta la ruptura de 2023.',
    scores: { eco: 10, soc: 20, mig: -100, ide: -100, rel: -90, val: -100, ord: -80, pod: -20, eti: 20, geo: 20, des: -20, est: 20 },
    relativeToEra: true,
    sources: [
      { title: 'Wikipedia — Fuerza Nacional Progresista', url: 'https://es.wikipedia.org/wiki/Fuerza_Nacional_Progresista' },
      {
        title: 'Listín Diario — Vincho Castillo: la FNP no irá en una alianza opositora con el PLD (2023)',
        url: 'https://listindiario.com/la-republica/politica/20230430/vincho-castillo-afirma-fnp-participara-alianza-opositora-encabezada-leonel-2024_750945.html',
      },
    ],
  },
  {
    id: 'par-pqd-wessin',
    name: 'Partido Quisqueyano Demócrata (PQD) de Wessin',
    kind: 'partido',
    subtitle: 'Fundado en 1967–1968 · general Elías Wessin y Wessin',
    summary:
      'Partido fundado en 1967–1968 por el general Elías Wessin y Wessin, que encabezó el golpe de 1963 contra Bosch y el bando "leal" en 1965. Anticomunista, militar y democristiano; Balaguer exilió a Wessin en 1971. Más tarde pasó a llamarse PQDC.',
    scores: { eco: 30, soc: 30, mig: -60, ide: -70, rel: -80, val: -80, ord: -90, pod: -60, eti: -30, geo: -80, des: -20, est: -20 },
    relativeToEra: true,
    sources: [
      {
        title: 'Wikipedia — Partido Quisqueyano Demócrata Cristiano',
        url: 'https://es.wikipedia.org/wiki/Partido_Quisqueyano_Dem%C3%B3crata_Cristiano',
      },
      {
        title: 'Acento — Apuntes para la historia de los partidos dominicanos',
        url: 'https://acento.com.do/opinion/apuntes-para-la-historia-de-los-partidos-dominicanos-8840951.html',
      },
    ],
  },
];
