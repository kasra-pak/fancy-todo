import React from "react";

import { Wrapper, Filter } from "./Filters.styled";

const Filters = ({ elevated }) => {
  return (
    <Wrapper elevated={elevated}>
      <Filter active={true}>all</Filter>
      <Filter>active</Filter>
      <Filter>completed</Filter>
    </Wrapper>
  );
};

export default Filters;
