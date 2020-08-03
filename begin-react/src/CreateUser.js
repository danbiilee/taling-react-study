import React from 'react';

const CreateUser = ({ name, email, onChange, onCreate }) => {
  console.log('CreateUser render');
  return (
    <div>
      <input name="name" onChange={onChange} value={name} />
      <input name="email" onChange={onChange} value={email} />
      <button onClick={onCreate}>create</button>
    </div>
  );
}

export default React.memo(CreateUser);