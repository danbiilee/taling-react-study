import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		// 지금 내가 갖고 있는 todo랑 클릭했을 때 바뀌게될 todo랑 달라지면 걔만 업데이트해줘
		if(this.props.todo !== nextProps.todo) {
			return true;
		} else return false;
	}
	
	render() {
		// console.log('item render'); 

		const { todo, onCheck, onDelete } = this.props;

		return (
			<div className={` Item ${todo.done && 'active'} `} onClick={() => onCheck(todo.id)}>
				<div className="check">&#10004;</div>
				<div className="remove" onClick={(e) =>{ 
					e.stopPropagation(); // 버블링 막기 
					onDelete(todo.id);
				}}>REMOVE</div>
				<div className="text">{todo.text}</div>
			</div>
		);
	}
}

export default Item;
