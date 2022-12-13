import React from "react";

import GlobalStyle from "@assets/styles/globalStyles";

import Header from "@components/Header";
import InputField from "@components/InputField";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <InputField placeholder="Create a new todo..." />
    </>
  );
};

export default App;
