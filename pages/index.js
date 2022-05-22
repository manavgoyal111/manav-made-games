import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/home/Home.module.css";
import { capitalise } from "../components/utilities/Capitalise";
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
								<Image src={game.url} alt="Game" height={300} width={300} />
								<h2>{capitalise(game.slug)}</h2>
							</div>
						</a>
					</Link>
				))}
			</div>
		</div>
	);
}

export default Home;
