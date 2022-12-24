import React from "react";

import { Wrapper, Footer, ItemCount, ClearBtn } from "./Items.styled";

const Items = ({ children }) => {
  return (
    <Wrapper>
      {children}
      <Footer>
        <ItemCount>5 items left</ItemCount>
        <ClearBtn>clear completed</ClearBtn>
      </Footer>
    </Wrapper>
  );
};

export default Items;
