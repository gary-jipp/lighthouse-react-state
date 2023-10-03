import {useState} from "react";

const Counter = function(props) {
  console.log("Rendering Count");

  return (
    <div>
      {props.count}
      <button onClick={props.increment}>+</button>
      <button onClick={props.clear}>0</button>
      <button onClick={props.decrement}>-</button>
    </div>
  );
};

export default Counter;