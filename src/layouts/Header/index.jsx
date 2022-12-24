import React from "react";
import { Wrapper, Title, ThemeToggler } from "./Header.styled.js";

const Header = () => {
  return (
    <Wrapper>
      <Title>todo</Title>
      <ThemeToggler>{/* <img src={moonImg} alt="moon" /> */}</ThemeToggler>
    </Wrapper>
  );
};

export default Header;
