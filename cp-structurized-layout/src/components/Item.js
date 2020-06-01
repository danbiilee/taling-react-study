import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
	
	render() {
		// console.log('item render'); 

		const { todo } = this.props;

		return (
			<div className="Item">
				<div className="check">&#10004;</div>
				<div className="remove">REMOVE</div>
				<div className="text">{todo.text}</div>
			</div>
		);
	}
}

export default Item;
