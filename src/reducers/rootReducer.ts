import { createSelector } from "@reduxjs/toolkit";
import { TaskStatusEnum } from "../enums/task.enum";

interface Todo {
  id: string;
  status: TaskStatusEnum;
  title: string;
}

interface State {
  authToken: string;
  todos: Todo[];
  filter?: TaskStatusEnum;
}

const initialState: State = {
  authToken: localStorage.getItem("todo-auth-token") || "",
  todos: [],
  filter: undefined,
};

type Action =
  | { type: "LOGIN"; payload: string }
  | { type: "UPDATE_TODOS"; payload: Todo[] }
  | { type: "TOGGLE_FILTER"; payload: TaskStatusEnum };

const rootReducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case "LOGIN": {
      return {
        ...state,
        authToken: action.payload,
      };
    }

    case "UPDATE_TODOS": {
      return {
        ...state,
        todos: [...action.payload],
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
const selectAuthToken = (state: State) => state.authToken;

const selectFilter = (state: State) => state.filter;

const selectTodoIds = (state: State) => state.todos.map(todo => todo.id);

const selectFilteredTodos = (state: State) =>
  state.todos.filter(todo => {
    if (state.filter === TaskStatusEnum.TODO)
      return todo.status !== TaskStatusEnum.COMPLETED;

    if (state.filter === TaskStatusEnum.COMPLETED)
      return todo.status === TaskStatusEnum.COMPLETED;

    return true;
  });

const selectFilteredTodoIds = createSelector(
  selectFilteredTodos,
  filteredTodos => filteredTodos.map(todo => todo.id),
);

const selectIncompleteTodosCount = (state: State) =>
  state.todos.filter(todo => todo.status !== TaskStatusEnum.COMPLETED).length;

const selectCompleteTodosCount = (state: State) =>
  state.todos.filter(todo => todo.status === TaskStatusEnum.COMPLETED).length;

const selectTodoById = (state: State, todoId: string) =>
  state.todos.find(todo => todo.id === todoId);

export {
  selectAuthToken,
  selectFilter,
  selectFilteredTodos,
  selectFilteredTodoIds,
  selectIncompleteTodosCount,
  selectCompleteTodosCount,
  selectTodoIds,
  selectTodoById,
  State,
};
export default rootReducer;
