import React from "react";
import { Link } from "react-router-dom";
import Bulb from "./Bulb";
import logo from "./MMGamesLogo.png";
import "./Navbar.css";

function Navbar(props) {
	const { darkMode, changeMode } = props;

	return (
		<div className="navbar">
			<div className="navLogo">
				<Link to="/">
					<img src={logo} alt="MMGames" height="50px" className="navLogoImg" />
				</Link>
			</div>
			<div className="navLinks">
				<li>
					<Link to="/home">Home</Link>
				</li>
				<li>
					<Link to="/musicplayer">Music Player</Link>
				</li>
			</div>
			<div className="navBulb">
				<Bulb darkMode={darkMode} changeMode={changeMode} />
			</div>
		</div>
	);
}

export default Navbar;
