import styled, { css } from "styled-components";

import lightCrossImg from '@assets/images/icon-cross-light.svg';
import darkCrossImg from '@assets/images/icon-cross-dark.svg';
import checkImg from '@assets/images/icon-check.svg';

const Wrapper = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: clamp(.75em, 3vw, 1.25em);

  &:active {
    cursor: grabbing;
  }

  /* Show DeleteBtn on hover or focus */
  &:focus-within button,
  &:hover > button {
    opacity: 1;
    pointer-events: auto;
  }
`;

const Border = styled.div`
  background-color: ${({ theme }) => theme.variationColors.border2};
  width: ${({ theme }) => theme.circle.size1};
  aspect-ratio: 1;
  border-radius: 100%;
  padding: ${({ complete }) => complete ? '0' : '1px'};
  cursor: pointer;
  position: relative;

  /* Keeps the inner button centered */
  display: flex;
  justify-content: center;

  /* Gradient background transition is not supported */
  /* So we simulate it :D */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: ${({ theme }) => theme.generalColors.color2};
    border-radius: inherit;
    opacity: 0;
    transition: opacity .2s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const CompleteBtn = styled.button`
  background-color: ${({ theme }) => theme.variationColors.bg2};
  width: inherit;
  border: none;
  border-radius: inherit;
  cursor: inherit;
  /* Always in front; even when hovering */
  position: relative;
  z-index: 1;

  /* completed items style */
  ${({ complete }) => complete && css`
    background-image: url(${checkImg}), ${({ theme }) => theme.generalColors.color2};
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%, cover;
  `}
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.fonts.font1};
  line-height: 1;
  letter-spacing: ${({ theme }) => theme.letterSpace};
  text-decoration-line: ${(props) => props.complete ? 'line-through' : 'none'};
  color: ${({ theme, complete }) => complete ? theme.variationColors.text3 : 'inherit'};
  flex: 1 1 50%;
  margin-bottom: -2px;
`;

const DeleteBtn = styled.button`
  background-color: transparent;
  border: none;
  background-image: ${({ theme }) => theme.name === 'light' ? `url(${lightCrossImg})` : `url(${darkCrossImg})`} ;
  background-repeat: no-repeat;
  background-size: cover;
  width: clamp(13px, 2vw, 18px);
  aspect-ratio: 1;
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  transition: opacity .2s ease;

  /* always visible on touchscreens */
  @media (hover: none) {
    opacity: 1
  }
`;

export {
  Wrapper,
  Border,
  CompleteBtn,
  Text,
  DeleteBtn,
};