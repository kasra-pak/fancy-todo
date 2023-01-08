import styled from "styled-components";

import moonImg from "@assets/images/icon-moon.svg";
import sunImg from "@assets/images/icon-sun.svg";

const Wrapper = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 540px;
  margin-block: clamp(2.7em, 7vw, 4.25em) clamp(1.8em, 5vw, 2.25em);
  margin-inline: auto;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.generalColors.white};
  font-size: ${({ theme }) => theme.fonts.font3};
  text-transform: uppercase;
  letter-spacing: clamp(10px, 1.5vw, 13px);
  line-height: 1;
`;

const ThemeToggler = styled.button`
  background-image: ${({ theme }) => theme.name === 'light' ? `url(${moonImg})` : `url(${sunImg})`};
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  width: clamp(20px, 3.5vw, 27px);
  aspect-ratio: 1;
  cursor: pointer;
`;

export { Wrapper, Title, ThemeToggler };