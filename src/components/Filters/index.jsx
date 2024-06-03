import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectFilter } from "@reducers/rootReducer";
import * as S from "./Filters.styled";
import { TaskStatusEnum } from "../../enums/task.enum";

const Filters = ({ elevated }) => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(selectFilter);

  const handleFilterToggle = event => {
    const clickedFilter = event.target.dataset.filter;

    dispatch({ type: "TOGGLE_FILTER", payload: clickedFilter });
  };

  return (
    <S.Wrapper elevated={elevated} onClick={handleFilterToggle}>
      <S.Filter active={!activeFilter}>all</S.Filter>
      <S.Filter
        data-filter={TaskStatusEnum.TODO}
        active={+activeFilter === TaskStatusEnum.TODO}
      >
        active
      </S.Filter>
      <S.Filter
        data-filter={TaskStatusEnum.COMPLETED}
        active={+activeFilter === TaskStatusEnum.COMPLETED}
      >
        completed
      </S.Filter>
    </S.Wrapper>
  );
};

export default Filters;
