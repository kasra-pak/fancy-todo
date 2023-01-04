import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import InputField from "@components/InputField";
import Items from "@components/Items";
import Item from "@components/Item";
import Filters from "@components/Filters";

import { Wrapper } from "./Main.styled";

const Main = () => {
  const todos = useSelector(state => state.todos);
  const [matches, setMatches] = useState(false);

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
        {todos.map(todo => (
          <Item key={todo.id} complete={todo.completed}>
            {todo.text}
          </Item>
        ))}
      </Items>
      {matches && <Filters elevated />}
    </Wrapper>
  );
};

export default Main;
