import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import './LeagueItem.scss';

class LeagueItem extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		if (this.props.selected !== nextProps.selected) {
			return true;
		} else return false;
	}

	render() {
		console.log('leagueItem re-render!');

		const { league_name, league_id, setLeagueId } = this.props;
		return (
			<Fragment>
				<NavLink className="league" activeClassName="selected" to={`/leagues/${league_id}`} onClick={() => setLeagueId(league_id)}>{league_name}</NavLink>
				{/* <span className={`league ${selected && 'selected'}`} onClick={() => {setLeagueId(league_id); history.pushState()}}>
          {league_name}
        </span> */}
			</Fragment>
		);
	}
}

export default LeagueItem;
