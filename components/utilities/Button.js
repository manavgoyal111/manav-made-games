import React from "react";
import styles from "../../styles/utilities/Button.module.css";

const Button = ({ btnName }) => {
	return <button className={styles.button}>{btnName}</button>;
};

export default Button;

// Prop Values
Button.defaultProps = {
	btnName: "Button",
};
