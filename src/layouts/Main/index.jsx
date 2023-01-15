import React from "react";

import InputField from "@components/InputField";
import Items from "@components/Items";
import Filters from "@components/Filters";
import useMedia from "@hooks/useMedia";

import * as S from "./Main.styled";

const Main = () => {
  const query = "(max-width: 599px)";
  const [matches] = useMedia(query);

  return (
    <S.Wrapper>
      <InputField placeholder="Create a new todo..." />
      <Items />
      {matches && <Filters elevated />}
    </S.Wrapper>
  );
};

export default Main;
