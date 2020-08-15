import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';

import RealExample from '../RealExample';
import MultipleCustomHooks from 'component/03-multple-examples/MultipleCustomHooks';

describe('Real Example Tests', () => {
	let component;
	beforeEach(() => {
		component = mount(<RealExample />);
	});

	afterEach(() => {
		component.unmount();
	});

	test('should show correctly', () => {
		expect(component).toMatchSnapshot();
	});

	test('should change the button text', () => {
		const button = component.find('button');

		expect(button.text()).toBe('Show');

		act(() => {
			button.props().onClick();
    });
    
		expect(button.text()).toBe('Hide');
	});

	test('should show <MultipleCustomHooks />', async () => {
		const button = component.find('button');
		expect(component.find('MultipleCustomHooks').exists()).toBe(false);

		button.simulate('click');

		expect(component.find('MultipleCustomHooks').exists()).toBe(true);
	});
});
