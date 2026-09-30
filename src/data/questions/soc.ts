import type { Question } from '../types.ts';

/** Eje primario soc (−: Estado protector, +: Responsabilidad individual). Signo del efecto primario alternado desde −. */
export const socQuestions: Question[] = [
  // Tier 1
  {
    id: 'soc-01',
    tier: 1,
    topic: 'pensiones-salud',
    effects: { soc: -2 },
    text: 'El Estado debe garantizar una pensión mínima a todo adulto mayor, haya cotizado o no.',
  },
  {
    id: 'soc-02',
    tier: 1,
    topic: 'trabajo',
    effects: { soc: 3 },
    text: 'La pobreza se debe más a la falta de esfuerzo personal que a la falta de oportunidades.',
  },
  {
    id: 'soc-03',
    tier: 1,
    topic: 'pensiones-salud',
    effects: { soc: -3, eco: -1 },
    text: 'La salud debería ser pública y gratuita para todos, sin ARS privadas.',
    context:
      'Las ARS (administradoras de riesgos de salud) gestionan el seguro familiar de salud creado por la Ley 87-01. Hay ARS públicas y privadas.',
  },
  // Tier 2
  {
    id: 'soc-04',
    tier: 2,
    topic: 'estado-mercado',
    effects: { soc: 2 },
    text: 'Programas de ayuda como Supérate hacen que la gente dependa del Gobierno.',
    context: 'Supérate es el programa social del Gobierno que entrega transferencias, como Aliméntate, a hogares pobres.',
  },
  {
    id: 'soc-05',
    tier: 2,
    topic: 'estado-mercado',
    effects: { soc: -3 },
    text: 'Todo hogar pobre debería recibir del Estado un ingreso mensual, sin tener que cumplir condiciones.',
  },
  // Tier 3
  {
    id: 'soc-06',
    tier: 3,
    topic: 'pensiones-salud',
    effects: { soc: 3, eco: 1 },
    text: 'La pensión de cada persona debería depender solo de lo que ahorró durante su vida laboral.',
  },
  {
    id: 'soc-07',
    tier: 3,
    topic: 'estado-mercado',
    effects: { soc: -2 },
    text: 'El Estado debería construir viviendas baratas para las familias que no pueden comprar una casa.',
  },
  {
    id: 'soc-08',
    tier: 3,
    topic: 'impuestos',
    effects: { soc: 2, eco: 1 },
    text: 'Los impuestos deberían ser bajos, aunque eso signifique menos programas sociales.',
  },
  {
    id: 'soc-09',
    tier: 3,
    topic: 'educacion',
    effects: { soc: -2, eco: -1 },
    text: 'El Estado debería gastar más en la escuela pública, aunque haya que subir impuestos.',
  },
  {
    id: 'soc-10',
    tier: 3,
    topic: 'estado-mercado',
    effects: { soc: 2 },
    text: 'Quien recibe ayudas del Gobierno debería estar obligado a trabajar o estudiar.',
  },
  {
    id: 'soc-11',
    tier: 3,
    topic: 'estado-mercado',
    effects: { soc: -2 },
    text: 'El Estado debería ofrecer estancias infantiles gratuitas a todas las familias que trabajan.',
  },
  // Tier 4
  {
    id: 'soc-12',
    tier: 4,
    topic: 'pensiones-salud',
    effects: { soc: 2 },
    text: 'Los hospitales públicos deberían cobrar una cuota a los pacientes que puedan pagarla.',
  },
  {
    id: 'soc-13',
    tier: 4,
    topic: 'impuestos',
    effects: { soc: -2, eco: -1 },
    text: 'Las grandes herencias deberían pagar más impuestos para financiar programas sociales.',
  },
  {
    id: 'soc-14',
    tier: 4,
    topic: 'educacion',
    effects: { soc: 2, eco: 1 },
    text: 'El Estado debería dar a los padres un bono para pagar la escuela, pública o privada, que ellos elijan.',
  },
  {
    id: 'soc-15',
    tier: 4,
    topic: 'trabajo',
    effects: { soc: -2 },
    text: 'El Estado debería pagar un seguro de desempleo a quien pierda su trabajo.',
  },
  {
    id: 'soc-16',
    tier: 4,
    topic: 'pensiones-salud',
    effects: { soc: 2 },
    text: 'El seguro subsidiado de SENASA debería cubrir solo a los más pobres, no ampliarse a más gente.',
    context:
      'SENASA es el seguro de salud público. Su régimen subsidiado, financiado por el Estado, cubre a quienes no cotizan en un empleo formal.',
  },
  {
    id: 'soc-17',
    tier: 4,
    topic: 'educacion',
    effects: { soc: -2 },
    text: 'La UASD debería ser totalmente gratuita para todos sus estudiantes.',
    context: 'La UASD (Universidad Autónoma de Santo Domingo) es la principal universidad pública del país.',
  },
  {
    id: 'soc-18',
    tier: 4,
    topic: 'pensiones-salud',
    effects: { soc: 2 },
    text: 'El cuidado de los ancianos es responsabilidad de sus familias, no del Estado.',
  },
  {
    id: 'soc-19',
    tier: 4,
    topic: 'energia',
    effects: { soc: -2, eco: -1 },
    text: 'Los barrios pobres deberían recibir electricidad subsidiada, aunque las EDEs pierdan dinero.',
    context: 'Las EDEs (Edenorte, Edesur y Edeeste) son las distribuidoras eléctricas del Estado.',
  },
  {
    id: 'soc-20',
    tier: 4,
    topic: 'estado-mercado',
    effects: { soc: 2, eco: 1 },
    text: 'Las fundaciones y empresas privadas ayudan mejor a los pobres que los programas del Gobierno.',
  },
  {
    id: 'soc-21',
    tier: 4,
    topic: 'pensiones-salud',
    effects: { soc: -2 },
    text: 'El Estado debería cubrir todos los medicamentos de enfermedades crónicas a quien no pueda pagarlos.',
  },
];
