import { shallow } from "enzyme";
import expectExport from "expect";
import { findByTestAttr } from "../test/testUtils";
import Input from "./Input";

/**
 * Return node(s) with the data-test attribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @para
 * @returns { ShallowWrapper }
 */
const setup = (secretWord = "party") => {
  return shallow(<Input secretWord={secretWord} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-input");
  expectExport(component.length).toBe(1);
});

test("input renders without error", () => {
  const wrapper = setup();
  const inputComponent = findByTestAttr(wrapper, "component-input");
  expect(inputComponent.length).toBe(1);
});

// test("does not throw warning with expected props", () => {
//   checkProps(Input, { secretWord: "party" });
// });
