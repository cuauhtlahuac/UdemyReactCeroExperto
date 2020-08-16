import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import { mockTodo } from 'fixtures/todoMock';
import { handleComplete, handleDelete } from 'utils/todoHandles';
import TodoListItem from '../TodoListItem';

describe('TodoListItem Tests', () => {
	const props = { todo: mockTodo[0], index: 0, dispatch: jest.fn() };

	const component = mount(<TodoListItem {...props} />);

	afterAll(() => {
		component.unmount();
	});

	it('should render correctly', () => {
		expect(component).toMatchSnapshot();
	});

	it('should call handleComplete function', () => {
		const button = component.find('.btn-outline-secondary');
		const handleCompleteMock = jest.fn(handleComplete);

		button.props().onClick(handleCompleteMock(1, props.dispatch));

		expect(handleCompleteMock).toBeCalled();
		expect(handleCompleteMock).toBeCalledWith(1, props.dispatch);
	});

	it('should show text correctly', () => {
		const paragraph = component.find('p');

		expect(paragraph.first().text()).toBe(
			`${props.index + 1} .- ${props.todo.task}`,
		);
	});

	it('should show "complete" className', () => {
		const newProps = {
			...props,
			todo: { ...props.todo, done: true, task: 'learn everything' },
		};

		component.setProps({ ...newProps });

		expect(component).toMatchSnapshot();

		const paragraph = component.find('p');
		expect(paragraph.hasClass('complete')).toBe(true); // hasClass refiere al className
	});

	it('should call handleDelete function', () => {
		const button = component.find('.btn-danger');
		const handleDeleteMock = jest.fn(handleDelete);

		button.props().onClick(handleDeleteMock(1, props.dispatch));

		expect(handleDeleteMock).toBeCalled();
		expect(handleDeleteMock).toBeCalledWith(1, props.dispatch);
	});
});
