import {} from 'react';
import { useScore } from './Context';

const Batting = () => {
  const { players } = useScore();
  const totalScore = players.reduce((sum, player) => sum + player.runs, 0);

  return (
    <>
      <h2>Batting Table</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>Batsman</th>
            <th>Runs Scored</th>
            <th>Balls Faced</th>
          </tr>
        </thead>
        <tbody>
          {players.map((val) => (
            <tr>
              <td>{val.batsman}</td>
              <td>{val.runs}</td>
              <td>{val.balls}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total Score: {totalScore}</p>
    </>
  );
};

export default Batting;
