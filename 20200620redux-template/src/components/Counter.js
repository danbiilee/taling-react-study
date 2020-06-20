// presentational componenet

import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  render() {
    const { color, number, increment, decrement } = this.props;
    return (
      <div className="Counter">
        <h1 style={{color: color}}>{number}</h1>
        <div className="btn-wrapper">
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </div>
      </div>
    );
  }
}

export default Counter;
