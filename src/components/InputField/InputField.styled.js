import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;

  span {
    display: inline-block;
    border: 1px solid ${({ theme }) => theme.light.color3};
    border-radius: 100%;
    width: ${({ theme }) => theme.circle.size1};
    aspect-ratio: 1;
    position: absolute;
    top: 50%;
    left: clamp(1.08em, 3.5vw, 1.5em);
    transform: translateY(-50%);
  }
`;

const Input = styled.input`
  font-size: ${({ theme }) => theme.fonts.font1};
  color: ${({ theme }) => theme.light.color5};
  caret-color: ${({ theme }) => theme.general.color1};
  line-height: 1;
  width: 100%;
  /* height: 50px; */
  padding: clamp(1.55em, 3vw, 1.25em) clamp(1em, 3vw, 1.5em) clamp(1.55em, 3vw, 1.25em) 4.5em;
  border-radius: ${({ theme }) => theme.roundBorder};
  border: none;
  box-shadow: ${({ theme }) => theme.shadows.shadow1};
`;

export { Wrapper, Input };