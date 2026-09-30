import { AXES } from '../data/axes.ts';
import type { Scores } from '../data/types.ts';

interface Props {
  scores: Scores;
  /** Perfil de referencia opcional (línea punteada). */
  reference?: { label: string; scores: Scores };
}

// Lienzo más ancho que el radar para que quepan las etiquetas laterales (Geopolítica, Ética pública…).
const SIZE = 480;
const CENTER = SIZE / 2;
const RADIUS = 140;

function point(index: number, score: number): [number, number] {
  const angle = (Math.PI * 2 * index) / AXES.length - Math.PI / 2;
  const r = ((score + 100) / 200) * RADIUS;
  return [CENTER + r * Math.cos(angle), CENTER + r * Math.sin(angle)];
}

const polygon = (scores: Scores) =>
  AXES.map((axis, i) => point(i, scores[axis.id]).map((n) => n.toFixed(1)).join(',')).join(' ');

/** Radar de los 12 ejes: el centro es el primer polo (−100) y el borde el segundo (+100). */
export function RadarChart({ scores, reference }: Props) {
  return (
    <figure className="stack">
      <svg
        className="radar"
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        role="img"
        aria-label="Radar con los 12 ejes: hacia afuera, el segundo polo de cada eje"
      >
        {[-100, -50, 0, 50, 100].map((level) => (
          <polygon key={level} className="grid" points={polygon(Object.fromEntries(AXES.map((a) => [a.id, level])) as Scores)} />
        ))}
        {AXES.map((axis, i) => {
          const [x, y] = point(i, 100);
          const [lx, ly] = point(i, 132);
          return (
            <g key={axis.id}>
              <line className="grid" x1={CENTER} y1={CENTER} x2={x} y2={y} />
              <text x={lx} y={ly} textAnchor={Math.abs(lx - CENTER) < 8 ? 'middle' : lx > CENTER ? 'start' : 'end'} dominantBaseline="middle">
                {axis.name}
              </text>
            </g>
          );
        })}
        {reference && <polygon className="reference" points={polygon(reference.scores)} />}
        <polygon className="shape" points={polygon(scores)} />
      </svg>
      <figcaption className="small muted">
        Hacia el borde: el segundo polo de cada eje (libre mercado, responsabilidad individual, apertura migratoria,
        pluralismo, laicidad, progresismo, garantismo, institucionalidad, transparencia, soberanismo, ambientalismo,
        antisistema). Hacia el centro: el primero.
        {reference && ` Línea punteada: ${reference.label}.`}
      </figcaption>
    </figure>
  );
}
