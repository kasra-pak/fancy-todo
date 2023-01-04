import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Wrapper, Border, CompleteBtn, Text, DeleteBtn } from "./Item.styled";

const selectTodoById = (todos, todoId) =>
  todos.find(todo => todo.id === todoId);

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
    <Wrapper>
      <Border complete={todoData.completed}>
        <CompleteBtn
          type="button"
          complete={todoData.completed}
          onClick={handleToggle}
          data-id={id}
        />
      </Border>
      <Text complete={todoData.completed}>{todoData.text}</Text>
      <DeleteBtn type="button" data-id={id} onClick={handleDelete} />
    </Wrapper>
  );
};

export default Item;
