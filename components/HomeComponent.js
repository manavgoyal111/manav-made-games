import React from "react";
import Link from "next/link";
import styles from "../styles/HomeComponent.module.css";

function HomeComponent(props) {
	const { name, link } = props;

	return (
		<div className={styles.homeComponentItem}>
			<li>
				<Link href={link}>
					<a href={link}>
						<h1 className={styles.homeComponentItemHeading}>{name}</h1>
					</a>
				</Link>
			</li>
		</div>
	);
}

export default HomeComponent;
