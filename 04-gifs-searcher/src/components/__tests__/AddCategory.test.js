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

        component = shallow( 
        <AddCategory 
        setCategories={ setCategories } 
        setCategoryDictionary={ setCategoryDictionary }
        categoryDictionary={{}}
        setSameValue={ setSameValue }
        />
        );
        
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

        component.find('form').simulate("submit", {preventDefault(){}});

        expect( setCategories ).not.toHaveBeenCalled();
    });

    test('should not call setCategoryDictionary with empty value', () => {

        component.find('form').simulate("submit", {preventDefault(){}});

        expect( setCategoryDictionary ).not.toHaveBeenCalled();
    });

    test('should not call setSameValue with empty value', () => {
        
        component.find('form').simulate("submit", {preventDefault(){}});

        expect( setSameValue ).not.toHaveBeenCalled();
    });

    test('should call setCategories and clean text box', () => {
        
        component.find('input').simulate('change',{ target: { value: 'Lets play 🕹' } });
        
        expect( component ).toMatchSnapshot();
        
        component.find( 'form' ).simulate("submit", {preventDefault(){}});

        expect( component ).toMatchSnapshot();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any( Function ) ); // Para verificar que fue llamado con una función
        expect( component.find( 'input' ).prop( 'value' ) ).toBe( '' );

    });
    
    test('should call setCategoryDictionary once', () => {

        expect( setCategoryDictionary ).toHaveBeenCalledTimes(1);
    });

    test('should call setSameValue when the value has repeated', () => {
        const value = 'duplicated value 👥'

        const component = shallow( 
            <AddCategory 
            setCategories={ setCategories } 
            setCategoryDictionary={ setCategoryDictionary }
            categoryDictionary={{ [value]: value }}
            setSameValue={ setSameValue }
            />
        );

        component.find('input').simulate('change',{ target: { value } });
        component.find( 'form' ).simulate("submit", {preventDefault(){}});

        expect( setSameValue ).toHaveBeenCalledTimes(1);
    });    
});
