import styled from "styled-components";

const Wrapper = styled.ul`
  /* font-size: ${({ theme }) => theme.fonts.font1}; */
  background-color: white;
  color: ${({ theme }) => theme.light.color5};
  display: flex;
  flex-direction: column;
  margin-block: .9em;
  border-radius: ${({ theme }) => theme.roundBorder};
  box-shadow: ${({ theme }) => theme.shadows.shadow1};
  
  & > * {
    padding-inline: 1em;
    height: 53px;
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
  font-size: ${({ theme }) => theme.fonts.font1};
  color: ${({ theme }) => theme.light.color4};
`;

const ClearBtn = styled.button`
  font-size: ${({ theme }) => theme.fonts.font1};
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