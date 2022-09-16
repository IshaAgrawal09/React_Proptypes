import React from "react";
import PropTypes from "prop-types";

const Task3Child = ({ name, marks = 0, score }) => {
  let total = Math.max(1, score);
  return (
    <div>
      <p>Name: {name}</p>
      <p>Marks:{marks}</p>
      <p>Total:{total}</p>
    </div>
  );
};
Task3Child.propTypes = {
  name: PropTypes.string.isRequired,
  marks: PropTypes.number,
  score: PropTypes.number,
};

export default Task3Child;
