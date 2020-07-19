import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import toJSON from 'enzyme-to-json';

import CounterApp from 'CounterApp';

describe('<CounterApp /> tests', () => {
	let component;

	beforeEach(() => (component = shallow(<CounterApp />)));

	test('should render <CounterApp /> Correctly', () => {
		expect(component).toMatchSnapshot();
	});

	test('should render 100 as value', () => {
		const value = 100;
		const component = shallow(<CounterApp value={value} />);
		const h2 = component.find('h2').text();

		expect(h2).toBe(` ${value} `);

		expect(toJSON(component)).toMatchSnapshot();
	});

	test('should add 1 with "↑1" button', () => {
		const btn1 = component.find('button').at(0);

		btn1.simulate('click');

		const h2 = component.find('h2').text();

		expect(h2).toBe(` 11 `);
	});

	test('should subtract 1 with "↓1" button ', () => {
		const btn2 = component.find('button').at(2);

		btn2.simulate('click');

		const h2 = component.find('h2').text();

		expect(h2).toBe(` 9 `);
	});

	test('should reset the value', () => {
		const value = 105;
		const increment = 10;
		let h2;

		const component = shallow(<CounterApp value={value} />);

		for (let index = 0; index < increment; index++) {
			component.find('button').first().simulate('click');
		}
		h2 = component.find('h2').text();

		expect(h2).toBe(` ${value + increment} `);

		component.find('button').at(1).simulate('click'); // Seleccionamos el boton de reset

		h2 = component.find('h2').text();

		expect(h2).toBe(` ${value} `);
	});
});
