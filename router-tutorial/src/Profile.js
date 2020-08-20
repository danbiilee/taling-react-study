import React from 'react';

const profileData = {
  danbi: {
    name: '이단비',
    description: '개발자',
  },
  ash: {
    name: 'ASH ISLAND',
    description: '래퍼',
  },
};

const Profile = ({ match }) => {
  console.log(match);

  const { username } = match.params;
  const profile = profileData[username];
  if (!profile) {
    return <div>User is not existed!</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
