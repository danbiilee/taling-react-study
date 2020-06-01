import React, { Component } from 'react';
import './List.css';
import Item from './Item';

class List extends Component {
	render() {
		const { todos, onCheck, onDelete } = this.props;

		return (
		<div className="List">
		{
			todos.map(todo => {
				return (
					<Item key={todo.id} todo={todo} onCheck={onCheck} onDelete={onDelete}></Item>
				);
			})
		}
		</div>
		);
	}
}

export default List;
