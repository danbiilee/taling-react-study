import React, { useState } from 'react';
import CheckBox from './components/CheckBox';

function App() {
  const [checked, setCheck] = useState(false);
  const onChange = e => {
    setCheck(e.target.checked);
  };

  return (
    <div>
      <CheckBox onChange={onChange} checked={checked}>
        다음 약관에 모두 동의
      </CheckBox>
      <p>
        <b>check: </b>
        {checked ? 'true' : 'false'}
      </p>
    </div>
  );
}

export default App;
