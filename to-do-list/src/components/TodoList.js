import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  overflow-y: auto;
  flex: 1;
  padding: 20px 32px 48px;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text="aaaaaaaa" done={true} />
      <TodoItem text="bbbbbbbb" done={true} />
      <TodoItem text="cccccccc" done={false} />
      <TodoItem text="dddddddd" done={false} />
    </TodoListBlock>
  );
}

export default TodoList;
