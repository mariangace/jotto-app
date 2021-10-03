import React from "react";
import PropTypes from "prop-types";

const Input = ({ secretWord }) => {
  return <div data-test="component-input"></div>;
};

export default Input;

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};
