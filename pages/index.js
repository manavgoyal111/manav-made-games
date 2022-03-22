import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
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

			<h1 className={styles.title}>Namaste Dunia</h1>
		</div>
	);
}
