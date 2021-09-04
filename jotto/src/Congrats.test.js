import  { shallow } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import Congrats from './Congrats';



/**
 * Return node(s) with the fiven data-test attribute
 * @param {ShallowWrapper} wrapper  - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {
    //{..props} is Equal to have whatever is in the props success=true for example 
    return shallow(<Congrats {...props} /> )
}

test ('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
});

test('renders no text when ´success´ prop is false', ()=>{
    const wrapper = setup({success:false});
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('');
} );

test('renders  non-empty congrats message when succes is true', ()=>{ 
    const wrapper = setup({success:true});
    const message = findByTestAttr(wrapper,'congrats-message');
    expect(message.text().length).not.toBe(0);
});

test('does not throw warning with expected props', () => {
    const expectedProps = {success:false}
});


