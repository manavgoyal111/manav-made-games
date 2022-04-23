import React, { useState, useEffect } from "react";
import Head from "next/head";
import "../styles/global/globals.css";
import "../styles/global/utilities.css";
import "../styles/global/scrollbar.css";
import { CredentialsProvider } from "../context/CredentialsContext";
import Navbar from "../components/general/Navbar";
import Footer from "../components/general/Footer";

export default function MyApp({ Component, pageProps }) {
	// Use State
	const [lightMode, setLightMode] = useState(true);

	// Use Effect
	useEffect(() => {
		const storedMode = localStorage.getItem("mmg-lightMode");
		if (JSON.parse(storedMode) !== null) {
			setLightMode(JSON.parse(storedMode));
		}
	}, []);

	return (
		<CredentialsProvider>
			<style jsx global>
				{`
					:root {
						--dark: ${!lightMode ? "#38a3a5" : "#ffffff"};
						--dark2: ${!lightMode ? "#57cc99" : "#bffccd"};
						--mid: ${!lightMode ? "#80ed99" : "#80ed99"};
						--light2: ${!lightMode ? "#bffccd" : "#57cc99"};
						--light: ${!lightMode ? "#ffffff" : "#38a3a5"};
						--red: red;
						--yellow: rgb(151, 151, 35);
					}
				`}
			</style>

			<Head>
				<meta
					name="description"
					content="Play exciting Games for free. Listen to Music"
				/>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar setLightMode={setLightMode} />
			<Component {...pageProps} />
			<Footer />
		</CredentialsProvider>
	);
}
