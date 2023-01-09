import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { selectTodoIds } from "@reducers/rootReducer";
import Item from "@components/Item";
import Filters from "@components/Filters";
import ItemCount from "@components/ItemCount";

import { Wrapper, TodosList, Footer, ClearBtn } from "./Items.styled";

const Items = () => {
  const dispatch = useDispatch();
  const todoIds = useSelector(selectTodoIds, shallowEqual);
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
      <TodosList>
        {todoIds.map(id => (
          <Item key={id} id={id}></Item>
        ))}
      </TodosList>
      <Footer>
        <ItemCount />
        {matches && <Filters />}
        <ClearBtn onClick={handleClearCompleted}>clear completed</ClearBtn>
      </Footer>
    </Wrapper>
  );
};

export default Items;
