import React from 'react';
import "@testing-library/jest-dom";
import { shallow } from 'enzyme';
import AddCategory from 'components/AddCategory';

describe('AddCategory tests', () => {
    const setCategories =   jest.fn();
    const setCategoryDictionary = jest.fn();
    const setSameValue = jest.fn();
    
    let component = shallow( <p /> );

    beforeEach(() => {

        component = shallow( <AddCategory setCategories={ setCategories }/> );
        component.find('form').simulate("submit", {preventDefault(){}});
    })
    
	test('should render correctly', () => {

		expect(component).toMatchSnapshot();
 
    });

    test('should change input value', ( ) => {
        
        const input = component.find('input');
        const value = 'Hello 🌎';
        
        input.simulate('change', { target: { id: "category", value } });
        
        expect( component.find('input').prop('value') ).toBe( value );
        expect( component ).toMatchSnapshot();
    });

    test('should not call setCategories with empty value', () => {

        expect( setCategories ).not.toBeCalled();
    });

    test('should not call setCategoryDictionary with empty value', () => {
        
        expect( setCategoryDictionary ).not.toBeCalled();
    });

    test('should not call setSameValue with empty value', () => {
        
        expect( setSameValue ).not.toBeCalled();
    });
    
});
