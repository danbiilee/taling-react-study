import React, { Component, createRef } from 'react';

class App extends Component {
  // 지난 시간 프로젝트 이어서 ! 
  id = 1; // 렌더되고 나서 만들어지면 안되므로 rneder 다음에 만드는 게 아니라 

  state = {
    username: '',
    password: '',
    list: [],
  };

  // 엔터치고 다시 유저명으로 포커스 이동하게 하기 위함
  // 렌더되기 전 constructor 시점에 만들어지는 것. 
  // 이 시점에선 아직 null이고 
  // useernameInput = null; // 방법1
  useernameInput = createRef();

  handleChange = e => {
    const {value, name} = e.target;

    this.setState({
      [name]: value,
    })
  };

  handleInsert = e => {
    // form태그의 새로고침을 막아주는 역할! 
    e.preventDefault();

    const {list, username, password}= this.state;

    this.setState({
      // 위로 올려도 작동한다! 
      username: '',
      password: '',
      list: list.concat({
        username,
        password,
        id: this.id
      }),
      // username: '',
      // password: '',
    });

    this.id ++;
    // this.useernameInput.focus(); // insert했을 때 포커스를 username에 
    this.useernameInput.current.focus(); // 지금 내가 갖고 있는 레퍼런스라는 뜻 
  };

  handelDelete = (id) => {
    // 방법 1.
    // // 1. 배열 복사
    // const copiedList = this.state.list.slice(); 
    // // 2. 요소 찾기(인덱스 찾기)
    // // 파라미터로 받은 id랑 리스트 각 요소의 id를 비교해서 해당 요소의 idnex를 찾음
    // const index = this.state.list.findIndex(user => user.id === id);
    // // 3. 찾은 요소 삭제
    // copiedList.splice(index, 1);
    // // 4.반영
    // this.setState({
    //   list: copiedList,
    // })

    // 방법 2. 
    this.setState({
      list: this.state.list.filter((user => user.id !== id)),
    });
  };

  render() {
    const { username, password, list } = this.state;
    return (
      <div>
        <form onSubmit={this.handleInsert}>
          {/* <input value={username} name="username" onChange={this.handleChange} ref={ (ref) => this.useernameInput = ref}/> */}
          <input value={username} name="username" onChange={this.handleChange} ref={this.useernameInput}/>
          <input value={password} name="password" onChange={this.handleChange}/>
          <button type="submit">추가하기</button>
        </form>
        <ul>
          {
            list.map((user) => {
              return ( 
                <li key={user.id}>
                  {user.username}의 비밀번호는 {user.password} 입니다.
                  <br />
                  <button onClick={() => this.handelDelete(user.id)}>삭제하기</button>
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