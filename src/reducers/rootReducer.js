const initialState = {
  todos: [
    { id: '1', text: 'Complete online JavaScript course', completed: true },
    { id: '2', text: 'Jog around the park 3x', completed: false },
    { id: '3', text: '10 minutes meditation', completed: false },
    { id: '4', text: 'Read for 1 hour', completed: false },
    { id: '5', text: 'Pick up groceries', completed: false },
    { id: '6', text: 'Complete Todo App on Frontend Mentor', completed: false }
  ],
};

const newTodoId = (todos) => todos.reduce((maxId, todo) => Math.max(maxId, todo.id), -1) + 1;
;

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return {
        ...state,
        todos: [...state.todos, {
          id: newTodoId(state.todos),
          text: action.payload,
          completed: false,
        }]
      };
    }

    case 'DELETE_TODO': {
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    }

    case 'TOGGLE_TODO': {
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return { ...todo, completed: !todo.completed };
          }

          return todo;
        }
        )
      };
    }

    default:
      return state;
  }
};

export default rootReducer;