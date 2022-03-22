import React, { useState } from "react";
import "./EnterOnlyPrime.css";

function EnterOnlyPrime() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [text, setText] = useState("");

  const isPrime = (value) => {
    if (value < 1) {
      return false;
    }
    for (let i = 2; i * i <= value; i++) {
      if (value % i === 0) {
        return false;
      }
    }

    return true;
  };

  const primeInputOnChange = (e) => {
    setText(e.target.value);
  };

  const checkPrime = () => {
    if (isPrime(text)) {
      // console.log(text + " Is Prime");

      setScore(score + 1);
      if (score >= highScore) {
        setHighScore(highScore + 1);
      }
    } else {
      // console.log(text + " Is Not Prime");
      alert("Wrong Number");
      setScore(0);
    }
  };

  return (
    <div className="enteronlyprime">
      <h1>Enter Only Prime</h1>
      <div className="primeForm">
        <input type="number" value={text} className="primeFormText" onChange={primeInputOnChange} />
        <input
          type="button"
          value="Enter"
          onClick={checkPrime}
          disabled={text.length === 0}
          className="primeFormBtn"
        />
      </div>
      <div className="primeScore">
        <p>Your Score: {score}</p>
        <p>High Score: {highScore}</p>
      </div>
    </div>
  );
}

export default EnterOnlyPrime;
