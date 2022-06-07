import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { FaLightbulb } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import styles from "../../styles/general/Navbar.module.css";
import { changeColorMode } from "../../store/actions/colorModeAction";

const Navbar = ({ lightMode, changeColorMode }) => {
	// React Router Variable
	const router = useRouter();

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
				onClick={() => changeColorMode(lightMode)}
				className={styles.navbarBulb}
				id={!lightMode ? `${styles["navbarBulbMove"]}` : ""}
			>
				{!lightMode ? <FaLightbulb size={20} /> : <HiLightBulb size={30} />}
			</div>
		</div>
	);
};

Navbar.propTypes = {
	lightMode: PropTypes.bool,
	changeColorMode: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	lightMode: state.colorModeReducer.lightMode,
});

export default connect(mapStateToProps, { changeColorMode })(Navbar);
