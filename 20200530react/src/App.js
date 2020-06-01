// 1. 입력 인풋(제출)
// 2. 고유 키
// 3. 포커스 이동
// 4. 삭제
// 5. 수정 
import React, { Component, createRef } from 'react';

class App extends Component {
  id = 1;
  state = {
    username: '',
    password: '',
    list: [],
    editedId: '',
    editedUsername: '',
    editedPassword: '',
    editedList: []
  };

  usernameInput = createRef();
  editForm = createRef();

  handleChange = e => {
    const { name, value } = e.target;
    
    this.setState({
      [name]: value
    });
  };
  
  handleInsert = e => {
    e.preventDefault();
    const { username, password, list } = this.state;
    
    this.setState({
      username: '',
      password: '',
      list: list.concat({
        username,
        password,
        id: this.id 
      })
    });

    this.id++;
    this.usernameInput.current.focus();
  };

  handleDelete = id => {
    this.setState({
      list: this.state.list.filter(user => user.id !== id)
    });
  };

  handleEditForm = id => {
    const { list } = this.state;
    const filterdList = list.filter(user => user.id === id);

    this.setState({
      editedId: id,
      editedUsername: filterdList[0].username,
      editedPassword: filterdList[0].password
    });

    console.log(this.editForm);
    this.editForm.current.style.display = 'block';
  };

  handleEditChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleEditSubmit = e => {
    e.preventDefault();

    const { list, editedId, editedUsername, editedPassword } = this.state;
    this.setState({
      list: list.map(user => {
        if(user.id === editedId) {
          return {
            id: user.id,
            username: editedUsername,
            password: editedPassword
          };
        } else return user;
      }),
      editedId: '',
      editedUsername: '',
      editedPassword: ''
    });

    this.editForm.current.style.display = 'none';
  };

  render() {
    const { username, password, list, editedUsername, editedPassword } = this.state;

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
                <button type="button" onClick={() => this.handleEditForm(user.id)}>수정하기</button>
                {/* 
                  1. 수정하기 버튼 클릭하면 수정폼 보여야함.
                  2. 저장하기 버튼 클릭하면 기존 list배열 변경되고, 수정폼 다시 안보여야함.(리렌더)
                  - username, password를 어디에서 관리할건지? 
                  3. 다른 리스트의 수정하기 버튼 클릭하면 이전 수정폼 안보이고, 새로 클릭한 수정폼 보여야함. 
                */}
                <form style={{display: "none"}} ref={this.editForm} onSubmit={this.handleEditSubmit}>
                  <input name="editedUsername" value={editedUsername} onChange={this.handleEditChange}></input>      
                  <input name="editedPassword" value={editedPassword} onChange={this.handleEditChange}></input>      
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
