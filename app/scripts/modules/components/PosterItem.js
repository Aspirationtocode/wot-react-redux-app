import React, {Component, PropTypes} from 'react';

class PosterItem extends Component {
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
			<div className="poster-item">
				<div className="poster-item-info__part--left">
					<div className="poster-item-info__photo" style={{backgroundImage: `url(${props.photoURL})`}} />
				</div>
				<div className="poster-item-info__part--right">
					<div className="poster-item-info poster-item-info--nick">
							<span className="poster-item-info__label poster-item-info__label--nick">Ник в игре: </span>
							<input className="poster-item-info__text poster-item-info__text--nick" name="nick" value={props.nick} onChange={(e) => this.contentChangeHandler(e)} />
					</div>
					<div className="poster-item-info poster-item-info--favourite-tank">
							<span className="poster-item-info__label poster-item-info__label--favourite-tank">Любимый танк: </span>
							<input className="poster-item-info__text poster-item-info__text--favourite-tank" name="favouriteTank" value={props.favouriteTank} onChange={(e) => this.contentChangeHandler(e)}/>
					</div>
					<div className="poster-item-info poster-item-info--wn8">
							<span className="poster-item-info__label poster-item-info__label--wn8">Рейтинг WN8: </span>
							<input className="poster-item-info__text poster-item-info__text--wn8" name="wn8" value={props.wn8} onChange={(e) => this.contentChangeHandler(e)}/>
					</div>
				</div>
			</div>
		)
	}
}

PosterItem.propTypes = {
	nick: PropTypes.string,
	favouriteTank: PropTypes.string,
	wn8: PropTypes.string,
	photoURL: PropTypes.string,
	id: PropTypes.number,
	onChangePlayersData: PropTypes.func,
}

export default PosterItem;
