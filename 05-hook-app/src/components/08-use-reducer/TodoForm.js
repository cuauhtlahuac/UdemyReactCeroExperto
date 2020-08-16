import React from 'react';
import PropTypes from 'prop-types';

import { useForm } from 'hooks/useForm';
import { handleSubmit } from 'utils/todoHandles';

const TodoForm = ({ todos, dispatch }) => {
	const [ { description }, handleInputChange, reset ] = useForm({
		description: '',
	});

	return (
		<React.Fragment>
			<h4>Agregar todo</h4>
			<hr />

			<form onSubmit={e => handleSubmit(e, dispatch, reset, description)}>
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
		</React.Fragment>
	);
};

TodoForm.propTypes = {
	todos: PropTypes.array,
	dispatch: PropTypes.func,
};

export default TodoForm;
