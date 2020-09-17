import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import counter, { increase, decrease, setDiff } from '../modules/counter';

const CounterContainer = () => {
  // useSelector: 리덕스 스토어의 상태를 조회하는 Hook
  // state = store.getState()
  const { number, diff } = useSelector((state) => ({
    number: state.counter.number,
    diff: state.counter.diff,
  }));

  // useDispatch: 리덕스 스토어의 디스패치를 함수에서 사용할 수 있게 해주는 Hook
  const dispatch = useDispatch();
  // 액션들을 디스패치하는 함수들
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
};

export default CounterContainer;
