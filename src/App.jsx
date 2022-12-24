import React from "react";

import GlobalStyle from "@assets/styles/globalStyles";

import Header from "@layouts/Header";
import Main from "@layouts/Main";
import Footer from "@layouts/Footer";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
