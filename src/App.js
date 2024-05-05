// App.js

import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import SortBar from './components/SortBar';

const App = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error('Error fetching bots:', error));
  }, []);

  const handleSort = (property) => {
    const sortedBots = [...bots].sort((a, b) => b[property] - a[property]);
    setBots(sortedBots);
  };

  const enlistBot = (bot) => {
    setArmy(prevArmy => [...prevArmy, bot]);
  };

  const releaseBot = (bot) => {
    setArmy(prevArmy => prevArmy.filter(b => b.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    
    setArmy(prevArmy => prevArmy.filter(b => b.id !== bot.id));
  };

  return (
    <div className="app">
      <h1>Bot Battlr</h1>
      <SortBar onSort={handleSort} />
      <BotCollection bots={bots} enlistBot={enlistBot} />
      <YourBotArmy army={army} releaseBot={releaseBot} dischargeBot={dischargeBot} />
    </div>
  );
};

export default App;
