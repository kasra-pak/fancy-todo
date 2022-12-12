import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`${css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 18px;
  }

  html:focus-within {
    scroll-behavior: smooth;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  body {
    font-family: "Josefin Sans", sans-serif;
    min-height: 100vh;
  }

  img,
  picture {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }
`}`;

export default GlobalStyle;
