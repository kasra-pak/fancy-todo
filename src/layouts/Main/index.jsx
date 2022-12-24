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
        <Item>complete online javascript course</Item>
        <Item>jog around the park 3x</Item>
        <Item>10 minutes meditation</Item>
        <Item>read for 1 hour</Item>
        <Item>pick up groceries</Item>
        <Item>complete todo app on frontend mentor</Item>
      </Items>
      <Filters />
    </main>
  );
};

export default Main;
