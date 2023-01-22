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
  box-shadow: ${({ theme }) => theme.variationColors.shadow1};
  min-height: clamp(200px, 50vw, 350px);
`;

const TodosList = styled.ul`
  min-height: clamp(150px, 50vw, 300px);
  max-height: 50vh;
  overflow: hidden auto;
  
  /* Custom scrollbar */
  --sb-width: 10px;
  --sb-radius: 10px;
  --thumb-color: ${({ theme }) => theme.generalColors.color1};
  --thumb-image: ${({ theme }) => theme.generalColors.color2};
  --track-color: ${({ theme }) => theme.variationColors.border1};

  scrollbar-color: var(--thumb-color) var(--track-color);
  scrollbar-width: thin;
  
  &::-webkit-scrollbar {
    background-color: var(--track-color);
    width: var(--sb-width);
  }

  &::-webkit-scrollbar-track {
    background-color: var(--track-color);
    border-radius: var(--sb-radius);
  }

  &::-webkit-scrollbar-thumb {
    background-image: var(--thumb-image);
    border-radius: var(--sb-radius);
  }

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

export { Wrapper, TodosList, Footer };;