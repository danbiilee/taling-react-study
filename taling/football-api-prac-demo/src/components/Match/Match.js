import React, { Component } from 'react';
import './Match.scss';

class Match extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		if(this.props.data !== nextProps.data) {
			return true;
		} else return false;
	}

	render() {
		console.log('match re-render!!');

		const {
			match_date,
			match_hometeam_name,
			team_home_badge,
			match_hometeam_score,
			match_awayteam_score,
			team_away_badge,
			match_awayteam_name,
			match_stadium
		} = this.props.data;

		return (
			<div className="match">
				<span className="match-date">{match_date}</span>
				<span className="match-team-name home">{match_hometeam_name}</span>
				<img className="match-team-badge" src={team_home_badge} alt="team_home_badge" />
				<span className="match-score">
					<span className="match-team-score">{match_hometeam_score}</span>
					<span className="match-team-score">{match_awayteam_score}</span>
				</span>
				<img className="match-team-badge" src={team_away_badge} alt="team_home_badge" />
				<span className="match-team-name away">{match_awayteam_name}</span>
				<span className="match-stadium">{match_stadium}</span>
			</div>
		);
	}
}

export default Match;
