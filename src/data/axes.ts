import type { Axis, AxisId } from './types.ts';

/** Orden canónico de los ejes (docs/PLAN.md §2). También es el orden de los bytes en el enlace compartible. */
export const AXIS_IDS: readonly AxisId[] = [
  'eco',
  'soc',
  'mig',
  'ide',
  'rel',
  'val',
  'ord',
  'pod',
  'eti',
  'geo',
  'des',
  'est',
];

export const AXES: readonly Axis[] = [
  {
    id: 'eco',
    name: 'Economía',
    negative: 'Estatismo',
    positive: 'Libre mercado',
    negativeDescription: 'El Estado debe dirigir la economía, tener empresas estratégicas y regular precios.',
    positiveDescription: 'La economía funciona mejor con empresa privada, impuestos bajos y poca regulación.',
    negativeColor: '#C0392B',
    positiveColor: '#1F7A8C',
  },
  {
    id: 'soc',
    name: 'Social',
    negative: 'Estado protector',
    positive: 'Responsabilidad individual',
    negativeDescription: 'El Estado debe garantizar salud, educación, pensiones y ayudas a quien las necesite.',
    positiveDescription: 'Cada quien debe salir adelante con su esfuerzo; las ayudas deben ser mínimas y temporales.',
    negativeColor: '#D35400',
    positiveColor: '#2E86C1',
  },
  {
    id: 'mig',
    name: 'Soberanía',
    negative: 'Nacionalismo / frontera dura',
    positive: 'Apertura migratoria',
    negativeDescription: 'Control estricto de la frontera, deportaciones y límites a la inmigración, sobre todo la haitiana.',
    positiveDescription: 'Regularizar a los inmigrantes, reconocer derechos a sus hijos y facilitar la migración legal.',
    negativeColor: '#002D62',
    positiveColor: '#16A085',
  },
  {
    id: 'ide',
    name: 'Identidad',
    negative: 'Nación de herencia',
    positive: 'Nación cívica y plural',
    negativeDescription:
      'Ser dominicano se hereda: ascendencia, lengua española y fe cristiana. La identidad se afirmó frente a Haití y hay que protegerla.',
    positiveDescription:
      'Es dominicano quien nace y se cría aquí. Hay que reconocer la raíz africana, el racismo y los lazos con Haití y el Caribe.',
    negativeColor: '#7D3C98',
    positiveColor: '#CA6F1E',
  },
  {
    id: 'rel',
    name: 'Religión',
    negative: 'Estado confesional',
    positive: 'Laicidad',
    negativeDescription: 'La fe cristiana debe guiar las leyes, la escuela y la vida pública.',
    positiveDescription: 'Separación entre Iglesia y Estado; las leyes no deben basarse en ninguna religión.',
    negativeColor: '#6E2C00',
    positiveColor: '#5DADE2',
  },
  {
    id: 'val',
    name: 'Valores',
    negative: 'Conservador',
    positive: 'Progresista',
    negativeDescription: 'Familia tradicional, prohibición del aborto y rechazo al matrimonio entre personas del mismo sexo.',
    positiveDescription: 'Derechos reproductivos, igualdad LGBT y cambios en los roles tradicionales.',
    negativeColor: '#1A5276',
    positiveColor: '#AF7AC5',
  },
  {
    id: 'ord',
    name: 'Orden',
    negative: 'Mano dura',
    positive: 'Garantismo / DD.HH.',
    negativeDescription: 'Más poder a la Policía y a los militares, penas más duras y menos trabas para combatir el crimen.',
    positiveDescription: 'Debido proceso, prevención del delito y castigo a los abusos policiales.',
    negativeColor: '#2C3E50',
    positiveColor: '#58D68D',
  },
  {
    id: 'pod',
    name: 'Poder',
    negative: 'Caudillismo / reelección',
    positive: 'Institucionalidad',
    negativeDescription: 'Líderes fuertes, reelección y un Poder Ejecutivo con mucho margen de acción.',
    positiveDescription: 'Límites de mandato, separación de poderes e instituciones independientes.',
    negativeColor: '#922B21',
    positiveColor: '#2874A6',
  },
  {
    id: 'eti',
    name: 'Ética pública',
    negative: 'Clientelismo / pragmatismo',
    positive: 'Transparencia',
    negativeDescription: 'Lo importante es que se hagan obras; los favores y los cargos son parte normal de la política.',
    positiveDescription: 'Cero tolerancia con la corrupción, rendición de cuentas y fin del clientelismo.',
    negativeColor: '#B7950B',
    positiveColor: '#148F77',
  },
  {
    id: 'geo',
    name: 'Geopolítica',
    negative: 'Alineado con EE.UU.',
    positive: 'Soberanismo / multipolar',
    negativeDescription: 'Alianza estrecha con Estados Unidos en seguridad, comercio y política exterior.',
    positiveDescription: 'Autonomía frente a EE.UU., lazos con China y América Latina y rechazo a las intervenciones.',
    negativeColor: '#1B4F72',
    positiveColor: '#CE1126',
  },
  {
    id: 'des',
    name: 'Desarrollo',
    negative: 'Desarrollismo / minería',
    positive: 'Ambientalismo',
    negativeDescription: 'Crecer primero: minería, grandes obras y turismo aunque tengan costos ambientales.',
    positiveDescription: 'Proteger ríos, bosques y costas aunque se frenen proyectos económicos.',
    negativeColor: '#7E5109',
    positiveColor: '#229954',
  },
  {
    id: 'est',
    name: 'Estilo',
    negative: 'Partidocracia / establishment',
    positive: 'Antisistema / outsider',
    negativeDescription: 'Confianza en los partidos tradicionales y en políticos con experiencia de gobierno.',
    positiveDescription: 'Rechazo a los partidos tradicionales y preferencia por figuras nuevas, de fuera de la política.',
    negativeColor: '#566573',
    positiveColor: '#E67E22',
  },
];

export const AXIS_BY_ID: Readonly<Record<AxisId, Axis>> = Object.fromEntries(
  AXES.map((axis) => [axis.id, axis]),
) as Record<AxisId, Axis>;

export type Intensity = 'centro' | 'moderado' | 'marcado' | 'extremo';

/** Etiqueta de intensidad según el valor absoluto del puntaje (−100..100). */
export function intensity(score: number): Intensity {
  const abs = Math.abs(score);
  if (abs < 15) return 'centro';
  if (abs < 40) return 'moderado';
  if (abs < 70) return 'marcado';
  return 'extremo';
}
