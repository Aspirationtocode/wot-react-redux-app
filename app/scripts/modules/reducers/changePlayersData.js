import {initialState} from './players';
export default function (state=initialState, action) {
	switch (action.type) {
		case "CHANGE_PLAYERS_DATA":
			Object.assign(state[action.payload.playerId], action.payload.data)
			return [...state];
			break;
		case "ADD_PLAYER":
			return [...state, action.payload];
			break;
	}
	return state;
}
