import React, { FC } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectCompleteTodosCount } from "@reducers/rootReducer";

import * as S from "./ClearBtn.styled";
import useDeleteAllTasks from "../../hooks/api/task/useDeleteAllTasks";
import { TaskStatusEnum } from "../../enums/task.enum";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { TaskDto } from "src/api/apiFunctions/task/getTasks";

interface Props {
  refetchTasks: (
    options?: RefetchOptions | undefined,
  ) => Promise<QueryObserverResult<TaskDto[], Error>>;
}

const ClearBtn: FC<Props> = ({ refetchTasks }) => {
  const dispatch = useDispatch();
  const completeTodosCount = useSelector(selectCompleteTodosCount);
  const isHidden = completeTodosCount === 0;

  const { mutate: onDeleteAllTasks, isPending: isDeletingAllTasks } =
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
    <S.Wrapper
      isHidden={isHidden}
      onClick={handleClearCompleted}
      disabled={isDeletingAllTasks}
    >
      clear completed
    </S.Wrapper>
  );
};

export default ClearBtn;
