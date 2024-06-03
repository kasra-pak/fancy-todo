import React from "react";

import { useSelector } from "react-redux";
import {
  selectFilter,
  selectIncompleteTodosCount,
  selectCompleteTodosCount,
} from "@reducers/rootReducer";

import * as S from "./ItemCount.styled";
import { TaskStatusEnum } from "../../enums/task.enum";

const ItemCount = () => {
  const filter = useSelector(selectFilter);
  const incompleteTodosCount = useSelector(selectIncompleteTodosCount);
  const completeTodosCount = useSelector(selectCompleteTodosCount);

  const format = count => `${count} item${count === 1 ? "" : "s"}`;

  const isAll = filter === undefined;
  const isCompleted = filter === TaskStatusEnum.COMPLETED;

  return (
    <S.Wrapper hideSpan={!isAll}>
      {format(isCompleted ? completeTodosCount : incompleteTodosCount)}
      <span> left</span>
    </S.Wrapper>
  );
};

export default ItemCount;
