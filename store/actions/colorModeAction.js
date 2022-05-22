import { COLOR_MODE } from "../types";

export const setColorMode = (colorMode) => (dispatch) => {
	console.log("Color Mode = ", colorMode);
	dispatch({
		type: COLOR_MODE,
		payload: colorMode,
	});
};
