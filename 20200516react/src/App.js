import React, { Component } from 'react';

class App extends Component {

  state = {
    key: new Date().getTime(),
    username: '',
    password: '',
    list: []
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleInsert = () => {
    const { key, username, password, list } = this.state;
    list.push({
      key,
      username,
      password
    });

    this.setState({
      key: new Date().getTime(),
      username: '',
      password: '',
      list
    });
  };

  render () {
    const { username, password, list } = this.state;
    return(
      <div>
        <input type="text" name="username" value={username} onChange={this.handleChange}></input>
        <input type="text" name="password" value={password} onChange={this.handleChange}></input>
        <button onClick={this.handleInsert}>+</button>

        <ul>
          {
            list.map( item => {
              return (
                <li key={item.key}>{item.username}, {item.password}</li>
              )
              ;
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;