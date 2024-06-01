import React, { useState, useEffect, forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectTodoById } from "@reducers/rootReducer";

import * as S from "./Item.styled";
import useDeleteTask from "../../hooks/api/task/useDeleteTask";
import useUpdateTask from "../../hooks/api/task/useUpdateTask";
import { TaskStatusEnum } from "../../enums/task.enum";

const Item = forwardRef(({ id, refetchTasks }, ref) => {
  const dispatch = useDispatch();
  const todoData = useSelector(state => selectTodoById(state.todos, id));
  const [prevData, setPrevData] = useState(todoData);
  const availableData = todoData || prevData;

  const { mutate: onDeleteTask, isLoading: isDeletingTask } = useDeleteTask();
  const { mutate: onUpdateTask, isLoading: isUpdatingTask } = useUpdateTask();

  useEffect(() => {
    // Preserve data for Transition out phase
    if (todoData) setPrevData(todoData);
  }, [todoData]);

  const handleToggle = event => {
    const payload = {
      id: event?.target?.dataset?.id,
      status:
        todoData?.status === TaskStatusEnum.COMPLETED
          ? TaskStatusEnum.TODO
          : TaskStatusEnum.COMPLETED,
    };

    onUpdateTask(payload, {
      onSuccess: () => {
        // dispatch({ type: "TOGGLE_TODO", payload: event.target.dataset.id });
        refetchTasks();
      },
      onError: () => {},
    });
  };

  const handleDelete = event => {
    onDeleteTask(event.target.dataset.id, {
      onSuccess: () => {
        // dispatch({ type: "DELETE_TODO", payload: event.target.dataset.id });
        refetchTasks();
      },
      onError: () => {},
    });
  };

  return (
    <S.Wrapper ref={ref}>
      <S.Border complete={availableData.status === TaskStatusEnum.COMPLETED}>
        <S.CompleteBtn
          type="button"
          complete={availableData.status === TaskStatusEnum.COMPLETED}
          onClick={handleToggle}
          data-id={id}
        />
      </S.Border>
      <S.Text complete={availableData.status === TaskStatusEnum.COMPLETED}>
        {availableData.title}
      </S.Text>
      <S.DeleteBtn
        type="button"
        data-id={id}
        onClick={handleDelete}
        disabled={isDeletingTask}
      />
    </S.Wrapper>
  );
});

Item.displayName = "Item";

export default Item;
