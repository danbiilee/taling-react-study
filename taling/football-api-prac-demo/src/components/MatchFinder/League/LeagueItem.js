import React, { Component, Fragment } from 'react';
import './LeagueItem.scss';

class LeagueItem extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		if(this.props.selected !== nextProps.selected) {
			// 리그아이디가 바뀌는 게 아니라 selected값이 바뀌는 거. css가 바뀌는 거니까 
			return true;
		} else return false;
	}
	
  render() {
		console.log('leagueItem re-render!');

    const { league_name, league_id, selected, setLeagueId } = this.props;
    return (
      <Fragment>
        <span className={`league ${selected && 'selected'}`} onClick={() => setLeagueId(league_id)}>
          {league_name}
        </span>
      </Fragment>
    );
  }
}

export default LeagueItem;
