import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import styles from "../styles/guess-the-number/GuessTheNumber.module.css";
import "react-toastify/dist/ReactToastify.css";
import Button from "../components/utilities/Button";
import NewGameModal from "../components/utilities/NewGameModal";

const GuessTheNumber = () => {
	// Variables
	const [guessNumber, setGuessNumber] = useState(0);
	const [totalGuessScore, setTotalGuessScore] = useState(0);
	const [inputNumber, setInputNumber] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
	const [startNewGame, setStartNewGame] = useState("Yes");

	const randomNumber = useRef();

	// Functions
	useEffect(() => {
		randomNumber.current = Math.floor(Math.random() * 100);
		if (startNewGame === "No") {
			toast.info(`Your total score is: ${totalGuessScore}`, {
				position: "top-left",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			setTotalGuessScore(0);
		}
	}, [startNewGame]);

	const checkNumber = () => {
		setGuessNumber(guessNumber + 1);
		if (guessNumber >= 99) {
			toast.error(`Your Lost, Try Again!`, {
				position: "top-left",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			setGuessNumber(0);
			setTotalGuessScore(0);
			setIsOpen(true);
		} else {
			if (parseInt(inputNumber) === randomNumber.current) {
				toast.success(`Your score is ${totalGuessScore}`, {
					position: "top-left",
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				setGuessNumber(0);
				setTotalGuessScore(totalGuessScore + 100 - guessNumber);
				setIsOpen(true);
			} else if (parseInt(inputNumber) >= randomNumber.current) {
				toast.info(`Your Number is Higher!`, {
					position: "top-left",
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			} else {
				toast.info(`Your Number is Lower!`, {
					position: "top-left",
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}
		}
	};

	const handleChange = (e) => {
		setInputNumber(e.target.value);
	};

	return (
		<div className={styles.guessTheNumber}>
			<Head>
				<title>Manav Made Games</title>
			</Head>

			<ToastContainer
				position="top-left"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>

			{isOpen && <NewGameModal setIsOpen={setIsOpen} setStartNewGame={setStartNewGame} />}

			<div className={styles.guessTheNumberHeading}>
				<h1>Guess the Number</h1>
				<h3>Score: {totalGuessScore}</h3>
				<h4>Turn: {guessNumber}</h4>
			</div>

			<div className={styles.guessTheNumberInput}>
				<input
					type="number"
					name="number"
					id="number"
					value={inputNumber}
					onChange={handleChange}
				/>
				<div onClick={checkNumber}>
					<Button btnName="Guess" />
				</div>
			</div>
			<div className={styles.guessTheNumberInfo}>
				<p>Number can be from 1 to 100</p>
				<p>You will get 100 turns to guess the correct number</p>
			</div>
		</div>
	);
};

export default GuessTheNumber;
