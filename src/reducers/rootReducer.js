import { createSelector } from "@reduxjs/toolkit";
import { TaskStatusEnum } from "../enums/task.enum";

const initialState = {
  authToken: "",
  todos: [],
  filter: undefined,
};

const newTodoId = todos =>
  (todos.reduce((maxId, todo) => Math.max(maxId, todo.id), -1) + 1).toString();
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_TODOS": {
      return {
        ...state,
        todos: [...action.payload],
      };
    }

    case "ADD_TODO": {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: newTodoId(state.todos),
            title: action.payload,
            status: TaskStatusEnum.TODO,
          },
        ],
      };
    }

    case "DELETE_TODO": {
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    }

    case "TOGGLE_TODO": {
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              status:
                !todo.status === TaskStatusEnum.COMPLETED
                  ? TaskStatusEnum.TODO
                  : TaskStatusEnum.COMPLETED,
            };
          }

          return todo;
        }),
      };
    }

    case "CLEAR_COMPLETED": {
      return {
        ...state,
        todos: state.todos.filter(
          todo => todo.status !== TaskStatusEnum.COMPLETED,
        ),
      };
    }

    case "TOGGLE_FILTER": {
      return {
        ...state,
        filter: action.payload,
      };
    }

    default:
      return state;
  }
};

// Selector Functions
const selectAuthToken = state => state.authToken;

const selectFilter = state => state.filter;

const selectTodoIds = state => state.todos.map(todo => todo.id);

const selectFilteredTodos = state =>
  state.todos.filter(todo => {
    if (+state.filter === TaskStatusEnum.TODO)
      return todo.status !== TaskStatusEnum.COMPLETED;

    if (+state.filter === TaskStatusEnum.COMPLETED)
      return todo.status === TaskStatusEnum.COMPLETED;

    return todo;
  });

const selectFilteredTodoIds = createSelector(
  selectFilteredTodos,
  filteredTodos => filteredTodos.map(todo => todo.id),
);

const selectIncompleteTodosCount = state =>
  state.todos.filter(todo => todo.status !== TaskStatusEnum.COMPLETED).length;

const selectCompleteTodosCount = state =>
  state.todos.filter(todo => todo.status !== TaskStatusEnum.COMPLETED).length;

const selectTodoById = (state, todoId) =>
  state.find(todo => todo.id === todoId);

export {
  selectAuthToken,
  selectFilter,
  selectFilteredTodos,
  selectFilteredTodoIds,
  selectIncompleteTodosCount,
  selectCompleteTodosCount,
  selectTodoIds,
  selectTodoById,
};
export default rootReducer;
