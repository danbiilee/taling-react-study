import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		if(this.props.todo !== nextProps.todo) {
			console.log(this.props.todo);
			console.log(nextProps.todo);
			return true;
		} else {
			return false;
		}
	};

	render() {
		console.log('item render'); 

		const { todo, onCheck, onDelete } = this.props;

		return (
			<div className={`Item ${todo.done && 'active'}`}  onClick={() => onCheck(todo.id)}>
				<div className="check">&#10004;</div>
				<div className="remove" onClick={e => {
					e.stopPropagation();
					onDelete(todo.id);	
				}}>REMOVE</div>
				<div className="text">{todo.text}</div>
			</div>
		);
	}
}

export default Item;
