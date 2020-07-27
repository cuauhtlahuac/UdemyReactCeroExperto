import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from 'components/AddCategory';

describe('AddCategory tests', () => {
    const setCategories =   jest.fn();
    const component = shallow(<AddCategory setCategories={ setCategories }/>);
    
	test('should render correctly', () => {

		expect(component).toMatchSnapshot();
 
    });

    test('should change input value', ( ) => {
        
        const input = component.find('input');
        const value = 'Hello 🌎';
        
        input.simulate('change', { target: { id: "category", value } });
        
        expect( component.find('input').prop('value') ).toBe( value );
        expect( component ).toMatchSnapshot();
    })
});
