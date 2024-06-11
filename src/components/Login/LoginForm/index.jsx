import React from "react";

import * as S from "./LoginForm.styled";

const LoginForm = () => {
  return (
    <S.Wrapper>
      <S.Form>
        <S.FormGroup>
          <div>
            <label htmlFor="email">Email</label>

            <input type="email" id="email" name="email" />
          </div>
        </S.FormGroup>

        <S.FormGroup>
          <div>
            <label htmlFor="password">Password</label>

            <input type="password" id="password" name="password" />
          </div>
        </S.FormGroup>

        <S.LoginButton type="submit">Login</S.LoginButton>
      </S.Form>
    </S.Wrapper>
  );
};

export default LoginForm;
