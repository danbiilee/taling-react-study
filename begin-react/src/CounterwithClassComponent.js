import React, { useState, useReducer, Component } from 'react';

class Counter extends Component {
	state = {
		number: 0,
	};

	handleIncrease = () => {
		this.setState(state => ({
			number: state.number + 1,
		}));
		this.setState(state => ({
			number: state.number + 1,
		}));
	} 
	handleDecrease = () => {
		this.setState(state => ({
			number: state.number - 1,
		}));
	} 

	render() {
		return (
			<div>
        <h1>{this.state.number}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
      </div>
		);
	}
}

export default Counter;