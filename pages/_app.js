import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import Head from "next/head";
import "../styles/global/globals.css";
import "../styles/global/utilities.css";
import "../styles/global/scrollbar.css";
import { wrapper, store } from "../store/store";
import Navbar from "../components/general/Navbar";
import Footer from "../components/general/Footer";

function MyApp({ Component, pageProps }) {
	// Use State
	const [lightMode, setLightMode] = useState(true);

	// Use Effect
	useEffect(() => {
		// Getting colorMode value from local storage and initializing
		const storedColorMode = JSON.parse(localStorage.getItem("mmg-colorMode"));
		if (storedColorMode !== null) {
			setLightMode(storedColorMode);
		}
	}, []);

	return (
		<Provider store={store}>
			<style jsx global>
				{`
					:root {
						--dark: ${!lightMode ? "#121212" : "#CCCCCC"};
						--dark2: ${!lightMode ? "#2A2A2A" : "#737373"};
						--mid: ${!lightMode ? "#0078F2" : "#0078F2"};
						--light2: ${!lightMode ? "#737373" : "#2A2A2A"};
						--light: ${!lightMode ? "#CCCCCC" : "#121212"};
						--red: red;
						--yellow: rgb(151, 151, 35);
					}
				`}
			</style>

			<Head>
				<meta
					name="description"
					content="Play exciting Games for free. Listen to Music."
				/>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar setLightMode={setLightMode} />
			<Component {...pageProps} />
			<Footer />
		</Provider>
	);
}

export default wrapper.withRedux(MyApp);

// Transfer all assets from public folder to imagekit
// Navbar.js - Just call "setColorMode" and transfer all its code in redux store
// Access redux store "colorMode" variable in _app.js to remove "setLightMode" function and "lightMode" variable from _app.js, "colorMode" variable from navbar.js and initialize colorMode by getting value from local storage instead of initializing it in _app.js
