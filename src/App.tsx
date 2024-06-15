import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "@assets/styles/theme";

import { useSelector } from "react-redux";
import { selectAuthToken } from "@reducers/rootReducer";
import Login from "@pages/Login";
import TaskList from "@pages/TaskList";
import GlobalStyle from "@assets/styles/globalStyles";

const App = () => {
  const authToken = useSelector(selectAuthToken);
  const [isLight, setIsLight] = useState(true);

  const toggleTheme = () => {
    setIsLight(prevState => !prevState);
  };

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <GlobalStyle />

      {authToken ? (
        <TaskList isLight={isLight} toggleTheme={toggleTheme} />
      ) : (
        <Login isLight={isLight} toggleTheme={toggleTheme} />
      )}
    </ThemeProvider>
  );
};

export default App;
