import React from "react";
import { Link } from "react-router-dom";
import "./HomeComponent.css";

function HomeComponent(props) {
	const { name, link } = props;

	return (
		<div className="homeComponentItem">
			<li>
				<Link to={link}>
					<h1 className="homeComponentItemHeading">{name}</h1>
				</Link>
			</li>
		</div>
	);
}

export default HomeComponent;
