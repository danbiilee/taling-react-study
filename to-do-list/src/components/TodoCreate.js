import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  position: absolute;
  left: 50%;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border: none;
  border-radius: 50%;
  outline: none;
  color: white;
  font-size: 60px;
  cursor: pointer;

  transform: translate(-50%, 50%);
  transition: 0.12s all ease-in;
  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const InsertForm = styled.div`
  padding: 32px 32px 72px;
  border-top: 1px solid #e9ecef;
  border-radius: 0 0 16px 16px;
  background: #f8f9fa;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 12px;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  outline: none;
  font-size: 18px;
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm>
            <Input autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요" />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default TodoCreate;
