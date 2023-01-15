import React from "react";

import { useSelector } from "react-redux";
import { selectIncompleteTodosCount } from "@reducers/rootReducer";

import * as S from "./ItemCount.styled";

const ItemCount = () => {
  const incompleteTodosCount = useSelector(selectIncompleteTodosCount);

  return (
    <S.Wrapper>
      {incompleteTodosCount} item{incompleteTodosCount === 1 ? "" : "s"} left
    </S.Wrapper>
  );
};

export default ItemCount;
