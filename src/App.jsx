import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "@assets/styles/globalStyles";
import { lightTheme, darkTheme } from "@assets/styles/theme";

import Header from "@layouts/Header";
import Main from "@layouts/Main";
import Footer from "@layouts/Footer";

const App = () => {
  const [isLight, setIsLight] = useState(true);

  const toggleTheme = () => {
    setIsLight(prevState => !prevState);
  };

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header isLight={isLight} toggleTheme={toggleTheme} />
      <Main />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
