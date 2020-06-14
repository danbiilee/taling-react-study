import React, { Component } from 'react';
import ReactCalendar from 'react-calendar';
import './Calendar.scss';

class Calendar extends Component {
	state = {
		date: null
	};

	handleChange = date => {
		this.setState({
			date
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		
		// 시작날짜만 선택한 경우 에러남.
		if(this.state.data === null) return;
		
		this.props.setRange(this.state.date);
	};

	render() {
		return (
			<div className="calendar">
				<ReactCalendar
					className="react-calendar"
					onChange={this.handleChange}
					selectRange={true}
				/>
				<button className="calender-button" onClick={this.handleSubmit}>검색</button>
			</div>
		);
	}
}

export default Calendar;
