import React, { useReducer } from 'react';

import { todoReducer } from 'reducers/todoReducer';

import './todoAppStyles.css';

const initialState = [
	{
		id: new Date().getTime(),
		task: 'Learn React',
		done: false,
	},
];

const TodoApp = () => {
	const [ todos, dispatch ] = useReducer(todoReducer, initialState);

	console.table(todos);

	const handleSubmit = e => {
		e.preventDefault();

		const newTodo = {
			id: new Date().getTime(),
			task: 'Nueva tarea',
			done: false,
		};

		const action = { type: 'addTodo', payload: newTodo };

		dispatch(action);
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
							type="text"
							name="description"
							placeholder="Aprender ..."
							autoComplete="off"
						/>

						<button
							className="btn btn-primary mt-3 btn-block"
							type="submit"
						>
							Agregar
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default TodoApp;
