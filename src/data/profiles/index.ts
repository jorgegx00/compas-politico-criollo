import type { Profile, ProfileKind } from '../types.ts';
import { arquetipos } from './arquetipos.ts';
import { figurasExtranjeras } from './figurasExtranjeras.ts';
import { gobiernos } from './gobiernos.ts';
import { historicosRD } from './historicosRD.ts';
import { mediaticos } from './mediaticos.ts';
import { estadoDominicano, paises } from './paises.ts';
import { partidos } from './partidos.ts';
import { politicos } from './politicos.ts';

export { estadoDominicano };

/** Todos los perfiles comparables. La fila de control del Estado dominicano va aparte (no es "país parecido"). */
export const PROFILES: readonly Profile[] = [
  ...gobiernos,
  ...partidos,
  ...politicos,
  ...mediaticos,
  ...historicosRD,
  ...figurasExtranjeras,
  ...paises,
  ...arquetipos,
];

/** Todos los perfiles que se pueden explorar, incluida la referencia del Estado dominicano. */
export const EXPLORABLE_PROFILES: readonly Profile[] = [...PROFILES, estadoDominicano];

/** Categorías de afinidad en Resultados, en orden de aparición. `movimiento` se muestra junto con `mediatico`. */
export const MATCH_CATEGORIES: readonly { title: string; kinds: readonly ProfileKind[] }[] = [
  { title: 'Gobiernos y periodos', kinds: ['gobierno'] },
  { title: 'Partidos', kinds: ['partido'] },
  { title: 'Políticos', kinds: ['politico'] },
  { title: 'Medios, outsiders y movimientos', kinds: ['mediatico', 'movimiento'] },
  { title: 'Figuras históricas dominicanas', kinds: ['historicoRD'] },
  { title: 'Figuras extranjeras', kinds: ['figuraExtranjera'] },
];

export const KIND_LABELS: Readonly<Record<ProfileKind, string>> = {
  gobierno: 'Gobierno o periodo',
  partido: 'Partido',
  politico: 'Político',
  mediatico: 'Medios y outsiders',
  movimiento: 'Movimiento o institución',
  historicoRD: 'Figura histórica dominicana',
  figuraExtranjera: 'Figura extranjera',
  pais: 'País',
  arquetipo: 'Arquetipo',
};
