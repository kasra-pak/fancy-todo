import React, { FC } from "react";
import Header from "@layouts/TaskList/Header";
import Main from "@layouts/TaskList/Main";
import Footer from "@layouts/TaskList/Footer";

interface Props {
  isLight: boolean;
  toggleTheme: () => void;
}

const TaskList: FC<Props> = ({ isLight, toggleTheme }) => {
  return (
    <>
      <Header toggleTheme={toggleTheme} />

      <Main />

      <Footer />
    </>
  );
};

export default TaskList;
