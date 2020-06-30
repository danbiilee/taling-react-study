import React, { Component } from 'react';
import { Route } from 'react-router-dom';
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
          <Route
            exact
            path="/"
            render={() => (
              <Match
                range={range}
                leagueId={leagueId}
              ></Match>
            )}
          ></Route>
          <Route
            path="/leagues/:leagueId"
            render={(props) => (
              <Match
                props={props}
                range={range}
                leagueId={leagueId}
                setLeagueId={this.handleLeagueId}
              ></Match>
            )}
          ></Route>
        </MatchTemplate>
      </div>
    );
  }
}

export default App;
