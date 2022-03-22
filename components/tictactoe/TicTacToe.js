import React, { useState, useRef, useEffect } from "react";
import "./TicTacToe.css";
import excited from "./excited.gif";
import music2 from "./gameover.mp3";
import music3 from "./ting.mp3";

function TicTacToe() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [turn, setTurn] = useState("X");
  const [result, setResult] = useState(0);
  const [info, setInfo] = useState("Turn of X");

  const tttTurn = useRef();
  const tttGameover = useRef();
  const winLine = useRef();
  const winGif = useRef();

  useEffect(() => {
    checkIfTie();
    checkWin();
  }, [board]);

  useEffect(() => {
    if (result === 1) {
      setInfo(turn === "X" ? "0 Won" : "X Won");
    }
    if (result === 2) {
      setInfo("Tie");
      //   tttGameover.current.play();
    }
  }, [result]);

  const chooseSquare = (square) => {
    setBoard(
      board.map((val, idx) => {
        if (idx === square && val === "") {
          return turn;
        }
        return val;
      })
    );

    tttTurn.current.play();
    toggleTurn();
  };

  const toggleTurn = () => {
    if (turn === "X") {
      setTurn("0");
      setInfo("Turn of 0");
    } else {
      setTurn("X");
      setInfo("Turn of X");
    }
  };

  const checkWin = () => {
    let wins = [
      [0, 1, 2, 5, 5, 0],
      [3, 4, 5, 5, 15, 0],
      [6, 7, 8, 5, 25, 0],
      [0, 3, 6, -5, 15, 90],
      [1, 4, 7, 5, 15, 90],
      [2, 5, 8, 15, 15, 90],
      [0, 4, 8, 5, 15, 45],
      [2, 4, 6, 5, 15, 135],
    ];

    wins.forEach((val) => {
      const firstItem = board[val[0]];
      const secondItem = board[val[1]];
      const thirdItem = board[val[2]];

      if (firstItem === "") return;
      let foundWinningPattern = true;
      if (firstItem !== secondItem || secondItem !== thirdItem) {
        foundWinningPattern = false;
      }
      if (foundWinningPattern) {
        setResult(1);
        winGif.current.style.setProperty("width", "8em");
        // winLine.current.style.setProperty("width", "20vw");
        winLine.current.style.setProperty(
          "transform",
          `translate(${val[3]}vw, ${val[4]}vw) rotate(${val[5]}deg)`
        );
      }
    });
  };

  const checkIfTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square == "") {
        filled = false;
      }
    });

    if (filled) {
      setResult(2);
    }
  };

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setTurn("X");
    winGif.current.style.setProperty("width", "0");
    setInfo("Turn of X");
    winLine.current.style.setProperty("width", "0");
  };

  return (
    <div className="tttGame">
      <div className="tttGamePlay">
        <div className="tttGameLine" ref={winLine}></div>
        <div
          onClick={() => {
            chooseSquare(0);
          }}
          className="tttGamePlayBox bt-0 bl-0"
        >
          {board[0]}
        </div>
        <div
          onClick={() => {
            chooseSquare(1);
          }}
          className="tttGamePlayBox bt-0"
        >
          {board[1]}
        </div>
        <div
          onClick={() => {
            chooseSquare(2);
          }}
          className="tttGamePlayBox bt-0 br-0"
        >
          {board[2]}
        </div>
        <div
          onClick={() => {
            chooseSquare(3);
          }}
          className="tttGamePlayBox bl-0"
        >
          {board[3]}
        </div>
        <div
          onClick={() => {
            chooseSquare(4);
          }}
          className="tttGamePlayBox"
        >
          {board[4]}
        </div>
        <div
          onClick={() => {
            chooseSquare(5);
          }}
          className="tttGamePlayBox br-0"
        >
          {board[5]}
        </div>
        <div
          onClick={() => {
            chooseSquare(6);
          }}
          className="tttGamePlayBox bl-0 bb-0"
        >
          {board[6]}
        </div>
        <div
          onClick={() => {
            chooseSquare(7);
          }}
          className="tttGamePlayBox bb-0"
        >
          {board[7]}
        </div>
        <div
          onClick={() => {
            chooseSquare(8);
          }}
          className="tttGamePlayBox br-0 bb-0"
        >
          {board[8]}
        </div>
      </div>

      <div className="tttGameInfo">
        <audio ref={tttGameover} src={music2} preload="metadata"></audio>
        <audio ref={tttTurn} src={music3} preload="metadata"></audio>
        <span className="tttGameInfoText">{info}</span>
        <button className="tttGameInfoReset" onClick={restartGame}>
          Reset
        </button>
        <div className="tttGameInfoImg">
          <img src={excited} alt="Play" ref={winGif} />
        </div>
      </div>
    </div>
  );
}

export default TicTacToe;
