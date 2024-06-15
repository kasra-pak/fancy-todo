import React, { FC } from "react";
import Header from "@layouts/TaskList/Header";
import Main from "@layouts/Login/Main";

interface Props {
  isLight: boolean;
  toggleTheme: () => void;
}

const Login: FC<Props> = ({ isLight, toggleTheme }) => {
  return (
    <>
      <Header toggleTheme={toggleTheme} />

      <Main />
    </>
  );
};

export default Login;
