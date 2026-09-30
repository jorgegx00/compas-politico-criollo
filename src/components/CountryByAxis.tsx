import { AXES } from '../data/axes.ts';
import type { AxisId, Profile, Scores } from '../data/types.ts';
import type { CountryMatch } from '../engine/matching.ts';
import { AXIS_PHRASE } from '../lib/labels.ts';

interface Props {
  scores: Scores;
  byAxis: Record<AxisId, CountryMatch[]>;
  reference?: Profile;
}

const countryName = (profile: Profile) => `${profile.flag ?? ''} ${profile.name}`.trim();

/** Frase resumen: "en economía como 🇨🇱 Chile, en migración como 🇭🇺 Hungría…". */
export function countrySentence(byAxis: Record<AxisId, CountryMatch[]>, axes: readonly AxisId[]): string {
  const parts = axes
    .map((axis) => {
      const best = byAxis[axis][0];
      return best ? `${AXIS_PHRASE[axis]} como ${countryName(best.profile)}` : undefined;
    })
    .filter(Boolean);
  if (parts.length === 0) return '';
  const text = parts.join(', ');
  return `${text[0]!.toUpperCase()}${text.slice(1)}.`;
}

export function CountryByAxis({ scores, byAxis, reference }: Props) {
  return (
    <div className="stack">
      <p>{countrySentence(byAxis, ['eco', 'soc', 'mig', 'val', 'ord', 'geo'])}</p>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th scope="col">Eje</th>
              <th scope="col">Tú</th>
              <th scope="col">País más cercano</th>
              <th scope="col">Siguientes</th>
              {reference && <th scope="col">Estado dominicano</th>}
            </tr>
          </thead>
          <tbody>
            {AXES.map((axis) => {
              const [first, ...rest] = byAxis[axis.id];
              return (
                <tr key={axis.id}>
                  <th scope="row">{axis.name}</th>
                  <td>{Math.round(scores[axis.id])}</td>
                  <td>{first ? `${countryName(first.profile)} (${first.profile.scores[axis.id]})` : '—'}</td>
                  <td className="small">{rest.map((c) => countryName(c.profile)).join(' · ') || '—'}</td>
                  {reference && <td>{reference.scores[axis.id]}</td>}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="small muted">
        Puntajes de −100 (primer polo) a +100 (segundo polo), calculados con índices internacionales (ver Metodología).
        Las celdas estimadas en países con pocos datos no se usan para comparar.
      </p>
    </div>
  );
}
