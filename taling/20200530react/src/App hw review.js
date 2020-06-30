import React, { Component, createRef, useReducer } from 'react';

class App extends Component {
  id = 1;

  state = {
    username: '',
    password: '',
    list: [],
    // 추가
    updateUsername: '',
    updatePassword: '',
  };

  usernameInput = createRef();

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
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
        id: this.id,
        isFixMode: false, // 수정모드 여부
      }),
    });

    this.id++;
    this.usernameInput.current.focus();
  };

  handleDelete = id => {
    this.setState({
      list: this.state.list.filter(user => user.id !== id),
    });
  };

  handleShowForm = id => {
    const { list } = this.state;
    this.setState({
      list: list.map(
        user =>
          user.id === id
            ? { ...user, isFixMode: !user.isFixMode }
            : { ...user, isFixMode: false }, // 아닌 애들은 false로 해줘야 수정폼이 1개씩만 열림
      ),
    });
    console.log(this.usernameInput);
    this.usernameInput.current.focus();
  };

  handleUpdate = (e, id) => {
    e.preventDefault();
    const { list, updateUsername, updatePassword } = this.state;
    this.setState({
      list: list.map(user =>
        user.id === id
          ? {
              ...user,
              username: updateUsername,
              password: updatePassword,
              isFixMode: false,
            }
          : user,
      ),
      updateUsername: '',
      updatePassword: '',
    });
  };

  render() {
    const { username, password, list } = this.state;

    return (
      <div>
        <form onSubmit={this.handleInsert}>
          <input
            name="username"
            value={username}
            onChange={this.handleChange}
            ref={this.usernameInput}
          ></input>
          <input
            name="password"
            value={password}
            onChange={this.handleChange}
          ></input>
          <button type="submit">추가하기</button>
        </form>

        <ul>
          {list.map(user => {
            return (
              <li key={user.id}>
                {user.username}의 비밀번호는 {user.password}입니다.
                <button
                  type="button"
                  onClick={() => this.handleDelete(user.id)}
                >
                  삭제하기
                </button>
                <button
                  type="button"
                  onClick={() => this.handleShowForm(user.id)}
                >
                  수정하기
                </button>
                {/* fixMode가 true일때만 수정폼 보이기 */
                user.isFixMode && (
                  <form onSubmit={e => this.handleUpdate(e, user.id)}>
                    <input
                      // autoFocus
                      ref={this.usernameInput}
                      name="updateUsername"
                      defaultValue={user.username}
                      onChange={this.handleChange}
                    ></input>
                    <input
                      name="updatePassword"
                      defaultValue={user.password}
                      onChange={this.handleChange}
                    ></input>
                    <button type="submit">저장</button>
                  </form>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
