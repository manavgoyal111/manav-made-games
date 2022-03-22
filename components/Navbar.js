import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import Bulb from "./Bulb";

function Navbar(props) {
	const { darkMode, changeMode } = props;

	return (
		<div className={styles.navbar}>
			<div className={styles.navLogo}>
				<Link href="/" passHref>
					<Image
						src="/images/MMGamesLogo.png"
						alt="MMGames"
						height="50px"
						width="50px"
						className={styles.navLogoImg}
					/>
				</Link>
			</div>
			<div className={styles.navLinks}>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/musicplayer">Music Player</Link>
				</li>
			</div>
			<div className={styles.navBulb}>
				<Bulb darkMode={darkMode} changeMode={changeMode} />
			</div>
		</div>
	);
}

export default Navbar;
