import React from "react";
import * as S from "./Header.styled";

const Header = ({ toggleTheme }) => {
  return (
    <S.Wrapper>
      <S.Title>todo</S.Title>
      <S.ThemeToggler onClick={toggleTheme} />
    </S.Wrapper>
  );
};

export default Header;
