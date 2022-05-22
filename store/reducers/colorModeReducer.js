import { COLOR_MODE } from "../types";

const colorModeReducer = (state = { colorMode: true }, action) => {
	switch (action.type) {
		case COLOR_MODE:
			return {
				...state,
				colorMode: action.payload,
			};

		default:
			return { ...state };
	}
};

export default colorModeReducer;
