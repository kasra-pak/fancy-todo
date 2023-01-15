import React, { useState } from "react";
import { useDispatch } from "react-redux";

import * as S from "./InputField.styled";

const InputField = ({ placeholder }) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleKeyDown = event => {
    if (event.key === "Enter") {
      dispatch({ type: "ADD_TODO", payload: value });
      setValue("");
    }
  };

  return (
    <S.Wrapper>
      <span></span>
      <S.Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </S.Wrapper>
  );
};

export default InputField;
