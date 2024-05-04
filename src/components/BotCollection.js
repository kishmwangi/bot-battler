// BotCollection.js
import React, { useState } from 'react';
import BotSpecs from './BotSpecs';

const BotCollection = ({ bots, enlistBot }) => {
  const [selectedBot, setSelectedBot] = useState(null);

  const handleClick = (bot) => {
    setSelectedBot(bot);
  };

  return (
    <div className="bot-collection">
      <h2>Bot Collection</h2>
      <div className="bot-cards">
        {bots.map(bot => (
          <div className="bot-card" key={bot.id}>
            <img src={bot.avatar_url} alt={bot.name} onClick={() => handleClick(bot)} />
            <h3>{bot.name}</h3>
            <p>Class: {bot.bot_class}</p>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <button onClick={() => enlistBot(bot)}>Enlist</button>
          </div>
        ))}
      </div>
      {selectedBot && <BotSpecs bot={selectedBot} />}
    </div>
  );
};

export default BotCollection;
