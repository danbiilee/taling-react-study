import React, { Component } from 'react';
import './MatchTemplate.scss';

class MatchTemplate extends Component {
	render() {
		return (
			<div className="template">
				<div>{this.props.header}</div>
				<div>{this.props.children}</div>
			</div>
		);
	}
}

export default MatchTemplate;
