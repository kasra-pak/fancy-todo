import React, { createRef } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { selectFilteredTodoIds } from "@reducers/rootReducer";
import useMedia from "@hooks/useMedia";
import { fade } from "@assets/styles/transitions";

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

  const todoListItems = filteredTodoIds.map(id => {
    const ref = createRef();

    return (
      <CSSTransition
        key={id}
        nodeRef={ref}
        timeout={fade.timeout}
        classNames={fade.name}
        appear
        in
      >
        <Item ref={ref} id={id} />
      </CSSTransition>
    );
  });

  return (
    <S.Wrapper>
      {todoListItems.length === 0 ? (
        <EmptyListDialogue />
      ) : (
        <S.TodosList>
          <TransitionGroup component={null}>{todoListItems}</TransitionGroup>
        </S.TodosList>
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
