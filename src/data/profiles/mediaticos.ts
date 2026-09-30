// Medios, outsiders, artistas, influencers y movimientos (docs/PLAN.md §11.5–11.8 y §11.12).
// Puntajes: exactamente los de las tablas del PLAN, en el orden eco soc mig ide rel val ord pod eti geo des est.
// Confianza: los valores con * del PLAN son 'baja'; los ejes sin entrada quedan en 'media' (por defecto).
// `eti` de personas vivas = discurso y posiciones declaradas, no juicio de conducta.
import { AXIS_IDS } from '../axes.ts';
import type { AxisId, Confidence, Profile } from '../types.ts';

type ConfidenceMap = Partial<Record<AxisId, Confidence>>;

/** Confianza baja en los ejes indicados (valores inferidos, marcados con * en el PLAN). */
function baja(...axes: AxisId[]): ConfidenceMap {
  return Object.fromEntries(axes.map((axis) => [axis, 'baja'])) as ConfidenceMap;
}

/** Confianza baja en todos los ejes salvo los indicados, que quedan en 'media'. */
function bajaSalvo(...except: AxisId[]): ConfidenceMap {
  return baja(...AXIS_IDS.filter((axis) => !except.includes(axis)));
}

export const mediaticos: Profile[] = [
  // ── §11.5 Outsiders, derecha nacionalista, religión, progresismo y periodistas ──
  {
    id: 'med-alofoke',
    name: 'Santiago Matías "Alofoke"',
    kind: 'mediatico',
    subtitle: 'Empresario de medios · fundador de Dominicanos Primero (2026)',
    summary:
      'Fundador de Alofoke Media Group; militó en el PLD de 2010 a 2022. En julio de 2026 rechazó ser candidato del PRSC y en agosto depositó en la JCE Dominicanos Primero, que se define como "una nueva derecha dominicana". Propone 60 días para la salida de indocumentados, impedir que dominicanos de ascendencia haitiana aspiren a cargos, el voto de militares y abaratar la importación de armas; promete no repartir dádivas.',
    scores: { eco: 25, soc: 5, mig: -90, ide: -65, rel: -10, val: -30, ord: -70, pod: -30, eti: 35, geo: -50, des: 0, est: 90 },
    confidence: baja('eco', 'rel', 'val', 'des'),
    sources: [
      {
        title: 'El Nacional: Alofoke crea el partido Dominicanos Primero (ago-2026)',
        url: 'https://elnacional.com.do/politica/alofoke-crea-partido-dominicanos-primero-miras-elecciones-2028_578098.html',
      },
      {
        title: 'Acento: las propuestas de Santiago Matías para 2028',
        url: 'https://acento.com.do/politica/las-controversiales-propuestas-de-santiago-matias-alofoke-si-gana-la-presidencia-en-2028-estas-de-acuerdo-con-su-vision-de-rd-9731875.html',
      },
      {
        title: 'El Nacional: ley contra candidaturas de dominicanos de ascendencia haitiana',
        url: 'https://elnacional.com.do/politica/alofoke-promete-crear-ley-que-impida-dominicanos-de-ascendencia-haitiana-aspiren-a-cargos-electivos-en-rd_577915.html',
      },
      {
        title: '7días: reunión con la embajadora de EE.UU. (8-sep-2026)',
        url: 'https://7dias.com.do/2026/09/08/alofoke-presenta-proyecto-dominicanos-primero-a-embajadora-de-estados-unidos-en-reunion-de-alto-nivel/',
      },
      {
        title: 'RD Música: los partidos que buscan entrar en 2028 (8-sep-2026)',
        url: 'https://www.rdmusica.com/de-alofoke-hasta-izquierdistas-los-partidos-que-buscan-ser-parte-del-2028/',
      },
      {
        title: 'Código Postal: Alofoke pide protección a EE.UU. tras denunciar amenazas (8-jun-2026)',
        url: 'https://codigopostalrd.net/?p=69910',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'mov-somos-pueblo',
    name: 'Somos Pueblo (El Piro y Ricardo Ripoll)',
    kind: 'movimiento',
    subtitle: 'Plataforma digital de denuncia · Ricardo Ripoll y Eduardo Sánchez Tolentino "El Piro"',
    summary:
      'Plataforma digital de denuncia (combustibles, abusos, acceso a playas) de Ricardo Ripoll y del rapero Eduardo Sánchez Tolentino, "El Piro", que criticó la reforma fiscal de 2024. En julio de 2026 coorganizaron con Alofoke las protestas contra los artículos "mordaza" del Código Penal y negociaron su cambio con Abinader. Defienden las candidaturas independientes y dicen no buscar cargos.',
    scores: { eco: -25, soc: -30, mig: -10, ide: 0, rel: 10, val: 10, ord: 50, pod: 55, eti: 85, geo: 0, des: 35, est: 80 },
    confidence: baja('soc', 'mig', 'ide', 'rel', 'val', 'geo', 'des'),
    sources: [
      {
        title: 'El Día: El Piro y el miedo a las candidaturas independientes',
        url: 'https://eldia.com.do/el-piro-sobre-influencers-en-politica-hay-miedo-con-las-candidaturas-independientes-porque-no-pueden-controlarlas/',
      },
      {
        title: 'El Día: protesta "No a la ley mordaza" en la Plaza de la Bandera',
        url: 'https://eldia.com.do/bajo-la-consigna-no-a-la-ley-mordaza-cientos-de-personas-protestan-contra-articulos-nuevo-codigo-penal-en-la-plaza-de-la-bandera/',
      },
      {
        title: 'Listín Diario: Alofoke e influencers, nuevos interlocutores del Gobierno (10-jul-2026)',
        url: 'https://listindiario.com/la-republica/20260710/alofoke-e-influencers-nuevos-interlocutores-gobierno_913337.html',
      },
      {
        title: 'De Último Minuto: El Piro sobre la reforma fiscal (oct-2024)',
        url: 'https://deultimominuto.com/nacionales/el-piro-en-vista-de-reforma-fiscal-por-que-el-sacrificio-lo-tenemos-que-hacer-nosotros/',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'mov-antigua-orden',
    name: 'Antigua Orden Dominicana',
    kind: 'movimiento',
    subtitle: 'Movimiento nacionalista fundado en 2018 · líder: Ángelo Vásquez · en proceso de ser partido (2026)',
    summary:
      'Movimiento nacionalista fundado en 2018 por Ángelo Vásquez, con el lema "Dios, Patria y Libertad"; se define como conservador y provida. Ha marchado contra la migración haitiana irregular, contra la ONU y Amnistía Internacional, y contra la "ley mordaza" y la reforma fiscal; en 2024 felicitó a Trump por su elección. En agosto de 2026 anunció que será partido, con Vásquez como candidato presidencial para 2028.',
    scores: { eco: -15, soc: -30, mig: -100, ide: -100, rel: -70, val: -90, ord: -95, pod: -45, eti: 40, geo: -15, des: 30, est: 95 },
    confidence: { mig: 'alta', ide: 'alta', est: 'alta' },
    sources: [
      {
        title: 'Antigua Orden Dominicana: web y programa (sep-2026)',
        url: 'https://antiguaorden.com/',
      },
      {
        title: 'Listín Diario: Antigua Orden anuncia su salto a la política (30-ago-2026)',
        url: 'https://listindiario.com/la-republica/provincias/20260830/antigua-orden-dominicana-anuncia-salto-politica-marcha-moca_920228.html',
      },
      {
        title: 'El Nuevo Diario: Vásquez buscará la presidencia en 2028 (31-ago-2026)',
        url: 'https://elnuevodiario.com.do/angelo-vazquez-confirma-que-la-antigua-orden-busca-convertirse-en-partido-y-competir-en-2028/',
      },
      {
        title: 'X: Antigua Orden felicita a Trump (6-nov-2024)',
        url: 'https://x.com/AntiguaOrden_RD/status/1854176260068458843',
      },
      {
        title: 'N Digital: "Nos oponemos a cualquier intervención o imposición de la ONU" (24-mar-2024)',
        url: 'https://n.com.do/2024/03/24/antigua-orden-dominicana-nos-oponemos-a-cualquier-intervencion-o-imposicion-de-la-onu/',
      },
      {
        title: 'N Digital: Vásquez, "defendiendo la dominicanidad" (24-abr-2025)',
        url: 'https://n.com.do/2025/04/24/angelo-vasquez-antigua-orden-migracion-republica-dominicana/',
      },
      {
        title: 'N Digital: marcha contra la regulación de redes (23-may-2025)',
        url: 'https://n.com.do/2025/05/23/angelo-vasquez-protesta-censura-redes-sociales/',
      },
      {
        title: 'N Digital: marcha en Friusa (30-mar-2025)',
        url: 'https://n.com.do/2025/03/30/antigua-orden-dominicana-finaliza-marcha-enfrentamientos-policia-punta-cana/',
      },
      {
        title: 'N Digital: Antigua Orden en la protesta minera de San Juan (may-2026)',
        url: 'https://n.com.do/2026/05/03/antigua-orden-participara-en-protesta-de-san-juan-por-rechazo-a-actividad-minera/',
      },
      {
        title: 'Wikipedia: Antigua Orden Dominicana',
        url: 'https://es.wikipedia.org/wiki/Antigua_Orden_Dominicana',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'mov-instituto-duartiano',
    name: 'Instituto Duartiano',
    kind: 'movimiento',
    subtitle: 'Institución pública dedicada al legado de Juan Pablo Duarte',
    summary:
      'Institución pública dedicada a preservar el legado de Juan Pablo Duarte. En 2026, a través de Wilson Gómez Ramírez, advirtió del "serio peligro" que ve en la crisis haitiana y en "entidades extranjeras" (julio) y afirmó que la matrícula haitiana llega al 70 % en escuelas fronterizas (septiembre). En noviembre de 2025 se declaró preocupado por el acuerdo firmado entre RD y EE.UU.',
    scores: { eco: 0, soc: -10, mig: -85, ide: -90, rel: -30, val: -50, ord: -40, pod: 30, eti: 30, geo: 50, des: 0, est: -20 },
    confidence: baja('eco', 'soc', 'rel', 'val', 'ord', 'des'),
    sources: [
      { title: 'Wikipedia: Instituto Duartiano', url: 'https://es.wikipedia.org/wiki/Instituto_Duartiano' },
      {
        title: 'N Digital: el Instituto Duartiano advierte amenazas a la soberanía (jul-2026)',
        url: 'https://n.com.do/2026/07/04/instituto-duartiano-advierte-amenazas-soberania-crisis-haiti/',
      },
      {
        title: 'Listín Diario: Wilson Gómez, preocupado por el acuerdo RD–EE.UU. (nov-2025)',
        url: 'https://listindiario.com/la-republica/20251130/wilson-gomez-dice-preocupado-acuerdo-firmado-rd-eeuu_884371.html',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'med-ezequiel-molina',
    name: 'Ezequiel Molina Rosario',
    kind: 'mediatico',
    subtitle: 'Pastor evangélico · conductor de La Batalla de la Fe',
    summary:
      'Pastor evangélico y conductor del programa La Batalla de la Fe. Rechaza el aborto y el matrimonio igualitario (2024), apoyó la reforma constitucional de 2015 que habilitó la reelección de Danilo Medina, criticó a la ONU por su postura sobre la migración haitiana (2022) y respalda la acción policial. En 2026 centra su mensaje público en la corrupción ("los corruptos responderán a Dios").',
    scores: { eco: 0, soc: -10, mig: -50, ide: -40, rel: -90, val: -95, ord: -50, pod: -30, eti: 20, geo: -40, des: 0, est: -50 },
    confidence: baja('eco', 'soc', 'ide', 'des'),
    sources: [
      {
        title: 'Diario Libre: Ezequiel Molina, la historia de su respaldo a gobiernos (ene-2025)',
        url: 'https://www.diariolibre.com/actualidad/nacional/2025/01/20/ezequiel-molina-la-historia-de-su-respaldo-a-gobiernos/2972762',
      },
      {
        title: 'N Digital: "los corruptos tendrán que responderle a Dios" (ene-2026)',
        url: 'https://n.com.do/2026/01/02/ezequiel-molina-los-corruptos-tendran-que-responderle-a-dios-por-sus-actos/',
      },
      {
        title: 'Acento: Ezequiel Molina respalda a Trump en su política hacia Irán (abr-2026)',
        url: 'https://acento.com.do/actualidad/pastor-ezequiel-molina-respalda-a-trump-en-politica-hacia-iran-y-critica-al-papa-leon-xiv-9664150.html',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'mov-iglesia-catolica',
    name: 'Iglesia Católica (Conferencia del Episcopado Dominicano)',
    kind: 'movimiento',
    subtitle: 'Conferencia del Episcopado Dominicano (CED)',
    summary:
      'La asamblea de los obispos católicos del país. La CED sostiene que el aborto es incompatible con la Constitución y pide aplicar la ley migratoria "con justicia", sin deportaciones arbitrarias ni separación de familias. En agosto de 2026, sectores católicos se sumaron a la oposición a incluir la orientación sexual en el artículo 173 del Código Penal. Monseñor Francisco Ozoria se retira en octubre de 2026.',
    scores: { eco: -20, soc: -50, mig: 25, ide: -30, rel: -80, val: -80, ord: 30, pod: 40, eti: 50, geo: 0, des: 60, est: -60 },
    confidence: baja('geo'),
    sources: [
      {
        title: 'Wikipedia: Conferencia del Episcopado Dominicano',
        url: 'https://es.wikipedia.org/wiki/Conferencia_del_Episcopado_Dominicano',
      },
      {
        title: 'AICA: el episcopado alza su voz frente a deportaciones masivas',
        url: 'https://aica.org/noticia-republica-dominicana-el-episcopado-alza-su-voz-frente-a-deportaciones-masivas-de-haitianos',
      },
      {
        title: 'Bajo Techo: grupos provida rechazan incluir la orientación sexual en el art. 173 (ago-2026)',
        url: 'https://www.bajotecho.digital/2026/08/26/grupos-provida-rechazan-incluir-orientacion-sexual-en-articulo-173-del-codigo-penal/',
      },
      {
        title: '7días: monseñor Ozoria anuncia el posible fin de su misión pastoral (jul-2026)',
        url: 'https://7dias.com.do/2026/07/16/tras-cumplir-75-anos-monsenor-francisco-ozoria-anuncia-el-posible-fin-de-su-mision-pastoral/',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'mov-bloque-evangelico',
    name: 'Bloque evangélico (CODUE y otras)',
    kind: 'movimiento',
    subtitle: 'CODUE, Conacope, Conedo y la Mesa de Diálogo evangélica',
    summary:
      'Agrupa a organizaciones evangélicas como el Consejo Dominicano de Unidad Evangélica (CODUE), Conacope y Conedo. En enero de 2026 CODUE defendió la sentencia TC 168-13 en nombre de la institucionalidad; en agosto, junto a grupos provida y sectores católicos, se opuso ante el TC a incluir la orientación sexual en el art. 173 del Código Penal. Sus posiciones en economía, orden y política exterior son estimadas.',
    scores: { eco: 0, soc: -10, mig: -40, ide: -35, rel: -85, val: -90, ord: -40, pod: 0, eti: 20, geo: -10, des: 0, est: -40 },
    confidence: baja('eco', 'soc', 'mig', 'ord', 'pod', 'eti', 'geo', 'des'),
    sources: [
      {
        title: 'Acento — CODUE llama a defender la sentencia TC 168-13 (20-ene-2026)',
        url: 'https://acento.com.do/actualidad/codue-alerta-de-presuntas-pretensiones-para-revertir-sentencia-168-13-y-llama-a-defender-la-institucionalidad-9607608.html',
      },
      {
        title: 'Bajo Techo: grupos provida rechazan incluir la orientación sexual en el art. 173 (ago-2026)',
        url: 'https://www.bajotecho.digital/2026/08/26/grupos-provida-rechazan-incluir-orientacion-sexual-en-articulo-173-del-codigo-penal/',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'mov-marcha-verde',
    name: 'Marcha Verde',
    kind: 'movimiento',
    subtitle: 'Movimiento cívico contra la corrupción y la impunidad (desde 2017)',
    summary:
      'Movimiento cívico surgido en enero de 2017, a raíz del caso Odebrecht, que convocó marchas masivas contra la corrupción y la impunidad. En 2019 rechazó el continuismo de Danilo Medina y pidió investigar Punta Catalina; en 2021 exigió cancelar contratos fraudulentos. Varios de sus dirigentes pasaron a cargos del gobierno en 2020. Sus posiciones fuera de la ética y las instituciones son estimadas.',
    scores: { eco: -20, soc: -30, mig: 0, ide: 10, rel: 30, val: 20, ord: 30, pod: 70, eti: 95, geo: 20, des: 40, est: 50 },
    confidence: { ...bajaSalvo('pod', 'est'), eti: 'alta' },
    sources: [
      {
        title: 'Hoy: Marcha Verde, nueve años después (ene-2026)',
        url: 'https://hoy.com.do/el-pais/marcha-verde-9-anos-despues-movimiento-rompio-tolerancia-corrupcion-rd_1073947.html',
      },
      {
        title: 'Listín Diario: Marcha Verde pide cerrarle el paso a la corrupción en Santiago (jul-2019)',
        url: 'https://listindiario.com/la-republica/2019/07/14/574028/marcha-verde-pide-cerrarle-paso-a-la-corrupcion-e-impunidad-en-masiva-manifestacion-en-santiago',
      },
      {
        title: 'Listín Diario: Marcha Verde pide cancelar contratos fraudulentos (dic-2021)',
        url: 'https://listindiario.com/la-republica/2021/12/09/700350/marcha-verde-pide-cancelar-contratos-fraudulentos-y-licencia-a-quienes-violen-ley-de-contrataciones-publicas',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'mov-tres-causales',
    name: 'Coalición por las tres causales',
    kind: 'movimiento',
    subtitle: 'Colectiva Mujer y Salud, Sergia Galván y otras organizaciones feministas',
    summary:
      'Organizaciones feministas y de salud que piden despenalizar el aborto en tres causales: riesgo para la vida de la mujer, inviabilidad del feto y embarazo por violación o incesto. Entregaron más de 12,000 firmas al Congreso. El Código Penal (Ley 74-25) mantuvo la prohibición total y en julio de 2026 el Senado rechazó 24–3 una moción para incluirlas.',
    scores: { eco: -30, soc: -50, mig: 40, ide: 50, rel: 85, val: 90, ord: 50, pod: 60, eti: 60, geo: 20, des: 40, est: 40 },
    confidence: bajaSalvo('rel', 'val', 'est'),
    sources: [
      {
        title: 'Acento: organizaciones entregan más de 12,000 firmas por las tres causales',
        url: 'https://acento.com.do/actualidad/organizaciones-entregan-mas-de-12000-firmas-al-congreso-para-exigir-la-inclusion-de-las-tres-causales-en-el-codigo-penal-9719455.html',
      },
      {
        title: 'Fòs Feminista: prohibición del aborto en República Dominicana',
        url: 'https://fosfeminista.org/es/noticias-e-historias/prohibicion-del-aborto-en-republica-dominicana-tribunal-constitucional/',
      },
      {
        title: 'Diario Libre: el Senado aprueba el Código Penal sin causales (jul-2025)',
        url: 'https://www.diariolibre.com/politica/congreso-nacional/2025/07/10/senado-aprueba-en-primera-discusion-nuevo-codigo-penal-sin-causales/3178934',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'mov-activismo-lgbt',
    name: 'Activismo LGBT',
    kind: 'movimiento',
    subtitle: 'Colesdom, colectivos de lesbianas y activistas como Deivis Ventura',
    summary:
      'Organizaciones y activistas por los derechos LGBT. En agosto de 2026, Colesdom y otros grupos pidieron incluir la orientación sexual en la protección penal contra la discriminación (artículo 173 del Código Penal). El pastor Deivis Ventura fue en 2016 el primer candidato abiertamente gay a diputado, por el PRM. Sus posiciones fuera de valores son estimadas.',
    scores: { eco: -30, soc: -50, mig: 40, ide: 60, rel: 80, val: 95, ord: 60, pod: 50, eti: 50, geo: 10, des: 30, est: 50 },
    confidence: bajaSalvo('rel', 'val', 'est'),
    sources: [
      {
        title: 'Diario Libre: grupos LGBT piden protección contra la discriminación sexual (ago-2026)',
        url: 'https://www.diariolibre.com/actualidad/justicia/2026/08/26/grupos-lgbt-piden-proteccion-contra-la-discriminacion-sexual/3639949',
      },
      {
        title: 'Cristianos Gays: entrevista al pastor Deivis Ventura (2024)',
        url: 'https://www.cristianosgays.com/2024/10/21/entrevista-al-pastor-deivis-ventura-sigo-siendo-un-hombre-gay-negro-y-pobre-que-vive-la-discriminacion-en-diferentes-dimensiones-por-carlos-osma/',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'med-nuria-piera',
    name: 'Nuria Piera',
    kind: 'mediatico',
    subtitle: 'Periodista de investigación · N Investiga',
    summary:
      'Periodista de investigación (N Investiga). Sus reportajes de 2026 llevaron a la destitución del rector del ITLA por cobros políticos a empleados y a una investigación sobre el FEDA; en septiembre de 2026 recibió una intimación por su reportaje sobre adjudicaciones del INABIE y no se retractó. Antes investigó el caso SENASA (2025) y denunció haber sido espiada bajo los gobiernos de Medina y Abinader.',
    scores: { eco: 0, soc: 0, mig: 0, ide: 0, rel: 20, val: 10, ord: 30, pod: 80, eti: 95, geo: 0, des: 20, est: 20 },
    confidence: bajaSalvo('pod', 'eti'),
    sources: [
      { title: 'Wikipedia: Nuria Piera', url: 'https://es.wikipedia.org/wiki/Nuria_Piera' },
      {
        title: 'N Digital: Abinader ordena investigar cobros irregulares en el FEDA (feb-2026)',
        url: 'https://n.com.do/2026/02/10/abinader-investigacion-cobros-irregulares-feda/',
      },
      {
        title: 'En Segundos: intimación a Nuria Piera por el reportaje del INABIE (sep-2026)',
        url: 'https://ensegundos.do/2026/09/14/intimacion-a-nuria-piera-destapa-trama-de-rd110-millones-en-adjudicaciones-del-inabie-a-jovenes-sin-experiencia',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'med-alicia-ortega',
    name: 'Alicia Ortega',
    kind: 'mediatico',
    subtitle: 'Periodista de investigación · El Informe (SIN) · miembro del ICIJ',
    summary:
      'Periodista nacida en Dallas (1966) y radicada en la República Dominicana, conductora de El Informe (SIN), espacio de periodismo de investigación sobre corrupción y uso de fondos públicos. Es miembro del Consorcio Internacional de Periodistas de Investigación (ICIJ). No tiene partido; todas sus posiciones son estimadas.',
    scores: { eco: 0, soc: -10, mig: 10, ide: 10, rel: 30, val: 20, ord: 40, pod: 80, eti: 95, geo: 0, des: 30, est: 15 },
    confidence: bajaSalvo(),
    sources: [{ title: 'Wikipedia: Alicia Ortega', url: 'https://es.wikipedia.org/wiki/Alicia_Ortega' }],
    asOf: '2026-09',
  },
  {
    id: 'med-marino-zapete',
    name: 'Marino Zapete',
    kind: 'mediatico',
    subtitle: 'Periodista y comentarista · premio de Participación Ciudadana a la integridad (2024)',
    summary:
      'Periodista y comentarista centrado en temas de corrupción. En 2024 recibió el reconocimiento de Participación Ciudadana por su lucha contra la corrupción, en presencia de Abinader, quien lo había visitado como presidente electo. Es crítico de Leonel Fernández, cuyo desempeño ha calificado como el peor de los últimos 30 años. Todas sus posiciones son estimadas.',
    scores: { eco: -10, soc: -20, mig: 0, ide: 0, rel: 20, val: 10, ord: 20, pod: 70, eti: 90, geo: 0, des: 20, est: 30 },
    confidence: bajaSalvo(),
    sources: [
      {
        title: 'Acento: Participación Ciudadana reconoce a Marino Zapete (2024)',
        url: 'https://acento.com.do/actualidad/pc-reconocimiento-lucha-contra-la-corrupcion-al-periodista-marino-zapete-9434201.html',
      },
      {
        title: 'Lo Que Sucede: Zapete sobre Leonel Fernández',
        url: 'https://www.loquesucede.com/nacionales/marino-zapete-leonel-fernandez-ha-sido-el-peor-presidente-que-ha-tenido-este-pais-en-los-ultimos-30-anos/',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'med-altagracia-salazar',
    name: 'Altagracia Salazar',
    kind: 'mediatico',
    subtitle: 'Periodista y comentarista de radio y televisión',
    summary:
      'Periodista y comentarista veterana de radio y televisión, con línea crítica hacia los gobiernos de turno. Valoró que Abinader comprometiera a Leonel Fernández y a Danilo Medina con su política hacia Haití. No tiene partido; sus posiciones en la mayoría de los ejes son estimadas.',
    scores: { eco: -20, soc: -30, mig: 40, ide: 40, rel: 50, val: 50, ord: 50, pod: 70, eti: 80, geo: 10, des: 40, est: 20 },
    confidence: baja('eco', 'soc', 'ide', 'rel', 'val', 'ord', 'geo', 'des'),
    sources: [
      {
        title: 'El Pregonero: Altagracia Salazar sobre la política de Abinader hacia Haití',
        url: 'https://elpregonerord.com/altagracia-salazar-luis-abinader-se-anoto-mas-que-un-punto-al-comprometer-a-leonel-y-a-danilo-con-su-politica-hacia-haiti/',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'med-huchi-lora',
    name: 'Huchi Lora',
    kind: 'mediatico',
    subtitle: 'Periodista y comentarista · exdirector del programa El Día (Telesistema)',
    summary:
      'Periodista con más de 50 años de ejercicio en prensa, radio y televisión; dirigió el programa El Día (Telesistema) hasta 2022. En 2013 se opuso a la sentencia TC 168-13 sobre la nacionalidad de hijos de extranjeros en situación irregular y, junto a Juan Bolívar Díaz, denunció amenazas de muerte recibidas por esa postura.',
    scores: { eco: -30, soc: -40, mig: 55, ide: 55, rel: 60, val: 55, ord: 50, pod: 70, eti: 80, geo: 20, des: 40, est: 20 },
    confidence: bajaSalvo('mig', 'ide'),
    sources: [
      { title: 'Wikipedia: Huchi Lora', url: 'https://es.wikipedia.org/wiki/Huchi_Lora' },
      {
        title: 'Hoy: Huchi Lora y Juan Bolívar Díaz denuncian amenazas por la sentencia del TC',
        url: 'https://hoy.com.do/el-pais/huchi-lora-y-juan-bolivar-diaz-ponen-denuncia-tras-recibir-amenazas-de-muerte-por-sentencia-del-tc_500895.html',
      },
      {
        title: 'N Digital: Huchi Lora deja la dirección de El Día (mar-2022)',
        url: 'https://n.com.do/2022/03/01/huchi-lora-se-retira-de-la-direccion-del-programa-el-dia-edith-febles-asumira-el-cargo/',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'med-julio-martinez-pozo',
    name: 'Julio Martínez Pozo',
    kind: 'mediatico',
    subtitle: 'Periodista y analista · El Gobierno de la Mañana (Z101) y El Sol de la Mañana (Zol)',
    summary:
      'Periodista y analista político, comentarista de El Gobierno de la Mañana (Z101) y de El Sol de la Mañana (Zol 106.5). Su línea es cercana al PLD y a Danilo Medina: sostiene que el PLD es un factor determinante para 2028 y que "alianza es palabra enemiga del PLD". Todas sus posiciones son estimadas.',
    scores: { eco: 0, soc: -10, mig: -30, ide: -20, rel: -20, val: -20, ord: -20, pod: 0, eti: 0, geo: 0, des: 0, est: -70 },
    confidence: bajaSalvo(),
    sources: [
      {
        title: 'El Pregonero: Martínez Pozo, "el PLD es un factor determinante"',
        url: 'https://elpregonerord.com/martinez-pozo-el-pld-es-un-factor-determinante-y-puede-definir-las-proximas-elecciones/',
      },
      { title: 'Wikipedia: El Gobierno de la Mañana', url: 'https://es.wikipedia.org/wiki/El_Gobierno_de_la_ma%C3%B1ana' },
    ],
    asOf: '2026-09',
  },
  {
    id: 'med-jose-martinez-brito',
    name: 'José Martínez Brito',
    kind: 'mediatico',
    subtitle: 'Abogado · panelista de Esto No Es Radio · aspirante del PLD a diputado (2024)',
    summary:
      'Abogado y panelista de Esto No Es Radio. Fue aspirante del PLD a diputado por la circunscripción 2 del Distrito Nacional en 2024, sin resultar electo. En mayo de 2025 criticó al PLD y pidió unidad de la oposición en el tema migratorio "por soberanía". Casi todas sus posiciones son estimadas.',
    scores: { eco: 10, soc: -10, mig: -60, ide: -40, rel: -20, val: -30, ord: -40, pod: 20, eti: 30, geo: 0, des: 0, est: -10 },
    confidence: bajaSalvo(),
    sources: [
      { title: 'De Último Minuto: Martínez Brito y el tema migratorio (may-2025)', url: 'https://deultimominuto.com/nacionales/tema-migratorio/' },
    ],
    asOf: '2026-09',
  },

  // ── §11.6 Ramón Tolentino ──
  {
    id: 'med-ramon-tolentino',
    name: 'Ramón Tolentino',
    kind: 'mediatico',
    subtitle: 'Periodista de crimen · panelista de Esto No Es Radio (2021–) y conductor de A la Clara (DUM TV)',
    summary:
      'Periodista de crimen, sin partido ni aspiraciones conocidas. Propuso cerrar barrios "como Bukele" (2022) y defiende el "código 29" ante la CNDH (2026), aunque pidió demoler La Victoria y respetar derechos en la acción policial. Trata la migración haitiana como tema de seguridad y en 2025 respaldó las deportaciones de RD y que EE.UU. deporte a los dominicanos irregulares. Pide cancelar los partidos de menos del 1 %.',
    scores: { eco: -30, soc: -35, mig: -80, ide: -30, rel: -10, val: -40, ord: -85, pod: 30, eti: 65, geo: -10, des: 50, est: 65 },
    confidence: { mig: 'alta', ide: 'baja', rel: 'baja', ord: 'alta', geo: 'baja' },
    sources: [
      { title: 'Wikipedia: Ramón Mercedes Tolentino Peña', url: 'https://es.wikipedia.org/wiki/Ram%C3%B3n_Mercedes_Tolentino_Pe%C3%B1a' },
      {
        title: 'De Último Minuto: Tolentino propone cerrar barrios como Bukele (dic-2022)',
        url: 'https://deultimominuto.com/nacionales/tolentino-propone-cerrar-barrios-en-rd-como-hizo-bukele-en-el-salvador/',
      },
      { title: 'De Último Minuto: el "código 29" en RD Debate (sep-2026)', url: 'https://deultimominuto.com/nacionales/codigo-29-tolentino-rd-debate/' },
      { title: 'De Último Minuto: Tolentino sobre los partidos políticos (jun-2026)', url: 'https://deultimominuto.com/nacionales/politica/tolentino-a-partidos-politicos/' },
      {
        title: 'Este es el Corte: Ramón Tolentino, "¿Apoyo a Trump?" (ago-2025)',
        url: 'https://www.youtube.com/watch?v=Pk7c1rsiT9Q',
      },
      {
        title: 'Diario Libre: denuncias por el "himno nacional lésbico" (ago-2025)',
        url: 'https://www.diariolibre.com/actualidad/nacional/2025/08/06/grupo-lgbt-presenta-himno-nacional-lesbico-en-violacion-constitucion/3205904',
      },
    ],
    asOf: '2026-09',
  },

  // ── §11.7 Comunicadores con participación política ──
  {
    id: 'med-juan-bolivar-diaz',
    name: 'Juan Bolívar Díaz',
    kind: 'mediatico',
    subtitle: 'Periodista (Uno + Uno) · cofundador de Participación Ciudadana · embajador en España (2021)',
    summary:
      'Periodista y analista; condujo Uno + Uno de 1987 a 2020, cofundó Participación Ciudadana (1993) y presentó credenciales como embajador en España en 2021. En 2013 denunció amenazas por oponerse a la sentencia TC 168-13; en noviembre de 2023 pidió cesar el "discurso de odio contra Haití" y en 2025 defendió a Participación Ciudadana ante las críticas por fondos de USAID.',
    scores: { eco: -20, soc: -35, mig: 60, ide: 50, rel: 35, val: 40, ord: 40, pod: 70, eti: 80, geo: -10, des: 30, est: -20 },
    confidence: {
      eco: 'baja',
      soc: 'baja',
      mig: 'alta',
      rel: 'baja',
      val: 'baja',
      ord: 'baja',
      eti: 'alta',
      geo: 'baja',
      des: 'baja',
    },
    sources: [
      { title: 'Wikipedia: Juan Bolívar Díaz', url: 'https://es.wikipedia.org/wiki/Juan_Bol%C3%ADvar_D%C3%ADaz' },
      {
        title: 'N Digital: diputadas del PRM responden a Juan Bolívar sobre el discurso contra Haití (nov-2023)',
        url: 'https://n.com.do/2023/11/09/diputadas-prm-no-coinciden-con-embajador-juan-bolivar-sobre-discurso-de-odio-contra-haiti/',
      },
      {
        title: 'N Digital: Juan Bolívar Díaz sobre USAID y Participación Ciudadana (feb-2025)',
        url: 'https://n.com.do/2025/02/21/juan-bolivar-diaz-el-pld-fue-el-partido-que-mas-se-beneficio-con-proyectos-financiados-por-usaid-en-pc/',
      },
      {
        title: 'Hoy: Huchi Lora y Juan Bolívar Díaz denuncian amenazas por la sentencia del TC',
        url: 'https://hoy.com.do/el-pais/huchi-lora-y-juan-bolivar-diaz-ponen-denuncia-tras-recibir-amenazas-de-muerte-por-sentencia-del-tc_500895.html',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'med-homero-figueroa',
    name: 'Homero Figueroa',
    kind: 'mediatico',
    subtitle: 'Periodista · vocero de la Presidencia y director de DIECOM (2021–2025)',
    summary:
      'Periodista (MetroRD, CDN, columnista de Diario Libre) que dirigió DIAPE (2020–2021) y fue vocero de la Presidencia y director de Estrategia y Comunicación (DIECOM) de 2021 a agosto de 2025. Como vocero defendió el registro biométrico en la frontera (2023) y, tras la marcha de Friusa (marzo de 2025), afirmó que el gobierno atiende "responsablemente" el tema migratorio.',
    scores: { eco: 25, soc: 0, mig: -35, ide: -10, rel: 0, val: 0, ord: -15, pod: 15, eti: 20, geo: -40, des: -10, est: -85 },
    confidence: { ...baja('eco', 'soc', 'ide', 'rel', 'val', 'pod', 'eti', 'geo', 'des'), est: 'alta' },
    sources: [
      { title: 'Wikipedia: Homero Figueroa', url: 'https://es.wikipedia.org/wiki/Homero_Figueroa' },
      {
        title: 'N Digital: registro biométrico en la frontera (oct-2023)',
        url: 'https://n.com.do/2023/10/11/homero-figueroa-afirma-registro-biometrico-en-corredores-de-la-frontera-de-haiti-se-realiza-ordenadamente/',
      },
      {
        title: 'N Digital: el gobierno tras la manifestación en Friusa (mar-2025)',
        url: 'https://n.com.do/2025/03/30/gobierno-asegura-mantiene-su-compromiso-con-derechos-fundamentales-y-orden-publico-tras-manifestacion-en-friusa/',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'med-ivan-ruiz',
    name: 'Iván Ruiz',
    kind: 'mediatico',
    subtitle: 'Productor de TV (El Show del Mediodía) · director de RTVD desde 2022',
    summary:
      'Productor y conductor de El Show del Mediodía y exdirector del canal cristiano Televida. Dirige la estatal CERTV/RTVD desde abril de 2022 y seguía en el cargo en 2026. En agosto de 2026 dijo que la televisión pública "deja de ser oficialista" y propuso que un consejo elija por terna a su próximo director, "sin la intervención del presidente ni del partido de turno".',
    scores: { eco: 0, soc: 0, mig: 0, ide: -10, rel: -25, val: -15, ord: 0, pod: 30, eti: 10, geo: 0, des: 0, est: -60 },
    confidence: { ...bajaSalvo('pod', 'est'), est: 'alta' },
    sources: [
      {
        title: 'N Digital: CERTV designa a Iván Ruiz como director (abr-2022)',
        url: 'https://n.com.do/2022/04/05/consejo-administrativo-de-certv-designa-a-ivan-ruiz-como-nuevo-director/',
      },
      {
        title: 'Listín Diario: Iván Ruiz propone cambiar la forma de elegir al director de RTVD (ago-2026)',
        url: 'https://listindiario.com/entretenimiento/tv/20260821/ivan-ruiz-propone-salida-cambie-forma-elegir-director-rtvd_918981.html',
      },
      {
        title: '7días: Iván Ruiz seguirá al frente de RTVD (ago-2026)',
        url: 'https://7dias.com.do/2026/08/19/ivan-ruiz-confirma-que-continuara-al-frente-de-rtvd-tras-presentar-la-gran-salida/',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'med-jose-laluz',
    name: 'José Laluz',
    kind: 'mediatico',
    subtitle: 'Exdiputado del PLD · comentarista · apoyó a Abinader como independiente (2024)',
    summary:
      'Exdiputado del PLD y comentarista. En 2021 retiró su aspiración a una secretaría del PLD "por falta de transparencia" y en 2022 el partido lo desafilió por "renuncia tácita". Calificó a Tokischa como "la artista más destacada" del país a nivel mundial (2022) y en mayo de 2024 apoyó a Abinader como independiente.',
    scores: { eco: 0, soc: -10, mig: 0, ide: 30, rel: 20, val: 35, ord: 0, pod: 30, eti: 35, geo: 0, des: 0, est: -15 },
    confidence: baja('eco', 'soc', 'mig', 'ide', 'rel', 'ord', 'geo', 'des'),
    sources: [
      {
        title: 'N Digital: Laluz retira su candidatura por falta de transparencia (feb-2021)',
        url: 'https://n.com.do/2021/02/16/jose-laluz-retira-candidatura-a-secretaria-del-pld-por-falta-de-transparencia/',
      },
      { title: 'N Digital: José Laluz es desafiliado del PLD (oct-2022)', url: 'https://n.com.do/2022/10/28/jose-laluz-es-desafiliado-del-pld/' },
      {
        title: 'N Digital: Laluz sobre Tokischa (oct-2022)',
        url: 'https://n.com.do/2022/10/25/jose-laluz-tokischa-es-la-artista-mas-destacada-de-la-republica-dominicana-a-nivel-mundial/',
      },
      { title: 'N Digital: Laluz y su apoyo a Abinader (may-2024)', url: 'https://n.com.do/2024/05/10/jose-laluz-confunde-a-abinader-con-leonel-fernandez/' },
    ],
    asOf: '2026-09',
  },
  {
    id: 'med-ricardo-nieves',
    name: 'Ricardo Nieves',
    kind: 'mediatico',
    subtitle: 'Periodista y comentarista · miembro de la comisión de reforma policial',
    summary:
      'Periodista, médico y abogado, comentarista de radio y televisión. Integró la Comisión Especial para la Transformación de la Policía y en 2022 dijo que la reforma estaba "congelada" por falta de voluntad del gobierno. En 2020 calificó de "atropello" el arresto de Freddy Hidalgo y en agosto de 2025 respaldó el proyecto presidencial de Charlie Mariotti (PLD).',
    scores: { eco: 0, soc: 0, mig: -10, ide: 0, rel: 0, val: 0, ord: 45, pod: 35, eti: 35, geo: 0, des: 0, est: -10 },
    confidence: baja('eco', 'soc', 'mig', 'ide', 'rel', 'val', 'geo', 'des'),
    sources: [
      { title: 'Wikipedia: Ricardo Nieves', url: 'https://es.wikipedia.org/wiki/Ricardo_Nieves' },
      {
        title: 'N Digital: miembros de la reforma policial piden acelerarla (may-2022)',
        url: 'https://n.com.do/2022/05/04/miembros-de-la-reforma-policial-piden-a-abinader-acelerar-este-proceso/',
      },
      {
        title: 'N Digital: Nieves sobre el arresto de Freddy Hidalgo (nov-2020)',
        url: 'https://n.com.do/2020/11/29/ricardo-nieves-califica-como-un-atropello-la-forma-de-apresamiento-a-freddy-hidalgo/',
      },
      {
        title: 'N Digital: Nieves y el proyecto de Charlie Mariotti (ago-2025)',
        url: 'https://n.com.do/2025/08/11/ricardo-nieves-destaca-proyecto-de-nacion-de-charlie-mariotti-como-clave-para-el-desarrollo/',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'med-carmen-imbert-brugal',
    name: 'Carmen Imbert Brugal',
    kind: 'mediatico',
    subtitle: 'Jurista, escritora y columnista · miembro de la JCE (2016–2020)',
    summary:
      'Jurista, novelista y columnista, autora de ensayos sobre la prostitución como "esclavitud sexual femenina" (1985) y sobre la trata de mujeres (1991). Fue miembro de la Junta Central Electoral de 2016 a 2020. Sus posiciones en valores, institucionalidad y estilo se apoyan en su obra y trayectoria; las demás son estimadas.',
    scores: { eco: 0, soc: -20, mig: 0, ide: 10, rel: 35, val: 45, ord: 20, pod: 40, eti: 40, geo: 0, des: 0, est: -30 },
    confidence: baja('eco', 'soc', 'mig', 'ide', 'rel', 'ord', 'eti', 'geo', 'des'),
    sources: [{ title: 'Wikipedia: Carmen Imbert Brugal', url: 'https://es.wikipedia.org/wiki/Carmen_Imbert_Brugal' }],
    asOf: '2026-09',
  },
  {
    id: 'med-consuelo-despradel',
    name: 'Consuelo Despradel',
    kind: 'mediatico',
    subtitle: 'Periodista · panelista de El Sol de la Mañana (Zol) · excoconductora de El Gobierno de la Tarde',
    summary:
      'Periodista y panelista de El Sol de la Mañana (Zol 106.5). En 2023, a raíz de la Operación Calamar, reclamó prisión para el expresidente Danilo Medina, y en 2024 abandonó una entrevista con Carlos Peña tras objetarle que hablara "como pastor". Critica la presencia de ONG en la frontera y a periodistas que informan al Departamento de Estado sobre el trato a migrantes haitianos (2024).',
    scores: { eco: -10, soc: -25, mig: -50, ide: -60, rel: 45, val: 15, ord: 0, pod: 20, eti: 75, geo: 20, des: 30, est: 10 },
    confidence: baja('eco', 'soc', 'val', 'ord', 'pod', 'des', 'est'),
    sources: [
      {
        title: 'De Último Minuto: Despradel sobre Danilo Medina y la Operación Calamar (mar-2023)',
        url: 'https://deultimominuto.com/nacionales/consuelo-despradel-expresidente-danilo-tiene-que-ir-preso-aunque-se-muera-en-la-carcel/',
      },
      {
        title: 'De Último Minuto: Despradel a Carlos Peña, "usted viene como pastor" (may-2024)',
        url: 'https://deultimominuto.com/nacionales/consuelo-explota-contra-carlos-pena-usted-viene-como-pastor-no-como-politico/',
      },
      { title: 'El Nacional: artículos sobre Consuelo Despradel', url: 'https://elnacional.com.do/consuelo-despradel/' },
      {
        title: 'El Nuevo Diario: Consuelo Despradel, "RD perdió el pleito con Haití" (jul-2024)',
        url: 'https://elnuevodiario.com.do/consuelo-despradel-rd-perdio-el-pleito-con-haiti-se-va-a-unificar-la-isla/',
      },
      {
        title: 'En Segundos: Consuelo Despradel a Rusia y China sobre Haití (ago-2025)',
        url: 'https://ensegundos.do/2025/08/29/consuelo-despradel-a-rusia-y-china-llevense-a-los-haitianos/',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'med-edith-febles',
    name: 'Edith Febles',
    kind: 'mediatico',
    subtitle: 'Periodista · directora del programa El Día (Telesistema) desde 2022',
    summary:
      'Periodista y directora de El Día (Telesistema) desde marzo de 2022, sin partido. En 2026 investigó a los suplidores del almuerzo escolar del INABIE y en 2025 entrevistó a Antonio Espaillat tras el derrumbe del Jet Set. En febrero de 2025 fue blanco de una publicación falsa que la acusaba de recibir fondos de USAID, de la que su autor se retractó.',
    scores: { eco: 0, soc: -10, mig: 0, ide: 0, rel: 0, val: 10, ord: 20, pod: 40, eti: 75, geo: 0, des: 10, est: 10 },
    confidence: { ...baja('eco', 'soc', 'mig', 'ide', 'rel', 'val', 'ord', 'geo', 'des'), eti: 'alta' },
    sources: [
      {
        title: 'N Digital: Edith Febles asume la dirección de El Día (mar-2022)',
        url: 'https://n.com.do/2022/03/01/huchi-lora-se-retira-de-la-direccion-del-programa-el-dia-edith-febles-asumira-el-cargo/',
      },
      {
        title: 'N Digital: el director del INABIE y los suplidores del almuerzo escolar (sep-2026)',
        url: 'https://n.com.do/2026/09/18/director-del-inabie-admite-que-no-exige-experiencia-a-suplidores-del-almuerzo-escolar/',
      },
      {
        title: 'N Digital: retractación por la difamación sobre USAID (feb-2025)',
        url: 'https://n.com.do/2025/02/19/johnny-arrendel-difamacion-periodistas-usaid/',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'med-pedro-casals',
    name: 'Pedro Manuel Casals',
    kind: 'mediatico',
    subtitle: 'Abogado y comunicador "El 4to Bate" · pódcast en Faia Media · panelista de Esto No Es Radio (2021–2026)',
    summary:
      'Abogado y comunicador sin cargos; se define conservador y organizó Turning Point Latam en el país. Fue invitado a la investidura de Trump (2025), visitó la cancillería israelí (2025), elogió las reformas de seguridad de Bukele y respaldó el acuerdo "Shield of the Americas" (2026). Denuncia la presencia de bandas haitianas, estuvo en la marcha de Friusa (2025) y llamó "gran estafa" a la gestión de la pandemia (2026).',
    scores: { eco: 40, soc: 40, mig: -80, ide: -40, rel: -20, val: -50, ord: -80, pod: -40, eti: 40, geo: -85, des: 0, est: 35 },
    confidence: { ...bajaSalvo('eco', 'mig', 'val', 'ord', 'pod', 'geo'), mig: 'alta', ord: 'alta', geo: 'alta' },
    sources: [
      { title: 'De Último Minuto: biografía de Pedro Manuel Casals', url: 'https://deultimominuto.com/historia/biografias/pedro-manuel-casals/' },
      {
        title: 'De Último Minuto: Casals asistirá a la investidura de Trump (ene-2025)',
        url: 'https://deultimominuto.com/entretenimiento/abogado-pedro-casals-asistira-a-la-investidura-de-donald-trump/',
      },
      {
        title: 'De Último Minuto: Casals destaca las reformas de Bukele (abr-2025)',
        url: 'https://deultimominuto.com/internacionales/pedro-casals-destaca-impacto-de-reformas-de-bukele/',
      },
      { title: 'De Último Minuto: agredidos en Friusa (mar-2025)', url: 'https://deultimominuto.com/nacionales/agredidos-por-haitianos/' },
      {
        title: 'De Último Minuto: Casals y Charlie Kirk, Turning Point Latam (sep-2025)',
        url: 'https://deultimominuto.com/nacionales/casals-sobre-charlie-kirk/',
      },
      {
        title: 'De Último Minuto: Casals visita la cancillería israelí (nov-2025)',
        url: 'https://deultimominuto.com/internacionales/pedro-manuel-casals-participa/',
      },
      {
        title: 'De Último Minuto: Casals sobre la nueva orden de EE.UU. y las bandas haitianas (mar-2026)',
        url: 'https://deultimominuto.com/nacionales/casals-sobre-nueva-orden-de-eeuu/',
      },
      {
        title: 'De Último Minuto: Casals denuncia sobre el COVID (ago-2026)',
        url: 'https://deultimominuto.com/nacionales/casals-denuncia-sobre-el-covid/',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'med-esteban-rosario',
    name: 'Esteban Rosario',
    kind: 'mediatico',
    subtitle: 'Periodista y escritor en Santiago · columnista de Acento',
    summary:
      'Periodista, escritor y productor en Santiago, autor de libros sobre corrupción, narcotráfico y monopolios. En Los dueños de la República Dominicana (2008) sostiene que unas 20 familias dominan la economía y la política y que es necesario redistribuir el ingreso. Criticó las exoneraciones a empresarios (2025) y denunció el silencio oficial ante la muerte de la escolar haitiana Stephora Joseph (2025).',
    scores: { eco: -70, soc: -50, mig: 40, ide: 50, rel: 20, val: 20, ord: 20, pod: 40, eti: 85, geo: 40, des: 0, est: 50 },
    confidence: bajaSalvo('eco', 'ide', 'eti'),
    sources: [
      {
        title: 'Hoy: J. Luis Rojas reseña Los dueños de la República Dominicana (columna, mar-2023)',
        url: 'https://hoy.com.do/esteban-rosario-y-los-duenos-de-rd/',
      },
      {
        title: 'Acento: el gobierno exonera dos billones de pesos a los empresarios (jun-2025)',
        url: 'https://acento.com.do/opinion/gobierno-exonera-dos-billones-de-pesos-a-los-empresarios-9507449.html',
      },
      {
        title: 'Acento: "USAID, la madre patria" (mar-2021)',
        url: 'https://acento.com.do/politica/usaid-la-madre-patria-8925340.html',
      },
      {
        title: 'Haití no Minustah (reproduce AlterPresse): Esteban Rosario y el caso Stephora Joseph (dic-2025)',
        url: 'https://haitinominustah.wordpress.com/2025/12/03/un-periodista-dominicano-denuncia-el-silencio-de-las-autoridades-tras-el-presunto-asesinato-racista-de-una-escolar-haitiana-de-11-anos-en-santiago-de-los-caballeros/',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'med-euri-cabral',
    name: 'Euri Cabral',
    kind: 'mediatico',
    subtitle: 'Economista y pastor · comentarista de El Sol de la Mañana (Zol) · cercano a Danilo Medina (PLD)',
    summary:
      'Economista y pastor, comentarista de El Sol de la Mañana; se le identifica con Danilo Medina y en 2026 apoyó a Francisco Javier García en la interna del PLD. Se opone a las tres causales y en 2024 dijo que el matrimonio que no es entre hombre y mujer "no es válido legalmente". Criticó la reforma fiscal de 2024, apoyó el paquete de 2026, elogió el "No a la guerra" de Pedro Sánchez y critica la subordinación a EE.UU.',
    scores: { eco: 0, soc: -20, mig: -30, ide: -15, rel: -65, val: -80, ord: -30, pod: 0, eti: -10, geo: 45, des: 0, est: -75 },
    confidence: { ...bajaSalvo('ide', 'rel', 'val', 'geo', 'est'), val: 'alta' },
    sources: [
      {
        title: 'De Último Minuto: Euri Cabral sobre el matrimonio (jun-2024)',
        url: 'https://deultimominuto.com/nacionales/euri-cabral-el-matrimonio-que-no-es-entre-hombre-y-mujer-no-es-valido-legalmente/',
      },
      {
        title: 'Diario Libre: Danilo Medina no volverá a buscar la presidencia, dice Euri Cabral',
        url: 'https://www.diariolibre.com/actualidad/euri-cabral-dice-danilo-medina-no-volvera-a-buscar-la-presidencia-del-pais-EH22434000',
      },
      {
        title: 'Diario Digital RD: "no fue Gonzalo, fue Danilo" (jul-2026)',
        url: 'https://diariodigitalrd.com/2026/07/06/no-fue-gonzalo-fue-danilo-y-su-liderazgo.html/',
      },
      {
        title: 'Diario Digital RD: "Presidente Abinader, Código Penal y el sentido de la historia" (jul-2024)',
        url: 'https://diariodigitalrd.com/2024/07/22/presidente-abinader-codigo-penal-y-el-sentido-de-la-historia.html/',
      },
      {
        title: 'Diario Digital RD: "Magín Díaz y el sentido común" (jun-2026)',
        url: 'https://diariodigitalrd.com/2026/06/15/magin-diaz-y-el-sentido-comun.html/',
      },
      {
        title: 'Diario Digital RD: "No a la guerra, digna posición de España" (mar-2026)',
        url: 'https://diariodigitalrd.com/2026/03/09/no-a-la-guerra-digna-posicion-de-espana.html/',
      },
      {
        title: 'Diario Digital RD: "Duarte y el pueblo haitiano" (mar-2018)',
        url: 'https://diariodigitalrd.com/2018/03/08/duarte-pueblo-haitiano.html/',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'med-julio-hazim',
    name: 'Julio Hazim',
    kind: 'mediatico',
    subtitle: 'Médico y comunicador · Revista 110 y Hazim en la Z (Z101)',
    summary:
      'Médico y comunicador con 40 años en televisión (Revista 110, Hazim en la Z). En 2023 dijo que Jean Alain Rodríguez "no es inocente", aunque juzgó excesiva su prisión preventiva; había sido su fiador. En 2025 cuestionó el procedimiento del caso SENASA, en el que está procesado su pariente Santiago Hazim, y se refirió con términos despectivos a una pareja gay que se casó en Santiago.',
    scores: { eco: 0, soc: -10, mig: -20, ide: 0, rel: -10, val: -35, ord: 30, pod: 10, eti: 10, geo: 0, des: 0, est: -60 },
    confidence: bajaSalvo('val'),
    sources: [
      {
        title: 'Diario Libre: Julio Hazim celebra 40 años en la televisión (ene-2025)',
        url: 'https://www.diariolibre.com/revista/cultura/2025/01/30/julio-hazim-celebra-40-anos-en-la-television-dominicana/2984148',
      },
      { title: 'De Último Minuto: "Jean Alain no es inocente" (ene-2023)', url: 'https://deultimominuto.com/nacionales/julio-hazim-jean-alain-no-es-inocente/' },
      { title: 'De Último Minuto: Julio Hazim sobre el caso SENASA (dic-2025)', url: 'https://deultimominuto.com/nacionales/julio-hazim-sobre-el-caso-senasa/' },
      { title: 'De Último Minuto: Julio Hazim sobre una boda gay (nov-2025)', url: 'https://deultimominuto.com/nacionales/julio-hazim-sobre-boda-gay/' },
    ],
    asOf: '2026-09',
  },
  {
    id: 'med-johnny-vasquez',
    name: 'Johnny Vásquez',
    kind: 'mediatico',
    subtitle: 'Presentador de De Extremo a Extremo (Telemicro Internacional) · Nueva York',
    summary:
      'Presentador de De Extremo a Extremo (Telemicro Internacional), residente en Nueva York y sin partido declarado. En agosto de 2025 pidió facilidades para la diáspora (importar vehículos más antiguos, eliminar el cobro de US$10), habló de la "haitianización de la RD" y defendió repatriar a los migrantes en situación irregular. En enero de 2025 defendió al ministro de Obras Públicas, Deligne Ascención (PRM).',
    scores: { eco: 20, soc: -10, mig: -50, ide: -10, rel: 0, val: 0, ord: 10, pod: 0, eti: 10, geo: 0, des: 0, est: -40 },
    confidence: bajaSalvo('mig'),
    sources: [
      {
        title: 'El Universal Digital: Johnny Vásquez declara en Nueva York (ago-2025)',
        url: 'https://www.eluniversaldigital.net/internacionales/johnny-vasquez-declara-en-ny-el-mundo-de-hoy-reclama-dignidad-trabajo-y-seriedad/',
      },
      {
        title: 'En Segundos: Johnny Vásquez y el ministro de Obras Públicas (ene-2025)',
        url: 'https://ensegundos.do/2025/01/03/johnny-vasquez-asegura-hay-campana-contra-el-ministro-de-obras-publicas/',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'med-ramon-nunez-ramirez',
    name: 'Ramón Núñez Ramírez',
    kind: 'mediatico',
    subtitle: 'Economista · productor de Telematutino 11 · columnista de Hoy · exmiembro de la Junta Monetaria (2004–2019)',
    summary:
      'Ingeniero y economista, productor de Telematutino 11 y columnista de Hoy; fue miembro de la Junta Monetaria de 2004 a 2019. En 2014 elogió la Ley 169-14, pidió reforzar la frontera, deportar a los no registrados y un muro "si es necesario", y defendió la minería. En 2026 criticó el paquete tributario por "recaudatorio" y escribió que "el estado de derecho es una quimera para los pobres".',
    scores: { eco: 20, soc: 0, mig: -55, ide: -30, rel: 0, val: 0, ord: 25, pod: 35, eti: 10, geo: -10, des: -55, est: -45 },
    confidence: bajaSalvo('ord', 'pod'),
    sources: [
      {
        title: 'OEA: biografía de Ramón Núñez Ramírez',
        url: 'https://www.oas.org/dil/seminario_conferencistas_bios_Ramon_Nunez_Ramirez.pdf',
      },
      { title: 'Acento: "De la 169-14 al control fronterizo" (2014)', url: 'https://acento.com.do/opinion/de-la-69-14-al-control-fronterizo-8145294.html' },
      {
        title: 'Acento: "Del ministerio a una política minera y energética" (2014)',
        url: 'https://acento.com.do/opinion/del-ministerio-a-una-politica-minera-y-energetica-8140322.html',
      },
      {
        title: 'Hoy: "Paquete tributario de Magín Díaz" (jun-2026)',
        url: 'https://hoy.com.do/opinion/paquete-tributario-magin-diaz-alivios-puntuales-recaudacion_1091370.html',
      },
      {
        title: 'Hoy: "Derechos vulnerados, competitividad perdida" (ago-2026)',
        url: 'https://hoy.com.do/opinion/derechos-vulnerados-competitividad-perdida_1097747.html',
      },
      {
        title: 'Hoy: "Cooperativas abiertas", fue miembro de la Junta Monetaria entre 2004 y 2019 (sep-2026)',
        url: 'https://hoy.com.do/opinion/cooperativas-abiertas-eslabon-pendiente-regulacion-financiera_1102652.html',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'med-nelson-espinal-baez',
    name: 'Nelson Espinal Báez',
    kind: 'mediatico',
    subtitle: 'Abogado y mediador · columnista de Diario Libre · suplente empresarial (AIREN) en la junta de INFOTEP',
    summary:
      'Abogado, mediador y columnista de Diario Libre sobre geopolítica, el Código Penal y los límites del Poder Ejecutivo; asociado del MIT-Harvard Public Disputes Program. En 2019 elogió la "institucionalidad" del PRM en La Voz del PRM. En 2023 planteó que el canal La Vigía solo se use si Haití extrae agua del río Masacre, recomendó "aflojar" el cierre de la frontera y prefirió una mediación con garantes al arbitraje.',
    scores: { eco: 0, soc: 0, mig: 10, ide: 0, rel: 0, val: 0, ord: 20, pod: 40, eti: 20, geo: 0, des: 0, est: -50 },
    confidence: bajaSalvo(),
    sources: [
      { title: 'Diario Libre: columnas de Nelson Espinal Báez', url: 'https://www.diariolibre.com/autor/nelson-espinal-baez/1780' },
      { title: 'La Voz del PRM: Nelson Espinal Báez', url: 'https://lavozdelprm.org/tag/nelson-espinal-baez/' },
      {
        title: 'Extra Digital: Espinal Báez sobre el canal La Vigía (oct-2023)',
        url: 'https://extradigital.com.do/experto-en-mediacion-nelson-espinal-el-canal-la-vigia-rd-solo-debe-usarlo-si-haiti-decide-extraer-aguas-del-rio-masacre/',
      },
      {
        title: 'INFOTEP: Junta de Directores (suplentes del sector empresarial)',
        url: 'https://www.infotep.gob.do/index.php/sobre-nosotros/junta-directiva',
      },
    ],
    asOf: '2026-09',
  },

  // ── §11.8 Artistas, deportistas y famosos con cargo o incidencia ──
  {
    id: 'med-hector-acosta',
    name: 'Héctor Acosta "El Torito"',
    kind: 'mediatico',
    subtitle: 'Cantante · senador del PRM por Monseñor Nouel (2020–2028)',
    summary:
      'Bachatero y merenguero, senador del PRM por Monseñor Nouel desde 2020. En 2021 declaró "Apoyo las 3 causales y punto", pero no consta que las defendiera cuando el Senado aprobó el Código Penal sin ellas (2025) ni en la moción de 2026; el Senado no publica votos nominales. Elogia la reforma policial, pidió escuchar a la población ante el proyecto minero de San Juan (2026) y apoya a Carolina Mejía.',
    scores: { eco: -10, soc: -35, mig: -40, ide: -15, rel: 10, val: 10, ord: -10, pod: 25, eti: 10, geo: -50, des: 15, est: -60 },
    confidence: baja('mig', 'ide', 'val', 'ord', 'pod', 'eti', 'geo'),
    sources: [
      { title: 'Wikipedia: Héctor Acosta', url: 'https://es.wikipedia.org/wiki/H%C3%A9ctor_Acosta' },
      {
        title: 'RCC Noticias: El Torito respalda las tres causales (mar-2021)',
        url: 'https://rccnoticias.com.do/el-torito-hace-publico-su-respaldo-a-las-tres-causales-33121/',
      },
      {
        title: 'N Digital: Acosta pide escuchar al pueblo ante el paro minero en San Juan (abr-2026)',
        url: 'https://n.com.do/2026/04/29/hector-acosta-pide-escuchar-al-pueblo-ante-paro-en-san-juan-por-tema-minero/',
      },
      {
        title: 'N Digital: Acosta respalda a Carolina Mejía (mar-2026)',
        url: 'https://n.com.do/2026/03/27/hector-acosta-expresa-respaldo-total-a-carolina-mejia-en-carrera-interna-del-prm/',
      },
      {
        title: 'N Digital: Acosta resalta la labor policial contra la delincuencia en Monseñor Nouel (ago-2024)',
        url: 'https://n.com.do/2024/08/10/senador-de-monsenor-nouel-resalta-labor-del-coronel-contra-la-delincuencia-en-esa-provincia/',
      },
      {
        title: 'Diario Libre: el Senado aprueba en segunda lectura el Código Penal (jul-2025)',
        url: 'https://www.diariolibre.com/politica/congreso-nacional/2025/07/21/el-senado-aprueba-en-segunda-lectura-el-codigo-penal/3189623',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'med-franklin-romero',
    name: 'Franklin Romero',
    kind: 'mediatico',
    subtitle: 'Productor musical (Premium Latin Music) · senador del PRM por Duarte (2020–2028)',
    summary:
      'Productor musical, fundador de Premium Latin Music (1996), que lanzó a Aventura. Diputado por Duarte (2016–2020) y senador del PRM por esa provincia desde 2020, vocero de su bloque. En 2025 presidió la comisión que informó a favor de endurecer las penas por tráfico de migrantes (Ley 137-03) y en 2026 defendió aprobar de urgencia la reforma del Código Penal. Casi todo su perfil se estima a partir de su partido.',
    scores: { eco: 20, soc: -15, mig: -50, ide: -20, rel: -25, val: -10, ord: -20, pod: 30, eti: 15, geo: -60, des: 0, est: -70 },
    confidence: bajaSalvo('mig'),
    sources: [
      { title: 'Senado de la República Dominicana: senador por Duarte', url: 'https://www.senadord.gob.do/duarte/' },
      {
        title: 'Diario Libre: el Senado aprueba modificaciones al Código Penal (jul-2026)',
        url: 'https://www.diariolibre.com/politica/congreso-nacional/2026/07/22/senado-aprueba-con-modificaciones-al-codigo-penal/3607569',
      },
      {
        title: 'Listín Diario: seis figuras del entretenimiento aseguraron curules (may-2024)',
        url: 'https://listindiario.com/entretenimiento/farandula/20240521/seis-mundo-entretenimiento-aseguraron-curules-congreso_809210.html',
      },
      {
        title: 'Senado: aprueban modificar la Ley 137-03 sobre tráfico ilícito de migrantes (may-2025)',
        url: 'https://www.senadord.gob.do/senado-aprueba-en-sesion-extraordinaria-en-provincia-espaillat-proyecto-que-modifica-ley-137-03-sobre-trafico-ilicito-de-migrantes-y-trata-de-personas/',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'med-juliana-oneal',
    name: "Juliana O'Neal",
    kind: 'mediatico',
    subtitle: 'Merenguera · diputada de la Fuerza del Pueblo por Santo Domingo Este (2020–2028)',
    summary:
      'Merenguera, diputada de la Fuerza del Pueblo por Santo Domingo Este desde 2020 y reelecta en 2024. Su agenda legislativa se centra en la salud: pacientes con cáncer, discriminación laboral contra sobrevivientes de enfermedades catastróficas, medicamentos de alto costo (2023–2025) y la ley de alimentación escolar (2026). Sus posiciones en otros temas se estiman a partir de su partido.',
    scores: { eco: -10, soc: -50, mig: -45, ide: -30, rel: -30, val: -30, ord: -20, pod: -25, eti: -10, geo: 20, des: 0, est: -40 },
    confidence: bajaSalvo('soc'),
    sources: [
      { title: "N Digital: artículos sobre Juliana O'Neal", url: 'https://n.com.do/tag/juliana-oneal/' },
      {
        title: "N Digital: Juliana O'Neal cierra su campaña en SDE (may-2024)",
        url: 'https://n.com.do/2024/05/15/juliana-oneal-cierra-su-campana-con-apoyo-de-sde/',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'med-selinee-mendez',
    name: 'Selinée Méndez',
    kind: 'mediatico',
    subtitle: 'Miss RD 1998 y comunicadora · diputada de la Fuerza del Pueblo por el DN (2024–2028)',
    summary:
      'Miss República Dominicana 1998 y comunicadora, diputada de la Fuerza del Pueblo por la circunscripción 1 del Distrito Nacional desde 2024. En 2026 pidió a Abinader hablar de corrupción y de la crisis eléctrica, denunció un contrato de administración privada en el Parque Nacional Valle Nuevo y criticó la rotación de jefes policiales, a la vez que pidió combatir a los delincuentes.',
    scores: { eco: 0, soc: -25, mig: -45, ide: -30, rel: -30, val: -25, ord: -25, pod: 0, eti: 25, geo: 20, des: 40, est: -35 },
    confidence: baja('eco', 'soc', 'mig', 'ide', 'rel', 'val', 'pod', 'geo'),
    sources: [
      {
        title: 'N Digital: Méndez pide a Abinader hablar de corrupción y crisis eléctrica (feb-2026)',
        url: 'https://n.com.do/2026/02/27/diputada-selinee-mendez-pide-a-abinader-que-hable-de-corrupcion-y-crisis-electrica/',
      },
      {
        title: 'N Digital: Méndez denuncia un supuesto alquiler en Valle Nuevo (abr-2026)',
        url: 'https://n.com.do/2026/04/29/selinee-mendez-denuncia-supuesto-alquiler-en-valle-nuevo-y-solicita-interpelar-a-medio-ambiente/',
      },
      {
        title: 'N Digital: Méndez cuestiona los cambios en la Policía (ago-2026)',
        url: 'https://n.com.do/2026/08/17/selinee-mendez-cuestiona-cambios-en-la-policia-y-advierte-que-inseguridad-sigue-afectando-a-rd/',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'med-bolivar-valera',
    name: 'Bolívar Valera "El Boli"',
    kind: 'mediatico',
    subtitle: 'Humorista y locutor · diputado por Santo Domingo Este (PLD 2020–2023, PRM desde 2023)',
    summary:
      'Humorista, locutor y actor, diputado por Santo Domingo Este desde 2020; dejó el PLD y entró al PRM en 2023, y fue reelecto en 2024. Presentó proyectos para regular las redes sociales (diciembre de 2024) y para sancionar audios y videos manipulados (julio de 2025). Casi todo su perfil se estima a partir de su partido.',
    scores: { eco: 15, soc: -15, mig: -45, ide: -20, rel: -25, val: -15, ord: -25, pod: 10, eti: 0, geo: -50, des: 0, est: -50 },
    confidence: bajaSalvo(),
    sources: [
      { title: 'Wikipedia: Bolívar Valera', url: 'https://es.wikipedia.org/wiki/Bol%C3%ADvar_Valera' },
      {
        title: 'Listín Diario: Bolívar Valera repite como diputado por SDE (may-2024)',
        url: 'https://listindiario.com/entretenimiento/farandula/20240520/bolivar-valera-humorista-vive-sueno-dominicano-repite-diputado-sde_809170.html',
      },
      { title: 'N Digital: artículos sobre Bolívar Valera', url: 'https://n.com.do/tag/bolivar-valera/' },
    ],
    asOf: '2026-09',
  },
  {
    id: 'med-betty-geronimo',
    name: 'Betty Gerónimo',
    kind: 'mediatico',
    subtitle: 'Exbailarina de televisión · alcaldesa del PRM en Santo Domingo Norte (2024–2028)',
    summary:
      'Exbailarina del programa Divertido con Jochy, diputada del PRM de 2020 a 2024 y primera alcaldesa de Santo Domingo Norte, electa en 2024. Su gestión incluye la entrega de útiles escolares y la limpieza de cañadas. No tiene posiciones documentadas sobre los temas del test: su perfil se estima a partir del PRM.',
    scores: { eco: 15, soc: -25, mig: -45, ide: -15, rel: -20, val: -10, ord: -15, pod: 30, eti: 15, geo: -50, des: 0, est: -55 },
    confidence: bajaSalvo(),
    sources: [
      { title: 'N Digital: artículos sobre Betty Gerónimo', url: 'https://n.com.do/tag/betty-geronimo/' },
      {
        title: 'Diario Libre: las figuras públicas que se lanzan al ruedo electoral (ene-2024)',
        url: 'https://www.diariolibre.com/revista/cultura/2024/01/30/las-figuras-publicas-que-se-lanzan-al-ruedo-electoral-y-las-que-salen/2592314',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'med-manuel-jimenez',
    name: 'Manuel Jiménez',
    kind: 'mediatico',
    subtitle: 'Cantautor · exdiputado del PLD · exalcalde de Santo Domingo Este por el PRM (2020–2024)',
    summary:
      'Cantautor y abogado, diputado por el PLD desde 2002; dejó ese partido en 2015, pasó por el Frente Amplio y entró al PRM en 2019. Fue alcalde de Santo Domingo Este de 2020 a 2024 y no repostuló; en 2024 organizó el movimiento "Manuel con Luis" en apoyo a Abinader. Su perfil se estima a partir de su trayectoria partidaria.',
    scores: { eco: 0, soc: -30, mig: -40, ide: 0, rel: -15, val: -10, ord: -15, pod: 20, eti: 10, geo: -30, des: 0, est: -40 },
    confidence: bajaSalvo(),
    sources: [
      { title: 'Wikipedia: Manuel Jiménez (cantante)', url: 'https://es.wikipedia.org/wiki/Manuel_Jim%C3%A9nez_(cantante)' },
      { title: 'N Digital: artículos sobre Manuel Jiménez', url: 'https://n.com.do/tag/manuel-jimenez/' },
    ],
    asOf: '2026-09',
  },
  {
    id: 'med-bonny-cepeda',
    name: 'Bonny Cepeda',
    kind: 'mediatico',
    subtitle: 'Merenguero · viceministro de Cultura (2020–2025)',
    summary:
      'Merenguero y arreglista, viceministro de Cultura desde agosto de 2020. En julio de 2024, siendo viceministro, cantó en el inicio de la campaña de reelección de Nicolás Maduro en Zulia; asistió a su investidura y renunció al cargo el 10 de enero de 2025. El resto de su perfil es estimado.',
    scores: { eco: -10, soc: -20, mig: -30, ide: -10, rel: -20, val: -20, ord: -10, pod: -20, eti: -10, geo: 40, des: 0, est: -40 },
    confidence: bajaSalvo('geo'),
    sources: [
      { title: 'Wikipedia: Bonny Cepeda', url: 'https://es.wikipedia.org/wiki/Bonny_Cepeda' },
      {
        title: 'N Digital: Bonny Cepeda canta en la campaña de Maduro (jul-2024)',
        url: 'https://n.com.do/2024/07/04/bonny-cepeda-canta-en-el-inicio-de-la-campana-de-nicolas-maduro-en-busca-de-la-reeleccion/',
      },
      {
        title: 'Diario Libre: Bonny Cepeda renuncia tras su apoyo a Maduro (ene-2025)',
        url: 'https://www.diariolibre.com/revista/musica/2025/01/10/bonny-cepeda-hace-publica-su-renuncia-tras-apoyo-a-nicolas-maduro/2963837',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'med-raulin-rodriguez',
    name: 'Raulín Rodríguez',
    kind: 'mediatico',
    subtitle: 'Bachatero · director del distrito municipal Santa María, Montecristi (PLD, 2016–2024)',
    summary:
      'Bachatero conocido como "El Cacique", primer director del distrito municipal Santa María (Montecristi) por el PLD desde 2016, reelecto en 2020 con 58 %. En enero de 2022 pidió a Abinader terminar la carretera Guayubín–Copey y el puente sobre el río Macabón. Su periodo terminó en 2024 y lo sucedió Eridania Castro Valdez, también del PLD. Sus posiciones se estiman a partir de su partido.',
    scores: { eco: 0, soc: -25, mig: -40, ide: -25, rel: -25, val: -25, ord: -25, pod: -30, eti: -20, geo: 15, des: -10, est: -45 },
    confidence: bajaSalvo(),
    sources: [
      { title: 'Wikipedia: Raulín Rodríguez', url: 'https://es.wikipedia.org/wiki/Raul%C3%ADn_Rodr%C3%ADguez' },
      {
        title: 'Diario Libre: Raulín Rodríguez pide a Abinader reparar carreteras (ene-2022)',
        url: 'https://www.diariolibre.com/actualidad/nacional/2022/01/12/raulin-rodriguez-pide-a-abinader-repacion-de-carreteras/1578606',
      },
      {
        title: 'Municipalidad en tus Manos: Junta del distrito municipal Santa María',
        url: 'https://municipalidadentusmanos.gob.do/junta-municipal/junta-de-distrito-municipal-de-santa-maria-d-m/',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'med-bray-vargas',
    name: 'Bray Vargas',
    kind: 'mediatico',
    subtitle: 'Modelo y comunicador · diputado del PLD por Santiago (2024–2028)',
    summary:
      'Modelo y comunicador, exregidor del PLD en Santiago y diputado de ese partido por la provincia desde 2024. No tiene posiciones documentadas sobre los temas del test; su perfil se estima a partir del PLD con confianza muy baja.',
    scores: { eco: 0, soc: -20, mig: -40, ide: -25, rel: -25, val: -20, ord: -25, pod: -30, eti: -20, geo: 15, des: -15, est: -40 },
    confidence: bajaSalvo(),
    sources: [
      { title: 'N Digital: artículos sobre Bray Vargas', url: 'https://n.com.do/tag/bray-vargas/' },
      {
        title: 'Listín Diario: seis figuras del entretenimiento aseguraron curules (may-2024)',
        url: 'https://listindiario.com/entretenimiento/farandula/20240521/seis-mundo-entretenimiento-aseguraron-curules-congreso_809210.html',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'med-roberto-angel-salcedo',
    name: 'Roberto Ángel Salcedo',
    kind: 'mediatico',
    subtitle: 'Actor y director de cine · ministro de Cultura (2025–) · dirección ejecutiva del PRM',
    summary:
      'Actor, productor y director de cine, con 18 largometrajes bajo la Ley de Cine hasta 2023. Dejó el PLD, apoyó a Abinader en 2020 y entró al PRM en 2022, donde integra la dirección ejecutiva; dirigió Propeep (2023–2025) y es ministro de Cultura desde 2025. Defendió mantener los incentivos al cine e impulsa "El poder de las buenas palabras" y el Plan Frontera; en 2026 no descartó aspirar a la alcaldía del DN.',
    scores: { eco: -10, soc: -30, mig: -20, ide: -20, rel: -10, val: -20, ord: -10, pod: 10, eti: -10, geo: -50, des: 0, est: -80 },
    confidence: bajaSalvo('soc', 'est'),
    sources: [
      {
        title: 'Wikipedia: Roberto Ángel Salcedo',
        url: 'https://es.wikipedia.org/wiki/Roberto_%C3%81ngel_Salcedo',
      },
      {
        title: 'Diario Libre: "la ley de cine no se modificará" (mar-2025)',
        url: 'https://www.diariolibre.com/revista/cine/2025/03/18/roberto-angel-salcedo-asegura-que-la-ley-de-cine-no-sera-tocada/3038263',
      },
      {
        title: 'N Digital: "El poder de las buenas palabras" (may-2025)',
        url: 'https://n.com.do/2025/05/25/roberto-angel-expone-en-santiago-el-alcance-de-el-poder-de-las-buenas-palabras/',
      },
      {
        title: 'Diario Libre: el Plan Frontera (mar-2025)',
        url: 'https://www.diariolibre.com/revista/cultura/2025/03/12/el-plan-de-roberto-angel-salcedo-para-llevar-la-cultura-a-la-frontera/3030866',
      },
      {
        title: 'N Digital: balance de seis años de cultura (ago-2026)',
        url: 'https://n.com.do/2026/08/15/roberto-angel-salcedo-destaca-avances-de-la-cultura-durante-seis-anos-de-gobierno-de-abinader-reconoce-retos-pendientes/',
      },
      {
        title: 'Bajo Techo: Roberto Ángel no descarta aspirar a la alcaldía del DN (sep-2026)',
        url: 'https://www.bajotecho.digital/2026/09/01/roberto-angel-salcedo-no-descarta-aspirar-a-la-alcaldia-del-distrito-nacional/',
      },
      {
        title: 'Hoy: Roberto Ángel Salcedo y los precandidatos del PRM (sep-2026)',
        url: 'https://hoy.com.do/el-pais/cara-elecciones-2028-roberto-angel-salcedo-algun-precandidato-presidencial-preferencia-prm_1102607.html',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'med-roberto-salcedo',
    name: 'Roberto Salcedo',
    kind: 'mediatico',
    subtitle: 'Productor de TV · exalcalde del DN (PLD, 2002–2016) · embajador en Panamá (PRM)',
    summary:
      'Productor y presentador de televisión. Fue alcalde del Distrito Nacional por el PLD de 2002 a 2016, con una gestión centrada en recuperar el espacio público (reubicación de casetas y vendedores, parques, arbolado); en 2016 propuso rellenos sanitarios regionales. Fue ministro sin cartera de Seguridad Ciudadana con Danilo Medina, pasó al PRM en 2020 y es embajador en Panamá desde 2025.',
    scores: { eco: 0, soc: -25, mig: -20, ide: -20, rel: -20, val: -30, ord: -20, pod: -30, eti: -10, geo: -40, des: 15, est: -80 },
    confidence: { ...bajaSalvo('soc', 'pod', 'des', 'est'), est: 'alta' },
    sources: [
      {
        title: 'Wikipedia: Roberto Salcedo',
        url: 'https://es.wikipedia.org/wiki/Roberto_Salcedo',
      },
      {
        title: 'Hoy: el cabildo desaloja negocios del Malecón (jun-2004)',
        url: 'https://hoy.com.do/cabildo-desaloja-negocios-de-malecon-2/',
      },
      {
        title: 'Diario Libre: "No todos podemos ser presidente" (may-2010, archivo)',
        url: 'https://web.archive.org/web/20141201063848/http://www.diariolibre.com/noticias/2010/05/05/i244120_roberto-salcedo-todos-podemos-ser-presidente-repblica.html',
      },
      {
        title: 'Acento: árboles nativos bajo el tendido eléctrico (jun-2011)',
        url: 'https://acento.com.do/actualidad/alcaldia-del-distrito-nacional-sustituye-los-arboles-grandes-por-pequenos-3515.html',
      },
      {
        title: 'Listín Diario: su programa municipal de 2016 (abr-2016)',
        url: 'https://listindiario.com/la-republica/2016/04/26/417018/roberto-no-esta-cansado-para-seguir.html',
      },
      {
        title: 'N Digital: renuncia al PLD (mar-2020)',
        url: 'https://n.com.do/2020/03/02/roberto-salcedo-anuncia-su-renuncia-del-pld/',
      },
      {
        title: 'N Digital: pasa al PRM (jun-2020)',
        url: 'https://n.com.do/2020/06/15/roberto-salcedo-y-su-familia-formalizan-su-paso-al-prm-paliza-juramenta-movimientos/',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'med-sergio-vargas',
    name: 'Sergio Vargas',
    kind: 'mediatico',
    subtitle: 'Merenguero · exdiputado del PLD por Villa Altagracia (2006–2010)',
    summary:
      'Merenguero, diputado del PLD por Villa Altagracia (San Cristóbal) de 2006 a 2010. En 2002 prometió no cortarse el pelo hasta que se resolvieran la falta de agua, la contaminación de plantas de asfalto y la basura en su pueblo. En 2019 respaldó la salida de Leonel Fernández del PLD, en 2024 cantó en el merengue de campaña de Abinader y en 2026 dijo que no volverá a optar por un cargo.',
    scores: { eco: -20, soc: -40, mig: 0, ide: 0, rel: 0, val: -20, ord: 0, pod: 0, eti: -10, geo: 0, des: 25, est: -30 },
    confidence: bajaSalvo(),
    sources: [
      { title: 'Wikipedia: Sergio Vargas (cantante)', url: 'https://es.wikipedia.org/wiki/Sergio_Vargas_(cantante)' },
      { title: 'N Digital: artículos sobre Sergio Vargas', url: 'https://n.com.do/tag/sergio-vargas/' },
      {
        title: 'Listín Diario: artistas y comunicadores, desilusión política (jun-2026)',
        url: 'https://listindiario.com/entretenimiento/farandula/20260612/luces-camaras-desilusion-politica-artistas-comunicadores-dominicanos_909490.html',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'med-tokischa',
    name: 'Tokischa',
    kind: 'mediatico',
    subtitle: 'Rapera y cantante de música urbana',
    summary:
      'Rapera y cantante de música urbana. Ha defendido la legalización del aborto (2021) y tiene perfil de activismo LGBT; sus fotos y videos en templos católicos le valieron una prohibición fiscal en La Vega (2021) y un reclamo del obispado de San Sebastián (2026). Tras el derrumbe del Jet Set (abril de 2025) recaudó fondos y atribuyó la tragedia a permitir operar "a cambio de sobornos o conexiones".',
    scores: { eco: 0, soc: 0, mig: 0, ide: 40, rel: 70, val: 90, ord: 30, pod: 0, eti: 35, geo: 0, des: 0, est: 60 },
    confidence: baja('eco', 'soc', 'mig', 'ide', 'ord', 'pod', 'geo', 'des'),
    sources: [
      { title: 'Wikipedia: Tokischa', url: 'https://es.wikipedia.org/wiki/Tokischa' },
      {
        title: 'N Digital: Tokischa tras la tragedia del Jet Set (abr-2025)',
        url: 'https://n.com.do/2025/04/09/tokischa-denuncia-tras-tragedia-en-jet-set-esto-es-lo-que-pasa-cuando-se-permite-operar-a-cambio-de-sobornos/',
      },
      {
        title: 'N Digital: el obispado de San Sebastián exige retirar un video de Tokischa (abr-2026)',
        url: 'https://n.com.do/2026/04/08/obispado-en-espana-exige-retirar-un-video-de-tokischa-en-una-basilica-de-san-sebastian/',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'med-melymel',
    name: 'Melymel',
    kind: 'mediatico',
    subtitle: 'Rapera · convocó cacerolazos contra la "ley mordaza" y la reforma fiscal (2026)',
    summary:
      'Rapera. En julio de 2026 convocó cacerolazos diarios contra la "ley mordaza" y para exigir revocar la reforma fiscal, y pidió destituir a la ministra Faride Raful tras la muerte de un joven por el disparo de un cabo de la Policía. Criticó a Alofoke por negociar con Abinader los cambios al Código Penal y dijo que preferiría a Ricardo Ripoll y a El Piro como candidatos a presidente y vicepresidente.',
    scores: { eco: 20, soc: 0, mig: 0, ide: 0, rel: 0, val: 0, ord: 40, pod: 30, eti: 40, geo: 0, des: 0, est: 70 },
    confidence: bajaSalvo('ord', 'pod', 'est'),
    sources: [
      {
        title: 'Listín Diario: Melymel convoca a protestar y pide destituir a Faride Raful (jul-2026)',
        url: 'https://listindiario.com/entretenimiento/urbano/20260706/melymel-convoca-protestar-gobierno-pedir-destituyan-faride-raful_912676.html',
      },
      {
        title: 'Listín Diario: Melymel critica a Alofoke por reunirse con Abinader (jul-2026)',
        url: 'https://listindiario.com/entretenimiento/farandula/20260712/melymel-llama-traidor-alofoke-reunion-presidente-luis-abinader_913578.html',
      },
      {
        title: 'Luminarias TV: Melymel llama a protestar antes de que entre en vigor la "ley mordaza" (jul-2026)',
        url: 'https://luminariastv.com/melymel-arremete-contra-el-gobierno-y-llama-a-protestar-antes-de-que-entre-en-vigencia-la-ley-mordaza/',
      },
      {
        title: 'El Nacional: Melymel convoca a cacerolazos (jul-2026)',
        url: 'https://elnacional.com.do/fama-y-vida/farandula/melymel-convoca-cacerolazos-protesta-ley-mordaza_575108.html',
      },
      {
        title: 'Telemicro: Melymel, "se ganó una batalla, no la guerra" (jul-2026)',
        url: 'https://ntelemicro.com/melymel-llama-a-mantener-las-protestas-y-afirma-que-se-gano-una-batalla-no-la-guerra/',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'med-rita-indiana',
    name: 'Rita Indiana',
    kind: 'mediatico',
    subtitle: 'Escritora, compositora y cantante',
    summary:
      'Escritora, compositora y cantante, lesbiana declarada, con obra de temática social ("Da pa lo do", "El juidero"). En octubre de 2013, tras la sentencia TC 168-13, publicó en El País un artículo sobre los hijos de haitianos nacidos en la República Dominicana. No tiene cargo ni partido; varias de sus posiciones son estimadas.',
    scores: { eco: 0, soc: 0, mig: 40, ide: 65, rel: 40, val: 80, ord: 0, pod: 0, eti: 0, geo: 0, des: 30, est: 50 },
    confidence: bajaSalvo('mig', 'ide', 'val'),
    sources: [
      { title: 'Wikipedia: Rita Indiana', url: 'https://es.wikipedia.org/wiki/Rita_Indiana' },
      { title: 'Wikipedia (inglés): Rita Indiana', url: 'https://en.wikipedia.org/wiki/Rita_Indiana' },
      {
        title: 'El Día: El País publica "Magia negra", de Rita Indiana (oct-2013)',
        url: 'https://eldia.com.do/periodico-el-pais-publica-articulo-de-rita-indiana-sobre-problematica-haitiana/',
      },
    ],
    asOf: '2026-09',
  },
  {
    id: 'med-johnny-ventura',
    name: 'Johnny Ventura (1940–2021)',
    kind: 'mediatico',
    subtitle: 'Merenguero · alcalde de Santo Domingo (PRD, 1998–2002) · candidato de la FP en 2020',
    summary:
      'Merenguero conocido como "El Caballo Mayor", militó 45 años en el PRD y fue alcalde de Santo Domingo de 1998 a 2002. En 2008 apoyó la reelección de Leonel Fernández y luego pasó a la Fuerza del Pueblo, con la que fue candidato a alcalde del Distrito Nacional en 2020 (6.62 %, tercer lugar). Murió en 2021; su perfil se evalúa en relación con su época.',
    scores: { eco: -30, soc: -40, mig: 0, ide: 30, rel: 0, val: -20, ord: 0, pod: -30, eti: -10, geo: 0, des: 0, est: -50 },
    confidence: bajaSalvo(),
    relativeToEra: true,
    sources: [
      { title: 'Wikipedia: Johnny Ventura', url: 'https://es.wikipedia.org/wiki/Johnny_Ventura' },
      {
        title: 'Diario Libre: cómo les fue a los famosos en las elecciones municipales (2020)',
        url: 'https://www.diariolibre.com/revista/los-que-ganaron-y-los-que-perdieron-como-les-fue-a-los-famosos-en-las-elecciones-municipales-JF17745286',
      },
    ],
  },
  {
    id: 'med-freddy-beras-goico',
    name: 'Freddy Beras-Goico (1940–2010)',
    kind: 'mediatico',
    subtitle: 'Humorista y presentador de televisión · constitucionalista en 1965',
    summary:
      'Humorista, productor y presentador de televisión. Por apoyar al bando constitucionalista de Caamaño en 1965 fue encarcelado y torturado; en su carrera hizo sátira política y fue crítico de sucesivos gobiernos. Murió en 2010; su perfil se evalúa en relación con su época.',
    scores: { eco: -20, soc: -40, mig: 0, ide: 0, rel: 0, val: 0, ord: 40, pod: 30, eti: 40, geo: 40, des: 0, est: 40 },
    confidence: bajaSalvo(),
    relativeToEra: true,
    sources: [{ title: 'Wikipedia: Freddy Beras-Goico', url: 'https://es.wikipedia.org/wiki/Freddy_Beras-Goico' }],
  },
  {
    id: 'med-sonia-silvestre',
    name: 'Sonia Silvestre (1952–2014)',
    kind: 'mediatico',
    subtitle: 'Cantante y locutora de la Nueva Canción · Siete Días con el Pueblo (1974)',
    summary:
      'Cantante y locutora, figura de la Nueva Canción dominicana; participó en el festival "Siete Días con el Pueblo" (1974), realizado contra la represión de la época. En 2008 fue designada ministra consejera para asuntos culturales en la embajada dominicana en Cuba. Murió en 2014; su perfil se evalúa en relación con su época.',
    scores: { eco: -50, soc: -50, mig: 20, ide: 30, rel: 20, val: 30, ord: 40, pod: 0, eti: 0, geo: 40, des: 0, est: -20 },
    confidence: bajaSalvo(),
    relativeToEra: true,
    sources: [{ title: 'Wikipedia: Sonia Silvestre', url: 'https://es.wikipedia.org/wiki/Sonia_Silvestre' }],
  },

  // ── §11.12 Streamers, tiktokers e influencers ──
  {
    id: 'med-jaime-rincon',
    name: 'Jaime Rincón',
    kind: 'mediatico',
    subtitle: 'Comunicador (El Nuevo Diario TV, RD Debate) · excandidato de la FP a alcalde de San Antonio de Guerra (2020)',
    summary:
      'Director de El Nuevo Diario TV y activista en X (fundación Funjop). Fue candidato de la FP a alcalde de San Antonio de Guerra (2020) y desde 2026 conduce RD Debate. En 2023 rechazó el proyecto de ley de refugiados y denunció pagos de Educación a cuentas que atacaban a críticos del gobierno. Apoyó a Antigua Orden hasta septiembre de 2026, cuando rompió con Ángelo Vásquez por su candidatura.',
    scores: { eco: 0, soc: -10, mig: -85, ide: -50, rel: -20, val: -25, ord: -30, pod: 10, eti: 50, geo: 0, des: 0, est: -10 },
    confidence: baja('eco', 'soc', 'ide', 'rel', 'val', 'ord', 'pod', 'geo', 'des'),
    sources: [
      {
        title: 'Diario Eco: Jaime Rincón retira su apoyo a Antigua Orden (sep-2026)',
        url: 'https://diarioeco.com.do/jaime-rincon-acusa-a-angelo-vasquez-de-enganar-a-quienes-le-apoyaron-retira-apoyo-a-la-antigua-orden/',
      },
      {
        title: 'N Digital: Educación niega pagar para atacar a críticos (may-2023)',
        url: 'https://n.com.do/2023/05/17/educacion-dice-no-paga-para-atacar-a-periodistas-y-personalidades-criticas-al-gobierno/',
      },
      {
        title: 'N Digital: la Alcaldía del DN reconoce al activista Jaime Rincón (ene-2021)',
        url: 'https://n.com.do/2021/01/29/alcaldia-dn-reconoce-al-activista-social-jaime-rincon/',
      },
      {
        title: 'Ciudadanía RD: Jaime Rincón rompe con Ángelo Vásquez',
        url: 'https://ciudadaniard.com/jaime-rincon-rompe-con-angelo-vazquez-y-la-antigua-orden/',
      },
      {
        title: 'Color Visión: Jaime Rincón, candidato a alcalde de San Antonio de Guerra por la FP (mar-2020)',
        url: 'https://www.youtube.com/watch?v=iHyu58a3nSA',
      },
      {
        title: 'EyR: RD Debate sobre el Código Penal y la libertad de expresión (sep-2026)',
        url: 'https://eyr.com.do/rd-debate-abogados-nuevo-codigo-penal-libertad-expresion/',
      },
    ],
    asOf: '2026-09',
  },
];
