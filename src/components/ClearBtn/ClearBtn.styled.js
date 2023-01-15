import styled from "styled-components";

const Wrapper = styled.button`
  font-size: ${({ theme }) => theme.fonts.font4};
  text-transform: capitalize;
  color: ${({ theme }) => theme.variationColors.text4};
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: color .2s ease;
  
  :hover {
    color: ${({ theme }) => theme.variationColors.text1};
  }
`;

export { Wrapper };