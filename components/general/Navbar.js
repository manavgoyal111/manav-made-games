import { connect } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaLightbulb } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import styles from "../../styles/general/Navbar.module.css";
import { setColorMode } from "../../store/actions/colorModeAction";

function Navbar({ setLightMode, colorMode, setColorMode }) {
	// React Router Variable
	const router = useRouter();

	// Functions
	const changeMode = () => {
		setColorMode(!colorMode);
		setLightMode(!colorMode);
		localStorage.setItem("mmg-colorMode", JSON.stringify(!colorMode));
	};

	return (
		<div className={styles.navbar}>
			<Link href="/">
				<a className={styles.navbarLogo}>
					<Image
						src="https://ik.imagekit.io/manav11goyal11/mmg/tr:600/nav-logo.png"
						alt="Logo"
						height={40}
						width={40}
					/>
				</a>
			</Link>

			<nav>
				<ul className={styles.navbarLinks}>
					<li>
						<Link href="/music-player">
							<a id={router.pathname === "/music-player" ? "active" : ""}>
								Music Player
							</a>
						</Link>
					</li>
				</ul>
			</nav>

			<div
				onClick={() => changeMode()}
				className={styles.navbarBulb}
				id={!colorMode ? `${styles["navbarBulbMove"]}` : ""}
			>
				{!colorMode ? <FaLightbulb size={20} /> : <HiLightBulb size={30} />}
			</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	colorMode: state.colorModeReducer.colorMode,
});

const mapDispatchToProps = {
	setColorMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
