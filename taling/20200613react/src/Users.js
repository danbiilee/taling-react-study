import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import User from './User';
class Users extends Component {
	render() {
    console.log(this.props);
    
		return (
			<div>
				<ul>
					<li>
						<Link to="/users/user1">user1</Link>
					</li>
					<li>
						<Link to="/users/user2">user2</Link>
					</li>
					<li>
						<Link to="/users/user3">user3</Link>
					</li>
				</ul>
				<Route render={() => <div>유저를 선택하세요...</div>} />
				<Route path="/users/:username" component={User} />
			</div>
		);
	}
}
export default Users;