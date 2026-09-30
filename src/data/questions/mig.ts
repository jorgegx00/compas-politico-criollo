import type { Question } from '../types.ts';

/** Eje primario mig (−: Nacionalismo / frontera dura, +: Apertura migratoria). */
export const migQuestions: Question[] = [
  // Tier 1
  {
    id: 'mig-03',
    tier: 1,
    topic: 'haiti',
    effects: { mig: 2 },
    text: 'Los trabajadores haitianos de la construcción y la agricultura deberían recibir permisos de trabajo temporales legales.',
  },
  {
    id: 'mig-04',
    tier: 1,
    topic: 'haiti',
    effects: { mig: -2 },
    text: 'El muro fronterizo debe cubrir toda la frontera con Haití.',
    context: 'En abril de 2025 había unos 54 km de muro construidos y el Gobierno anunció 13 km más.',
  },
  {
    id: 'mig-01',
    tier: 1,
    topic: 'haiti',
    effects: { mig: 3, ide: 1 },
    text: 'Los hijos de haitianos nacidos y criados en RD deberían ser dominicanos, aunque sus padres estuvieran en el país de forma irregular.',
    context:
      'Los hijos de extranjeros con residencia legal ya son dominicanos por nacimiento. La Constitución (art. 18.3) excluye a los hijos de extranjeros "que se hallen en tránsito o residan ilegalmente". La sentencia TC 168-13 aplicó ese criterio a los nacidos desde 1929.',
  },
  {
    id: 'mig-02',
    tier: 1,
    topic: 'haiti',
    effects: { mig: -3 },
    text: 'Hay que deportar a todos los haitianos indocumentados, aunque lleven años trabajando aquí.',
    context: 'RD deportó a 276,215 personas en 2024 y a 379,553 en 2025.',
  },
  // Tier 2
  {
    id: 'mig-05',
    tier: 2,
    topic: 'haiti',
    effects: { mig: 3 },
    text: 'Los haitianos indocumentados que llevan muchos años en RD deberían poder obtener la residencia legal.',
  },
  {
    id: 'mig-06',
    tier: 2,
    topic: 'haiti',
    effects: { mig: -2, ide: -1 },
    text: 'Hizo bien el Tribunal Constitucional en aplicar la sentencia TC 168-13 a los nacidos desde 1929.',
    context:
      'La TC 168-13 (23-sep-2013) dispuso que los hijos de extranjeros en situación irregular nacidos en RD desde 1929 no tienen derecho a la nacionalidad dominicana. Los afectados se estiman entre 22,673 y 210,000 personas.',
  },
  // Tier 3
  {
    id: 'mig-07',
    tier: 3,
    topic: 'haiti',
    effects: { mig: 2 },
    text: 'El Estado debería completar cuanto antes las naturalizaciones que prevé la Ley 169-14 para los afectados por la TC 168-13.',
    context:
      'La Ley 169-14 (2014) buscó devolver los documentos a los afectados ya inscritos (grupo A) y abrir la naturalización a los no inscritos (grupo B). En 2026 unos 34,000 del grupo A seguían con obstáculos y solo había 799 naturalizados del grupo B; en junio, el TC ordenó juramentar a 16 que esperaban desde 2020.',
  },
  {
    id: 'mig-08',
    tier: 3,
    topic: 'pensiones-salud',
    effects: { mig: -2 },
    text: 'Está bien que los hospitales públicos reporten a Migración a los pacientes indocumentados después de atenderlos.',
    context:
      'Desde abril de 2025, un protocolo exige en los hospitales públicos cédula o pasaporte, carta de trabajo y prueba de domicilio, y reporta a Migración a los indocumentados tras estabilizarlos.',
  },
  {
    id: 'mig-09',
    tier: 3,
    topic: 'haiti',
    effects: { mig: 2 },
    text: 'Quien pide respeto para los dominicanos indocumentados en EE.UU. debería pedir lo mismo para los haitianos indocumentados en RD.',
    context: 'EE.UU. (Estados Unidos) es el país donde vive la mayor parte de la diáspora dominicana.',
  },
  {
    id: 'mig-10',
    tier: 3,
    topic: 'haiti',
    effects: { mig: -3 },
    text: 'RD no debería recibir refugiados haitianos, aunque huyan de la violencia de las pandillas.',
  },
  {
    id: 'mig-11',
    tier: 3,
    topic: 'migracion-general',
    effects: { mig: 2 },
    text: 'RD debería regularizar a los venezolanos que llegaron huyendo de la crisis de su país y ya trabajan aquí.',
  },
  // Tier 4
  {
    id: 'mig-12',
    tier: 4,
    topic: 'haiti',
    effects: { mig: -2, eco: -1 },
    text: 'Hay que restringir la entrada de comerciantes haitianos a los mercados binacionales para proteger a los vendedores dominicanos.',
    context:
      'Los mercados binacionales son ferias en la frontera donde comercian dominicanos y haitianos. En abril de 2025 el Gobierno anunció un nuevo reglamento para ellos.',
  },
  {
    id: 'mig-13',
    tier: 4,
    topic: 'educacion',
    effects: { mig: 2 },
    text: 'Las escuelas públicas deben inscribir a todos los niños que viven en el país, tengan o no papeles sus padres.',
  },
  {
    id: 'mig-14',
    tier: 4,
    topic: 'trabajo',
    effects: { mig: -2, eco: -1 },
    text: 'Las empresas deberían estar obligadas a contratar a dominicanos antes que a extranjeros, aunque les cueste más.',
  },
  {
    id: 'mig-15',
    tier: 4,
    topic: 'haiti',
    effects: { mig: 2 },
    text: 'Las deportaciones masivas no reducen la inmigración haitiana.',
  },
  {
    id: 'mig-16',
    tier: 4,
    topic: 'haiti',
    effects: { mig: -3 },
    text: 'El extranjero que vuelva a entrar al país después de ser deportado debería ir a la cárcel.',
    context:
      'Según Migración, con la Ley 285-04 vigente entrar sin documentos es solo una falta administrativa y no se puede penalizar a quien reingresa tras ser deportado.',
  },
  {
    id: 'mig-17',
    tier: 4,
    topic: 'haiti',
    effects: { mig: 2, eco: 1 },
    text: 'La frontera debe mantenerse abierta al comercio con Haití, aunque ese país esté en crisis.',
  },
  {
    id: 'mig-18',
    tier: 4,
    topic: 'haiti',
    effects: { mig: -2 },
    text: 'Las ONG que critican las deportaciones actúan contra los intereses del país.',
    context: 'ONG: organizaciones no gubernamentales, como las de derechos humanos que trabajan con migrantes.',
  },
  {
    id: 'mig-19',
    tier: 4,
    topic: 'migracion-general',
    effects: { mig: 2, eco: 1 },
    text: 'RD debería facilitar la residencia a los extranjeros que vengan a trabajar en oficios en los que faltan trabajadores.',
  },
  {
    id: 'mig-20',
    tier: 4,
    topic: 'trabajo',
    effects: { mig: -2 },
    text: 'Los inmigrantes haitianos les quitan empleos a los dominicanos.',
  },
  {
    id: 'mig-21',
    tier: 4,
    topic: 'migracion-general',
    effects: { mig: 2 },
    text: 'RD debería dar asilo con más facilidad a quienes huyen de la persecución política o de la guerra.',
  },
  {
    id: 'mig-22',
    tier: 4,
    topic: 'migracion-general',
    effects: { mig: -2 },
    text: 'RD debería endurecer los requisitos de residencia para los inmigrantes de cualquier país.',
  },
];
