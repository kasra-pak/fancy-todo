import React, { useState, useEffect, createRef } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { selectFilteredTodoIds } from "@reducers/rootReducer";
import useMedia from "@hooks/useMedia";
import { rangeValidation, belowElement } from "@utils";

import EmptyListDialogue from "@components/EmptyListDialogue";
import Item from "@components/Item";
import Filters from "@components/Filters";
import ItemCount from "@components/ItemCount";
import ClearBtn from "@components/ClearBtn";

import * as S from "./Items.styled";

const Items = () => {
  const dispatch = useDispatch();
  const filteredTodoIds = useSelector(selectFilteredTodoIds, shallowEqual);
  const query = "(min-width: 599px)";
  const [matches] = useMedia(query);

  ///==== drag n drop ====///
  const initialDragState = {
    element: null,
    top: null,
    shiftY: null,
    initialRow: null,
    row: null,
    targetRow: null,
  };

  const [draggable, setDraggable] = useState(initialDragState);

  const resetDraggable = () => {
    draggable.element.style.transform = null;
    setDraggable(initialDragState);
  };

  useEffect(() => {
    if (draggable.element) {
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, [draggable.element, draggable.targetRow]);

  const handleMouseDown = (ref, e) => {
    const refEl = ref.current;
    const { top } = refEl.getBoundingClientRect();

    setDraggable(prevState => ({
      ...prevState,
      element: refEl,
      top: top,
      shiftY: e.pageY - top,
      initialRow: Array.from(refEl.parentElement.children).indexOf(refEl),
    }));
  };

  const handleMouseMove = e => {
    if (draggable.element) {
      const belowTodo = belowElement(
        draggable.element,
        e.pageX,
        e.pageY
      ).closest("li");

      if (belowTodo) {
        const belowItemIndex = Array.from(
          belowTodo.parentElement.children
        ).indexOf(belowTodo);

        setDraggable(prevState => ({
          ...prevState,
          row: belowItemIndex,
          targetRow: belowItemIndex,
        }));
      } else {
        setDraggable(prevState => {
          if (prevState.row !== null) {
            return {
              ...prevState,
              row: null,
            };
          } else {
            return prevState;
          }
        });
      }

      const { height: draggingElHeight } =
        draggable.element.getBoundingClientRect();
      const { bottom: droppableBottom, top: droppableTop } =
        e.currentTarget.getBoundingClientRect();

      const minPos = droppableTop - draggable.top;
      const maxPos = droppableBottom - (draggable.top + draggingElHeight);
      const mousePos = e.pageY - draggable.top - draggable.shiftY;

      draggable.element.style.transform = `
        translateY(${rangeValidation(mousePos, minPos, maxPos)}px
      `;
    }
  };

  const handleMouseUp = () => {
    const { initialRow, targetRow } = draggable;

    if (initialRow !== null && targetRow !== null) {
      dispatch({
        type: "SWAP_TODO",
        payload: [initialRow, targetRow],
      });
    }

    resetDraggable();
  };

  const todoListItems = filteredTodoIds.map(id => (
    <Item
      key={id}
      ref={createRef()}
      id={id}
      draggingElIndex={draggable.initialRow}
      currIndex={draggable.row}
      handleMouseDown={handleMouseDown}
      handleMouseUp={handleMouseUp}
    ></Item>
  ));

  return (
    <S.Wrapper>
      {todoListItems.length === 0 ? (
        <EmptyListDialogue />
      ) : (
        <S.TodosList onMouseMove={handleMouseMove}>{todoListItems}</S.TodosList>
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
