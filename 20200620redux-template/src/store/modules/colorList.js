import { createAction, handleActions } from 'redux-actions';

//action
const CHANGE_INPUT = 'colorList/CHANGE_INPUT';
const INSERT = 'colorList/INSERT';
const UPDATE = 'colorList/UPDATE'; // UPDATE_COLOR_OPACTIY
const REMOVE = 'colorList/REMOVE'; 

let id = 1;

//action creators
export const changeInput = createAction(CHANGE_INPUT, (text) => text); //payload가 무엇인지 명시
export const insert = createAction(INSERT, (color) => ({id: id++, color: color})); // payload: {color: 'red', id: 3}
export const update = createAction(UPDATE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

// initialState
const initialState = {
  input: '',
  list: [],
}

// reducer
export default handleActions({
  [CHANGE_INPUT]: (state, action) => ({
    ...state,
    input: action.payload,
  }),
  [INSERT]: (state, action) => ({
    ...state,
    list: state.list.concat({
      //id: id++, // id증가는 reducer에서 하면 안됨!
      color: action.payload.color,
      id: action.payload.id,
      opacity: 1, // 초기값
    })
  }),
  [UPDATE]: (state, action) => ({
    ...state,
    list: state.list.map(item => {
      if(item.id === action.payload) {
        return {
          ...item,
          opactiy: item.opacity - 0.1,
        };
      } else return item;
      })
  }),
  [REMOVE]: (state, action) => ({
    ...state,
    list: state.list.filter(item => item.id !== action.payload),
  }),  
}, initialState)