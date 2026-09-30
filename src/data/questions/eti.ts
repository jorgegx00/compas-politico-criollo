import type { Question } from '../types.ts';

/** Eje primario `eti` (Ética pública): −100 = clientelismo / pragmatismo, +100 = transparencia. */
export const etiQuestions: Question[] = [
  // Tier 1
  {
    id: 'eti-01',
    tier: 1,
    topic: 'corrupcion',
    effects: { eti: 2 },
    text: 'Hay que eliminar el barrilito y el cofrecito de los legisladores, aunque con ese dinero ayuden a gente necesitada.',
    context:
      'El "barrilito" (Fondo de Gestión Legislativa, desde 2007) y el "cofrecito" son fondos que senadores y diputados reciben aparte de su sueldo para dar ayudas sociales en sus demarcaciones.',
  },
  {
    id: 'eti-02',
    tier: 1,
    topic: 'corrupcion',
    effects: { eti: -3 },
    text: 'No importa que un político robe, si hace obras que benefician al pueblo.',
    context: 'Es la idea que en la calle se resume como "roba pero hace".',
  },
  {
    id: 'eti-03',
    tier: 1,
    topic: 'corrupcion',
    effects: { eti: 3, est: 1 },
    text: 'Hay que meter presos a los corruptos de todos los gobiernos pasados, aunque se llenen las cárceles de políticos.',
  },
  // Tier 2
  {
    id: 'eti-04',
    tier: 2,
    topic: 'corrupcion',
    effects: { eti: -2 },
    text: 'Es normal que quienes trabajaron en la campaña del partido ganador reciban después un empleo en el gobierno.',
  },
  {
    id: 'eti-05',
    tier: 2,
    topic: 'corrupcion',
    effects: { eti: 2, pod: 1 },
    text: 'El Ministerio Público debe perseguir con la misma dureza a los funcionarios del gobierno de turno que a los de la oposición.',
    context:
      'Casos como SENASA (Operación Cobra) y Camaleón (INTRANT) involucran a funcionarios del gobierno actual; Antipulpo, Medusa y Calamar se refieren a gobiernos anteriores.',
  },
  // Tier 3
  {
    id: 'eti-06',
    tier: 3,
    topic: 'corrupcion',
    effects: { eti: -2 },
    text: 'Está bien que un candidato reparta comida o dinero en los barrios durante la campaña, porque la gente lo necesita.',
  },
  {
    id: 'eti-07',
    tier: 3,
    topic: 'corrupcion',
    effects: { eti: 2 },
    text: 'Quien cobre una "botella" en la nómina pública debería devolver todo el dinero, aunque tenga padrinos políticos.',
    context: '"Botella": cargo público por el que alguien cobra sin trabajar, por lo general como favor político.',
  },
  {
    id: 'eti-08',
    tier: 3,
    topic: 'corrupcion',
    effects: { eti: -2 },
    text: 'Un presidente tiene derecho a nombrar a familiares y amigos de confianza en puestos importantes del gobierno.',
  },
  {
    id: 'eti-09',
    tier: 3,
    topic: 'sistema-partidos',
    effects: { eti: 2 },
    text: 'Toda donación a una campaña política debería publicarse con el nombre del donante y el monto.',
  },
  {
    id: 'eti-10',
    tier: 3,
    topic: 'corrupcion',
    effects: { eti: -3 },
    text: 'Es justo que los empresarios que financiaron la campaña ganadora reciban después contratos del Estado.',
  },
  {
    id: 'eti-11',
    tier: 3,
    topic: 'corrupcion',
    effects: { eti: 2 },
    text: 'La declaración de bienes de cada funcionario debería publicarse completa en internet para que cualquiera la revise.',
  },
  // Tier 4
  {
    id: 'eti-12',
    tier: 4,
    topic: 'corrupcion',
    effects: { eti: -2 },
    text: 'Pagar un "macuteo" para agilizar un trámite en una oficina pública es aceptable si el sistema no funciona.',
    context: '"Macuteo": soborno pequeño que se paga a un empleado público o a un agente para resolver algo.',
  },
  {
    id: 'eti-13',
    tier: 4,
    topic: 'corrupcion',
    effects: { eti: 2, ord: -1 },
    text: 'Los grandes corruptos merecen la pena de muerte, como piden quienes reclaman "plazas para ahorcar".',
    context: 'Alude a la consigna popular de levantar "plazas para ahorcar" a los corruptos.',
  },
  {
    id: 'eti-14',
    tier: 4,
    topic: 'estado-mercado',
    effects: { eti: -2 },
    text: 'Contratar obras a dedo, sin licitación, está bien cuando hace falta hacerlas rápido.',
  },
  {
    id: 'eti-15',
    tier: 4,
    topic: 'estado-mercado',
    effects: { eti: 2 },
    text: 'Debería prohibirse que las empresas de familiares de un funcionario le vendan al Estado.',
  },
  {
    id: 'eti-16',
    tier: 4,
    topic: 'libertad-expresion',
    effects: { eti: -2 },
    text: 'Es legítimo que el gobierno reparta su publicidad entre los medios y comunicadores que lo apoyan.',
  },
  {
    id: 'eti-17',
    tier: 4,
    topic: 'corrupcion',
    effects: { eti: 2 },
    text: 'Quien haya sido condenado por corrupción no debería poder ser candidato nunca más.',
  },
  {
    id: 'eti-18',
    tier: 4,
    topic: 'sistema-partidos',
    effects: { eti: -3 },
    text: 'El partido que gobierna tiene derecho a usar vehículos y recursos del Estado en su campaña.',
  },
  {
    id: 'eti-19',
    tier: 4,
    topic: 'corrupcion',
    effects: { eti: 2 },
    text: 'Las marchas ciudadanas contra la corrupción, como la Marcha Verde, son necesarias para que la justicia actúe.',
    context:
      'La Marcha Verde es un movimiento ciudadano contra la corrupción y la impunidad surgido en enero de 2017, tras el escándalo de sobornos de Odebrecht.',
  },
  {
    id: 'eti-20',
    tier: 4,
    topic: 'corrupcion',
    effects: { eti: -2 },
    text: 'Es preferible que un corrupto devuelva lo robado a cambio de no ir preso que esperar años por una condena.',
  },
  {
    id: 'eti-21',
    tier: 4,
    topic: 'libertad-expresion',
    effects: { eti: 2 },
    text: 'Los periodistas deberían tener acceso a cualquier nómina, contrato o gasto del gobierno, sin excepciones.',
  },
];
