export const todoReducer = (state = [], { type, payload }) => {
	switch (type) {
		case 'addTodo':
			return [ ...state, payload ];

		case 'removeTodo':
			const newState = state.filter(task => task.id !== payload);

			return newState;

		case 'completeTodo':
			return state.reduce((acc, current) => {
				return [
					...acc,	current.id === payload
						? { ...current, done: !current.done }
						: current,
				];
			}, []);

		default:
			return state;
	}
};
