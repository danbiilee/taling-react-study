import React, { Component } from 'react';

class ScoreBoard extends Component {
	render() {
		const { score, total } = this.props;

		return ( //TODO
			<div> {`${score} / ${total}`} </div>
		)
	}
}

export default ScoreBoard;