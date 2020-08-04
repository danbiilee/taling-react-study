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
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b> 
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>delete</button>
    </div>
  )
});
 

function UserList({ users, onRemove, onToggle }) {
  console.log('UserList render');
  return (
    <div>
      {
        users.map(user => (
          <User key={user.id} user={user} onToggle={onToggle} onRemove={onRemove} />
        ))
      }
    </div>
  );
}

export default React.memo(UserList);