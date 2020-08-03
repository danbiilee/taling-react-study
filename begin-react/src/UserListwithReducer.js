import React, { useEffect } from 'react';

const User = React.memo(function User({ user, onRemove, onToggle }) {
	console.log('User render');
  return (
    <div>
      <b 
        style={{
        cursor: 'pointer',
        color: user.active ? 'green' : 'black'
        }}
        onClick={}
      >
        {user.username}
      </b> 
      <span>({user.email})</span>
      <button onClick={}>delete</button>
    </div>
  )
});
 

function UserList({ users, onRemove, onToggle }) {
  console.log('UserList render');
  return (
    <div>
      {
        users.map(user => (
          <User key={user.id} user={user} onRemove={} onToggle={} />
        ))
      }
    </div>
  );
}

export default React.memo(UserList);