import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectFilter } from "@reducers/rootReducer";
import * as S from "./Filters.styled";

const Filters = ({ elevated }) => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(selectFilter);

  const handleFilterToggle = event => {
    const clickedFilter = event.target.dataset.filter;
    if (clickedFilter) {
      dispatch({ type: "TOGGLE_FILTER", payload: clickedFilter });
    }
  };

  return (
    <S.Wrapper elevated={elevated} onClick={handleFilterToggle}>
      <S.Filter data-filter="All" active={activeFilter === "All"}>
        all
      </S.Filter>
      <S.Filter data-filter="Active" active={activeFilter === "Active"}>
        active
      </S.Filter>
      <S.Filter data-filter="Completed" active={activeFilter === "Completed"}>
        completed
      </S.Filter>
    </S.Wrapper>
  );
};

export default Filters;
