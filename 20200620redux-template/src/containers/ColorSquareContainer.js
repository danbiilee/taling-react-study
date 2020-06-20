import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeColor } from '../store/modules/counter';
import ColorSquare from '../components/ColorSquare';

class ColorSquareContainer extends Component {
  render() {
    //store에서 받은 color: 지금 선택된 컬러
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