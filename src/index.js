import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Theme from "./assets/styles/theme";


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme>
      <App />
    </Theme>
  </React.StrictMode>
);
