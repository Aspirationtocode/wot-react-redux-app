export const changePlayersData = (players) => {
	return {
		type: "CHANGE_PLAYERS_DATA",
		payload: players
	}
}

export const addPlayer = (player) => {
	return {
		type: "ADD_PLAYER",
		payload: player
	}
}
