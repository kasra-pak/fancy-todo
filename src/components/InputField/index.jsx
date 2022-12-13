import React from "react";

import { Wrapper, Input } from "./InputField.styled";

const InputField = ({ placeholder }) => {
  return (
    <Wrapper>
      <span></span>
      <Input type="text" placeholder={placeholder} />
    </Wrapper>
  );
};

export default InputField;
