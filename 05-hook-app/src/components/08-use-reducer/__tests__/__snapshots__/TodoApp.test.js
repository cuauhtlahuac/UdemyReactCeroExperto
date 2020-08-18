import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from '@testing-library/react';

import TodoApp from 'components/08-use-reducer/TodoApp';

import { mockTodo } from 'fixtures/todoMock';

describe('TodoApp Tests', () => {
	test('should render correctly', () => {
		const component = shallow(<TodoApp />);

		expect(component).toMatchSnapshot();
	});

	test('should add a Todo', () => {
		const component = mount(<TodoApp />);
		const TodoList = component.find('TodoList');

		expect(TodoList).toMatchSnapshot();
	});
});
