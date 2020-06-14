import React, { Component } from 'react';
import Calendar from './Calendar';
import League from './League';

class MatchFinder extends Component {
  render() {
    const { setRange, setLeagueId, leagueId } = this.props;
    return (
      <div>
        <League setLeagueId={setLeagueId} leagueId={leagueId} />
        <Calendar setRange={setRange} />
      </div>
    );
  }
}

export default MatchFinder;
