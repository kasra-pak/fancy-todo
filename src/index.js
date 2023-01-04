import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import { ThemeProvider } from "styled-components";

import store from './store';
import { theme } from "@assets/styles/theme";
import App from "./App";


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
