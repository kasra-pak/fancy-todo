import React from "react";

import { useSelector } from "react-redux";
import {
  selectFilter,
  selectIncompleteTodosCount,
  selectCompleteTodosCount,
} from "@reducers/rootReducer";

import * as S from "./ItemCount.styled";

const ItemCount = () => {
  const filter = useSelector(selectFilter);
  const incompleteTodosCount = useSelector(selectIncompleteTodosCount);
  const completeTodosCount = useSelector(selectCompleteTodosCount);

  const format = count => `${count} item${count === 1 ? "" : "s"}`;

  return filter === "Completed" ? (
    <S.Wrapper>{format(completeTodosCount)}</S.Wrapper>
  ) : (
    <S.Wrapper>
      {format(incompleteTodosCount)}
      {filter === "All" ? " left" : null}
    </S.Wrapper>
  );
};

export default ItemCount;
