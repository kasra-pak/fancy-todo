import React, { useEffect, useState } from "react";

import InputField from "@components/InputField";
import Items from "@components/Items";
import Filters from "@components/Filters";

import * as S from "./Main.styled";

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
    <S.Wrapper>
      <InputField placeholder="Create a new todo..." />
      <Items />
      {matches && <Filters elevated />}
    </S.Wrapper>
  );
};

export default Main;
