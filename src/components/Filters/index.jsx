import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectFilter } from "@reducers/rootReducer";
import { Wrapper, Filter } from "./Filters.styled";

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
    <Wrapper elevated={elevated} onClick={handleFilterToggle}>
      <Filter data-filter="All" active={activeFilter === "All"}>
        all
      </Filter>
      <Filter data-filter="Active" active={activeFilter === "Active"}>
        active
      </Filter>
      <Filter data-filter="Completed" active={activeFilter === "Completed"}>
        completed
      </Filter>
    </Wrapper>
  );
};

export default Filters;
