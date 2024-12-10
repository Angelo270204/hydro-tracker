import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import WaterLog from './components/WaterLog';
import ProgressBar from './components/ProgressBar';
import GoalSetter from './components/GoalSetter';
import History from './components/History';
import Footer from './components/Footer';
import Login from './components/Login';
import Navbar from './components/Navbar';
import './App.css';
import './styles/GoalSetter.css';
import './styles/WaterLog.css';
import './styles/ProgressBar.css';
import './styles/History.css';
import './styles/Footer.css';
import './styles/Header.css';
import './styles/Navbar.css';

interface HistoryEntry {
  date: string;
  amount: number;
}

function App() {
  const [goal, setGoal] = useState<number>(2000); // Meta diaria por defecto (ml)
  const [current, setCurrent] = useState<number>(0);
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  const handleAddWater = (amount: number) => {
    const newEntry = { date: new Date().toLocaleDateString(), amount };
    setHistory([...history, newEntry]);
    setCurrent((prev) => prev + amount);
  };

  const handleSetGoal = (newGoal: number) => {
    setGoal(newGoal);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/app"
          element={
            <div className="app">
              <Navbar />
              <Header />
              <ProgressBar current={current} goal={goal} />
              <Footer />
            </div>
          }
        />
        <Route
          path="/goal"
          element={
            <div className="app">
              <Navbar />
              <GoalSetter onSetGoal={handleSetGoal} />
              <Footer />
            </div>
          }
        />
        <Route
          path="/log"
          element={
            <div className="app">
              <Navbar />
              <WaterLog onAddWater={handleAddWater} />
              <Footer />
            </div>
          }
        />
        <Route
          path="/history"
          element={
            <div className="app">
              <Navbar />
              <History history={history} />
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;