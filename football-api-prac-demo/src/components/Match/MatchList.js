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

      const response = await axios.get(
        /* 'https://apiv2.apifootball.com/?action=get_events&from=2020-02-01&to=2020-03-01&league_id=148&APIkey=51c2783841777dcf75c3f21f00a27e2d870758ffaac988ea831bb8303f959567', */
        `https://apiv2.apifootball.com/?action=get_events&from=${startDate}&to=${endDate}&league_id=${this.props.leagueId}&APIkey=51c2783841777dcf75c3f21f00a27e2d870758ffaac988ea831bb8303f959567`,
      );
      //console.log(response.data); // data에 뭐 들어있는지 꼭 확인해보기 !

      this.setState({
        data: response.data,
      });
    } catch (e) {
      console.error(e);
    }

    // 작업이 끝나면 다시 false
    this.setState({
      loading: false,
    });
  };

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps, prevState) {
    // 부모컴포넌트가 들고 있던 range date가변경되서
    // 지금 이 컴포넌트가 리렌더 됐기 때문에 cDU 사용해서 리스트 리렌더
    if (
      this.props.range !== prevProps.range ||
      this.props.leagueId !== prevProps.leagueId
    ) {
      this.getData();
    }
  }

  render() {
    const { data, loading } = this.state;
    return (
      <div>
        {loading && <h2 style={{ textAlign: 'center' }}>data loading...</h2>}
        {!loading &&
        data &&
        !data.error /* 매칭된 시합이 아예 없는날 대비 추가. 왜 에러나쥬!!?!? */ &&
          data.map(d => <Match key={d.match_id} data={d} />)}
      </div>
    );
  }
}

export default MatchList;
