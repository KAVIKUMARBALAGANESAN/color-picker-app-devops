import React from 'react';

export default function EndScreen({ score, onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-8">
      <div className="bg-gray-800 p-10 rounded-lg shadow-xl text-center">
        <h1 className="text-4xl font-bold mb-4">Time's Up!</h1>
        <p className="text-2xl mb-8">
          Your final score is:
          <span className="block text-7xl font-bold text-green-400 mt-4">{score}</span>
        </p>
        <button
          onClick={onRetry}
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-full text-xl transition duration-300"
        >
          Retry Game
        </button>
      </div>
    </div>
  );
}