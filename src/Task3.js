import React, { useState } from "react";
import Task3Child from "./Task3Child";

const Task3 = () => {
  const [name, setName] = useState();
  const [score, setScore] = useState();
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter Score"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
      </div>
      <div>
        <Task3Child name={name} score={isNaN(score) ? score : Number(score)} />
      </div>
    </div>
  );
};

export default Task3;
