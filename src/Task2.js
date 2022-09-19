import React from "react";
import Task2Child from "./Task2Child";

const Task2 = () => {
  function func() {
    console.log("Hello");
  }
  const obj = { name: "Rohit" };
  let symbol = Symbol("m--");
  return (
    <div>
      <Task2Child
        str="Hello"
        num={10}
        bool={false}
        func={func()}
        obj={obj}
        symbol={symbol}
      />
    </div>
  );
};

export default Task2;
