import React, { useEffect, useState } from "react";

import Filters from "@components/Filters";

import { Wrapper, Footer, ItemCount, ClearBtn } from "./Items.styled";

const Items = ({ children }) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const query = "(min-width: 599px)";
    const mediaQuery = window.matchMedia(query);
    const handler = event => setMatches(event.matches);

    setMatches(mediaQuery.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <Wrapper>
      {children}
      <Footer>
        <ItemCount>5 items left</ItemCount>
        {matches && <Filters />}
        <ClearBtn>clear completed</ClearBtn>
      </Footer>
    </Wrapper>
  );
};

export default Items;
