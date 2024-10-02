import React from 'react';

const SortingWizard = ({ startChallenge }) => {
  return (
    <div>
      <h2>Sorting Wizard</h2>
      <button onClick={startChallenge}>Start a New Challenge</button>
    </div>
  );
};

export default SortingWizard;
