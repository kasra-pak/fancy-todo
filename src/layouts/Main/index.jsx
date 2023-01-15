import React from "react";

import { useSelector, shallowEqual } from "react-redux";
import { selectTodoIds } from "@reducers/rootReducer";

import InputField from "@components/InputField";
import Items from "@components/Items";
import Filters from "@components/Filters";
import useMedia from "@hooks/useMedia";

import * as S from "./Main.styled";

const Main = () => {
  const todoIds = useSelector(selectTodoIds, shallowEqual);
  const query = "(max-width: 599px)";
  const [matches] = useMedia(query);

  return (
    <S.Wrapper>
      <InputField placeholder="Create a new todo..." />
      <Items />
      {matches && todoIds.length !== 0 && <Filters elevated />}
    </S.Wrapper>
  );
};

export default Main;
