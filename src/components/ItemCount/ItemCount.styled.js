import styled from "styled-components";

const Wrapper = styled.p`
  font-size: ${({ theme }) => theme.fonts.font4};
  color: ${({ theme }) => theme.variationColors.text4};
  margin-inline-end: 3.25em;
  transition: color .2s ease;

  span {
    /* Hides its content to prevent siblings from jumping when manipulating the content */
    visibility: ${({ hideSpan }) => hideSpan ? 'hidden' : 'visible'};
  }
`;

export { Wrapper };