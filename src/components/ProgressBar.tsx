import '../styles/ProgressBar.css'

interface ProgressBarProps {
  current: number;
  goal: number;
}

function ProgressBar({ current, goal }: ProgressBarProps) {
  const percentage = Math.min((current / goal) * 100, 100);
  const isGoalReached = current >= goal;

  return (
    <div className="progress-bar">
      <div className="progress">
        <div
          className="progress-value"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="progress-text">{`${current} / ${goal} ml`}</div>
      {isGoalReached && (
        <div className="goal-reached">
          ¡Meta alcanzada!
        </div>
      )}
    </div>
  );
}

export default ProgressBar;
