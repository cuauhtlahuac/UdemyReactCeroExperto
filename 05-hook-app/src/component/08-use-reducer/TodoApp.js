import React, { useReducer, useEffect } from 'react';
import { FaTrashAlt, FaCheck } from 'react-icons/fa';

import { useForm } from 'hooks/useForm';
import { todoReducer } from 'reducers/todoReducer';

import './todoAppStyles.css';

const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];
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

		const addTodo = { type: 'addTodo', payload: newTodo };

		dispatch(addTodo);
		reset();

	};

	const handleDelete = id => {
		const removeTodo = { type: 'removeTodo', payload: id };

		dispatch(removeTodo);

	};

	const handleComplete = id => {
		const completeTodo = { type: 'completeTodo', payload: id };

		dispatch(completeTodo);

	};

	return (
		<div>
			<h1>
				Todo App
				<small>
				 ( {todos.length} )
				</small>
			</h1>
			<hr />

			<div className="row">
				<div className="col-7">
					<ul className="list-group">

						{todos.map((todo, i) => (
							<li key={todo.id} className="list-group-item">
								<p className={todo.done && `font-weight-lighter complete`}>
									{`${i + 1} .- ${todo.task}`}
								</p>

								<span>
									<button
										onClick={() => handleComplete(todo.id)}
										className={`btn ${todo.done ? "btn-success" : "btn-outline-secondary"} mr-2`}
									>

										{<FaCheck color="white" />}
									</button>

									<button className="btn btn-danger">

										<FaTrashAlt
											color="#fdd"
											onClick={() => handleDelete(todo.id)}
										/>
									</button>
								</span>
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
