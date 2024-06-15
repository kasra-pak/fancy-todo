import React, { Dispatch, FC, SetStateAction } from "react";
import * as S from "./ToggleRegisterLoginButton.styled";

interface Props {
  isLogin: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

const ToggleRegisterLoginButton: FC<Props> = ({ isLogin, setIsLogin }) => {
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
