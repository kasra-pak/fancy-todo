import { css } from "styled-components";

const name = "fade";
const timeout = 200;

const fade = {
  name,
  timeout,
  classes: css`
    &.${name}-enter, &.${name}-appear {
      opacity: 0;
    }

    &.${name}-enter-active, &.${name}-appear-active {
      opacity: 1;
      transition: opacity ${timeout}ms;
    }

    &.${name}-exit {
      opacity: 1;
    }

    &.${name}-exit-active {
      opacity: 0;
      transition: opacity ${timeout}ms;
    }
  `,
};

export { fade };
