import React from "react";

import { Wrapper, Filter } from "./Filters.styled";

const Filters = () => {
  return (
    <Wrapper>
      <Filter active={true}>all</Filter>
      <Filter>active</Filter>
      <Filter>completed</Filter>
    </Wrapper>
  );
};

export default Filters;
