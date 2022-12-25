import styled from "styled-components";

import crossImg from '@assets/images/icon-cross.svg';

const CompleteBtn = styled.button`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.light.color3};
  border-radius: 100%;
  width: ${({ theme }) => theme.circle.size1};
  aspect-ratio: 1;
  flex-shrink: 0;
  cursor: pointer;
`;

const Wrapper = styled.li`
  font-size: ${({ theme }) => theme.fonts.font1};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;

  p {
    flex: 1 1 100%;
    line-height: 1;
  }
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
`;

export { CompleteBtn, Wrapper, DeleteBtn };