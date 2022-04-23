import React, { useState, useEffect } from "react";
import Head from "next/head";
import "../styles/global/globals.css";
import "../styles/global/utilities.css";
import "../styles/global/scrollbar.css";
import { CredentialsProvider } from "../context/CredentialsContext";
import Navbar from "../components/general/Navbar";
import Footer from "../components/general/Footer";

function MyApp({ Component, pageProps }) {
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
						--dark: ${!lightMode ? "#00111c" : "#f8f9fa"};
						--dark2: ${!lightMode ? "#00406c" : "#dee2e6"};
						--mid: ${!lightMode ? "#6b127b" : "#6b127b"};
						--light2: ${!lightMode ? "#dee2e6" : "#00406c"};
						--light: ${!lightMode ? "#f8f9fa" : "#00111c"};
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

export default MyApp;
