import React, { useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../../styles/general/Navbar.module.css";
import { CredentialsContext } from "../../context/CredentialsContext";
import Bulb from "./Bulb";

function Navbar({ setLightMode }) {
	// React Router Variable
	const router = useRouter();

	// Context Variable
	const { lightMode, changeLightMode } = useContext(CredentialsContext);

	// Functions
	const changeMode = (value) => {
		setLightMode(value);
		changeLightMode(value);
		localStorage.setItem("mmg-lightMode", JSON.stringify(value));
	};

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
					<Link href="/">
						<a id={router.pathname === "/" ? "active" : ""}>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/musicplayer">Music Player</Link>
				</li>
			</div>
			<div
				onClick={() => changeMode(!lightMode)}
				id={!lightMode ? "invertLogoColor" : ""}
				className={styles.navBulb}
			>
				<Bulb />
				{/* {!lightMode ? <FaMoon size={15} /> : <FaRegSun size={15} />} */}
			</div>
		</div>
	);
}

export default Navbar;
