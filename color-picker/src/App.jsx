import React, { useState } from 'react';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import EndScreen from './components/EndScreen';
import './index.css'; 

function App() {
  const [gameState, setGameState] = useState('start');
  const [finalScore, setFinalScore] = useState(0);

  const handleStart = () => {
    setGameState('game');
  };

  const handleGameEnd = (score) => {
    setFinalScore(score);
    setGameState('end');
  };

  const handleRetry = () => {
    setFinalScore(0);
    setGameState('game');
  };

  return (
    <div className="App">
      {gameState === 'start' && <StartScreen onStart={handleStart} />}
      
      {gameState === 'game' && <GameScreen onGameEnd={handleGameEnd} />}
      
      {gameState === 'end' && <EndScreen score={finalScore} onRetry={handleRetry} />}
    </div>
  );
}

export default App;