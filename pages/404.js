import React from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/pages/FourOFour.module.css";
import Button from "../components/utilities/Button";

export default function FourOFour() {
	return (
		<div className={styles.FourOFour}>
			<Head>
				<title>404 Error | MMG</title>
			</Head>

			<h1>404 - Page Not Found</h1>
			<Link href="/">
				<a>
					<Button btnName="Go Home" />
				</a>
			</Link>
		</div>
	);
}
