import styled from "styled-components";

const Wrapper = styled.div`
  font-size: clamp(0.8rem, 2.5vw, 1rem);
  flex: 1 1 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.25;
  color: ${({ theme }) => theme.variationColors.text3};
  padding: 1em;
  transition: color 0.2s ease;
`;

export { Wrapper };
