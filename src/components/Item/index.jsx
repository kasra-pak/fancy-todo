import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Wrapper, Border, CompleteBtn, Text, DeleteBtn } from "./Item.styled";

const Item = ({ id }) => {
  const dispatch = useDispatch();
  const selectTodoById = (todos, id) => todos.find(todo => todo.id === id);

  const todoData = useSelector(state => selectTodoById(state.todos, id));

  const handleDelete = event => {
    dispatch({ type: "DELETE_TODO", payload: event.target.dataset.id });
  };

  return (
    <Wrapper>
      <Border complete={todoData.completed}>
        <CompleteBtn complete={todoData.completed} type="button" />
      </Border>
      <Text complete={todoData.completed}>{todoData.text}</Text>
      <DeleteBtn type="button" onClick={handleDelete} data-id={id} />
    </Wrapper>
  );
};

export default Item;
