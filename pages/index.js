import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/home/Home.module.css";

const gamesData = [
	{ name: "Tic Tac Toe", slug: "tictactoe" },
	{ name: "Sudoku", slug: "sudoku" },
	{ name: "Rock Paper Scissors", slug: "rockpaperscissor" },
	{ name: "Snake", slug: "snake" },
	{ name: "Enter Only Prime", slug: "enteronlyprime" },
	{ name: "Guess the Number", slug: "guessthenumber" },
];

export default function Home() {
	return (
		<div className={styles.home}>
			<Head>
				<title>Manav Made Games</title>
			</Head>

			<h1>All Games</h1>

			<div className={styles.homeGames}>
				{gamesData.map((game, idx) => (
					<Link href={`/${game.slug}`} key={idx}>
						<a>
							<div className={styles.homeGamesItem}>
								<h1>{game.name}</h1>
							</div>
						</a>
					</Link>
				))}
			</div>
		</div>
	);
}
