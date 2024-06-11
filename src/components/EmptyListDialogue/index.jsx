import React from "react";
import { useSelector } from "react-redux";
import { selectFilter } from "@reducers/rootReducer";

import * as S from "./EmptyListDialogue.styled";
import { TaskStatusEnum } from "../../enums/task.enum";

const EmptyListDialogue = () => {
  const filter = useSelector(selectFilter);
  let text = "There is a list of your tasks. It is empty now btw";

  if (+filter === TaskStatusEnum.TODO) {
    text = "Nothing to do! Enjoy your day.";
  }

  if (+filter === TaskStatusEnum.COMPLETED) {
    text = "You haven't done anything yet!";
  }

  return <S.Wrapper>{text}</S.Wrapper>;
};

export default EmptyListDialogue;
