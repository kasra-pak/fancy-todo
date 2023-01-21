import React, { useState, useEffect, forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Draggable } from "react-beautiful-dnd";

import { selectTodoById } from "@reducers/rootReducer";

import * as S from "./Item.styled";

const Item = forwardRef(({ id, index }, ref) => {
  const dispatch = useDispatch();
  const todoData = useSelector(state => selectTodoById(state.todos, id));
  const [prevData, setPrevData] = useState(todoData);
  const availableData = todoData || prevData;

  useEffect(() => {
    // Preserve data for Transition out phase
    if (todoData) setPrevData(todoData);
  }, [todoData]);

  const handleToggle = event => {
    dispatch({ type: "TOGGLE_TODO", payload: event.target.dataset.id });
  };

  const handleDelete = event => {
    dispatch({ type: "DELETE_TODO", payload: event.target.dataset.id });
  };

  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <S.Wrapper
          ref={ref}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
        >
          <S.Border complete={availableData.completed}>
            <S.CompleteBtn
              type="button"
              complete={availableData.completed}
              onClick={handleToggle}
              data-id={id}
            />
          </S.Border>
          <S.Text complete={availableData.completed}>
            {availableData.text}
          </S.Text>
          <S.DeleteBtn type="button" data-id={id} onClick={handleDelete} />
        </S.Wrapper>
      )}
    </Draggable>
  );
});

Item.displayName = "Item";

export default Item;
