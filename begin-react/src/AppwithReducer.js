import React, { useRef, useState, useMemo, useCallback, useReducer } from 'react';
import UserList from './UserListwithReducer';
import CreateUser from './CreateUserwithReducer';
import produce from 'immer';

function countActiveUsers(users) {
  console.log('user 세는 중');
  return users.filter(user => user.active).length;
}

const initialState = {
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
	switch(action.type) {
		case 'CREATE_USER':
			return produce(state, draft => {
        draft.users.push(action.user);
      });
		case 'TOGGLE_USER':
      return produce(state, draft => {
        const user = draft.users.find(user => action.id === user.id);
        user.active = !user.active;
      });
		case 'REMOVE_USER':
      return produce(state, draft => {
        const index = draft.users.findIndex(user => action.id === user.id);
        draft.users.splice(index, 1);
      });
		default:
			return state;
	}
}

// contextAPI
export const UserDispatch = React.createContext(null);

function App() {
	const [ state, dispatch ] = useReducer(reducer, initialState);
	const { users } = state;

	const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>활성사용자 수 : {count}</div> 
    </UserDispatch.Provider>
  );
}

export default App;
