import React from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/pages/Error.module.css";
import Button from "../components/utilities/Button";

function FourOFour() {
	return (
		<div className={styles.Error}>
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

export default FourOFour;
