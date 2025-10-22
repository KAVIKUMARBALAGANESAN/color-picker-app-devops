import React, { useState, useEffect, useCallback } from 'react';

const COLORS = [
  { name: 'Red', hex: 'bg-red-500', text: 'text-red-500' },
  { name: 'Green', hex: 'bg-green-500', text: 'text-green-500' },
  { name: 'Blue', hex: 'bg-blue-500', text: 'text-blue-500' },
  { name: 'Yellow', hex: 'bg-yellow-500', text: 'text-yellow-500' },
  { name: 'Purple', hex: 'bg-purple-500', text: 'text-purple-500' },
  { name: 'Orange', hex: 'bg-orange-500', text: 'text-orange-500' },
];

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

export default function GameScreen({ onGameEnd }) {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [question, setQuestion] = useState(null);
  const [options, setOptions] = useState([]);

  const generateQuestion = useCallback(() => {
    const correctColor = COLORS[Math.floor(Math.random() * COLORS.length)];

    let textColor = correctColor;
    while (textColor.name === correctColor.name) {
      textColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    }

    setQuestion({
      word: correctColor.name,
      colorClass: textColor.text,
    });

    const otherOptions = shuffleArray(COLORS.filter(c => c.name !== correctColor.name)).slice(0, 5);
    const allOptions = shuffleArray([...otherOptions, correctColor]);
    setOptions(allOptions);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      onGameEnd(score); 
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onGameEnd, score]);

  useEffect(() => {
    generateQuestion();
  }, [generateQuestion]);

  const handleOptionClick = (colorName) => {
    if (colorName === question.word) {
      setScore((prevScore) => prevScore + 1);
    }
    generateQuestion();
  };

  if (!question) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-4">
      <div className="w-full max-w-2xl bg-gray-800 p-8 rounded-lg shadow-xl">
        {/* Top Bar Score and Timer */}
        <div className="flex justify-between items-center mb-12">
          <div className="text-2xl">
            Score: <span className="font-bold text-green-400">{score}</span>
          </div>
          <div className={`text-4xl font-bold ${timeLeft <= 10 ? 'text-red-500' : 'text-yellow-400'}`}>
            {timeLeft}
          </div>
        </div>

        {/* The Question */}
        <div className="text-center mb-12">
          <h2 className={`text-6xl font-extrabold ${question.colorClass}`}>
            {question.word}
          </h2>
        </div>

        {/* The Options */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {options.map((color) => (
            <button
              key={color.name}
              onClick={() => handleOptionClick(color.name)}
              className={`${color.hex} text-white font-bold py-4 px-6 rounded-lg text-xl shadow-md transition duration-200 hover:scale-105`}
            >
              {color.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}