import { Link } from 'react-router-dom';
import type { Scores } from '../data/types.ts';
import type { Match } from '../engine/matching.ts';
import { formatPercent, overallConfidence } from '../lib/labels.ts';
import { ConfidenceBadge } from './ConfidenceBadge.tsx';

export function MatchList({ matches, userScores }: { matches: readonly Match[]; userScores?: Scores }) {
  if (matches.length === 0) return <p className="muted small">Todavía no hay perfiles en esta categoría.</p>;
  return (
    <ol className="match-list">
      {matches.map(({ profile, similarity }) => (
        <li key={profile.id}>
          <div>
            <Link to={`/perfiles/${profile.id}`} state={userScores ? { userScores } : undefined}>
              {profile.name}
            </Link>
            <div className="small muted">{profile.subtitle}</div>
          </div>
          <div className="pct" aria-label={`Similitud ${formatPercent(similarity)}`}>
            {formatPercent(similarity)}
          </div>
          <div className="row">
            <ConfidenceBadge level={overallConfidence(profile)} />
            {profile.relativeToEra && <span className="badge">relativo a su época</span>}
          </div>
        </li>
      ))}
    </ol>
  );
}
