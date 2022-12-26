import styled, { css } from "styled-components";

import crossImg from '@assets/images/icon-cross.svg';
import checkImg from '@assets/images/icon-check.svg';

const Wrapper = styled.li`
  font-size: ${({ theme }) => theme.fonts.font1};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
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
  background-color: ${({ complete, theme }) => complete ? 'none' : theme.light.color3};
  border-radius: 100%;
  padding: ${({ complete }) => complete ? '0' : '1px'};
  cursor: pointer;
  
  &:hover {
    background-image: ${({ complete, theme }) => complete ? 'none' : theme.general.color2};
  }

  /* completed items style */
  button {
    ${({ complete }) => complete && css`
      background-image: url(${checkImg}), ${({ theme }) => theme.general.color2};
      background-repeat: no-repeat;
      background-position: center;
    `}
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
`;

const Text = styled.p`
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