import React from "react";
import PropTypes from "prop-types";
const Task2Child = ({ str, num, bool, func, obj, symbol }) => {
  return (
    <div>
      <p>{str}</p>
      <p>{num}</p>
      <p>{bool}</p>

      <p>{obj.name}</p>
      <p>{symbol}</p>
    </div>
  );
};
Task2Child.propTypes = {
  str: PropTypes.string,
  num: PropTypes.number,
  bool: PropTypes.bool,
  func: PropTypes.func,
  obj: PropTypes.object,
  symbol: PropTypes.symbol,
};

export default Task2Child;
