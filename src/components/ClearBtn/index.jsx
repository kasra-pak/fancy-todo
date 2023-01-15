import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectCompleteTodosCount } from "@reducers/rootReducer";

import * as S from "./ClearBtn.styled";

const ClearBtn = () => {
  const dispatch = useDispatch();
  const completeTodosCount = useSelector(selectCompleteTodosCount);
  const isHidden = completeTodosCount === 0;

  const handleClearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <S.Wrapper isHidden={isHidden} onClick={handleClearCompleted}>
      clear completed
    </S.Wrapper>
  );
};

export default ClearBtn;
