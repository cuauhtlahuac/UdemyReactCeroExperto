import React from 'react';
import PropTypes from 'prop-types';

import TodoListItem from './TodoListItem';

const TodoList = ({ todos = [], dispatch }) => (
	<ul>
		{todos.map((todo, index) => (
			<TodoListItem
				dispatch={dispatch}
				index={index}
				todo={todo}
				key={todo.id}
			/>
		))}
	</ul>
);

TodoList.propTypes = {
	dispatch: PropTypes.func,
	todos: PropTypes.array,
};

export default TodoList;
