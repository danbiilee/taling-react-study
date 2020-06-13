import React, { Component } from 'react';
import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';

class App extends Component {
  state = {
    birthday: '',
    data: '',
  };

  cache = setupCache({
    maxAge: 15 * 60 * 1000,
  });

  api = axios.create({
    adapter: this.cache.adapter,
  });

  handleChange = e => {
    this.setState({
      birthday: e.target.value,
    });
  };

  getLottoData = async () => {
    try {
      const [lotto1, lotto2] = await axios.all([
        axios.get('http://askat.me:8000/api/lotto1'),
        axios.get('http://askat.me:8000/api/lotto2'),
      ]);
      this.setState({
        data: lotto1.data.concat(lotto2.data).join(' '),
      });
    } catch (e) {
      console.error(e);
    }
  };

  getFortuneData = () => {
    axios
      .get('http://askat.me:8000/api/fortune/' + this.state.birthday)
      .then(response => {
        this.setState({
          data: response.data,
        });
      })
      .catch(e => {
        console.error(e);
      });
  };

  getBadData = async () => {
    try {
      const response = await axios.get('http://askat.me:8000/api/bad');
      this.setState({
        data: response.data,
      });
    } catch (e) {
      console.error(e);
      alert('oops!');
    }
  };

  getSlowData = () => {
    // this.api({
    //   url: 'http://askat.me:8000/api/slow',
    //   method: 'get',
    // })
    this.api
      .get('http://askat.me:8000/api/slow')
      .then(response => {
        this.setState({
          data: response.data,
        });
      })
      .catch(e => {
        console.error(e);
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.getLottoData}>Lotto</button>
        <input type="date" name="birthday" onChange={this.handleChange}></input>
        <button onClick={this.getFortuneData}>Fortune</button>
        <button onClick={this.getBadData}>Bad</button>
        <button onClick={this.getSlowData}>Slow</button>
        <p>{this.state.data}</p>
      </div>
    );
  }
}

export default App;
