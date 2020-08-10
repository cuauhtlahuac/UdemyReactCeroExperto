import React, { useReducer, useEffect } from 'react';

import { todoReducer } from 'reducers/todoReducer';

import TodoList from './TodoList';
import TodoForm from './TodoForm';

import './todoAppStyles.css';

const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];
};

const TodoApp = () => {
	const [ todos, dispatch ] = useReducer(todoReducer, [], init);

	useEffect(
		() => {
			localStorage.setItem('todos', JSON.stringify(todos));
		},
		[ todos ],
	);

	return (
		<div>
			<h1>
				Todo App
				<small> ( {todos.length} )</small>
			</h1>

			<hr />

			<div className="row">
				<div className="col-7">
					<TodoList todos={todos} dispatch={dispatch} />
				</div>

				<div className="col-5">
					<TodoForm todos={todos} dispatch={dispatch} />
				</div>
			</div>

		</div>
	);
};

export default TodoApp;
