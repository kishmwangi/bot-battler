// BotCollection.js
import React from 'react';

const BotCollection = ({ bots, enlistBot }) => {
  const handleEnlist = (bot) => {
    enlistBot(bot);
  };
 //div creation 
  return (
    <div className="bot-collection">
      <h2>Bot Collection</h2>
      <div className="bot-list">
        {bots.map(bot => (
          <div key={bot.id} className="bot-card">
            <button onClick={() => handleEnlist(bot)}>
              <img src={bot.avatar_url} alt={bot.name} />
            </button>
            <div className="bot-details">
              <h3>{bot.name}</h3>
              <p>🛡️ Armor: {bot.armor}</p>
              <p>❤️ Health: {bot.health}</p>
              <p>⚔️ Damage: {bot.damage}</p>
              <button onClick={() => handleEnlist(bot)}>Enlist</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
