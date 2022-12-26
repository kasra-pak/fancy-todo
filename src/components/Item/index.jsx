import React from "react";

import { Wrapper, Border, CompleteBtn, Text, DeleteBtn } from "./Item.styled";

const Item = ({ children, complete }) => {
  return (
    <Wrapper>
      <Border complete={complete}>
        <CompleteBtn complete={complete} type="button" />
      </Border>
      <Text complete={complete}>{children}</Text>
      <DeleteBtn type="button" />
    </Wrapper>
  );
};

export default Item;
