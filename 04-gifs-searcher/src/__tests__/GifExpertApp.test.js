import React from 'react';
import { shallow } from "enzyme"
import GifExpertApp from "GifExpertApp"

describe('GifExpertApp Tests', () => {

    test('should render correctly', () => {
        const component = shallow( <GifExpertApp /> )
        
        expect( component ).toMatchSnapshot();
        expect( component.find('GifGrid').exists()).toBe( false );
    })
    
    test('should render gifGrid with dragon ball', () => {
        const categories = [ 'Dragon ball', 'One punch man * ' ]
        const component = shallow( <GifExpertApp definedCategories={ categories }/> );
        
        expect( component ).toMatchSnapshot();
        expect( component.find('GifGrid').exists() ).toBe( true );
        expect( component.find('GifGrid').length ).toBe( categories.length );
        expect( component.find('GifGrid').at(0).prop('category') ).toBe( categories[0] );
        expect( component.find('GifGrid').at(1).prop('category') ).toBe( categories[1] );
    })
})
