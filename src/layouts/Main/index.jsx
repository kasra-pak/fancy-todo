import React from "react";

import InputField from "@components/InputField";
import Items from "@components/Items";
import Item from "@components/Item";
import Filters from "@components/Filters";

import { Wrapper } from "./Main.styled";

const Main = () => {
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
      <Filters />
    </Wrapper>
  );
};

export default Main;
