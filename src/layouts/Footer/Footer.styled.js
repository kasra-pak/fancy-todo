import styled from "styled-components";

const Wrapper = styled.footer`
  color: ${({ theme }) => theme.light.color4};
  font-size: ${({ theme }) => theme.fonts.font2};
  text-align: center;
  max-width: 540px;
  margin-block-start: 3em;
  margin-inline: auto;
`;

export { Wrapper };