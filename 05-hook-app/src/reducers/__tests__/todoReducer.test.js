import { todoReducer } from '../todoReducer';
import { renderHook } from '@testing-library/react-hooks';

import { todoActions as actions } from 'utils/constants/todoActions';
import { mockTodo } from 'fixtures/todoMock';

// El reducer es una funcíon común y corriente

describe('todoReducer Tests', () => {
	test('should return the initial state', () => {
		const state = todoReducer(mockTodo, {});

		expect(state.length).toBe(2);
		expect(state).toEqual(mockTodo);
	});

	test('should add a Todo', () => {
		const newTodo = {
			id: 3,
			task: 'Aprender Redux',
			done: true,
		};

		const state = todoReducer(mockTodo, {
			type: actions.ADD_TODO,
			payload: newTodo,
		});

		expect(state.length).toBe(3);
		expect(state[2]).toEqual(newTodo);
	});
});
