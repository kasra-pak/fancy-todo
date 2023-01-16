import React from "react";
import { useSelector } from "react-redux";
import { selectFilter } from "@reducers/rootReducer";

import * as S from "./EmptyListDialogue.styled";

const EmptyListDialogue = () => {
  const filter = useSelector(selectFilter);
  let text = "There is a list of your tasks. It is empty now btw";

  if (filter === "Active") {
    text = "Nothing to do! Enjoy your day.";
  }

  if (filter === "Completed") {
    text = "You haven't done anything yet!";
  }

  return <S.Wrapper>{text}</S.Wrapper>;
};

export default EmptyListDialogue;
