import React, { Component } from 'react';
import axios from 'axios';
import Match from './Match';

class MatchList extends Component {
  state = {
    loading: false,
    data: null,
  };

  getData = async () => {
    try {
      this.setState({
        loading: true,
      });

			const { startDate, endDate } = this.props.range;
			const {leaguId} = this.props.match.params.leaguId;

      const response = await axios.get(
        //`https://apiv2.apifootball.com/?action=get_events&from=${startDate}&to=${endDate}&league_id=${this.props.leagueId}&APIkey=51c2783841777dcf75c3f21f00a27e2d870758ffaac988ea831bb8303f959567`,
        `https://apiv2.apifootball.com/?action=get_events&from=${startDate}&to=${endDate}&league_id=${this.props.leagueId}&APIkey=51c2783841777dcf75c3f21f00a27e2d870758ffaac988ea831bb8303f959567`,
      );

      this.setState({
        data: response.data,
      });
    } catch (e) {
      console.error(e);
    }

    this.setState({
      loading: false,
    });
  };

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.range !== prevProps.range ||
      this.props.leagueId !== prevProps.leagueId
    ) {
      this.getData();
    }
  }

  render() {
		console.log(this.props);
		
    const { data, loading } = this.state;
    return (
      <div>
        {loading && <h2 style={{ textAlign: 'center' }}>data loading...</h2>}
        {!loading &&
        data &&
        !data.error && 
          data.map(d => <Match key={d.match_id} data={d} />)}
      </div>
    );
  }
}

export default MatchList;
