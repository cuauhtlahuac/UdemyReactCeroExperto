import { todoActions } from 'utils/constants/todoActions';

const { ADD_TODO, REMOVE_TODO, COMPLETE_TODO } = todoActions;

export const todoReducer = (state = [], { type, payload }) => {
	switch (type) {
		case ADD_TODO:
			return [ ...state, payload ];

		case REMOVE_TODO:

			return state.filter(todo => todo.id !== payload);

		case COMPLETE_TODO:
			return state.reduce((acc, current) => {
				return [
					...acc,
					current.id === payload
						? { ...current, done: !current.done }
						: current,
				];
			}, []);

		default:
			return state;
	}
};
