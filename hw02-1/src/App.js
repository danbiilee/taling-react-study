import React, { Component } from 'react';
import './App.css';

import Timer from './components/Timer';
import Grid from './components/Grid';
import ScoreBoard from './components/ScoreBoard';

import {shuffle} from './utils';


class App extends Component {

  /* This values are not stored in state because they do not affect rendering */

  //TODO: add id property for list's key property
  
  // number of same cards in a deck
  same_cards = 2;
  // type of cards
  pool = '0123456789ABCDEF'.split('');
  // cards that are flipped (but not correct, yet)
  opened_cards = [];

  state = {
    score: 0, // number of correct answers
    cards: [], // list of cards
  };

  initGame = () => {
    let cards = [];
    for (var i = 0; i < this.same_cards; i++) {
      cards = cards.concat(
        shuffle(this.pool).map(val => {
          return ( {
            //TODO: populate the list with properties of Object
          })}))
    }

    this.setState({
      score: 0,
      cards: cards
    })
  }

  //TODO: implement me
  handleToggle = () => {}

  //open upto same_cards to see if user's choice is correct or not
  tempOpen = async (id, value) => {
    this.opened_cards.push({ id: id, value: value });

    // opened a wrong card :
    // since every card in opened_cards should have same value,
    // if the first card value !== last(just opened) value,
    // it means that the last card was wrong choice.
    if (this.opened_cards[0].value !== this.opened_cards.slice(-1)[0].value) {
      await new Promise(r => setTimeout(r, 700)); // show card briefly
      for (var x of this.opened_cards) {
        this.handleToggle(x.id) // return the temporary open cards to hidden position
      }
      //reset the open cards
      this.opened_cards = [];
    }
    else if (this.opened_cards.length === this.same_cards) {
      // if we have chosen all the cards with certain value
      this.setState({
        score: this.state.score + this.opened_cards.length
      })
      this.opened_cards = [];
    }
  }

  render() {
    const { cards, score } = this.state;
    // the game is finished if score equals the number of cards
    const done = score === cards.length
    return (
      <div className="App">
        <h3>Memory Game</h3>
        {/* <Grid /> TODO: look at Grid.js to see which props to pass */}
        {/* <ScoreBoard /> TODO: what should be passed to scoreBoard? */}
        <Timer running={!done}/>
        {!done && <button onClick={this.initGame}> Start </button>}
      </div>
    );
  }
}

export default App;