import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import PosterItem from './PosterItem';
import {SCROLLBARS_STYLE} from '../constants';

import {changePlayersData, addPlayer} from '../actions';

class Poster extends Component {
	constructor(props) {
		super();
		this.changePlayersData = this.changePlayersData.bind(this);
		this.addPlayer = this.addPlayer.bind(this);
	}
	addPlayer() {
		const {props} = this;
		const {nick, favouriteTank, wn8, photoURL} = this.refs;
		props.addPlayer({
			nick: nick.value,
			favouriteTank: favouriteTank.value,
			wn8: wn8.value,
			photoURL: photoURL.value,
		});
	}
	changePlayersData(id, data) {
		const {props} = this;
		const currentPlayers = props.players;
		props.changePlayersData({data: data, playerId: id});
	}
	render() {
		const {props} = this;
		return (
			<Scrollbars style={SCROLLBARS_STYLE}>
				<div className="poster">
					<div className="poster__form">
						<input
							type="text"
							placeholder="Введите ник..."
							ref="nick"
						/>
						<input
							type="text"
							placeholder="Введите любимый танк..."
							ref="favouriteTank"
						/>
						<input
							type="text"
							placeholder="Введите рейтинг wn8..."
							ref="wn8"
						/>
						<input
							type="text"
							placeholder="Введите URL..."
							ref="photoURL"
						/>
						<button onClick={this.addPlayer}>Добавить игрока</button>
					</div>
					{this.renderPlayers()}
				</div>
			</Scrollbars>
		)
	}
	renderPlayers() {
		const players = this.props.players;
		return players.map((player, i) => {
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
		changePlayersData,
		addPlayer
	}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Poster);
