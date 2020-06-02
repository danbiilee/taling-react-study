import React, { Component, createRef, useReducer } from 'react';

class App extends Component {
  id = 1;

  // 수정할 selectUser 속성 추가 
  state = {
    username: '',
    password: '',
    list: [],
    selectUser: {},
  };

  usernameInput = createRef();

  handleChange = e => {
    const { name, value } = e.target;
    
    this.setState({
      [name]: value
    });
  };
  
  handleInsert = e => {
    e.preventDefault();
    const { username, password, list } = this.state;
    
    // isShow속성 추가 
    this.setState({
      username: '',
      password: '',
      list: list.map(user => {
        return {...user, isShow: false};
      }).concat({
        username,
        password,
        id: this.id,
        isShow: false 
      }),
      selectUser: {}
    });

    this.id++;
    this.usernameInput.current.focus();
  };

  handleDelete = id => {
    this.setState({
      list: this.state.list.filter(user => user.id !== id)
    });
  };

  handleShowForm = id => {
    const { list } = this.state;

    this.setState({
      list: list.map(user => {
        if(user.id === id) {
          return {
            ...user,
            isShow: !user.isShow
          };
        } else {
          return {
            ...user,
            isShow: false
          };
        }
      }),
      selectUser: {...list.filter(user => user.id === id)}[0]
    });
  };

  handleEditChange = e => {
    const { name, value } = e.target;
    this.setState({
      selectUser: {
        ...this.state.selectUser,
        [name]: value
      }
    });
  };

  handleEditSubmit = e => {
    e.preventDefault();

    const { list, selectUser } = this.state;
    this.setState({
      list: list.map(user => {
        if(user.id === selectUser.id) {
          return selectUser;
        } else {
          return user;
        }
      }),
      selectUser: {}
    });
  };

  render() {
    const { username, password, list, selectUser } = this.state;

    function formStyle(bool) {
      return bool ? {display: 'block'} : {display: 'none'};
    }

    return (
      <div>
        <form onSubmit={this.handleInsert}>
          <input name="username" value={username} onChange={this.handleChange} ref={this.usernameInput}></input>      
          <input name="password" value={password} onChange={this.handleChange}></input>      
          <button type="submit">추가하기</button>
        </form>

        <ul>
        {
          list.map(user => {
            return (
              <li key={user.id}>
                {user.username}의 비밀번호는 {user.password}입니다. 
                <button type="button" onClick={() => this.handleDelete(user.id)}>삭제하기</button>
                <button type="button" onClick={() => this.handleShowForm(user.id)}>수정하기</button>
                <form style={formStyle(user.isShow)} onSubmit={this.handleEditSubmit}>
                  <input name="username" value={selectUser.username} onChange={this.handleEditChange}></input>      
                  <input name="password" value={selectUser.password} onChange={this.handleEditChange}></input>      
                  <button type="submit">저장</button>
                </form>
              </li>
            );
          })
        }
        </ul>
      </div>
    );
  }
}

export default App;
