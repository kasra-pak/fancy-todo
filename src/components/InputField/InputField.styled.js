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
    top: 47%;
    left: .75em;
    transform: translateY(-50%);
  }
`;

const Input = styled.input`
  width: 100%;
  font-size: .65rem;
  font-weight: 400;
  color: ${({ theme }) => theme.light.color5};
  caret-color: ${({ theme }) => theme.general.color1};
  padding: 1.25em 1em 1.25em 2.15rem;
  border-radius: ${({ theme }) => theme.roundBorder};
  border: none;
  box-shadow: ${({ theme }) => theme.shadows.shadow1};


`;

export { Wrapper, Input };