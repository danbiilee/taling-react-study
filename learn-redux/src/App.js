import React from 'react';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodoContainer';

function App() {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
}

export default App;
