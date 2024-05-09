// BotSpecs.js
import React from 'react';

const BotSpecs = ({ bot }) => {
  const handleEnlist = () => {
    // Logic to enlist the bot
  };
 //specs div
  return (
    <div className="bot-specs">
      <h2>Bot Specs</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <button onClick={handleEnlist}>Enlist</button>
    </div>
  );
};

export default BotSpecs;
