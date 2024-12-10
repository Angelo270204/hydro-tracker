
import '../styles/History.css';

interface HistoryEntry {
  date: string;
  amount: number;
}

interface HistoryProps {
  history: HistoryEntry[];
}

function History({ history }: HistoryProps) {
  return (
    <div className="history">
      <h2>Historial</h2>
      <ul>
        {history.map((entry, index) => (
          <li key={index}>
            {entry.date}: {entry.amount} ml
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
