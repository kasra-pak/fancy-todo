import React, { ChangeEvent, FormEvent, useState } from "react";

import * as S from "./LoginForm.styled";
import useLogin from "@hooks/api/auth/useLogin";
import { useDispatch } from "react-redux";

const formInitialValues = { email: "", password: "" };

const LoginForm = () => {
  const [formValues, setFormValues] = useState(formInitialValues);
  const { mutate: onLogin, isPending: isLogingIn } = useLogin();
  const dispatch = useDispatch();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const targetInput = e?.target;

    if (targetInput?.id && formValues?.hasOwnProperty(targetInput?.id)) {
      setFormValues(prevState => ({
        ...prevState,
        [targetInput?.id]: targetInput?.value,
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    const payload = { ...formValues };

    onLogin(payload, {
      onSuccess: res => {
        dispatch({ type: "LOGIN", payload: res?.access_token });
        localStorage.setItem("todo-auth-token", res?.access_token);
        setFormValues(formInitialValues);
      },
      onError: () => {},
    });
  };

  return (
    <S.Wrapper isLoading={isLogingIn}>
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
