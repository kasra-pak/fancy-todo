import React from "react";

import { Border, CompleteBtn, Wrapper, DeleteBtn } from "./Item.styled";

const Item = ({ children, complete }) => {
  return (
    <Wrapper complete={complete}>
      <Border complete={complete}>
        <CompleteBtn type="button" />
      </Border>
      <p>{children}</p>
      <DeleteBtn type="button" />
    </Wrapper>
  );
};

export default Item;
