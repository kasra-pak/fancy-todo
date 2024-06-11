import styled, { css } from "styled-components";

const padding = css`
  padding-inline: clamp(1em, 3vw, 1.2em);
  padding-block: clamp(0.92em, 3vw, 1.08em);
`;

const borderTop = css`
  border-top: 1px solid ${({ theme }) => theme.variationColors.border1};
`;

const Wrapper = styled.div`
  ${({ isLoading }) =>
    isLoading ? "filter: blur(1px);  pointer-events: none;" : ""};
  background-color: ${({ theme }) => theme.variationColors.bg2};
  color: ${({ theme }) => theme.variationColors.text2};
  display: flex;
  flex-direction: column;
  margin-block: clamp(1em, 3vw, 1.4em);
  overflow: hidden;
  border-radius: ${({ theme }) => theme.roundBorder};
  box-shadow: ${({ theme }) => theme.variationColors.shadow1};
  transition:
    color 0.2s ease,
    background-color 0.2s ease,
    box-shadow 0.2s ease;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: clamp(1.08rem, 3.5vw, 1.3rem);
  padding: clamp(1rem, 3vw, 1.25rem) clamp(1.08rem, 3.5vw, 1.3rem);
`;

const FormGroup = styled.div`
  font-size: ${({ theme }) => theme.fonts.font1};

  & > div {
    border: 1px solid ${({ theme }) => theme.variationColors.border1};
    border-radius: ${({ theme }) => theme.roundBorder};

    &:focus-within {
      outline: 5px auto -webkit-focus-ring-color;
    }
  }

  & > div > label {
    display: block;
    font-size: ${({ theme }) => theme.fonts.font1};
    color: ${({ theme }) => theme.variationColors.text4};
    padding-left: clamp(0.5rem, 1.5vw, 0.75rem);
    padding-top: clamp(0.7rem, 1.5vw, 0.9rem);
    cursor: text;
  }

  & > div > input {
    width: 100%;
    font-size: ${({ theme }) => theme.fonts.font1};
    background-color: ${({ theme }) => theme.variationColors.bg2};
    color: ${({ theme }) => theme.variationColors.text2};
    caret-color: ${({ theme }) => theme.generalColors.color1};
    line-height: 1;
    letter-spacing: ${({ theme }) => theme.letterSpace};
    width: 100%;
    padding: clamp(0.3rem, 1vw, 0.5rem) clamp(0.5rem, 1.5vw, 0.75rem)
      clamp(0.7rem, 1.5vw, 0.9rem) clamp(0.5rem, 1.5vw, 0.75rem);
    border: none;
    transition:
      color 0.2s ease,
      background-color 0.2s ease;

    &:focus {
      outline: none;
    }

    &:-webkit-autofill {
      color: ${({ theme }) => theme.variationColors.text2};
      background-color: ${({ theme }) => theme.variationColors.bg2} !important;
      -webkit-box-shadow: 0 0 0px 1000px
        ${({ theme }) => theme.variationColors.bg2} inset;
      box-shadow: 0 0 0px 1000px ${({ theme }) => theme.variationColors.bg2}
        inset;

      transition:
        background-color 0.2s ease,
        -webkit-box-shadow 0.2s ease,
        box-shadow 0.2s ease;
    }

    &:-webkit-autofill::first-line {
      color: ${({ theme }) => theme.variationColors.text2};
    }
  }
`;

const LoginButton = styled.button`
  width: max-content;
  background: ${({ theme }) => theme.generalColors.color2};
  color: ${({ theme }) => theme.variationColors.bg2};
  margin-inline: auto;
  padding: 0.5em 1em;
  border: none;
  border-radius: ${({ theme }) => theme.roundBorder};
  cursor: pointer;
`;

// const Footer = styled.div`
//   margin-top: auto;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   align-items: center;
//   gap: 0.5em 0;
//   ${padding}
//   ${borderTop}
// `;

export {
  Wrapper,
  Form,
  FormGroup,
  LoginButton,
  // Footer
};
