import React, { Component } from 'react';
import './App.css';

import Form from './components/Form';
import List from './components/List';

class App extends Component {
  id = 1;

	state = {
    todos: [],
  };

  handleInsert = text => {
    this.setState({
      todos: this.state.todos.concat({
        // 키랑 밸류랑 같으면 생략 가능 
        text,
        id: this.id,
        done: false,
      })
    })

    this.id++;
  }

  handleCheck = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          return {
            ...todo,
            done: !todo.done
          };
        } else {
          return todo;
        }

      })
    })
  };

  handleDelete = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

	render() {
		return (
			<div className="App">
				<h3>TODO LIST</h3>
				<Form onInsert={this.handleInsert} />
				<List todos={this.state.todos} onCheck={this.handleCheck} onDelete={this.handleDelete} />
			</div>
		);
	}
}

export default App;
