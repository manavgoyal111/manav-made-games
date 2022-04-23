import React from "react";
import Link from "next/link";
import styles from "../styles/pages/FourOFour.module.css";
import Button from "../components/utilities/Button";

export default function FourOFour() {
	return (
		<div className={styles.FourOFour}>
			<h1>404 - Page Not Found</h1>
			<Link href="/">
				<a>
					<Button btnName="Go Home" />
				</a>
			</Link>
		</div>
	);
}
