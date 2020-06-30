import React, { Component } from 'react';

class App extends Component {
  state = {
	key: new Date().getTime(),
    username: '',
    password: '',
    list: [],
  };

  handleChange = e => {
    // const value = e.target.value;
    // const value = e.target.value;
    const {value, name} = e.target;

    // e.target의 name을 동적으로 key로 생성하고, e.target의 value를 해당 key의 값으로 
    // const nextObject = {};
    // nextObject.name = value; // nextObject = {username: 'a'}
    // this.setState(nextObject);

    this.setState({
      [name]: value,
    })
  };

  handleInsert = () => {
    // this.state가 중복되면 비구조할당
    const {list, username, password}= this.state;

    this.setState({
      list: list.concat({
		key: new Date().getTime(),
        /* username: username,
        password: password, */
        // key와 value가 같으면 생략 
        username,
        password,
      }),
      // input값 초기화 
      username: '',
      password: '',
    });
  };

  render() {
    return (
      <div>
        <input value={this.state.username} name="username" onChange={this.handleChange}/>
        <input value={this.state.password} name="password" onChange={this.handleChange}/>
        <button onClick={this.handleInsert}>추가하기</button>
        <ul>
          {
            this.state.list.map((item, index) => {
              // 위의 리턴절처럼 ()생략 가능. ()쓸 거면 return 키워드 바로 옆에 
              // return <li key={index}> {item.username}의 비밀번호는 {item.password}입니다.</li>;
              return ( 
                <li key={item.key}>
                  {item.username}의 비밀번호는 {item.password} 입니다.
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