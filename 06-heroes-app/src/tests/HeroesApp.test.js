import React from 'react';
import { shallow } from 'enzyme';

import HeroesApp from 'HeroesApp';

describe('HeroesApp tests', () => {
	test('should render correctly', () => {
    const component = shallow(<HeroesApp />);
    
    expect(component).toMatchSnapshot();
	});
});
