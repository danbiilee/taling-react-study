import { useState, useCallback, useReducer } from 'react';

function reducer(form, action) {
  console.log(form, action);
  switch(action.type) {
    case 'CHANGE_INPUT':
      return {
        ...form, 
        [action.name]: action.value,
      };
    case 'RESET_INPUTS':
      return action.form;
    default: 
      return form;
  }
}

function useInputs(initialForm) {
  const [ form, dispatch ] = useReducer(reducer, initialForm);
  
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value,
    });
  }, []);

  const reset = useCallback(() => {
    dispatch({ 
      type: 'RESET_INPUTS', 
      form: initialForm
    });
  }, [initialForm]); 

  return [form, onChange, reset];
}

export default useInputs;