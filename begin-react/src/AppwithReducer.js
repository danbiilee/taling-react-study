import React, { useRef, useState, useMemo, useCallback, useReducer } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('user 세는 중');
  return users.filter(user => user.active).length;
}

const initialState = {
	inputs: {
		username: '',
		email: '',
	},
	users: [
    {
      id: 1,
      username: 'danbi',
      email: 'danbi@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'ash-island',
      email: 'ash@example.com',
      active: false
    },
    {
      id: 3,
      username: 'sik-k',
      email: 'sikk@example.com',
      active: false
    }
  ]
};

function reducer(state, action) {
	console.log('reducer', state, action);

	switch(action.type) {
		case 'INPUT_CHANGE':
			return {
				...state,
				inputs: {
					...state.inputs,
					[action.name]: action.value,
				}
			};
		default:
			return state;
	}
}


function App() {
	const [ state, dispatch ] = useReducer(reducer, initialState);
	const { users } = state;
	const { username, email } = state.inputs;

	const onChange = useCallback(e => {
		const { name, value } = e.target;
		dispatch({
			type: 'INPUT_CHANGE',
			name,
			value,
		});
	}, []);



  return (
    <>
      <CreateUser username={username} email={email} />
      <UserList user={users}/>
      <div>활성사용자 수 : 0</div> 
    </>
  );
}

export default App;
