import styled from "styled-components";

const Wrapper = styled.ul`
  font-size: ${({ theme }) => theme.fonts.font1};
  background-color: ${({ theme }) => theme.light.color1};
  color: ${({ theme }) => theme.light.color5};
  display: flex;
  flex-direction: column;
  margin-block: 1.5em;
  border-radius: ${({ theme }) => theme.roundBorder};
  box-shadow: ${({ theme }) => theme.shadows.shadow1};
  
  & > * {
    padding: 1.25em 1.5em;
    min-height: 50px;
  }
  
  & > * + * {
    border-top: 1px solid ${({ theme }) => theme.light.color2};
  }
`;


const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemCount = styled.p`
  color: ${({ theme }) => theme.light.color4};
`;

const ClearBtn = styled.button`
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