import React, { useState } from 'react';
import { ScoreProvider, useScore } from './Context';
import Batting from './Batting';

const ScoreForm = () => {
  const { addPlayer } = useScore();
  const [batsman, setBatsman] = useState('');
  const [runs, setRuns] = useState('');
  const [balls, setBalls] = useState('');

  const handleAdd = () => {
    if (batsman && runs && balls) {
      addPlayer({ batsman, runs: parseInt(runs), balls: parseInt(balls) });
      setBatsman('');
      setRuns('');
      setBalls('');
    }
  };

  return (
    <>
      <h2>Score Entry</h2>
      <input placeholder="Batsman" value={batsman} onChange={e => setBatsman(e.target.value)} />
      <input placeholder="Runs" value={runs} onChange={e => setRuns(e.target.value)} type="number" />
      <input placeholder="Balls" value={balls} onChange={e => setBalls(e.target.value)} type="number" />
      <button onClick={handleAdd}>Add</button>
      <Batting />
    </>
  );
};


const Score = () => (
  <ScoreProvider>
    <ScoreForm />
  </ScoreProvider>
);

export default Score;
