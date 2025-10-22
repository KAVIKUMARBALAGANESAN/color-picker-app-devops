import React from 'react';

export default function StartScreen({ onStart }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-8">
      <h1 className="text-5xl font-bold mb-6 text-indigo-400">Color Picker 🎨</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl max-w-md text-center">
        <h2 className="text-2xl font-semibold mb-4">Game Rules</h2>
        <ul className="list-disc list-inside text-left space-y-2">
          <li>A color's name (e.g., "RED") will appear on the screen.</li>
          <li>The text will be colored differently (e.g., "RED" might be blue).</li>
          <li>You must click the button that matches the **word**, not the color of the text.</li>
          <li>You have 60 seconds to get as many correct as possible.</li>
        </ul>
        <button
          onClick={onStart}
          className="mt-8 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-xl transition duration-300"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}