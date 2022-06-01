import { DARK_MODE, LIGHT_MODE } from "../types";

// Getting lightMode value from local storage
const storedLightMode =
	typeof window !== "undefined"
		? JSON.parse(localStorage.getItem("mmg-lightMode"))
		: true;

let initialState = { lightMode: storedLightMode };

export const colorModeReducer = (state = initialState, action) => {
	switch (action.type) {
		case LIGHT_MODE:
			return {
				lightMode: true,
			};

		case DARK_MODE:
			return {
				lightMode: false,
			};

		default:
			return state;
	}
};

// Reducers are Pure function -=> Same argument returns same value
// Takes the current instance of the immutable Store and returns the updated Store object to Store
