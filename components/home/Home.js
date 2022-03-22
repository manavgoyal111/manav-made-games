import React, { Component } from "react";
import HomeComponent from "./HomeComponent";
import "./Home.css";

export class Home extends Component {
	render() {
		return (
			<div className="home">
				<div className="homeComponent">
					<HomeComponent name="Tic-Tac-Toe" link="/tictactoe" />
					<HomeComponent name="Sudoku" link="/sudoku" />
					<HomeComponent name="Rock-Paper-Scissors" link="/rockpaperscissor" />
					<HomeComponent name="Snake" link="/snake" />
					<HomeComponent name="Enter Only Prime" link="/enteronlyprime" />
					<HomeComponent name="Guess the Number" link="/guessthenumber" />
				</div>
			</div>
		);
	}
}

export default Home;
