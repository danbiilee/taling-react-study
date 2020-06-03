import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    if(this.props.card !== nextProps.card) {
      return true;
    } else {
      return false;
    }
  }
  
  render() {//TODO: implement me
    const { card } = this.props;

    return (
      <div>
        { card.isOpen ? card.value : '?' }
      </div>
    );
  }
}
export default Card;