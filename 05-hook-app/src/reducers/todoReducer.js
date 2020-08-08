export const todoReducer = ( state = [], action ) => {

  switch (action.type) {
    case 'addTodo':
      
      return [...state, action.payload]
  
    default:
      return state;
  }
}