import React, { useRef, useState, useMemo, useCallback, useReducer } from 'react';
import UserList from './UserListwithReducer';
import CreateUser from './CreateUserwithReducer';

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
	console.log(action);

	switch(action.type) {
		case 'CHANGE_INPUT':
			return {
				...state,
				inputs: {
					...state.inputs,
					[action.name]: action.value,
				}
			};
		case 'CREATE_USER':
			return {
				inputs: initialState.inputs,
				users: state.users.concat(action.user),
			};
		case 'TOGGLE_USER':
			return {
				...state,
				users: state.users.map(user => (
					action.id === user.id ? { ...user, active: !user.active } : user
				))
			};
		case 'REMOVE_USER':
			return {
				...state,
				users: state.users.filter(user => action.id !== user.id)
			};
		default:
			return state;
	}
}


function App() {
	const [ state, dispatch ] = useReducer(reducer, initialState);
	const nextId = useRef(4);

	const { users } = state;
	const { username, email } = state.inputs;

	const onChange = useCallback(e => {
		const { name, value } = e.target;
		dispatch({
			type: 'CHANGE_INPUT',
			name,
			value,
		});
	}, []);

	const onCreate = useCallback(() => {
		dispatch({
			type: 'CREATE_USER',
			user: {
				id: nextId.current++, 
				username,
				email
			}
		});
	}, [ username, email ]);

	const onToggle = useCallback(id => {
		dispatch({
			type: 'TOGGLE_USER',
			id
		});
	});

	const onRemove = useCallback(id => {
		dispatch({
			type: 'REMOVE_USER',
			id
		});
	});

	const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
      <div>활성사용자 수 : {count}</div> 
    </>
  );
}

export default App;
