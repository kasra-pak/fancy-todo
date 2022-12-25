import { createGlobalStyle, css } from "styled-components";

import mobileBG from '@assets/images/bg-mobile-light.jpg';
import desktopBG from '@assets/images/bg-desktop-light.jpg';

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

  ul {
    padding: 0;
  }

  body {
    font-family: "Josefin Sans", sans-serif;
    background-color: ${({ theme }) => theme.light.color1};
    background-image: url(${mobileBG});
    background-repeat: no-repeat;
    background-size: cover contain;
    background-position: top center;
    max-height: 100vh;
    margin: 1.25em;

    @media screen and (min-width: 376px) {
      background-image: url(${desktopBG});
    }

    @media screen and (min-width: 1441px) {
      background-size: contain;
    }
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
