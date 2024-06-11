import React, { useState } from "react";

import * as S from "./LoginForm.styled";
import uselogin from "@hooks/api/auth/useLogin";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const { mutate: onLogin, isLoading: isLogingIn } = uselogin();
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const targetInput = e?.target;

    if (targetInput?.id && formValues?.hasOwnProperty(targetInput?.id)) {
      setFormValues(prevState => ({
        ...prevState,
        [targetInput?.id]: targetInput?.value,
      }));
    }
  };

  const handleSubmit = e => {
    e?.preventDefault();
    const payload = { ...formValues };

    onLogin(payload, {
      onSuccess: res => {
        dispatch({ type: "LOGIN", payload: res?.access_token });
        localStorage.setItem("todo-auth-token", res?.access_token);
      },
      onError: () => {},
    });
  };

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit}>
        <S.FormGroup>
          <div>
            <label htmlFor="email">Email</label>

            <input
              autoFocus
              type="email"
              id="email"
              name="email"
              value={formValues?.email}
              onChange={handleInputChange}
            />
          </div>
        </S.FormGroup>

        <S.FormGroup>
          <div>
            <label htmlFor="password">Password</label>

            <input
              type="password"
              id="password"
              name="password"
              value={formValues?.password}
              onChange={handleInputChange}
            />
          </div>
        </S.FormGroup>

        <S.LoginButton type="submit" disabled={isLogingIn}>
          Login
        </S.LoginButton>
      </S.Form>
    </S.Wrapper>
  );
};

export default LoginForm;
