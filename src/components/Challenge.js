import React, { useState } from 'react';

const Challenge = ({ challenge }) => {
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.toLowerCase() === challenge.answer.toLowerCase()) {
      setFeedback('🎉 Correct! Well done.');
    } else {
      setFeedback('❌ Try again! Think about the sorting method you would use.');
    }
  };

  return (
    <div className="challenge">
      <h3>Challenge: {challenge.description}</h3>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={answer} 
          onChange={(e) => setAnswer(e.target.value)} 
          placeholder="Your answer"
        />
        <button type="submit">Submit</button>
      </form>
      <p>{feedback}</p>
    </div>
  );
};

export default Challenge;
