import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import { loadState, saveState } from "./localStorage";

const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState("todos"),
});

store.subscribe(() => {
  saveState("todos", {
    todos: store.getState().todos,
    filter: store.getState().filter,
  });
});

export default store;
