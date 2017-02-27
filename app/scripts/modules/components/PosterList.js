import React, {Component} from 'react';

class PosterList extends Component {
	constructor(props) {
		super(props);
		this.contentChangeHandler = this.contentChangeHandler.bind(this);
	}
	contentChangeHandler(e) {
		const {state, props} = this;
		const {target} = e;
		const value = target.value;
		const inputName = target.name;
		this.props.onChangePlayersData(props.id, {[inputName]: value});
	}
	render() {
		const {props, state} = this;
		return (
			<div className="poster-list">
				<div className="poster-list__part--left">
					<div className="poster-list-item-photo" style={{backgroundImage: `url(${props.photoURL})`}} />
				</div>
				<div className="poster-list__part--right">
					<div className="poster-list-item poster-list-item--nick">
							<span className="poster-list-item__label poster-list-item__label--nick">Ник в игре: </span>
							<input className="poster-list-item__text poster-list-item__text--nick" name="nick" value={props.nick} onChange={(e) => this.contentChangeHandler(e)} />
					</div>
					<div className="poster-list-item poster-list-item--favourite-tank">
							<span className="poster-list-item__label poster-list-item__label--favourite-tank">Любимый танк: </span>
							<input className="poster-list-item__text poster-list-item__text--favourite-tank" name="favouriteTank" value={props.favouriteTank} onChange={(e) => this.contentChangeHandler(e)}/>
					</div>
					<div className="poster-list-item poster-list-item--wn8">
							<span className="poster-list-item__label poster-list-item__label--wn8">Рейтинг WN8: </span>
							<input className="poster-list-item__text poster-list-item__text--wn8" name="wn8" value={props.wn8} onChange={(e) => this.contentChangeHandler(e)}/>
					</div>
				</div>
			</div>
		)
	}
}

export default PosterList;
