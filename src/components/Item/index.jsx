import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectTodoById } from "@reducers/rootReducer";
import * as S from "./Item.styled";

const Item = ({ id }) => {
  const dispatch = useDispatch();
  const todoData = useSelector(state => selectTodoById(state.todos, id));

  const handleToggle = event => {
    dispatch({ type: "TOGGLE_TODO", payload: event.target.dataset.id });
  };

  const handleDelete = event => {
    dispatch({ type: "DELETE_TODO", payload: event.target.dataset.id });
  };

  return (
    <S.Wrapper>
      <S.Border complete={todoData.completed}>
        <S.CompleteBtn
          type="button"
          complete={todoData.completed}
          onClick={handleToggle}
          data-id={id}
        />
      </S.Border>
      <S.Text complete={todoData.completed}>{todoData.text}</S.Text>
      <S.DeleteBtn type="button" data-id={id} onClick={handleDelete} />
    </S.Wrapper>
  );
};

export default Item;
