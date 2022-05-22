import styles from "../../styles/utilities/Button.module.css";

const Button = ({ btnName }) => {
	return <button className={styles.button}>{btnName}</button>;
};

export default Button;

// Default Prop Value
Button.defaultProps = {
	btnName: "Button",
};
