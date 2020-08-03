import React, { useRef, useState, useMemo, useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('user 세는 중');
  return users.filter(user => user.active).length;
}

function App() {
  const [ inputs, setInputs ] = useState({
    name: '',
    email: '',
  });
  const { name, email } = inputs;

  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setInputs(inputs => (
      {
        ...inputs,
        [name]: value,
      }
    ));
  }, []);

  const [ users, setUsers ] = useState([
    {
      id: 1,
      name: 'danbi',
      email: 'danbi@gmail.com',
      active: true,
    },
    {
      id: 2,
      name: 'ash',
      email: 'ash@example.com',
      active: false,
    },
    {
      id: 3,
      name: 'sik',
      email: 'sik@example.com',
      active: false,
    }
  ]);
  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      name,
      email,
    };
    //setUsers([ ...users, user ]);
    setUsers(users => users.concat(user));
    setInputs({
      name: '',
      email: '',
    });
    nextId.current += 1;
  }, [name, email]);

  const onRemove = useCallback(id => {
    setUsers(users => users.filter(user => user.id !== id));
  }, []);

  const onToggle = useCallback(id => {
    setUsers(users => 
      users.map(user => 
        user.id === id ? {...user, active: !user.active} : user 
      )
    );
  }, []);
  
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <div>
      <CreateUser name={name} email={email} nextId={nextId} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성사용자 수 : {count}</div>
    </div>
  );
}

export default App;
