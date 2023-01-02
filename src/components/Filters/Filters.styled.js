import styled from "styled-components";

const Wrapper = styled.ul`
  list-style: none;
  font-weight: 700;
  text-transform: capitalize;
  background-color: white;
  color: ${({ theme }) => theme.light.color4};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.1em;
  border-radius: ${({ elevated, theme }) => elevated ? theme.roundBorder : 'none'};
  padding: ${({ elevated }) => elevated ? '1em' : 'none'};
  box-shadow: ${({ elevated, theme }) => elevated ? theme.shadows.shadow1 : 'none'};
`;

const Filter = styled.li`
  font-size: ${({ theme }) => theme.fonts.font2};
  color: ${({ active, theme }) => active ? theme.general.color1 : 'inherit'};
  transition: color .2s ease;

  &:hover {
    color: ${({ active, theme }) => !active && theme.light.color5};
    cursor: pointer;
  }
`;

export { Wrapper, Filter };