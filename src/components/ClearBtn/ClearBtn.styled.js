import styled, { css } from "styled-components";

const Wrapper = styled.button`
  font-size: ${({ theme }) => theme.fonts.font4};
  text-transform: capitalize;
  color: ${({ theme }) => theme.variationColors.text4};
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease, opacity 0.2s ease, visibility 0.2s ease;

  ${({ isHidden }) =>
    isHidden &&
    css`
      opacity: 0;
      visibility: hidden;
    `}

  :hover {
    color: ${({ theme }) => theme.variationColors.text1};
  }
`;

export { Wrapper };
