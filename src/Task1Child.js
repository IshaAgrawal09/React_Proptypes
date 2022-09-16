import React from "react";
import { PropTypes } from "prop-types";
const Task1Child = ({name}) => {
  return <div>{name}</div>;
};
Task1Child.propTypes = {
  name: PropTypes.string,
};
export default Task1Child;
