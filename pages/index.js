import Head from "next/head";
import Link from "next/link";
import styles from "../styles/home/Home.module.css";
import { GamesData } from "../components/home/GameData";

function Home() {
	return (
		<div className={styles.home}>
			<Head>
				<title>Manav Made Games</title>
			</Head>

			<h1>All Games</h1>

			<div className={styles.homeGames}>
				{GamesData.map((game, idx) => (
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

export default Home;
