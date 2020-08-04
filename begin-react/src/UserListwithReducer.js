import React, { useEffect, useContext } from 'react';
import { UserDispatch } from './AppwithReducer';

const User = React.memo(function User({ user }) {
	console.log('User render');

	const dispatch = useContext(UserDispatch);

  return (
    <div>
      <b 
        style={{
        cursor: 'pointer',
        color: user.active ? 'green' : 'black'
        }}
        onClick={() => {
					dispatch({ type: 'TOGGLE_USER', id: user.id });
				}}
      >
        {user.username}
      </b> 
      <span>({user.email})</span>
      <button onClick={() => {
				dispatch({ type: 'REMOVE_USER', id: user.id });
			}}>delete</button>
    </div>
  )
});
 

function UserList({ users }) {
  console.log('UserList render');
  return (
    <div>
      {
        users.map(user => (
          <User key={user.id} user={user} />
        ))
      }
    </div>
  );
}

export default React.memo(UserList);