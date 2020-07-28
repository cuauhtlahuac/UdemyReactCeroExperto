import React from 'react'
import { shallow } from "enzyme"
import GifGrid from 'components/GifGrid'

describe('GifGrid tests', () => {

    let component = <p />

    beforeEach(()=>{
        component = shallow( <GifGrid category=""/> );
    });

    test('should render correctly', () => {

        expect( component ).toMatchSnapshot();

    })
    
})
