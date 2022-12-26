import React from "react";

import InputField from "@components/InputField";
import Items from "@components/Items";
import Item from "@components/Item";
import Filters from "@components/Filters";

const Main = () => {
  return (
    <main>
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
    </main>
  );
};

export default Main;
