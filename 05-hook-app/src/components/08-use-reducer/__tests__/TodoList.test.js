import React from 'react';
import '@testing-library/jest-dom';

import { mockTodo } from 'fixtures/todoMock';
import { mount } from 'enzyme';

import TodoList from '../TodoList';

describe('TodoList Tests', () => {
	const props = { todos: mockTodo, dispatch: jest.fn() };
	let component = {};

	beforeEach(() => {
		component = mount(<TodoList {...props} />);
	});

	afterAll(() => {
		component.unmount();
	});

	it('should render correctly', () => {
		expect(component).toMatchSnapshot();
	});

	it('should render n TodoListItem', () => {
		expect(component.find('TodoListItem').length).toBe(mockTodo.length);
	});

	it('should send a dispatch function to his children', () => {
		const dispatchFn = component.find('TodoListItem').first().prop('dispatch');
		expect(dispatchFn).toEqual( expect.any(Function) );
	});

	it("shouldn't render list", () => {
		const component = mount(<TodoList />);

		expect(component.find('ul').children().exists()).toBe(false);
	});
});
