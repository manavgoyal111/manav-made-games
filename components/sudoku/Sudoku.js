import React, { useState, useRef, useEffect } from "react";
import "./Sudoku.css";

function Sudoku() {
  const [easyBoard, setEasyBoard] = useState([
    "6------7------5-2------1---362----81--96-----71--9-4-5-2---651---78----345-------",
    "685329174971485326234761859362574981549618732718293465823946517197852643456137298",
  ]);
  const [mediumBoard, setMediumBoard] = useState([
    "--9-------4----6-758-31----15--4-36-------4-8----9-------75----3-------1--2--3--",
    "619472583243985617587316924158247369926531478734698152891754236365829741472163895",
  ]);
  const [hardBoard, setHardBoard] = useState([
    "-1-5-------97-42----5----7-5---3---7-6--2-41---8--5---1-4------2-3-----9-7----8--",
    "712583694639714258845269173521436987367928415498175326184697532253841769976352841",
  ]);
  const [sudokuBoard, setSudokuBoard] = useState();

  const [sudokuTimer, setSudokuTimer] = useState();
  const [sudokuTimeRemaining, setSudokuTimeRemaining] = useState();
  const [sudokuLives, setSudokuLives] = useState();
  const [sudokuSelectedNum, setSudokuSelectedNum] = useState(null);
  const [sudokuSelectedTile, setSudokuSelectedTile] = useState(null);
  const [sudokuDisableSelect, setSudokuDisableSelect] = useState();

  const sudokuMode1 = useRef();
  const sudokuMode2 = useRef();
  const sudokuMode3 = useRef();
  const sudokuTime1 = useRef();
  const sudokuTime2 = useRef();
  const sudokuTime3 = useRef();
  const sudokuTile = useRef([]);
  const sudokuNumber = useRef([]);

  useEffect(() => {
    // sudokuStart();
  }, []);

  const sudokuStart = () => {
    // Check Mode
    if (sudokuMode1.current.checked) {
      setSudokuBoard(easyBoard[0]);
      setSudokuLives(3);
    } else if (sudokuMode2.current.checked) {
      setSudokuBoard(mediumBoard[0]);
      setSudokuLives(5);
    } else {
      setSudokuBoard(hardBoard[0]);
      setSudokuLives(10);
    }

    // Check Time
    if (sudokuTime1.current.checked) {
      setSudokuTimeRemaining(3);
    } else if (sudokuTime2.current.checked) {
      setSudokuTimeRemaining(5);
    } else {
      setSudokuTimeRemaining(10);
    }

    setSudokuDisableSelect(false);
    sudokuGenerateBoard();
  };

  const sudokuGenerateBoard = () => {
    // Clear previous Board
    clearBoard();
  };

  const clearBoard = () => {
    // numberArr.current.map((val) => {
    //   // sudokuTile[val].current = "";
    // });

    // numberArr.current.map((val) => {
    //   // sudokuNumber[val]
    // });

    setSudokuSelectedNum(null);
    setSudokuSelectedTile(null);
  };

  return (
    <div className="sudokuGame">
      <div className="sudokuGameSetup">
        <div className="sudokuGameSetupMode">
          <h3>Choose Mode: </h3>
          <label>
            <input
              id="sudokuGameSetupMode1"
              type="radio"
              name="mode"
              value="easy"
              checked
              ref={sudokuMode1}
            />
            Easy
          </label>
          <label>
            <input
              id="sudokuGameSetupMode2"
              type="radio"
              name="mode"
              value="medium"
              ref={sudokuMode2}
            />
            Medium
          </label>
          <label>
            <input
              id="sudokuGameSetupMode3"
              type="radio"
              name="mode"
              value="hard"
              ref={sudokuMode3}
            />
            Hard
          </label>
        </div>
        <div className="sudokuGameSetupTime">
          <h3>Choose Time: </h3>
          <label>
            <input
              id="sudokuGameSetupTime1"
              type="radio"
              name="time"
              value="three"
              checked
              ref={sudokuTime1}
            />
            3 Min
          </label>
          <label>
            <input
              id="sudokuGameSetupTime2"
              type="radio"
              name="time"
              value="five"
              ref={sudokuTime2}
            />
            5 Min
          </label>
          <label>
            <input
              id="sudokuGameSetupTime3"
              type="radio"
              name="time"
              value="ten"
              ref={sudokuTime3}
            />
            10 Min
          </label>
        </div>
      </div>

      <button className="sudokuGameBtn" onClick={sudokuStart}>
        New Game
      </button>
      <div className="underline"></div>
      <div className="sudokuGameInfo">
        <div className="sudokuGameInfoTime">Time: {sudokuTimeRemaining}</div>
        <div className="sudokuGameInfoLives">Lives Remaining: {sudokuLives}</div>
      </div>

      <div className="sudokuGamePlay">
        <div className="sudokuGamePlayBoard">
          {Array.from(Array(81), (e, i) => {
            return (
              <div className="sudokuGamePlayBoardTile" ref={sudokuTile} key={i}>
                {easyBoard[0][i]}
                {}
              </div>
            );
          })}
        </div>
        <div className="sudokuGamePlayNumbers">
          {Array.from(Array(9), (e, i) => {
            return (
              <div ref={sudokuNumber} key={i}>
                {i}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Sudoku;
