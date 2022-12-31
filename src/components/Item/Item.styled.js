import styled, { css } from "styled-components";

import crossImg from '@assets/images/icon-cross.svg';
import checkImg from '@assets/images/icon-check.svg';

const Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: .75em;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  /* Show DeleteBtn on hover */
  &:hover > button {
    opacity: 1;
    pointer-events: unset;
  }
`;

const Border = styled.div`
  background-color: ${({ theme }) => theme.light.color3};
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
    background-image: ${({ theme }) => theme.general.color2};
    border-radius: inherit;
    opacity: 0;
    transition: opacity .2s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const CompleteBtn = styled.button`
  background-color: ${({ theme }) => theme.light.color1};
  width: ${({ theme }) => theme.circle.size1};
  aspect-ratio: 1;
  border: none;
  border-radius: inherit;
  flex-shrink: 0;
  cursor: inherit;
  /* Always in front; even when hovering */
  position: relative;
  z-index: 1;

  /* completed items style */
  ${({ complete }) => complete && css`
    background-image: url(${checkImg}), ${({ theme }) => theme.general.color2};
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%, cover;
  `}
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.fonts.font1};
  flex: 1 1 100%;
  line-height: 1;
  text-decoration-line: ${(props) => props.complete ? 'line-through' : 'none'};
  color: ${({ theme, complete }) => complete ? theme.light.color3 : 'inherit'};
`;

const DeleteBtn = styled.button`
  background-color: transparent;
  border: none;
  background-image: url(${crossImg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 13px;
  aspect-ratio: 1;
  flex-shrink: 0;
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  transition: opacity .2s ease;
`;

export {
  Wrapper,
  Border,
  CompleteBtn,
  Text,
  DeleteBtn,
};