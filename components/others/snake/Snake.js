import React, { useState, useRef, useEffect } from "react";
import "./Snake.css";
import snakeFoodSound from "./food.mp3";
import snakeGameoverSound from "./gameover.mp3";
import snakeMoveSound from "./move.mp3";

function Snake() {
	const [direction, setDirection] = useState({ x: 0, y: 0 }); // Origin at Top-Left
	const [snakeArr, setSnakeArr] = useState([{ x: 13, y: 15 }]);
	const [snakeFood, setSnakeFood] = useState({ x: 5, y: 5 });
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);
	const [snakeSpeed, setSnakeSpeed] = useState(5);
	const [lastPaintTime, setLastPaintTime] = useState(0);

	const foodSound = useRef();
	const gameoverSound = useRef();
	const moveSound = useRef();
	const snakeAnimationRef = useRef();

	useEffect(() => {
		// snakeAnimationRef.current = requestAnimationFrame(snakePlaying);
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("onKeyDown", handleKeyDown);
			cancelAnimationFrame(snakeAnimationRef.current);
		};
	}, []);

	const handleKeyDown = (e) => {
		setDirection({ x: 0, y: 1 }); // Game Starts
		// moveSound.current.play();
		switch (e.key) {
			case "ArrowUp":
				console.log("Arrow Up");
				setDirection({ x: 0, y: -1 });
				break;
			case "ArrowDown":
				console.log("Arrow Down");
				setDirection({ x: 0, y: 1 });
				break;
			case "ArrowLeft":
				console.log("Arrow Left");
				setDirection({ x: -1, y: 0 });
				break;
			case "ArrowRight":
				console.log("Arrow Right");
				setDirection({ x: 1, y: 0 });
				break;

			default:
				break;
		}
	};

	const isCollide = () => {
		// If you bump into yourself
		for (let i = 1; i < snakeArr.length; i++) {
			if (snakeArr[i].x === snakeArr[0].x && snakeArr[i].y === snakeArr[0].y) {
				return true;
			}
		}
		// If you bump into the wall
		if (
			snakeArr[0].x >= 18 ||
			snakeArr[0].x <= 0 ||
			snakeArr[0].y >= 18 ||
			snakeArr[0].y <= 0
		) {
			return true;
		}

		return false;
	};

	const snakePlaying = (ctime) => {
		snakeAnimationRef.current = requestAnimationFrame(snakePlaying);
		// console.log(ctime);
		if ((ctime - lastPaintTime) / 1000 < 1 / snakeSpeed) {
			return;
		}
		setLastPaintTime(ctime);
		gameEngine();
	};

	const gameEngine = () => {
		// Updating Snake Array
		if (isCollide()) {
			gameoverSound.current.play();
			setDirection({ x: 0, y: 0 });
			alert("Game Over");
			setSnakeArr([{ x: 13, y: 15 }]);
			setScore(0);
		}

		// Regenerate Food
		if (snakeArr[0].y === snakeFood.y && snakeArr[0].x === snakeFood.x) {
			foodSound.current.play();
			setScore(score + 1);
			const tempScore = localStorage.getItem("hiscore");
			if (tempScore !== null) {
				setHighScore(JSON.parse(tempScore));
			}
			if (score > highScore) {
				setHighScore(score);
				localStorage.setItem("hiscore", JSON.stringify(highScore));
			}
			setSnakeArr(
				snakeArr.unshift({
					x: snakeArr[0].x + direction.x,
					y: snakeArr[0].y + direction.y,
				})
			);
			let a = 2;
			let b = 16;
			setSnakeFood({
				x: Math.round(a + (b - a) * Math.random()),
				y: Math.round(a + (b - a) * Math.random()),
			});
		}

		// Moving Snake
		for (let i = snakeArr.length - 2; i >= 0; i--) {
			setSnakeArr[i + 1]({ ...snakeArr[i] }); // Destructuring
		}
		const tempArray = [...snakeArr];
		tempArray[0] = [
			{ x: snakeArr[0].x + direction.x, y: snakeArr[0].y + direction.y },
		];
		setSnakeArr(tempArray);
	};

	return (
		<div className="snakeGame">
			<audio ref={foodSound} src={snakeFoodSound}></audio>
			<audio
				ref={gameoverSound}
				src={snakeGameoverSound}
				preload="metadata"
			></audio>
			<audio ref={moveSound} src={snakeMoveSound} preload="metadata"></audio>
			<div className="snakeGameBoard">
				{/* Display Snake Food */}
				{snakeArr.map((val, idx) => {
					return (
						<div
							key={idx}
							className={
								idx === 0
									? "snakeGameBoardSnake snakeGameBoardHead"
									: "snakeGameBoardSnake snakeGameBoardBody"
							}
							style={{ gridRowStart: val.x, gridColumnStart: val.y }}
						>
							S
						</div>
					);
				})}
				{
					<div
						className="snakeGameBoardFood snakeGameBoardFood"
						style={{ gridRowStart: snakeFood.x, gridColumnStart: snakeFood.y }}
					>
						F
					</div>
				}
			</div>
			<div className="snakeGameScore">
				<div>Score: {score}</div>
				<div className="snakeGameHighScore">High Score: {highScore}</div>
			</div>
		</div>
	);
}

export default Snake;
