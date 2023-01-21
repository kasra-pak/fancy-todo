import React, { createRef } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

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
  const dispatch = useDispatch();
  const query = "(min-width: 599px)";
  const [matches] = useMedia(query);

  const handleDragEnd = result => {
    const { source, destination } = result;

    if (destination === null) {
      return;
    }

    if (source.index === destination.index) {
      return;
    }

    dispatch({ type: "SWAP_TODO", payload: [source.index, destination.index] });
  };

  const todoListItems = filteredTodoIds.map((id, index) => (
    {
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
        <Item ref={ref} id={id} index={index} />
      </CSSTransition>
    );
  }
  ));

  return (
    <S.Wrapper>
      {todoListItems.length === 0 ? (
        <EmptyListDialogue />
      ) : (
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="todos">
            {provided => (
              <S.TodosList ref={provided.innerRef} {...provided.droppableProps}>
          <TransitionGroup component={null}>
                {todoListItems}
                {provided.placeholder}
              </TransitionGroup>
        </S.TodosList>
            )}
          </Droppable>
        </DragDropContext>
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
