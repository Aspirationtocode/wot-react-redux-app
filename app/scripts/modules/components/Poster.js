import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import PosterList from './PosterList';
import {SCROLLBARS_STYLE} from '../constants';
import {changePlayersData} from '../actions';

class Poster extends Component {
	constructor(props) {
		super();
		this.state = {
			players: props.players
		}
		this.changePlayersData = this.changePlayersData.bind(this);
	}
	changePlayersData(id, data) {
		const {state, props} = this;
		const currentPlayers = state.players;
		currentPlayers[id] = Object.assign(currentPlayers[id], data);
		props.changePlayersData(currentPlayers);
		this.setState({
			players: currentPlayers
		});
	}
	render() {
		const {props} = this;
		return (
			<Scrollbars style={SCROLLBARS_STYLE}>
				<div className="poster">
					{this.renderPlayers()}
				</div>
			</Scrollbars>
		)
	}
	renderPlayers() {
		const players = this.state.players;
		return players.map((player, i) => {
			return (
				<PosterList
					nick={player.nick}
					favouriteTank={player.favouriteTank}
					wn8={player.wn8}
					photoURL={player.photoURL}
					key={i}
					id={i}
					onChangePlayersData={(id, data) => {this.changePlayersData(id, data)}}
				/>
			)
		})
	}
}

const mapStateToProps = (state) => {
	return {
		players: state.players
	}
}

const matchDispatchToProps = (dispatch) => {
	return bindActionCreators({
		changePlayersData
	}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Poster);
