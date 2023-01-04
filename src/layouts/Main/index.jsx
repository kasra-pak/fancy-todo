import React, { useEffect, useState } from "react";
import { useSelector, shallowEqual } from "react-redux";

import InputField from "@components/InputField";
import Items from "@components/Items";
import Item from "@components/Item";
import Filters from "@components/Filters";

import { Wrapper } from "./Main.styled";

const selectTodoIds = state => state.todos.map(todo => todo.id);

const Main = () => {
  const [matches, setMatches] = useState(false);
  const todoIds = useSelector(selectTodoIds, shallowEqual);

  useEffect(() => {
    const query = "(max-width: 599px)";
    const mediaQuery = window.matchMedia(query);
    const handler = event => setMatches(event.matches);

    setMatches(mediaQuery.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <Wrapper>
      <InputField placeholder="Create a new todo..." />
      <Items>
        {todoIds.map(id => (
          <Item key={id} id={id}></Item>
        ))}
      </Items>
      {matches && <Filters elevated />}
    </Wrapper>
  );
};

export default Main;
