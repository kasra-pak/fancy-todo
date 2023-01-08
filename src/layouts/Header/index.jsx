import React from "react";
import { Wrapper, Title, ThemeToggler } from "./Header.styled.js";

const Header = ({ currentTheme, toggleTheme }) => {
  const handleThemeToggle = () => {
    toggleTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <Wrapper>
      <Title>todo</Title>
      <ThemeToggler onClick={handleThemeToggle}>
        {/* <img src={moonImg} alt="moon" /> */}
      </ThemeToggler>
    </Wrapper>
  );
};

export default Header;
