import { useMemo, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { AxisBar } from '../components/AxisBar.tsx';
import { CountryByAxis } from '../components/CountryByAxis.tsx';
import { MatchList } from '../components/MatchList.tsx';
import { RadarChart } from '../components/RadarChart.tsx';
import { ShareButton } from '../components/ShareButton.tsx';
import { AXES, AXIS_BY_ID, AXIS_IDS } from '../data/axes.ts';
import { IDENTITY_FACETS, IDENTITY_FACET_IDS, type IdentityFacet } from '../data/facets.ts';
import { MATCH_CATEGORIES, PROFILES, estadoDominicano } from '../data/profiles/index.ts';
import type { AxisId } from '../data/types.ts';
import { archetype, countriesByAxis, topMatches } from '../engine/matching.ts';
import { MODES } from '../engine/modes.ts';
import type { FacetScore } from '../engine/scoring.ts';
import { decodeResult, encodeResult } from '../engine/share.ts';
import { formatPercent } from '../lib/labels.ts';

/** La certeza solo existe si venimos del test (estado de navegación); un enlace compartido trae solo los puntajes. */
function readCertainty(state: unknown): Record<AxisId, number> | undefined {
  const certainty = (state as { certainty?: unknown } | null)?.certainty;
  if (!certainty || typeof certainty !== 'object') return undefined;
  const values = certainty as Record<string, unknown>;
  return AXIS_IDS.every((axis) => typeof values[axis] === 'number') ? (values as Record<AxisId, number>) : undefined;
}

/** El desglose de Identidad, como la certeza, solo existe si venimos del test. */
function readFacets(state: unknown): [IdentityFacet, FacetScore][] {
  const facets = (state as { facets?: unknown } | null)?.facets;
  if (!facets || typeof facets !== 'object') return [];
  const values = facets as Record<string, Partial<FacetScore> | undefined>;
  return IDENTITY_FACET_IDS.flatMap((facet): [IdentityFacet, FacetScore][] => {
    const value = values[facet];
    return typeof value?.score === 'number' && typeof value.answered === 'number'
      ? [[facet, { score: value.score, answered: value.answered }]]
      : [];
  });
}

export function Results() {
  const [params] = useSearchParams();
  const location = useLocation();
  const decoded = useMemo(() => decodeResult(params), [params]);
  const certainty = readCertainty(location.state);
  const facets = readFacets(location.state);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  if (!decoded.ok) {
    return (
      <div className="card stack">
        <h1>No pudimos leer estos resultados</h1>
        <p>{decoded.error}</p>
        <Link className="btn btn-primary" to="/">
          Hacer el test
        </Link>
      </div>
    );
  }

  const { scores, mode } = decoded;
  const main = archetype(scores, PROFILES);
  const byAxis = countriesByAxis(scores, PROFILES, 3);
  const shareUrl = `${window.location.origin}${window.location.pathname}#/resultados?${encodeResult(scores, mode)}`;
  const nextMode = MODES.find((m) => m > mode);

  return (
    <div className="stack">
      <p className="small muted">Resultados · test de {mode} preguntas</p>
      {main && (
        <section className="card stack" aria-labelledby="arquetipo">
          <p className="small muted">Tu arquetipo</p>
          <h1 id="arquetipo">{main.profile.name}</h1>
          <p className="lead">{main.profile.summary}</p>
          <p className="small muted">Coincidencia con el arquetipo: {formatPercent(main.similarity)}</p>
        </section>
      )}

      <ShareButton url={shareUrl} />

      <section aria-labelledby="ejes">
        <h2 id="ejes">Tus 12 ejes</h2>
        <div className="card stack">
          {AXES.map((axis) => (
            <AxisBar key={axis.id} axis={axis} score={scores[axis.id]} certainty={certainty?.[axis.id]} />
          ))}
        </div>
        {certainty && (
          <p className="small muted">
            La certeza indica qué parte de las preguntas de cada eje respondiste (las de "No sé" no cuentan).
          </p>
        )}
      </section>

      {facets.length > 0 && (
        <section aria-labelledby="facetas">
          <h2 id="facetas">Identidad, por facetas</h2>
          <div className="card stack">
            {facets.map(([facet, { score, answered }]) => (
              <AxisBar
                key={facet}
                axis={{ ...AXIS_BY_ID.ide, name: `${IDENTITY_FACETS[facet]} · ${answered} ${answered === 1 ? 'pregunta' : 'preguntas'}` }}
                score={score}
              />
            ))}
          </div>
          <p className="small muted">
            Tu puntaje de Identidad desglosado según el tema de cada pregunta. Con pocas preguntas por faceta es solo
            orientativo, y no se incluye en el enlace compartido.
          </p>
        </section>
      )}

      <section aria-labelledby="radar">
        <h2 id="radar">Tu perfil en el radar</h2>
        <div className="card">
          <RadarChart
            scores={scores}
            reference={main ? { label: `arquetipo ${main.profile.name}`, scores: main.profile.scores } : undefined}
          />
        </div>
      </section>

      <section aria-labelledby="afinidades">
        <h2 id="afinidades">¿A quién te pareces?</h2>
        <div className="grid-2">
          {MATCH_CATEGORIES.map((category) => {
            const open = expanded[category.title] ?? false;
            return (
              <div key={category.title} className="card stack">
                <h3>{category.title}</h3>
                <MatchList matches={topMatches(scores, PROFILES, category.kinds, open ? 10 : 3)} userScores={scores} />
                <button
                  type="button"
                  className="btn-link"
                  onClick={() => setExpanded({ ...expanded, [category.title]: !open })}
                >
                  {open ? 'Ver menos' : 'Ver 10'}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="paises">
        <h2 id="paises">Países por eje</h2>
        <div className="card">
          <CountryByAxis scores={scores} byAxis={byAxis} reference={estadoDominicano} />
        </div>
      </section>

      <div className="notice">
        Estas comparaciones son <strong>estimaciones editoriales</strong> basadas en posiciones públicas documentadas, no
        juicios sobre las personas. En figuras vivas, la ética pública refleja su discurso declarado. Los periodos
        históricos se comparan en relación con su época. Detalles y fuentes en{' '}
        <Link to="/metodologia">Metodología</Link> y en cada perfil.
      </div>

      <div className="row">
        <Link className="btn" to="/">
          Volver al inicio
        </Link>
        {nextMode && (
          <Link className="btn" to={`/test/${nextMode}?nuevo=1`}>
            Hacer la versión de {nextMode} preguntas
          </Link>
        )}
      </div>
    </div>
  );
}
