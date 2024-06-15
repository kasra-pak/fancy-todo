import styled from "styled-components";

const Wrapper = styled.div`
  font-size: ${({ theme }) => theme.fonts.font1};
  background: transparent;
  color: ${({ theme }) => theme.variationColors.text2};
  caret-color: ${({ theme }) => theme.generalColors.color1};
  line-height: 1;
  letter-spacing: ${({ theme }) => theme.letterSpace};
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  padding: clamp(1rem, 3vw, 1.25rem) clamp(2.925rem, 9vw, 3.85rem);
  border-radius: ${({ theme }) => theme.roundBorder};
  border: none;
  transition:
    color 0.2s ease,
    background-color 0.2s ease;
`;

interface ButtonProps {
  active: boolean;
}

const Button = styled.button<ButtonProps>`
  background-color: ${({ theme, active }) =>
    active ? theme.variationColors.bg2 : "transparent"};
  border: 1.5px solid ${({ theme }) => theme.variationColors.bg2};
  color: ${({ theme, active }) =>
    theme.name === "dark" && active
      ? "white"
      : active
        ? "black"
        : theme.variationColors.bg2};
  // font-weight: ${({ active }) => (active ? "600" : "inherit")};
  border-radius: ${({ theme }) => theme.roundBorder};
  mix-blend-mode: ${({ theme, active }) => (active ? "screen" : "unset")};
  padding: 0.5em 1em;
  transition: background-color 0.3s ease;
  cursor: pointer;
`;

export { Wrapper, Button };
