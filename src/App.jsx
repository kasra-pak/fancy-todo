import React from "react";

import GlobalStyle from "@assets/styles/globalStyles";

import Header from "@components/Header";
import InputField from "@components/InputField";
import Items from "@components/Items";
import Item from "@components/Item";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <InputField placeholder="Create a new todo..." />
      <Items>
        <Item>complete online javascript course</Item>
        <Item>jog around the park 3x</Item>
        <Item>10 minutes meditation</Item>
        <Item>read for 1 hour</Item>
        <Item>pick up groceries</Item>
        <Item>complete todo app on frontend mentor</Item>
      </Items>
    </>
  );
};

export default App;
