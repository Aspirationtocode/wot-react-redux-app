import {initialState} from './players';
export default function (state=initialState, action) {
	switch (action.type) {
	case "FETCH_PLAYERS_DATA":
			return action.payload;
			break;
	}
	return state;
}
