import React from "react";

import { useSelector } from "react-redux";
import { selectIncompleteTodosCount } from "@reducers/rootReducer";

import { Wrapper } from "./ItemCount.styled";

const ItemCount = () => {
  const incompleteTodosCount = useSelector(selectIncompleteTodosCount);

  return (
    <Wrapper>
      {incompleteTodosCount} item{incompleteTodosCount === 1 ? "" : "s"} left
    </Wrapper>
  );
};

export default ItemCount;
