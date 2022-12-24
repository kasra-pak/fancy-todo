import styled from "styled-components";

const Wrapper = styled.ul`
  list-style: none;
  font-size: ${({ theme }) => theme.fonts.font2};
  font-weight: 700;
  text-transform: capitalize;
  color: ${({ theme }) => theme.light.color4};
  display: flex;
  justify-content: center;
  gap: 1.5em;
  padding: 1em;
  box-shadow: ${({ theme }) => theme.shadows.shadow1};
  border-radius: ${({ theme }) => theme.roundBorder};
`;

export { Wrapper };