import React from 'react';
import { mount } from 'enzyme';
import AppRouter from '../AppRouter';

describe('AppRouter Tests', () => {
	const component = mount(<AppRouter />);

	test('should render correctly', () => {
		expect(component).toMatchSnapshot();
	});
});
