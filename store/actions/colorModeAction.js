import { DARK_MODE, LIGHT_MODE } from "../types";

// Currying of functional parameters
export const changeColorMode = (lightMode) => (dispatch) => {
	localStorage.setItem("mmg-lightMode", JSON.stringify(!lightMode));
	console.log("Light Mode = ", !lightMode);

	if (lightMode === false) {
		dispatch({
			type: LIGHT_MODE,
		});
	} else {
		dispatch({
			type: DARK_MODE,
		});
	}
};

// Action dispatch to store which then calls Reducer
