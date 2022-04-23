import { useState, useEffect, createContext } from "react";

export const CredentialsContext = createContext();

export const CredentialsProvider = ({ children }) => {
	// Variables

	// Use State Variable
	const [lightMode, setLightMode] = useState(null);

	// Use Effect
	useEffect(() => {
		const storedMode = localStorage.getItem("mmg-lightMode");
		if (JSON.parse(storedMode) !== null) {
			changeLightMode(JSON.parse(storedMode));
		}
	}, []);

	// Functions
	const changeLightMode = (value) => {
		setLightMode(value);
		console.log("Light Mode = ", value);
	};

	return (
		<CredentialsContext.Provider value={{ lightMode, changeLightMode }}>
			{children}
		</CredentialsContext.Provider>
	);
};
