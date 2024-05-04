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

  const enlistBot = (bot) => {
    // Check if a bot of the same class is already in the army
    const isBotAlreadyEnlisted = army.some(b => b.bot_class === bot.bot_class);
    if (!isBotAlreadyEnlisted) {
      setArmy(prevArmy => [...prevArmy, bot]);
    } else {
      console.log('Cannot enlist another bot of the same class.');
    }
  };

  const releaseBot = (bot) => {
    setArmy(prevArmy => prevArmy.filter(b => b.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    // Logic to discharge bot from backend
    // Then update state to remove it from army
  };

  return (
    <div className="app">
      <h1>Bot Battlr</h1>
      <SortBar />
      <YourBotArmy army={army} releaseBot={releaseBot} dischargeBot={dischargeBot} />
      <BotCollection bots={bots} enlistBot={enlistBot} />
    </div>
  );
};

export default App;
