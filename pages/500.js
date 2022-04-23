import React from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/pages/FiveOO.module.css";
import Button from "../components/utils/Button";

export default function FiveOO() {
	return (
		<div className={styles.FiveOO}>
			<Head>
				<title>500 Error | MMG</title>
			</Head>

			<h1>500 - Error</h1>
			<Link href="/">
				<a>
					<Button btnName="Go Home" />
				</a>
			</Link>
		</div>
	);
}
