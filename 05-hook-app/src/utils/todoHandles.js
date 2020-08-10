export const handleSubmit = (e, dispatch, reset, description) => {
	e.preventDefault();

	if (description.trim().length <= 1) return;

	const newTodo = {
		id: new Date().getTime(),
		task: description,
		done: false,
	};

	const addTodo = { type: 'addTodo', payload: newTodo };

	dispatch(addTodo);
	reset();
};

export const handleDelete = (id, dispatch) => {
	const removeTodo = { type: 'removeTodo', payload: id };

	dispatch(removeTodo);
};

export const handleComplete = (id, dispatch) => {
	const completeTodo = { type: 'completeTodo', payload: id };

	dispatch(completeTodo);
};
