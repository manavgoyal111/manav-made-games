import React from "react";
import Link from "next/link";
import styles from "../styles/pages/FiveOO.module.css";
import Button from "../components/utils/Button";

const FiveOO = () => {
	return (
		<div className={styles.FiveOO}>
			<h1>500 Error</h1>
			<Link href="/">
				<a>
					<Button btnName="Go back Home" />
				</a>
			</Link>
		</div>
	);
};

export default FiveOO;
