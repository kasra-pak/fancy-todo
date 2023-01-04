import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Wrapper, Input } from "./InputField.styled";

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
    <Wrapper>
      <span></span>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </Wrapper>
  );
};

export default InputField;
