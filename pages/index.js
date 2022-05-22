import { connect } from "react-redux";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/home/Home.module.css";
import { GamesData } from "../components/home/GameData";

function Home({ colorMode }) {
	return (
		<div className={styles.home}>
			<Head>
				<title>Manav Made Games</title>
			</Head>

			<h1>{colorMode ? "true" : "false"}</h1>
			{/* <h1>All Games</h1> */}

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

const mapStateToProps = (state) => ({
	colorMode: state.colorModeReducer.colorMode,
});

export default connect(mapStateToProps)(Home);
