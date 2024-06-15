import React, {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  KeyboardEvent,
  KeyboardEventHandler,
  useState,
} from "react";
import { useDispatch } from "react-redux";

import * as S from "./InputField.styled";
import useCreateTask from "../../hooks/api/task/useCreateTask";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { TaskDto } from "src/api/apiFunctions/task/getTasks";

interface Props {
  placeholder: string;
  refetchTasks: (
    options?: RefetchOptions | undefined,
  ) => Promise<QueryObserverResult<TaskDto[], Error>>;
}

const InputField: FC<Props> = ({ placeholder, refetchTasks }) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const { mutate: onCreateTask, isPending: isCreatingTask } = useCreateTask();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<Element>) => {
    if (event?.target instanceof HTMLInputElement && event.key === "Enter") {
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
