// App.js
import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import SortBar from './components/SortBar';

const App = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    // Fetch bots data from backend
    fetch('http://localhost:3000/bots')
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error('Error fetching bots:', error));
  }, []);

  const enlistBot = (bot) => {
    // Logic to enlist bot into the army
    setArmy(prevArmy => [...prevArmy, bot]);
  };

  const releaseBot = (bot) => {
    // Logic to release bot from the army
    setArmy(prevArmy => prevArmy.filter(b => b.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    // Logic to discharge bot from service
    // Then update state to remove it from army
  };

  const handleSort = (property) => {
    // Logic to sort bots by the specified property (health, damage, or armor)
    // Example: Sort bots by health
    const sortedBots = [...bots].sort((a, b) => a[property] - b[property]);
    setBots(sortedBots);
  };

  return (
    <div className="app">
      <h1>Bot Battlr</h1>
      <SortBar onSort={handleSort} />
      <YourBotArmy army={army} releaseBot={releaseBot} dischargeBot={dischargeBot} />
      <BotCollection bots={bots} enlistBot={enlistBot} />
    </div>
  );
};

export default App;
