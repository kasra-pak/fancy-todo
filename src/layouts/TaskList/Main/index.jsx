import React, { act } from "react";

import InputField from "@components/InputField";
import Items from "@components/Items";
import Filters from "@components/Filters";
import useMedia from "@hooks/useMedia";

import * as S from "./Main.styled";
import useGetTasks from "@hooks/api/task/useGetTasks";
import { useSelector } from "react-redux";
import { selectFilter } from "@reducers/rootReducer";

const Main = () => {
  const query = "(max-width: 599px)";
  const [matches] = useMedia(query);
  const activeFilter = useSelector(selectFilter);

  const {
    data: tasks,
    isLoading: isLoadingTasks,
    isRefetching: isRefetchingTasks,
    refetch: refetchTasks,
  } = useGetTasks({
    status: activeFilter,
  });

  return (
    <S.Wrapper>
      <InputField
        placeholder="Create a new todo..."
        refetchTasks={refetchTasks}
      />

      <Items
        tasks={tasks}
        isLoadingTasks={isLoadingTasks}
        isRefetchingTasks={isRefetchingTasks}
        refetchTasks={refetchTasks}
      />

      {matches && <Filters elevated />}
    </S.Wrapper>
  );
};

export default Main;
