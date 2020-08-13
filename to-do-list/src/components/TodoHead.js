import React from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
  padding: 48px 32px 24px;
  border-bottom: 1px solid #eee;
  h1 {
    margin: 0;
    color: #333;
    font-size: 36px;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    margin-top: 40px;
    color: #20c997;
    font-size: 18px;
    font-weight: bold;
  }
`;
function TodoHead() {
  return (
    <TodoHeadBlock>
      <h1>2020년 8월 13일</h1>
      <div className="day">목요일</div>
      <div className="tasks-left">할 일 2개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
