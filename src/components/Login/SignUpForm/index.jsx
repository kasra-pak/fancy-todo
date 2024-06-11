import React, { useState } from "react";
import * as S from "./SignUpForm.styled";
import useSignUp from "../../../hooks/api/auth/useSignUp";

const formInitialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const SignUpForm = () => {
  const [formValues, setFormValues] = useState(formInitialValues);
  const { mutate: onSignUp, isLoading: isSigningUp } = useSignUp();

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

    onSignUp(payload, {
      onSignUp: () => {
        setFormValues(formInitialValues);
      },
      onError: () => {},
    });
  };

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit}>
        <S.FormGroup>
          <div>
            <label htmlFor="firstName">First Name</label>

            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formValues?.firstName}
              onChange={handleInputChange}
            />
          </div>
        </S.FormGroup>

        <S.FormGroup>
          <div>
            <label htmlFor="lastName">Last Name</label>

            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formValues?.lastName}
              onChange={handleInputChange}
            />
          </div>
        </S.FormGroup>

        <S.FormGroup>
          <div>
            <label htmlFor="email">Email</label>

            <input
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

        <S.LoginButton type="submit" disabled={isSigningUp}>
          Sign Up
        </S.LoginButton>
      </S.Form>
    </S.Wrapper>
  );
};

export default SignUpForm;
