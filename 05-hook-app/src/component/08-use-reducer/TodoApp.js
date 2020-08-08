import React, { useReducer, useEffect } from 'react';

import { useForm } from 'hooks/useForm';
import { todoReducer } from 'reducers/todoReducer';

import './todoAppStyles.css';

const init = () => {
	return [
		{
			id: new Date().getTime(),
			task: 'Learn React',
			done: false,
		},
	];
};

const TodoApp = () => {
	const [ todos, dispatch ] = useReducer(todoReducer, [], init);

	const [ { description }, handleInputChange, reset ] = useForm({
		description: '',
	});

	useEffect(
		() => {
			localStorage.setItem('todos', JSON.stringify(todos));
		},
		[ todos ],
	);

	const handleSubmit = e => {
		e.preventDefault();

		if (description.trim().length <= 1) return;

		const newTodo = {
			id: new Date().getTime(),
			task: description,
			done: false,
		};

		const action = { type: 'addTodo', payload: newTodo };

		dispatch(action);
		reset();
	};

	return (
		<div>
			<h1>
				Todo App
				<small> ( {todos.length} )</small>
			</h1>
			<hr />

			<div className="row">
				<div className="col-7">
					<ul className="list-group">
						{todos.map((todo, i) => (
							<li key={todo.id} className="list-group-item">
								<p>{`${i + 1} .- ${todo.task}`}</p>
								<button className="btn btn-danger">Borrar</button>
							</li>
						))}
					</ul>
				</div>
				<div className="col-5">
					<h4>Agregar todo</h4>
					<hr />

					<form onSubmit={handleSubmit}>
						<input
							className="form-control"
							value={description}
							type="text"
							name="description"
							placeholder="Aprender..."
							autoComplete="off"
							onChange={handleInputChange}
						/>

						<button className="btn btn-primary mt-3 btn-block" type="submit">
							Agregar
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default TodoApp;
