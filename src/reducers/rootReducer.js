const initialState = {
  todos: [],
};

const newTodoId = (todos) => todos.reduce((maxId, todo) => Math.max(maxId, todo.id), -1) + 1;
;

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, {
          id: newTodoId(state.todos),
          text: action.payload,
          completed: false,
        }]
      };

    default:
      return state;
  }
};

export default rootReducer;