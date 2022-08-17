import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import styles from "../styles/guess-the-number/GuessTheNumber.module.css";
import "react-toastify/dist/ReactToastify.css";
import Button from "../components/utilities/Button";

const GuessTheNumber = () => {
	// Variables
	const [guessNumber, setGuessNumber] = useState(0);
	const [totalGuessScore, setTotalGuessScore] = useState(0);
	const [inputNumber, setInputNumber] = useState(0);
	const randomNumber = useRef(Math.floor(Math.random() * 100));

	// Functions
	const checkNumber = () => {
		setGuessNumber(guessNumber + 1);
		// console.log(inputNumber, randomNumber.current);
		if (parseInt(inputNumber) === randomNumber.current) {
			toast.success(`Your score is ${guessNumber}`, {
				position: "top-left",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			setGuessNumber(0);
			setTotalGuessScore(totalGuessScore + 1);
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

			<div className={styles.guessTheNumberHeading}>
				<h1>Guess the Number</h1>
				<h3>Score: {totalGuessScore}</h3>
				<h4>Change Taken: {guessNumber}</h4>
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
				<p>Number is between 1 and 100</p>
				<p>Player with minimum Score Wins!</p>
				{/* <p>{randomNumber.current}</p> */}
			</div>
		</div>
	);
};

export default GuessTheNumber;
