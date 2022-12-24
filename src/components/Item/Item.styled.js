import styled from "styled-components";

import crossImg from '@assets/images/icon-cross.svg';

const CompleteBtn = styled.button`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.light.color3};
  border-radius: 100%;
  width: ${({ theme }) => theme.circle.size1};
  aspect-ratio: 1;
  cursor: pointer;
`;

const Wrapper = styled.li`
  font-size: ${({ theme }) => theme.fonts.font1};
  text-transform: capitalize;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;

  p {
    flex: 1 1 100%;
  }
`;

const DeleteBtn = styled.button`
  background-color: transparent;
  border: none;
  background-image: url(${crossImg});
  background-repeat: no-repeat;
  background-size: cover;
  aspect-ratio: 1;
  cursor: pointer;
`;

export { CompleteBtn, Wrapper, DeleteBtn };