import React, {
  useState,
  useEffect,
  forwardRef,
  ChangeEvent,
  MouseEvent,
} from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectTodoById, State } from "@reducers/rootReducer";

import * as S from "./Item.styled";
import useDeleteTask from "../../hooks/api/task/useDeleteTask";
import useUpdateTask from "../../hooks/api/task/useUpdateTask";
import { TaskStatusEnum } from "../../enums/task.enum";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { TaskDto } from "src/api/apiFunctions/task/getTasks";

interface Props {
  id: string;
  refetchTasks: (
    options?: RefetchOptions | undefined,
  ) => Promise<QueryObserverResult<TaskDto[], Error>>;
}

const Item = forwardRef<HTMLLIElement, Props>(({ id, refetchTasks }, ref) => {
  const dispatch = useDispatch();
  const todoData = useSelector((state: State) => selectTodoById(state, id));
  const [prevData, setPrevData] = useState(todoData);
  const availableData = todoData || prevData;

  const { mutate: onDeleteTask, isPending: isDeletingTask } = useDeleteTask();
  const { mutate: onUpdateTask, isPending: isUpdatingTask } = useUpdateTask();

  useEffect(() => {
    // Preserve data for Transition out phase
    if (todoData) setPrevData(todoData);
  }, [todoData]);

  const handleToggle = (event: MouseEvent<HTMLButtonElement>) => {
    if (
      event?.target instanceof HTMLButtonElement &&
      event.target.dataset?.id
    ) {
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
    }
  };

  const handleDelete = (event: MouseEvent<HTMLButtonElement>) => {
    if (
      event?.target instanceof HTMLButtonElement &&
      event.target.dataset?.id
    ) {
      onDeleteTask(event.target.dataset.id, {
        onSuccess: () => {
          // dispatch({ type: "DELETE_TODO", payload: event.target.dataset.id });
          refetchTasks();
        },
        onError: () => {},
      });
    }
  };

  return (
    <S.Wrapper ref={ref}>
      <S.Border
        complete={
          !!availableData && availableData.status === TaskStatusEnum.COMPLETED
        }
      >
        <S.CompleteBtn
          type="button"
          complete={
            !!availableData && availableData.status === TaskStatusEnum.COMPLETED
          }
          onClick={handleToggle}
          data-id={id}
        />
      </S.Border>
      <S.Text
        complete={
          !!availableData && availableData.status === TaskStatusEnum.COMPLETED
        }
      >
        {!!availableData ? availableData?.title : ""}
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
