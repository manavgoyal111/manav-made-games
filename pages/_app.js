import React, { useState } from "react";
import Head from "next/head";
import { Provider } from "react-redux";
import "../styles/global/globals.css";
import "../styles/global/utilities.css";
import "../styles/global/scrollbar.css";
import { wrapper, store } from "../store/store";
import Navbar from "../components/general/Navbar";
import Footer from "../components/general/Footer";

const MyApp = ({ Component, pageProps }) => {
	// Use State
	const [lightMode, setLightMode] = useState(
		store.getState().colorModeReducer.lightMode
	);

	store.subscribe(() => {
		setLightMode(store.getState().colorModeReducer.lightMode);
	});

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
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</Provider>
	);
};

export default wrapper.withRedux(MyApp);

// Console Error when loading page in darkMode
