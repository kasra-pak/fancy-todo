import styled, { css } from "styled-components";

const padding = css`
  padding-inline: clamp(1em, 3vw, 1.2em);
  padding-block: clamp(.92em, 3vw, 1.08em);
`;

const borderTop = css`
  border-top: 1px solid ${({ theme }) => theme.variationColors.border1};
`;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.variationColors.bg2};
  color: ${({ theme }) => theme.variationColors.text2};
  display: flex;
  flex-direction: column;
  margin-block: clamp(1em, 3vw, 1.4em);
  overflow: hidden;
  border-radius: ${({ theme }) => theme.roundBorder};
  box-shadow: ${({ theme }) => theme.shadows.shadow1};
  min-height: clamp(200px, 50vw, 350px);
`;

const TodosList = styled.ul`
  & > li {
    ${padding}
  }

  & > li + li {
    ${borderTop}
  }
  `;

const Footer = styled.div`
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: .5em 0;
  ${padding}
  ${borderTop}
`;

const EmptyListText = styled.p`
  font-size: clamp(.8rem, 2.5vw, 1rem);
  text-align: center;
  line-height: 1.25;
  color: ${({ theme }) => theme.variationColors.text3};
  margin-block: auto;
`;

export { Wrapper, TodosList, Footer, EmptyListText };;