import {combineReducers} from 'redux';
import changePlayersData from './changePlayersData';



const mainReducer = combineReducers({
	players: changePlayersData,
})

export default mainReducer;
