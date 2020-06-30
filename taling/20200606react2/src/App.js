import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    data: null,
  };
  
  //handleClick = () => {
  handleClick = async () => {
    // const response = axios.get('https://jsonplaceholder.typicode.com/posts');
    // console.log(response); // pending

    // .then(): response가 올 때까지 기다림 => promise 객체 반환됨 
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
      //console.log(response); // response에 data뿐만 아니라 다른 값까지 있음. 
      this.setState({
        data: response.data,
      });
    });

    // async-await
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      this.setState({
        data: response.data,
      })
    } catch(e) {
      console.error(e);
    }
  };

  render() {
    const {data} = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>데이터 불러오기</button>
        <ul>
          {/* data가 있을 때만 map처리 */}
          {data && 
            data.map(item => <li key={item.id}>{item.title}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
