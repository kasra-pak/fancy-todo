import React from "react";
import * as S from "./Header.styled";

const Header = ({ currentTheme, toggleTheme }) => {
  const handleThemeToggle = () => {
    toggleTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <S.Wrapper>
      <S.Title>todo</S.Title>
      <S.ThemeToggler onClick={handleThemeToggle}>
        {/* <img src={moonImg} alt="moon" /> */}
      </S.ThemeToggler>
    </S.Wrapper>
  );
};

export default Header;
