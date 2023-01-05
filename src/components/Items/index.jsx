import React, { useEffect, useState } from "react";

import Filters from "@components/Filters";

import { Wrapper, Footer, ItemCount, ClearBtn } from "./Items.styled";
import { useSelector } from "react-redux";

const selectIncompleteTodosCount = state =>
  state.todos.filter(todo => !todo.completed).length;

const Items = ({ children }) => {
  const incompleteTodosCount = useSelector(selectIncompleteTodosCount);
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
        <ItemCount>
          {incompleteTodosCount} item{incompleteTodosCount === 1 ? "" : "s"}{" "}
          left
        </ItemCount>
        {matches && <Filters />}
        <ClearBtn>clear completed</ClearBtn>
      </Footer>
    </Wrapper>
  );
};

export default Items;
