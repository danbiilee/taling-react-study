const myLogger = store => next => action => {
  console.log(action);
  const result = next(action); // 다음 미들웨어 또는 리듀서에게 액션 전달

  // 업데이트 이후의 상태를 조회
  console.log('\t', store.getState());

  return result; // dispatch(action)의 결과물(기본: undefined)
};

export default myLogger;
