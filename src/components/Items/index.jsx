import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Filters from "@components/Filters";
import ItemCount from "@components/ItemCount";
import { Wrapper, Footer, ClearBtn } from "./Items.styled";

const Items = ({ children }) => {
  const dispatch = useDispatch();
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const query = "(min-width: 599px)";
    const mediaQuery = window.matchMedia(query);
    const handler = event => setMatches(event.matches);

    setMatches(mediaQuery.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const handleClearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <Wrapper>
      {children}
      <Footer>
        <ItemCount />
        {matches && <Filters />}
        <ClearBtn onClick={handleClearCompleted}>clear completed</ClearBtn>
      </Footer>
    </Wrapper>
  );
};

export default Items;
