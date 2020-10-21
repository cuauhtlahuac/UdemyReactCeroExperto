import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
const { mount } = require('enzyme');

import SearchScreen from '../SearchScreen';

describe('<SearchScreen /> Tests', () => {
	const component = mount(
		<MemoryRouter initialEntries={[ '/search' ]}>
			<Route path="/" component={SearchScreen} />
		</MemoryRouter>,
	);

	test('should render correctly', () => {
		expect(component).toMatchSnapshot();
  });
  
  test('should show alert div', () => {
    expect(component.find('div.alert-info').text()).toBe("You don't searching for heroes yet")
  })
  
});
