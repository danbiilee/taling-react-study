import React from 'react';

const CreateUser = ({ username, email, onChange, onCreate }) => {
  console.log('CreateUser render');
  return (
    <div>
      <input name="username" value={username} onChange={onChange} />
      <input name="email" value={email} onChange={onChange} />
      <button onClick={onCreate}>create</button>
    </div>
  );
}

export default React.memo(CreateUser);