import styled from "styled-components";

import moonImg from "@assets/images/icon-moon.svg";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-block: 2.7em 2em;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.light.color1};
  font-size: ${({ theme }) => theme.fonts.font3};
  text-transform: uppercase;
  letter-spacing: 10px;
  line-height: 1;
`;

const ThemeToggler = styled.button`
  background-image: url(${moonImg});
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  width: 20px;
  aspect-ratio: 1;
  cursor: pointer;
`;

export { Wrapper, Title, ThemeToggler };