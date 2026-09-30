import type { Question } from '../data/types.ts';
import type { Answer } from '../engine/scoring.ts';

export const ANSWER_BUTTONS: readonly { value: Answer | null; label: string; key: string; className: string }[] = [
  { value: 1, label: 'Totalmente de acuerdo', key: '1', className: 'strong-agree' },
  { value: 0.5, label: 'De acuerdo', key: '2', className: 'agree' },
  { value: 0, label: 'Neutral', key: '3', className: 'neutral' },
  { value: -0.5, label: 'En desacuerdo', key: '4', className: 'disagree' },
  { value: -1, label: 'Totalmente en desacuerdo', key: '5', className: 'strong-disagree' },
  { value: null, label: 'No sé / prefiero no responder', key: '0', className: '' },
];

interface Props {
  question: Question;
  number: number;
  total: number;
  selected: Answer | null | undefined;
  onAnswer: (value: Answer | null) => void;
}

export function QuestionCard({ question, number, total, selected, onAnswer }: Props) {
  return (
    <article className="card stack" aria-labelledby={`q-${question.id}`}>
      <p className="small muted">
        Afirmación {number} de {total}
      </p>
      <p id={`q-${question.id}`} className="question-text">
        {question.text}
      </p>
      {question.context && (
        <details className="context">
          <summary>Contexto</summary>
          <p className="small">{question.context}</p>
        </details>
      )}
      <div className="answers" role="group" aria-label="Tu respuesta">
        {ANSWER_BUTTONS.map((option) => (
          <button
            key={option.key}
            type="button"
            className={`btn ${option.className} ${selected === option.value && selected !== undefined ? 'selected' : ''}`}
            aria-pressed={selected === option.value && selected !== undefined}
            onClick={() => onAnswer(option.value)}
          >
            <kbd aria-hidden="true">{option.key}</kbd>
            {option.label}
          </button>
        ))}
      </div>
    </article>
  );
}
