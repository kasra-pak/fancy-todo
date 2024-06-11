import React from "react";
import * as S from "./SignUpForm.styled";

const SignUpForm = () => {
  return (
    <S.Wrapper>
      <S.Form>
        <S.FormGroup>
          <div>
            <label htmlFor="firstName">First Name</label>

            <input type="text" id="firstName" name="firstName" />
          </div>
        </S.FormGroup>

        <S.FormGroup>
          <div>
            <label htmlFor="lastName">Last Name</label>

            <input type="text" id="lastName" name="lastName" />
          </div>
        </S.FormGroup>

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

        <S.LoginButton type="submit">Sign Up</S.LoginButton>
      </S.Form>
    </S.Wrapper>
  );
};

export default SignUpForm;
