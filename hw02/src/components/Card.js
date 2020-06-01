import React, { Component } from 'react';
import './Card.css';


class Card extends Component {
		render() {//TODO: implement me
				const { card } = this.props;
        return (
          card.value
        );
    }
}
export default Card;