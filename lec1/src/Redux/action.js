// action types
export const INC_COUNT = "INC_COUNT";
export const DEC_COUNT = "DEC_COUNT";
export const RESET_COUNT = "RESET_COUNT";
export const ADD_TODO = "ADD_TODO";

// action creator
// function which creates action object.

export const intCount = (payload) => {
  return {
    type: INC_COUNT,
    payload
  }
};

export const decCount = (payload) => {
  return {
    type: DEC_COUNT,
    payload
  }
};

export const resetCount = (payload) => {
  return {
    type: RESET_COUNT,
    payload
  }
};

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload
  }
};

//dispatch(action)
//dispatch({type:" INC_COUNT", payload: 2})
//dispatch(intCount(2))