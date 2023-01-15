import React from "react";
import { useDispatch } from "react-redux";

import * as S from "./ClearBtn.styled";

const ClearBtn = () => {
  const dispatch = useDispatch();

  const handleClearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  return <S.Wrapper onClick={handleClearCompleted}>clear completed</S.Wrapper>;
};

export default ClearBtn;
