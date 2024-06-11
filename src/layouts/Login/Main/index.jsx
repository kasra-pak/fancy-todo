import React, { useState } from "react";
import LoginForm from "@components/Login/LoginForm";

import * as S from "./Main.styled";

import ToggleRegisterLoginButton from "@components/Login/ToggleRegisterLoginButton";
import SignUpForm from "@components/Login/SignUpForm";

const Main = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <S.Wrapper>
      <ToggleRegisterLoginButton isLogin={isLogin} setIsLogin={setIsLogin} />

      {isLogin ? <LoginForm /> : <SignUpForm />}
    </S.Wrapper>
  );
};

export default Main;
