import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

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