import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { selectTodoIds } from "@reducers/rootReducer";

import * as S from "./Footer.styled";

const Footer = () => {
  const todoIds = useSelector(selectTodoIds, shallowEqual);

  return (
    todoIds.length > 1 && <S.Wrapper>Drag and drop to reorder list</S.Wrapper>
  );
};

export default Footer;
