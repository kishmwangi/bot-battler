import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import SortBar from './components/SortBar';
import './App.css';

const App = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  

  useEffect(() => {
    fetch('http://localhost:3001/bots')
      .then(response => response.json())
      .then(data => {
        setBots(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching bots:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleSort = (property) => {
    const sortedBots = [...bots].sort((a, b) => b[property] - a[property]);
    setBots(sortedBots);
  };

  const enlistBot = (bot) => {
    setArmy(prevArmy =>
      prevArmy.find(b => b.id === bot.id) ? prevArmy : [...prevArmy, bot]
    );
  };

  const releaseBot = (bot) => {
    setArmy(prevArmy => prevArmy.filter(b => b.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    // Optional: Delete from backend
    fetch(`http://localhost:3001/bots/${bot.id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setArmy(prevArmy => prevArmy.filter(b => b.id !== bot.id));
        setBots(prevBots => prevBots.filter(b => b.id !== bot.id));
      })
      .catch(error => console.error('Error discharging bot:', error));
  };

  return (
    <div className="app">
      <h1>Bot Battler</h1>

      {loading && <p>Loading bots...</p>}
      {error && <p>Error loading bots: {error.message}</p>}

      {!loading && !error && (
        <>
          <SortBar onSort={handleSort} />
          <BotCollection bots={bots} enlistBot={enlistBot} />
          <YourBotArmy army={army} releaseBot={releaseBot} dischargeBot={dischargeBot} />
        </>
      )}
    </div>
  );
};

export default App;
