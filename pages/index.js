import Head from "next/head";
import styles from "../styles/Home.module.css";
import HomeComponent from "../components/HomeComponent";

export default function Home() {
	return (
		<div className={styles.home}>
			<Head>
				<title>MMGames</title>
				<meta
					name="description"
					content="Play exciting Games for free. Listen to Music"
				/>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={styles.homeComponent}>
				<HomeComponent name="Tic-Tac-Toe" link="/tictactoe" />
				<HomeComponent name="Sudoku" link="/sudoku" />
				<HomeComponent name="Rock-Paper-Scissors" link="/rockpaperscissor" />
				<HomeComponent name="Snake" link="/snake" />
				<HomeComponent name="Enter Only Prime" link="/enteronlyprime" />
				<HomeComponent name="Guess the Number" link="/guessthenumber" />
			</div>
		</div>
	);
}
