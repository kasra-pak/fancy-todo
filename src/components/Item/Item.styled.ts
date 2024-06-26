import styled, { css } from "styled-components";
import { fade } from "@assets/styles/transitions";

import lightCrossImg from "@assets/images/icon-cross-light.svg";
import darkCrossImg from "@assets/images/icon-cross-dark.svg";
import checkImg from "@assets/images/icon-check.svg";
import { ForwardedRef } from "react";

const Wrapper = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: clamp(0.75em, 3vw, 1.25em);
  transition: border-color 0.2s ease;

  &:active {
    cursor: grabbing;
  }

  /* Show DeleteBtn on hover or focus */
  &:focus-within button,
  &:hover > button {
    opacity: 1;
    pointer-events: auto;
  }

  ${fade.classes}
`;

interface BorderProps {
  complete: boolean;
}

const Border = styled.div<BorderProps>`
  background-color: ${({ theme }) => theme.variationColors.border2};
  width: ${({ theme }) => theme.circle.size1};
  aspect-ratio: 1;
  border-radius: 100%;
  padding: ${({ complete }) => (complete ? "0" : "1px")};
  cursor: pointer;
  position: relative;
  transition:
    background-color 0.2s ease,
    box-shadow 0.2s ease;

  /* Keeps the inner button centered */
  display: flex;
  justify-content: center;

  /* Gradient background transition is not supported */
  /* So we simulate it :D */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: ${({ theme }) => theme.generalColors.color2};
    border-radius: inherit;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover::after {
    opacity: 1;
  }

  &:hover {
    box-shadow:
      -2px 0px 5px -3px hsl(192, 100%, 67%),
      0px -2px 5px -3px hsl(192, 100%, 67%),
      2px 0px 5px -3px hsl(280, 87%, 65%),
      0px 2px 5px -3px hsl(280, 87%, 65%);
  }
`;

interface CompleteBtnProps {
  complete: boolean;
}

const CompleteBtn = styled.button<CompleteBtnProps>`
  background-color: ${({ theme }) => theme.variationColors.bg2};
  width: inherit;
  border: none;
  border-radius: inherit;
  cursor: inherit;
  transition: background-color 0.2s ease;

  /* Always in front; even when hovering */
  position: relative;
  z-index: 1;

  /* completed items style */
  ${({ complete }) =>
    complete &&
    css`
      background-image: url(${checkImg}),
        ${({ theme }) => theme.generalColors.color2};
      background-repeat: no-repeat;
      background-position: center;
      background-size: 50%, cover;
    `}
`;

interface TextProps {
  complete: boolean;
}

const Text = styled.p<TextProps>`
  font-size: ${({ theme }) => theme.fonts.font1};
  line-height: 1;
  letter-spacing: ${({ theme }) => theme.letterSpace};
  text-decoration-line: ${props => (props.complete ? "line-through" : "none")};
  color: ${({ theme, complete }) =>
    complete ? theme.variationColors.text3 : "inherit"};
  flex: 1 1 50%;
  margin-bottom: -2px;
  transition: color 0.2s ease;
`;

const DeleteBtn = styled.button`
  background-color: transparent;
  border: none;
  background-image: ${({ theme }) =>
    theme.name === "light" ? `url(${lightCrossImg})` : `url(${darkCrossImg})`};
  background-repeat: no-repeat;
  background-size: cover;
  width: clamp(13px, 2vw, 18px);
  aspect-ratio: 1;
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;

  /* always visible on touchscreens */
  @media (hover: none) {
    opacity: 1;
  }
`;

export { Wrapper, Border, CompleteBtn, Text, DeleteBtn };
