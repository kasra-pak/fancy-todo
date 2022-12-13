import styled from "styled-components";

import mobileBG from '@assets/images/bg-mobile-light.jpg';
import moonImg from "@assets/images/icon-moon.svg";

const Wrapper = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.light.color1};
  text-transform: uppercase;
  letter-spacing: 12px;
  `;

const ThemeToggler = styled.button`
  background-image: url(${moonImg});
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  width: 26px;
  aspect-ratio: 1;
  cursor: pointer;
`;

export { Wrapper, Title, ThemeToggler };