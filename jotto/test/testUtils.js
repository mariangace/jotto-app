import { ShallowWrapper } from "enzyme";

/**
 * Return node(s) with the fiven data-test attribute
 * @param {ShallowWrapper} wrapper  - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

//With typescript we do not need to check for props
// export const checkProps = (component, conformingProps) => {
//   const propError = checkPropTypes(
//     component.propTypes,
//     conformingProps,
//     "prop",
//     compoent.name
//   );
//   expect(propError).toBeUndefined();
// };
