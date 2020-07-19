import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import toJSON from 'enzyme-to-json';

import CounterApp from 'CounterApp';

describe('<CounterApp /> tests', () => {
	test('should render <CounterApp /> Correctly', () => {
		const component = shallow(<CounterApp />);

		expect(component).toMatchSnapshot();
	});

	test('should render 100 as value', () => {
		const value = 100;
		const component = shallow(<CounterApp value={value} />);
		const h2 = component.find('h2').text();

		expect(h2).toBe(` ${value} `);

		expect(toJSON(component)).toMatchSnapshot();
	});
});
