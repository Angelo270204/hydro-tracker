import { useState } from 'react';
import '../styles/GoalSetter.css';

interface GoalSetterProps {
  onSetGoal: (goal: number) => void;
  onReset: () => void;
}

function GoalSetter({ onSetGoal, onReset }: GoalSetterProps) {
  const [goal, setGoal] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Number(goal) > 0) {
      onSetGoal(Number(goal));
      setGoal('');
    }
  };

  return (
    <div className="goal-setter">
      <form onSubmit={handleSubmit}>
        <label htmlFor="goal">Meta diaria (ml)</label>
        <input
          type="number"
          id="goal"
          placeholder="Meta diaria (ml)"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <button type="submit">Establecer Meta</button>
      </form>
      <button onClick={onReset} className="reset-button">Reiniciar Meta</button>
    </div>
  );
}

export default GoalSetter;