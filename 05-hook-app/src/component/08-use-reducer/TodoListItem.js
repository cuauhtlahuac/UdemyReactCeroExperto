import React from 'react';
import PropTypes from 'prop-types';
import { FaTrashAlt, FaCheck } from 'react-icons/fa';

import { handleComplete, handleDelete } from 'utils/todoHandels';

const TodoListItem = ({ todo, index, dispatch }) => (
	<li key={todo.id} className="list-group-item">
		<p className={`${todo.done && 'font-weight-lighter complete'}`}>
			{`${index + 1} .- ${todo.task}`}
		</p>

		<span>
			<button
				onClick={() => handleComplete(todo.id, dispatch)}
				className={`btn ${todo.done
					? 'btn-success'
					: 'btn-outline-secondary'} mr-2`}
			>
				<FaCheck color="white" />
			</button>

			<button className="btn btn-danger">
				<FaTrashAlt
					color="#fdd"
					onClick={() => handleDelete(todo.id, dispatch)}
				/>
			</button>
		</span>
	</li>
);

TodoListItem.propTypes = {
	todo: PropTypes.object.isRequired,
	index: PropTypes.number,
	dispatch: PropTypes.func.isRequired,
};

export default TodoListItem;
