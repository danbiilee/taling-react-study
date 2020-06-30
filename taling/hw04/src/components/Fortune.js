import React, { Component } from 'react';
import axios from 'axios';

const FORTUNE_API = 'http://askat.me:8000/api/fortune/';

class Fortune extends Component {
  componentDidMount() {
    axios
      .get(FORTUNE_API + this.props.match.params.birthday)
      .then(response => console.log(response))
      .catch(e => console.error(e));
  }

  render() {
    const { name, birthday } = this.props.match.params;
    return (
      <div className="Fortune">
        {name} was born in {birthday}
      </div>
    );
  }
}

export default Fortune;
