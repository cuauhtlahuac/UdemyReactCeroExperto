export const todoReducer = (state = [], { type, payload }) => {
	switch (type) {
		case 'addTodo':
			return [ ...state, payload ];

      case 'removeTodo':
			const newState = state.filter(task => task.id !== payload);

			return newState;

		default:
			return state;
	}
};
