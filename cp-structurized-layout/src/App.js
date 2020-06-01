import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';

/* 
기능별
1. 입력 인풋
2. 보여주는 배열 
3. 배열의 각 요소
4. 각 아이템 클릭했을 때 체크되도록
5. 각 아이템 클릭했을 때 삭제되도록

*/
class App extends Component {
  id = 1;

  state = {
    todos: []
  };

  handleInsert = text => {
    this.setState({
      todos: this.state.todos.concat({
        text,
        id: this.id,
        done: false
      })
    });
    this.id++;
  };

  handleCheck = id => {

  };

	render() {
		return (
			<div className="App">
				<h3>TODO LIST</h3>
				<Form onInsert={this.handleInsert} />
				<List todos={this.state.todos} />
			</div>
		);
	}
}

export default App;
