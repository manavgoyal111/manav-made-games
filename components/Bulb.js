import React from "react";
import "../styles/Bulb.module.css";
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa";

function Bulb(props) {
	const { darkMode, changeMode } = props;

	return (
		<div className="navbarBulb" onClick={changeMode}>
			{!darkMode ? <FaLightbulb /> : <FaRegLightbulb />}
		</div>
	);
}

export default Bulb;
