import React from 'react';

const CreateUser = ({ username, email, onChange, onCreate }) => {
  console.log('CreateUser render');
  return (
    <div>
      <input name="username" onChange={} value={username} />
      <input name="email" onChange={} value={email} />
      <button onClick={}>create</button>
    </div>
  );
}

export default React.memo(CreateUser);