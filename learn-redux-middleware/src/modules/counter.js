import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';

// redux-thunk(increaseAsync, decreaseAsync) -> redux-saga(increaseSaga, decreaseSaga)
// 액션 타입
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';

// 액션 생성 함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });

function* increaseSaga() {
  yield delay(1000); // 1초 기다림
  yield put(increase()); // put: 특정 액션을 디스패치
}
function* decreaseSaga() {
  yield delay(1000); // 1초 기다림
  yield put(decrease()); // put: 특정 액션을 디스패치
}

// takeEvery: 특정 액션 타입에 대해 디스패치되는 모든 액션들을 처리
// takeLatest: 특정 액션 타입에 대해 디스패치된 가장 마지막 액션만 처리
export function* counterSaga() {
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

// 초깃값
const initialState = 0;

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}
