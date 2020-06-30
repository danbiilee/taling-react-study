import React, { Component } from 'react';

const userData = {
  user1: {
    name: 'user1',
    job: 'frontend developer',
  },
  user2: {
    name: 'user2',
    job: 'backend developer',
  },
  user3: {
    name: 'user3',
    job: 'PM',
  },
};

class User extends Component {
  render() {
    //console.log(this.props); // history, location, match
    const {username} = this.props.match.params;
    const user = userData[username];
    //console.log(username);

    if(!user) return <div>없는 사람입니다.</div>;
    return <div>
      <h2>
        {user.name}의 직업은 {user.job}입니다.
      </h2>
    </div>;
  }
}

export default User;
