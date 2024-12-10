import { useState } from 'react';
import '../styles/WaterLog.css';

interface WaterLogProps {
  onAddWater: (amount: number) => void;
}

function WaterLog({ onAddWater }: WaterLogProps) {
  const [amount, setAmount] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Number(amount) > 0) {
      onAddWater(Number(amount));
      setAmount('');
    }
  };

  return (
    <div className="water-log">
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">Cantidad (ml)</label>
        <input
          type="number"
          id="amount"
          placeholder="Cantidad (ml)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Añadir</button>
      </form>
    </div>
  );
}

export default WaterLog;