import React from "react";
import Header from "@layouts/TaskList/Header";
import Main from "@layouts/Login/Main";

const Login = ({ isLight, toggleTheme }) => {
  return (
    <>
      <Header isLight={isLight} toggleTheme={toggleTheme} />

      <Main />
    </>
  );
};

export default Login;
