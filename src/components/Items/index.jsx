import React from "react";
import { useSelector, shallowEqual } from "react-redux";

import { selectFilteredTodoIds } from "@reducers/rootReducer";
import useMedia from "@hooks/useMedia";

import EmptyListDialogue from "@components/EmptyListDialogue";
import Item from "@components/Item";
import Filters from "@components/Filters";
import ItemCount from "@components/ItemCount";
import ClearBtn from "@components/ClearBtn";

import * as S from "./Items.styled";

const Items = () => {
  const filteredTodoIds = useSelector(selectFilteredTodoIds, shallowEqual);
  const query = "(min-width: 599px)";
  const [matches] = useMedia(query);

  const todoListItems = filteredTodoIds.map(id => <Item key={id} id={id} />);

  return (
    <S.Wrapper>
      {todoListItems.length === 0 ? (
        <EmptyListDialogue />
      ) : (
        <S.TodosList>{todoListItems}</S.TodosList>
      )}
      <S.Footer>
        <ItemCount />
        {matches && <Filters />}
        <ClearBtn />
      </S.Footer>
    </S.Wrapper>
  );
};

export default Items;
