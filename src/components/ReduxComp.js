import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dec_Num, inc_Num } from "../redux/action";
const ReduxComp = () => {
  const data = useSelector((state) => state.changeNum);
  console.log(data);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(inc_Num());
  };
  const decHandler = () => {
    dispatch(dec_Num());
  };
  return (
    <div>
      <h1>REDUX IMPLEMENTATION</h1>
      <p>INCREMENT & DECREMENT COUNTER</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={incrementHandler}>+</button>
        <p>{data}</p>
        <button onClick={decHandler}>-</button>
      </div>
    </div>
  );
};

export default ReduxComp;
