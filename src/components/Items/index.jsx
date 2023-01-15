import React, { useState, useEffect, createRef } from "react";
import { useSelector, shallowEqual } from "react-redux";

import { selectTodoIds } from "@reducers/rootReducer";
import useMedia from "@hooks/useMedia";

import Item from "@components/Item";
import Filters from "@components/Filters";
import ItemCount from "@components/ItemCount";
import ClearBtn from "@components/ClearBtn";

import * as S from "./Items.styled";

const Items = () => {
  const todoIds = useSelector(selectTodoIds, shallowEqual);
  const query = "(min-width: 599px)";
  const [matches] = useMedia(query);

  /// drag n drop ///
  const [draggingEl, setDraggingEl] = useState(null);
  const [startPos, setStartPos] = useState(null);
  const [shiftY, setShiftY] = useState(null);
  const [draggingElIndex, setDraggingElIndex] = useState(null);
  const [currIndex, setCurrIndex] = useState(null);

  const sth = () => {
    draggingEl.style.transform = null;
    setDraggingEl(null);
    setStartPos(null);
    setShiftY(null);
    setDraggingElIndex(null);
    setCurrIndex(null);
  };

  useEffect(() => {
    if (draggingEl) {
      window.addEventListener("mouseup", sth);
    }

    return () => window.removeEventListener("mouseup", sth);
  }, [draggingEl]);

  const handleMouseDown = (ref, e) => {
    const refEl = ref.current;
    const { top } = refEl.getBoundingClientRect();

    setDraggingEl(refEl);
    setStartPos(top);
    setShiftY(e.pageY - top);
    setDraggingElIndex(Array.from(refEl.parentElement.children).indexOf(refEl));
  };

  const handleMouseMove = e => {
    if (draggingEl) {
      // Dissable pointer events for the top element
      // so that we can check what's behind it
      draggingEl.style.pointerEvents = "none";
      const belowEl = document.elementFromPoint(e.pageX, e.pageY);
      draggingEl.style.pointerEvents = "auto";
      const belowItem = belowEl.closest("li");

      if (belowItem) {
        const belowItemIndex = Array.from(
          belowItem.parentElement.children
        ).indexOf(belowItem);

        setCurrIndex(belowItemIndex);
      } else {
        setCurrIndex(null);
      }

      const { height: draggingElHeight } = draggingEl.getBoundingClientRect();
      const { bottom: droppableBottom, top: droppableTop } =
        e.currentTarget.getBoundingClientRect();

      const rangeValidation = (num, min, max) => {
        if (num > max) return max;
        if (num < min) return min;
        return num;
      };

      const minPos = droppableTop - startPos;
      const maxPos = droppableBottom - (startPos + draggingElHeight);
      const mousePos = e.pageY - startPos - shiftY;

      draggingEl.style.transform = `
        translateY(${rangeValidation(mousePos, minPos, maxPos)}px
      `;
    }
  };

  const handleMouseUp = () => {
    draggingEl.style.transform = null;
    setDraggingEl(null);
    setStartPos(null);
    setShiftY(null);
    setDraggingElIndex(null);
    setCurrIndex(null);
  };

  if (todoIds.length === 0) {
    return (
      <S.Wrapper>
        <S.EmptyListText>Nothing to do! Enjoy your day.</S.EmptyListText>
      </S.Wrapper>
    );
  }

  return (
    <S.Wrapper>
      <S.TodosList onMouseMove={handleMouseMove}>
        {todoIds.map(id => (
          <Item
            key={id}
            ref={createRef()}
            id={id}
            draggingElIndex={draggingElIndex}
            currIndex={currIndex}
            handleMouseDown={handleMouseDown}
            handleMouseUp={handleMouseUp}
          ></Item>
        ))}
      </S.TodosList>
      <S.Footer>
        <ItemCount />
        {matches && <Filters />}
        <ClearBtn />
      </S.Footer>
    </S.Wrapper>
  );
};

export default Items;
