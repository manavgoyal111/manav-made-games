import Head from "next/head";
import styles from "../styles/home/Home.module.css";
import HomeComponent from "../components/home/HomeComponent";

export default function Home() {
	return (
		<div className={styles.home}>
			<Head>
				<title>Manav Made Games</title>
			</Head>

			<div className={styles.homeComponent}>
				{/* <HomeComponent name="Tic-Tac-Toe" link="/tictactoe" />
				<HomeComponent name="Sudoku" link="/sudoku" />
				<HomeComponent name="Rock-Paper-Scissors" link="/rockpaperscissor" />
				<HomeComponent name="Snake" link="/snake" />
				<HomeComponent name="Enter Only Prime" link="/enteronlyprime" />
				<HomeComponent name="Guess the Number" link="/guessthenumber" /> */}
			</div>
		</div>
	);
}
