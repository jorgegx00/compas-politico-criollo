import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ConfidenceBadge } from '../components/ConfidenceBadge.tsx';
import { EXPLORABLE_PROFILES, KIND_LABELS } from '../data/profiles/index.ts';
import type { ProfileKind } from '../data/types.ts';
import { normalizeText } from '../data/validate.ts';
import { isRankable } from '../engine/matching.ts';
import { overallConfidence } from '../lib/labels.ts';

const KIND_ORDER: readonly ProfileKind[] = [
  'gobierno',
  'partido',
  'politico',
  'mediatico',
  'movimiento',
  'historicoRD',
  'figuraExtranjera',
  'pais',
  'arquetipo',
];

export function Profiles() {
  const [query, setQuery] = useState('');
  const [kind, setKind] = useState<ProfileKind | 'todos'>('todos');

  const results = useMemo(() => {
    const needle = normalizeText(query);
    return EXPLORABLE_PROFILES.filter((profile) => kind === 'todos' || profile.kind === kind)
      .filter((profile) => !needle || normalizeText(`${profile.name} ${profile.subtitle} ${profile.summary}`).includes(needle))
      .sort(
        (a, b) => KIND_ORDER.indexOf(a.kind) - KIND_ORDER.indexOf(b.kind) || a.name.localeCompare(b.name, 'es'),
      );
  }, [query, kind]);

  return (
    <div className="stack">
      <h1>Explorar perfiles</h1>
      <p className="muted">
        {EXPLORABLE_PROFILES.length} perfiles con sus 12 puntajes, nivel de confianza y fuentes. Los marcados "solo explorar"
        tienen demasiados ejes estimados para entrar en las afinidades.
      </p>
      <label className="sr-only" htmlFor="buscar">
        Buscar perfiles
      </label>
      <input
        id="buscar"
        className="search"
        type="search"
        placeholder="Buscar por nombre, partido o rol…"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <div className="chips" role="group" aria-label="Filtrar por tipo">
        {(['todos', ...KIND_ORDER] as const).map((option) => (
          <button
            key={option}
            type="button"
            className="chip"
            aria-pressed={kind === option}
            onClick={() => setKind(option)}
          >
            {option === 'todos' ? 'Todos' : KIND_LABELS[option]}
          </button>
        ))}
      </div>
      <p className="small muted" role="status">
        {results.length} resultados
      </p>
      <ul className="profile-list">
        {results.map((profile) => (
          <li key={profile.id}>
            <Link to={`/perfiles/${profile.id}`}>
              <div className="card">
                <strong>
                  {profile.flag ? `${profile.flag} ` : ''}
                  {profile.name}
                </strong>
                <div className="small muted">
                  {KIND_LABELS[profile.kind]} · {profile.subtitle}
                </div>
                <div className="row" style={{ marginTop: '0.35rem' }}>
                  {profile.kind !== 'arquetipo' && <ConfidenceBadge level={overallConfidence(profile)} />}
                  {!isRankable(profile) && <span className="badge">solo explorar</span>}
                  {profile.relativeToEra && <span className="badge">relativo a su época</span>}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
