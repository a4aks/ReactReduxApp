import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { intCount, decCount, resetCount } from '../../Redux/action';

export const Counter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => dispatch(intCount(2))}> ADD</button>
        <button onClick={() => dispatch(decCount(2))}>SUB</button>
        <button onClick={() => dispatch(resetCount())}>RESET</button>
    </div>
  )
}
