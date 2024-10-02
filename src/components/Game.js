import React, { useState, useEffect } from 'react';
import SortingWizard from './SortingWizard';
import Challenge from './Challenge';

const Game = () => {
  const [currentChallenge, setCurrentChallenge] = useState(null);

  const challenges = [
    {
      id: 1,
      description: 'Sort the following list: [3, 1, 4, 2]',
      answer: 'Bubble Sort',
    },
    {
      id: 2,
      description: 'Sort the following list: [9, 7, 5, 6]',
      answer: 'Merge Sort',
    },
  ];

  const startChallenge = () => {
    const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];
    setCurrentChallenge(randomChallenge);
  };

  useEffect(() => {
    startChallenge();
  }, []);

  return (
    <div>
      {currentChallenge ? (
        <Challenge challenge={currentChallenge} />
      ) : (
        <p>Loading...</p>
      )}
      <SortingWizard startChallenge={startChallenge} />
    </div>
  );
};

export default Game;
