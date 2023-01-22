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
  ul,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  ul,
  button {
    padding: 0;
  }

  body {
    font-family: "Josefin Sans", sans-serif;
    background-color: ${({ theme }) => theme.variationColors.bg1};
    background-image: ${({ theme }) => theme.backgrounds.mobile};
    background-repeat: no-repeat;
    background-size: cover contain;
    background-position: top center;
    max-height: 100vh;
    margin: 1.25em;
    transition: background-color .2s ease, background-image .2s ease;

    @media screen and (min-width: 376px) {
      background-image: ${({ theme }) => theme.backgrounds.desktop};
    }

    @media screen and (min-width: 1441px) {
      background-size: contain;
    }
  }

  *::selection {
    /* color: ${({ theme }) => theme.variationColors.color1}; */
    background-color: ${({ theme }) => theme.generalColors.color1};
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
