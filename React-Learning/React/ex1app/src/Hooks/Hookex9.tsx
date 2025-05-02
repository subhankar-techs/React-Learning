import { useState, useRef } from 'react';

const Hookex9 = () => {
    const [score, setScore] = useState<number>(0);
    const [balls, setBalls] = useState<number>(0);
    const [out, setOut] = useState<number>(0);
    const [isOut, setIsOut] = useState<boolean>(false);
    const ref1 = useRef<HTMLSelectElement>(null);

    const scoreBoard = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;

        if (value === "Select") {
            return; 
        }

        if (value === "WD" || value === "NB") {
            setScore((prevScore) => prevScore + 1);
            setBalls((prevBalls) => prevBalls + 1);
        } else if (value === "0") { 
            setBalls((prevBalls) => prevBalls + 1);
            setOut((prevOut) => prevOut + 1);
            setIsOut(true);
        } else {
            const number = parseInt(value);

            if (!isNaN(number)) {
                setScore((prevScore) => prevScore + number);
                setBalls((prevBalls) => prevBalls + 1);
                setIsOut(false);
            }
        }
    };

    return (
        <>
            <h4>ScoreBoard</h4>
            <h3>Runs: {score} Balls: {balls}</h3>

            <label htmlFor="score">Select Score</label>
            <select name="score" id="score" onChange={scoreBoard} ref={ref1}>
                <option value="Select">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="WD">WD</option>
                <option value="NB">NB</option>
                <option value="0">Out</option>
            </select>

            <h3>Batsman scored {score} runs in {balls} balls</h3>
            {isOut && <h3>Batsman is out after scoring {score} runs in {balls} balls</h3>}
        </>
    );
};

export default Hookex9;
