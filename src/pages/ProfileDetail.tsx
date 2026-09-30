import { Link, useLocation, useParams } from 'react-router-dom';
import { ConfidenceBadge } from '../components/ConfidenceBadge.tsx';
import { AXES, AXIS_IDS } from '../data/axes.ts';
import { EXPLORABLE_PROFILES, KIND_LABELS } from '../data/profiles/index.ts';
import type { Scores } from '../data/types.ts';
import { isRankable, similarity } from '../engine/matching.ts';
import { formatPercent, overallConfidence } from '../lib/labels.ts';

function readUserScores(state: unknown): Scores | undefined {
  const scores = (state as { userScores?: Record<string, unknown> } | null)?.userScores;
  return scores && AXIS_IDS.every((axis) => typeof scores[axis] === 'number') ? (scores as Scores) : undefined;
}

const position = (score: number) => `${(score + 100) / 2}%`;

export function ProfileDetail() {
  const { id } = useParams();
  const location = useLocation();
  const profile = EXPLORABLE_PROFILES.find((p) => p.id === id);
  const userScores = readUserScores(location.state);

  if (!profile) {
    return (
      <div className="card stack">
        <h1>Perfil no encontrado</h1>
        <Link to="/perfiles">Volver a explorar perfiles</Link>
      </div>
    );
  }

  return (
    <div className="stack">
      <p className="small">
        <Link to="/perfiles">← Todos los perfiles</Link>
      </p>
      <h1>
        {profile.flag ? `${profile.flag} ` : ''}
        {profile.name}
      </h1>
      <p className="muted">
        {KIND_LABELS[profile.kind]} · {profile.subtitle}
      </p>
      <div className="row">
        {profile.kind !== 'arquetipo' && <ConfidenceBadge level={overallConfidence(profile)} />}
        {profile.relativeToEra && <span className="badge">relativo a su época</span>}
        {profile.asOf && <span className="badge">estimación de {profile.asOf}</span>}
        {!isRankable(profile) && <span className="badge">solo explorar</span>}
      </div>
      <p>{profile.summary}</p>
      {userScores && (
        <p className="card">
          Tu similitud con este perfil: <strong>{formatPercent(similarity(userScores, profile))}</strong>. En las barras,
          el punto oscuro eres tú.
        </p>
      )}

      <section className="card stack" aria-labelledby="puntajes">
        <h2 id="puntajes" style={{ marginTop: 0 }}>
          Puntajes
        </h2>
        {AXES.map((axis) => {
          const score = profile.scores[axis.id];
          const confidence = profile.confidence?.[axis.id] ?? 'media';
          return (
            <div key={axis.id} className="stack" style={{ marginTop: '0.9rem' }}>
              <div className="row" style={{ justifyContent: 'space-between' }}>
                <strong>{axis.name}</strong>
                <span className="row small">
                  <span>{score > 0 ? `+${score}` : score}</span>
                  {profile.kind !== 'arquetipo' && <ConfidenceBadge level={confidence} />}
                </span>
              </div>
              <div className="mini-bar" role="img" aria-label={`${axis.name}: ${score} (de −100 ${axis.negative} a +100 ${axis.positive})`}>
                <span className="center" />
                <span
                  className="dot"
                  style={{ left: position(score), background: score < 0 ? axis.negativeColor : axis.positiveColor }}
                />
                {userScores && <span className="dot user" style={{ left: position(userScores[axis.id]) }} />}
              </div>
              <div className="row small muted" style={{ justifyContent: 'space-between' }}>
                <span>{axis.negative}</span>
                <span>{axis.positive}</span>
              </div>
            </div>
          );
        })}
      </section>

      {profile.relativeToEra && (
        <p className="notice">
          Perfil histórico: religión, valores y estilo se miden en relación con su época, no con los estándares de hoy.
        </p>
      )}

      {profile.sources && profile.sources.length > 0 && (
        <section aria-labelledby="fuentes">
          <h2 id="fuentes">Fuentes</h2>
          <ul>
            {profile.sources.map((source) => (
              <li key={source.url}>
                <a href={source.url} target="_blank" rel="noreferrer">
                  {source.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
