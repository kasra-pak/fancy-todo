import React, { FC } from "react";
import * as S from "./Header.styled";

interface Props {
  toggleTheme: () => void;
}

const Header: FC<Props> = ({ toggleTheme }) => {
  return (
    <S.Wrapper>
      <S.Title>todo</S.Title>
      <S.ThemeToggler onClick={toggleTheme} />
    </S.Wrapper>
  );
};

export default Header;
