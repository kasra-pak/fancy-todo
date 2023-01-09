import styled from "styled-components";

const Wrapper = styled.ul`
  background-color: ${({ theme }) => theme.variationColors.bg2};
  color: ${({ theme }) => theme.variationColors.text2};
  display: flex;
  flex-direction: column;
  margin-block: clamp(1em, 3vw, 1.4em);
  border-radius: ${({ theme }) => theme.roundBorder};
  box-shadow: ${({ theme }) => theme.shadows.shadow1};
  
  & > * {
    padding-inline: clamp(1em, 3vw, 1.2em);
    padding-block: clamp(.92em, 3vw, 1.08em);
  }
  
  & > * + * {
    border-top: 1px solid ${({ theme }) => theme.variationColors.border1};
  }
`;

const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: .5em 0;
`;

const ClearBtn = styled.button`
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


export { Wrapper, Footer, ClearBtn };