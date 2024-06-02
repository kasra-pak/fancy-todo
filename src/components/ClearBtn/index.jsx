import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectCompleteTodosCount } from "@reducers/rootReducer";

import * as S from "./ClearBtn.styled";
import useDeleteAllTasks from "../../hooks/api/task/useDeleteAllTasks";
import { TaskStatusEnum } from "../../enums/task.enum";

const ClearBtn = ({ refetchTasks }) => {
  const dispatch = useDispatch();
  const completeTodosCount = useSelector(selectCompleteTodosCount);
  const isHidden = completeTodosCount === 0;

  const { mutate: onDeleteAllTasks, isLoading: isDeletingAllTasks } =
    useDeleteAllTasks();

  const handleClearCompleted = () => {
    onDeleteAllTasks(
      { status: TaskStatusEnum.COMPLETED },
      {
        onSuccess: () => {
          // dispatch({ type: "CLEAR_COMPLETED" });
          refetchTasks();
        },
        onError: () => {},
      },
    );
  };

  return (
    <S.Wrapper isHidden={isHidden} onClick={handleClearCompleted}>
      clear completed
    </S.Wrapper>
  );
};

export default ClearBtn;
