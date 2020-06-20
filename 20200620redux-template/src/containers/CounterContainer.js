// container componenet (smart component)
import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { increment, decrement } from '../store/modules/counter';
import * as CounterActions from '../store/modules/counter';
import Counter from '../components/Counter';
import { bindActionCreators } from 'redux';

class CounterContainer extends Component {
  render() {
    //const { color, number, increment, decrement1 } = this.props; // mapStateToProps로 매핑한 state값
    const { color, number, counterActions } = this.props; 
    //const {increment, decrement} = this.props.counterActions;

    return (
      <Counter
        color={color}
        number={number}
        // increment={increment}
        // decrement={decrement1}
        increment={counterActions.increment}
        decrement={counterActions.decrement}
      />
    );
  }
}

// state: store의 state (connect가 주는 것)
const mapStateToProps = state => ({
  // store.getState => {counter: {number: 0}}
  number: state.counter.number,
  color: state.counter.color,
});

const mapDispatchToProps = dispatch => ({
  counterActions: bindActionCreators(CounterActions, dispatch)
});

// connect가 bindActinCreators를 위처럼 알아서 해줌 
// const mapDispatchToProps = {
//   increment,
//   decrement,
// };

// const mapDispatchToProps = dispatch => ({
//   // 위에서 임포트한 increment는 액션생성함수 -> dispatch안의 increment(): {type: 'counter/INCREMENT'}을 디스패치할 수 있게 하는 함수
//   // 여기서 생성한 increment는 props로 내려줄 함수
//   increment: () => dispatch(increment()),
//   decrement1: () => dispatch(decrement()),
// });

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

// connect => HOC
// HOC(component) => Enhanced Component: 향상된 컴포넌트

