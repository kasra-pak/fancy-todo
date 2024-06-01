import React, { useState } from "react";
import { useDispatch } from "react-redux";

import * as S from "./InputField.styled";
import useCreateTask from "../../hooks/api/task/useCreateTask";

const InputField = ({ placeholder, refetchTasks }) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const { mutate: onCreateTask, isLoading: isCreatingTask } = useCreateTask();

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleKeyDown = event => {
    if (event.key === "Enter") {
      // dispatch({ type: "ADD_TODO", payload: value });
      const payload = {
        title: value,
      };

      onCreateTask(payload, {
        onSuccess: () => {
          refetchTasks();
          setValue("");
        },
        onError: () => {},
      });
    }
  };

  return (
    <S.Wrapper>
      <span></span>
      <S.Input
        type="text"
        placeholder={placeholder}
        disabled={isCreatingTask}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </S.Wrapper>
  );
};

export default InputField;
