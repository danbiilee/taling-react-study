import React, { useEffect } from 'react';

const HistorySample = ({ history }) => {
  const goBack = () => {
    history.goBack();
  };

  const goHome = () => {
    history.push('/');
  };

  useEffect(() => {
    console.log(history);
    const unblock = history.block('Will you really leave?');
    return () => {
      unblock();
    };
  }, [history]);

  return (
    <div>
      <button onClick={goBack}>Go Back</button>
      <button onClick={goHome}>Go Home</button>
    </div>
  );
};

export default HistorySample;
