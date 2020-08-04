import React, { useRef, useContext } from 'react';
import useInputs from './hooks/useInputs';
import { UserDispatch } from './AppwithReducer';

const CreateUser = () => {
	console.log('CreateUser render');

	const [ { username, email }, onChange, reset ] = useInputs({
		username: '',
		email: '',
	});
	const nextId = useRef(4);
	const dispatch = useContext(UserDispatch);
	
	const onCreate = () => {
		dispatch({
			type: 'CREATE_USER',
			user: {
				id: nextId.current++,
				username,
				email
			}
		});
		reset();
	};

  return (
    <div>
      <input name="username" value={username} onChange={onChange} />
      <input name="email" value={email} onChange={onChange} />
      <button onClick={onCreate}>create</button>
    </div>
  );
}

export default React.memo(CreateUser);