import styled from "styled-components";

const Wrapper = styled.ul`
  list-style: none;
  font-weight: 700;
  text-transform: capitalize;
  background-color: ${({ theme }) => theme.variationColors.bg2};
  color: ${({ theme }) => theme.variationColors.text4};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.1em;
  border-radius: ${({ elevated, theme }) => elevated ? theme.roundBorder : 'none'};
  padding: ${({ elevated }) => elevated ? '1em' : 'none'};
  box-shadow: ${({ elevated, theme }) => elevated ? theme.variationColors.shadow1 : 'none'};
  transition: color .2s ease, background-color .2s ease, box-shadow .2s ease;
`;

const Filter = styled.li`
  font-size: ${({ theme }) => theme.fonts.font2};
  color: ${({ active, theme }) => active ? theme.generalColors.color1 : 'inherit'};
  transition: color .2s ease;

  &:hover {
    color: ${({ active, theme }) => !active && theme.variationColors.text1};
    cursor: pointer;
  }
`;

export { Wrapper, Filter };