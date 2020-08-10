import { todoActions } from "./constants/todoActions";

const { ADD_TODO, COMPLETE_TODO, REMOVE_TODO} = todoActions

export const handleSubmit = (e, dispatch, reset, description) => {
	e.preventDefault();

	if (description.trim().length <= 1) return;

	const newTodo = {
		id: new Date().getTime(),
		task: description,
		done: false,
	};

	const addTodo = { type: ADD_TODO, payload: newTodo };

	dispatch(addTodo);
	reset();
};

export const handleDelete = (id, dispatch) => {
	const removeTodo = { type: REMOVE_TODO, payload: id };

	dispatch(removeTodo);
};

export const handleComplete = (id, dispatch) => {
	const completeTodo = { type: COMPLETE_TODO, payload: id };

	dispatch(completeTodo);
};
