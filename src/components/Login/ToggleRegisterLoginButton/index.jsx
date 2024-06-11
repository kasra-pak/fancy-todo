import React, { useState } from "react";
import * as S from "./ToggleRegisterLoginButton.styled";

const ToggleRegisterLoginButton = ({ isLogin, setIsLogin }) => {
  return (
    <S.Wrapper>
      <S.Button active={isLogin} onClick={() => setIsLogin(true)}>
        Login
      </S.Button>

      <S.Button active={!isLogin} onClick={() => setIsLogin(false)}>
        Sign Up
      </S.Button>
    </S.Wrapper>
  );
};

export default ToggleRegisterLoginButton;
