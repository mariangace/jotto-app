import React from "react";
import PropTypes from "prop-types";

const Input = ({ success, secretWord }) => {
  const [currentGuess, setCurrentGuess] = React.useState("");

  if (success) {
    return <div data-test="component-input" />;
  }
  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder="enter guess"
          value={currentGuess}
          onChange={(event) => setCurrentGuess(event.target.value)}
        />
        <button
          data-test="submit-button"
          onClick={(e) => {
            e.preventDefault();
            //TODO: update guessed words
            //TODO: check agains secret word and update success if needed it
            setCurrentGuess("");
          }}
          className="btn btn-primary mb-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Input;

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};
