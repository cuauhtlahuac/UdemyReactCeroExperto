import React from 'react';
import { shallow } from 'enzyme';

import { GifGridItem } from 'components/GifGridItem';


describe('<GifGridItem />', () => {

    test('Should render correctly', () => {
        const component = shallow(<GifGridItem />);

        expect( component ).toMatchSnapshot();    
    })
    
})
