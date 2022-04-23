import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaLightbulb } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import styles from "../../styles/general/Navbar.module.css";
import { CredentialsContext } from "../../context/CredentialsContext";

export default function Navbar({ setLightMode }) {
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
		<nav className={styles.nav}>
			<Link href="/">
				<a className={styles.navLogo}>
					<Image
						src="https://ik.imagekit.io/manav11goyal11/mmg/tr:600/nav-logo.png"
						alt="Logo"
						height={40}
						width={40}
					/>
				</a>
			</Link>

			<div>
				<ul className={styles.navLinks}>
					<li>
						<Link href="/music-player">
							<a id={router.pathname === "/music-player" ? "active" : ""}>
								Music Player
							</a>
						</Link>
					</li>
				</ul>
			</div>

			<div
				onClick={() => changeMode(!lightMode)}
				className={styles.navBulb}
				id={!lightMode ? `${styles["navBulbMove"]}` : ""}
			>
				{!lightMode ? <FaLightbulb size={20} /> : <HiLightBulb size={30} />}
			</div>
		</nav>
	);
}
