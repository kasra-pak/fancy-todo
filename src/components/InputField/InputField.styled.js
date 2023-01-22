import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;

  span {
    display: inline-block;
    border: 1px solid ${({ theme }) => theme.variationColors.border2};
    border-radius: 100%;
    width: ${({ theme }) => theme.circle.size1};
    aspect-ratio: 1;
    position: absolute;
    top: 50%;
    left: clamp(1.08em, 3.5vw, 1.3em);
    transform: translateY(-50%);
    transition: border-color .2s ease;
  }
`;

const Input = styled.input`
  font-size: ${({ theme }) => theme.fonts.font1};
  background-color: ${({ theme }) => theme.variationColors.bg2};
  color: ${({ theme }) => theme.variationColors.text2};
  caret-color: ${({ theme }) => theme.generalColors.color1};
  line-height: 1;
  letter-spacing: ${({ theme }) => theme.letterSpace};
  width: 100%;
  padding: clamp(1rem, 3vw, 1.25rem) clamp(1.08rem, 3.5vw, 1.3rem) clamp(1rem, 3vw, 1.25rem) clamp(2.925rem, 9vw, 3.85rem);
  border-radius: ${({ theme }) => theme.roundBorder};
  border: none;
  margin-bottom: -2px;
  transition: color .2s ease, background-color .2s ease;
`;

export { Wrapper, Input };