import React, { useState } from "react";
import "./GuessTheNumber.css";

function GuessTheNumber() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [userInput, setUserInput] = useState(0);
  const [randomNumber, setRandomNumber] = useState(Math.round(0 + (100 - 0) * Math.random()));
  // const randomNumber = Math.round(0 + (100 - 0) * Math.random());

  const isNumber = (value) => {
    if (value == randomNumber) {
      return true;
    }
    return false;
  };

  const guessInputOnChange = (e) => {
    setUserInput(e.target.value);
  };

  const checkNumber = () => {
    if (isNumber(userInput)) {
      alert("Number Found");
      if (score < highScore) {
        setHighScore(score);
      }
    } else {
      setScore(score + 1);
      console.log(userInput);
      console.log(randomNumber);
    }
  };

  return (
    <div className="guessTheNumber">
      <h1>Guess The Number between 0 to 100</h1>
      <div className="guessForm">
        <input
          type="number"
          value={userInput}
          className="guessFormText"
          onChange={guessInputOnChange}
        />
        <input
          type="button"
          value="Enter"
          onClick={checkNumber}
          // disabled={userInput.length === 0}
          className="guessFormBtn"
        />
      </div>
      <div className="guessScore">
        <p>Your Score: {score}</p>
        <p>High Score: {highScore}</p>
      </div>
    </div>
  );
}

export default GuessTheNumber;

// Math.round(a + (b - a) * Math.random())
