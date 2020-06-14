import React, { Component } from 'react';
import MatchTemplate from './MatchTemplate/MatchTemplate';
import MatchFinder from './MatchFinder';
import Match from './Match';
import dateFormatter from '../utils/dateFormatter';

class App extends Component {
  state = {
    range: {
      startDate: '2020-02-01',
      endDate: '2020-03-01',
    },
    leagueId: 148,
  };

  handleRange = range => {
    const startDate = dateFormatter(range[0]);
    const endDate = dateFormatter(range[1]);

    this.setState({
      range: {
        startDate,
        endDate,
      },
    });
  };

  handleLeagueId = leagueId => {
    this.setState({
      leagueId,
    });
  };

  render() {
    const { range, leagueId } = this.state;

    return (
      <div>
        <MatchTemplate
          header={
            <MatchFinder
              setRange={this.handleRange}
              setLeagueId={this.handleLeagueId}
              leagueId={leagueId}
            />
          }
        >
          <Match range={range} leagueId={leagueId} />{' '}
          {/* MatchTemplate의 children */}
        </MatchTemplate>
      </div>
    );
  }
}

export default App;
