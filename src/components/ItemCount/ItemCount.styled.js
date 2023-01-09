import styled from "styled-components";

const Wrapper = styled.p`
  font-size: ${({ theme }) => theme.fonts.font4};
  color: ${({ theme }) => theme.variationColors.text4};
  margin-inline-end: 3.25em;
`;

export { Wrapper };