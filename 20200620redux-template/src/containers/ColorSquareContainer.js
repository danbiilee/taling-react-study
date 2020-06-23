import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeColor } from '../store/modules/counter';
import ColorSquare from '../components/ColorSquare';

class ColorSquareContainer extends Component {
  render() {
		// color: store에서 받은 값으로 지금 선택된 컬러
		// 액션생성함수에 선택한 컬러가 담기고, 리듀서에서 store에 그 컬러가 저장되고, 그 컬러를 가져와 props로 매핑
    const {changeColor, color, number} = this.props; 

    return <ColorSquare number={number} selected={color} onSelect={changeColor} />;
  }
}

const mapStateToProps = state => ({
  color: state.counter.color,
  number: state.counter.number,
});

const mapDispatchToProps = dispatch => ({
  changeColor: (color) => dispatch(changeColor(color)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorSquareContainer);