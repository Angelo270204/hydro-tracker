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

  const handleAddFixedAmount = (fixedAmount: number) => {
    onAddWater(fixedAmount);
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
      <div className="fixed-buttons">
        <button onClick={() => handleAddFixedAmount(250)}>Añadir 250 ml</button>
        <button onClick={() => handleAddFixedAmount(500)}>Añadir 500 ml</button>
        <button onClick={() => handleAddFixedAmount(750)}>Añadir 750 ml</button>
        <button onClick={() => handleAddFixedAmount(1000)}>Añadir 1000 ml</button>
      </div>
    </div>
  );
}

export default WaterLog;