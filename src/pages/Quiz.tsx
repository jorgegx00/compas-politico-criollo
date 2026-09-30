import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link, Navigate, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { QUESTIONS } from '../data/questions/index.ts';
import { isMode, questionsForMode, type Mode } from '../engine/modes.ts';
import { scoreAnswers, scoreIdentityFacets, type Answer, type Answers } from '../engine/scoring.ts';
import { encodeResult } from '../engine/share.ts';
import { ANSWER_BUTTONS, QuestionCard } from '../components/QuestionCard.tsx';
import { ProgressBar } from '../components/ProgressBar.tsx';
import { clearProgress, loadProgress, saveProgress } from '../lib/storage.ts';

export function Quiz() {
  const { mode: modeParam } = useParams();
  const mode = Number(modeParam);
  if (!isMode(mode)) return <Navigate to="/" replace />;
  return <QuizRun key={mode} mode={mode} />;
}

function initialState(mode: Mode, fresh: boolean, total: number): { answers: Answers; index: number } {
  if (fresh) return { answers: {}, index: 0 };
  const saved = loadProgress();
  if (saved?.mode !== mode) return { answers: {}, index: 0 };
  return { answers: saved.answers, index: Math.min(Math.max(saved.index, 0), total - 1) };
}

function QuizRun({ mode }: { mode: Mode }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const questions = useMemo(() => questionsForMode(QUESTIONS, mode), [mode]);
  const [state, setState] = useState(() => initialState(mode, searchParams.has('nuevo'), questions.length));
  const headingRef = useRef<HTMLHeadingElement>(null);

  // Test nuevo: borra el progreso anterior y quita "?nuevo=1" para que recargar la página reanude.
  useEffect(() => {
    if (!searchParams.has('nuevo')) return;
    clearProgress();
    navigate(`/test/${mode}`, { replace: true });
  }, [searchParams, navigate, mode]);

  const finish = useCallback(
    (answers: Answers, partial = false) => {
      const { scores, certainty } = scoreAnswers(questions, answers);
      const facets = scoreIdentityFacets(questions, answers);
      // Si termina antes de tiempo, el progreso queda guardado para poder seguir después.
      if (!partial) clearProgress();
      navigate(`/resultados?${encodeResult(scores, mode)}`, { state: { certainty, facets } });
    },
    [questions, mode, navigate],
  );

  const answer = useCallback(
    (value: Answer | null) => {
      const question = questions[state.index]!;
      const answers = { ...state.answers, [question.id]: value };
      if (state.index + 1 >= questions.length) {
        finish(answers);
        return;
      }
      const next = { answers, index: state.index + 1 };
      setState(next);
      saveProgress({ mode, ...next });
    },
    [state, questions, mode, finish],
  );

  const back = useCallback(() => {
    if (state.index === 0) return;
    const next = { ...state, index: state.index - 1 };
    setState(next);
    saveProgress({ mode, ...next });
  }, [state, mode]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.altKey || event.ctrlKey || event.metaKey) return;
      if (event.target instanceof HTMLElement && ['INPUT', 'TEXTAREA', 'SELECT'].includes(event.target.tagName)) return;
      const option = ANSWER_BUTTONS.find((b) => b.key === event.key || (event.key === '6' && b.value === null));
      if (option) {
        event.preventDefault();
        answer(option.value);
      } else if (event.key === 'Backspace' || event.key === 'ArrowLeft') {
        event.preventDefault();
        back();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [answer, back]);

  useEffect(() => {
    headingRef.current?.focus();
    window.scrollTo({ top: 0 });
  }, [state.index]);

  const question = questions[state.index];
  if (!question) return <p>No hay preguntas disponibles para este modo.</p>;
  const answeredCount = Object.values(state.answers).filter((a) => a !== undefined).length;

  return (
    <div className="stack">
      <h1 ref={headingRef} tabIndex={-1} className="sr-only">
        Test de {mode} preguntas
      </h1>
      <ProgressBar value={state.index} max={questions.length} />
      <QuestionCard
        question={question}
        number={state.index + 1}
        total={questions.length}
        selected={state.answers[question.id]}
        onAnswer={answer}
      />
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <button type="button" className="btn" onClick={back} disabled={state.index === 0}>
          ← Atrás
        </button>
        <div className="row">
          {answeredCount >= 12 && (
            <button type="button" className="btn-link" onClick={() => finish(state.answers, true)}>
              Ver resultados con lo respondido
            </button>
          )}
          <Link to="/" className="small">
            Salir (se guarda tu progreso)
          </Link>
        </div>
      </div>
      <p className="small muted">Atajos: teclas 1 a 5 para responder, 0 para "No sé", ← para volver.</p>
    </div>
  );
}
