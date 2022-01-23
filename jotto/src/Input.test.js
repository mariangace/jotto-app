import { shallow } from "enzyme";
import expectExport from "expect";
import React from "react";
import { findByTestAttr } from "../test/testUtils";
import Input from "./Input";

/**
 * Return node(s) with the data-test attribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @para
 * @returns { ShallowWrapper }
 */
//mock entire module for destructuring useState on import ////
// jest.mock("react", () => ({
//   ...jest.requireActual("react"),
//   useState: (initialState) => [initialState, mockSetCurrentGuess],
// }));

const setup = (success = false, secretWord = "party") => {
  return shallow(<Input success={success} secretWord={secretWord} />);
};

describe("render", () => {
  describe("success is true", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup(true);
    });
    test("renders without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expectExport(component.length).toBe(1);
    });
    test("input box does not show", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.exists()).toBe(false);
    });
    test("submit button does not show", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.exists()).toBe(false);
    });
  });
  describe("success is false", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup(false);
    });
    test("renders without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expectExport(component.length).toBe(1);
    });
    test("input box does show", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.exists()).toBe(true);
    });
    test("submit button does show", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.exists()).toBe(true);
    });
  });
});

test("input renders without error", () => {
  const wrapper = setup();
  const inputComponent = findByTestAttr(wrapper, "component-input");
  expect(inputComponent.length).toBe(1);
});

// test("does not throw warning with expected props", () => {
//   checkProps(Input, { secretWord: "party" });
// });

describe("state controlled input field", () => {
  let mockSetCurrentGuess = jest.fn();
  let wrapper;
  let originalUseState;

  beforeEach(() => {
    //to use better our resources we reused mockSetCurrentGuess and we cleared it.
    mockSetCurrentGuess.mockClear();
    originalUseState = React.useState;
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = setup();
  });

  afterEach(() => {
    React.useState = originalUseState;
  });

  test("state updates with value of input box upon change", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");
    const mockEvent = { target: { value: "train" } };

    inputBox.simulate("change", mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });
  test("field is cleared upon submit button is click", () => {
    const inputBox = findByTestAttr(wrapper, "submit-button");

    inputBox.simulate("click", { preventDefault() {} });
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});
