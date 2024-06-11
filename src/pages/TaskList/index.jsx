import React from "react";
import Header from "@layouts/TaskList/Header";
import Main from "@layouts/TaskList/Main";
import Footer from "@layouts/TaskList/Footer";

const TaskList = ({ isLight, toggleTheme }) => {
  return (
    <>
      <Header isLight={isLight} toggleTheme={toggleTheme} />

      <Main />

      <Footer />
    </>
  );
};

export default TaskList;
