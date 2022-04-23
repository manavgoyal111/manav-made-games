import React from "react";
import Link from "next/link";
import styles from "../styles/pages/FourOFour.module.css";
import Button from "../components/utils/Button";

const FourOFour = () => {
	return (
		<div className={styles.FourOFour}>
			<h1>404 - Page Not Found</h1>
			<Link href="/">
				<a>
					<Button btnName="Go back Home" />
				</a>
			</Link>
		</div>
	);
};

export default FourOFour;
