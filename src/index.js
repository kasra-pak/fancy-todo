import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';

import store from './store';
import App from "./App";
import queryClient from "./api/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>

    <Provider store={store}>
      <App />
    </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
