import React from "react";

// receive the success state as a prop

/**
 * Functional react component for congratory message.
 * @function
 * @param {object} props - React props.
 * @returns { JSX.Element } - Rendered component (or null if success prop is false)
 */

const Congrats = (props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats" className="alert alert-success">
        <span data-test="congrats-message">
          Congraturalitons! You guessed the word!
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
};

export default Congrats;
