import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import PosterItem from './PosterItem';
import {SCROLLBARS_STYLE} from '../constants';
import {changePlayersData} from '../actions';
import DATABASE from '../database';

class Poster extends Component {
	constructor(props) {
		super();
		this.state = {
			players: props.players
		}
		this.changePlayersData = this.changePlayersData.bind(this);
		this.addPlayer = this.addPlayer.bind(this);
	}
	addPlayer() {
		const {nick, favouriteTank, photoURL, wn8} = this.refs;
		const {state, props} = this;
		console.log(nick, favouriteTank, photoURL, wn8)
		let newArrOfPlayers = state.players;
		newArrOfPlayers.push({
				nick: nick.value,
				favouriteTank: favouriteTank.value,
				photoURL: photoURL.value,
				wn8: wn8.value,
		});
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
	renderPlayers() {
		const players = this.state.players;
		const renderedPlayers = players.map((player, i) => {
			return (
				<PosterItem
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
		return (players.length) ? renderedPlayers :(<div>Игроков пока нет, добавьте новых:</div>);
	}
	render() {
		const {props} = this;
		return (
			<Scrollbars style={SCROLLBARS_STYLE}>
				<div className="poster">
					{this.renderPlayers()}
					<div className="poster__form">
						<input type="text" ref="nick" placeholder="Введите ник.."/>
						<input type="text" ref="photoURL" placeholder="Введите URL фото.."/>
						<input type="text" ref="favouriteTank" placeholder="Любимый танк..."/>
						<input type="text" ref="wn8" placeholder="Введите рейтинг игрока по wn8..."/>
						<button onClick={this.addPlayer}>Отправить данные</button>
					</div>
				</div>
			</Scrollbars>
		)
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
