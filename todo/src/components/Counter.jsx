import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { COUNTER_INCREMENT,COUNTER_DECREMENT} from "../Redux/counter/counter.actionType";

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  return (
    <div style={{margin : "40px 0"}}>
      <h1> {count} </h1>
      <button
        onClick={() => {
          dispatch({
            type: COUNTER_INCREMENT,
          });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({
            type: COUNTER_DECREMENT,
          });
        }}
      >
        Decrement
      </button>
    </div>
  );
};
