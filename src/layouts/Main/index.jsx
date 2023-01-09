import React, { useEffect, useState } from "react";

import InputField from "@components/InputField";
import Items from "@components/Items";
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
      <Items />
      {matches && <Filters elevated />}
    </Wrapper>
  );
};

export default Main;
