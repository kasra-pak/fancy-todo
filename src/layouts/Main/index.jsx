import React, { useEffect, useState } from "react";

import InputField from "@components/InputField";
import Items from "@components/Items";
import Item from "@components/Item";
import Filters from "@components/Filters";

import { Wrapper } from "./Main.styled";

const Main = () => {
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
        <Item complete={true}>Complete online JavaScript course</Item>
        <Item>Jog around the park 3x</Item>
        <Item>10 minutes meditation</Item>
        <Item>Read for 1 hour</Item>
        <Item>Pick up groceries</Item>
        <Item>Complete Todo App on Frontend Mentor</Item>
      </Items>
      {matches && <Filters elevated />}
    </Wrapper>
  );
};

export default Main;
