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
const setup = (props = {}) => {
  return shallow(<Input {...props} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-input");
  expectExport(component.length).toBe(1);
});
