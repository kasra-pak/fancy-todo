import styled from "styled-components";

const Wrapper = styled.ul`
  background-color: white;
  color: ${({ theme }) => theme.light.color5};
  display: flex;
  flex-direction: column;
  margin-block: clamp(1em, 3vw, 1.4em);
  border-radius: ${({ theme }) => theme.roundBorder};
  box-shadow: ${({ theme }) => theme.shadows.shadow1};
  
  & > * {
    padding-inline: clamp(1em, 3vw, 1.2em);
    height: clamp(53px, 8vw, 64px);
  }
  
  & > * + * {
    border-top: 1px solid ${({ theme }) => theme.light.color2};
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 53px;
`;

const ItemCount = styled.p`
  font-size: ${({ theme }) => theme.fonts.font4};
  color: ${({ theme }) => theme.light.color4};
  margin-inline-end: 3.25em;
`;

const ClearBtn = styled.button`
  font-size: ${({ theme }) => theme.fonts.font4};
  text-transform: capitalize;
  color: ${({ theme }) => theme.light.color4};
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: color .2s ease;
  
  :hover {
    color: ${({ theme }) => theme.light.color5};
  }
`;


export { Wrapper, Footer, ItemCount, ClearBtn };