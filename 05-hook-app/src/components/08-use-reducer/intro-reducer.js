const initialState = [
	{
		id: 1,
		todo: 'Go to shopping',
		done: false,
	},
];

const todoReducer = (state = initialState, action) => {
	if (action?.type === 'agregar') {
		return [ ...state, action.payload ];
	}

	return state;
};

let todos = todoReducer();

const newTodo = {
	id: 2,
	todo: 'Go to sleep',
	done: false,
};

const agregarTodoAction = {
	type: 'agregar',
	payload: newTodo, // payload es por estándar
};

todos = todoReducer(todos, agregarTodoAction);

console.table(todos);
