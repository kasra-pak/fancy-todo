import React from "react";

import { CompleteBtn, Wrapper, DeleteBtn } from "./Item.styled";

const Item = ({ children }) => {
  return (
    <Wrapper>
      <CompleteBtn type="button" />
      <p>{children}</p>
      <DeleteBtn type="button" />
    </Wrapper>
  );
};

export default Item;
