import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "@assets/styles/globalStyles";
import { lightTheme, darkTheme } from "@assets/styles/theme";

import Header from "@layouts/Header";
import Main from "@layouts/Main";
import Footer from "@layouts/Footer";

const App = () => {
  const [currentTheme, setCurrentTheme] = useState("light");

  return (
    <ThemeProvider theme={currentTheme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header
        currentTheme={currentTheme}
        toggleTheme={theme => setCurrentTheme(theme)}
      />
      <Main />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
