import React, { useReducer } from 'react'

import { todoReducer } from 'reducers/todoReducer';

import './todoAppStyles.css';

const initialState = [{
  id: new Date().getTime(),
  task: 'Learn React',
  done: false,
}]

const TodoApp = () => {
  
  const [todos] = useReducer(todoReducer, initialState);

  console.table(todos);

  return (
    <div>
      <h1>Todo App</h1>
      <hr />

    </div>
  )
}

export default TodoApp
