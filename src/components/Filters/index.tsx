import React, { ChangeEvent, FC, MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectFilter } from "@reducers/rootReducer";
import * as S from "./Filters.styled";
import { TaskStatusEnum } from "../../enums/task.enum";

interface Props {
  elevated?: boolean;
}
const Filters: FC<Props> = ({ elevated }) => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(selectFilter);

  const handleFilterToggle = (event: MouseEvent<HTMLUListElement>) => {
    if (
      event.target instanceof HTMLLIElement &&
      event.target?.dataset?.filter
    ) {
      const clickedFilter = event.target?.dataset?.filter;

      dispatch({ type: "TOGGLE_FILTER", payload: clickedFilter });
    }
  };

  return (
    <S.Wrapper elevated={elevated} onClick={handleFilterToggle}>
      <S.Filter active={!activeFilter}>all</S.Filter>
      <S.Filter
        data-filter={TaskStatusEnum.TODO}
        active={!!activeFilter && +activeFilter === TaskStatusEnum.TODO}
      >
        active
      </S.Filter>
      <S.Filter
        data-filter={TaskStatusEnum.COMPLETED}
        active={!!activeFilter && +activeFilter === TaskStatusEnum.COMPLETED}
      >
        completed
      </S.Filter>
    </S.Wrapper>
  );
};

export default Filters;
