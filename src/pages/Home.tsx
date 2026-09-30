import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MODES } from '../engine/modes.ts';
import { MODE_INFO } from '../lib/labels.ts';
import { clearProgress, loadProgress } from '../lib/storage.ts';

export function Home() {
  const [saved, setSaved] = useState(loadProgress);
  const answered = saved ? Object.values(saved.answers).filter((a) => a !== undefined).length : 0;

  return (
    <div className="stack">
      <h1>Compás Político Criollo</h1>
      <p className="lead">
        Un test político hecho para la República Dominicana. Responde afirmaciones sobre economía, Haití y la frontera,
        religión, aborto, mano dura, corrupción, EE.UU. y más, y descubre dónde quedas en 12 ejes.
      </p>
      <p>
        Al final verás tu arquetipo, tus puntajes y a qué gobiernos, partidos, políticos, comunicadores, figuras
        históricas y países te pareces. Nada se guarda en ningún servidor: tus resultados viven en el enlace que
        compartas.
      </p>

      {saved && (
        <div className="card stack" role="region" aria-label="Test a medias">
          <p>
            Tienes un test de <strong>{saved.mode} preguntas</strong> a medias ({answered} respondidas).
          </p>
          <div className="row">
            <Link className="btn btn-primary" to={`/test/${saved.mode}`}>
              Continuar donde lo dejé
            </Link>
            <button
              type="button"
              className="btn"
              onClick={() => {
                clearProgress();
                setSaved(undefined);
              }}
            >
              Descartar
            </button>
          </div>
        </div>
      )}

      <h2>Elige la versión</h2>
      <div className="mode-grid">
        {MODES.map((mode) => (
          <Link key={mode} className="card mode-card" to={`/test/${mode}?nuevo=1`}>
            <span className="count">{mode}</span>
            <strong>
              {MODE_INFO[mode].title} · ≈{MODE_INFO[mode].minutes} min
            </strong>
            <span className="small muted">{MODE_INFO[mode].description}</span>
          </Link>
        ))}
      </div>
      <p className="small muted">
        Cada versión incluye todas las preguntas de la anterior. Más preguntas = resultados más precisos.
      </p>

      <div className="notice">
        Las afirmaciones hablan sin rodeos de los temas que dividen al país. Eso no significa que el test tome partido:
        cada tema tiene afirmaciones en ambas direcciones y con distintos grados. Los perfiles de comparación son
        estimaciones editoriales con fuentes, no juicios sobre las personas.
      </div>

      <p className="row">
        <Link to="/perfiles">Explorar perfiles</Link>
        <span aria-hidden="true">·</span>
        <Link to="/metodologia">Cómo funciona (metodología)</Link>
      </p>
    </div>
  );
}
