import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import { todoMock } from 'fixtures/todoMock.js';

import TodoForm from '../TodoForm';

describe('TodoApp Test', () => {
	const component = mount(<TodoForm dispatch={jest.fn()} />);

	afterAll(()=>{
		component.unmount();
	})

	it('should render correctly', () => {
		expect(component).toMatchSnapshot();
	});

	it('should have submit button ', () => {
		const button = component.find('[type="submit"]');

		expect(button.exists()).toBe(true);
	});

	test('should call onSubmit', () => {
		const onSubmit = jest.fn(component.find('form').prop('onSubmit'));

		onSubmit({ preventDefault() {} });

		expect(onSubmit).toHaveBeenCalled();
	});

	test('should input change', () => {
		const value = 'Aprender React';

		component.find('input').simulate('change', {
			target: {
				value,
				name: 'description',
			},
		});

		const onSubmit = jest.fn(component.find('form').prop('onSubmit'));

		act(() => {
			onSubmit({ preventDefault() {} });
		});

		expect(onSubmit).toHaveBeenCalled();
	});
});
