import React from "react";
import PropTypes from "prop-types";
const Task2Child = ({ str, num, bool, func, obj, symbol }) => {
  return (
    <div>
      <p>String: {str}</p>
      <p>Number: {num}</p>
      <p>(boolean)Minor : {bool ? "yes" : "No"}</p>

      <p>(Object)Name: {obj.name}</p>
      <p>Symbol: {symbol}</p>
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
