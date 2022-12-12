import React from 'react';
import { ThemeProvider } from "styled-components";

const theme = {
  general: {
    color1: 'hsl(220, 98%, 61%)',
    color2: 'linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
  },
  light: {
    color1: 'hsl(0, 0%, 98%)',
    color2: 'hsl(236, 33%, 92%)',
    color3: 'hsl(233, 11%, 84%)',
    color4: 'hsl(236, 9%, 61%)',
    color5: 'hsl(235, 19%, 35%)',
  },
  dark: {
    color1: 'hsl(235, 21%, 11%)',
    color2: 'hsl(235, 24%, 19%)',
    color3: 'hsl(234, 39%, 85%)',
    color4: 'hsl(236, 33%, 92%)',
    color5: 'hsl(234, 11%, 52%)',
    color6: 'hsl(233, 14%, 35%)',
    color7: 'hsl(237, 14%, 26%)',
  }
};

// --Bright - Blue: hsl(220, 98 %, 61 %);
// --Check - bg: linear - gradient(to right bottom, hsl(192, 100 %, 67 %), hsl(280, 87 %, 65 %));

// /* Light Theme */
// --Very - Light - Gray: hsl(0, 0 %, 98 %);
// --Very - Light - Grayish - Blue: hsl(236, 33 %, 92 %);
// --Light - Grayish - Blue: hsl(233, 11 %, 84 %);
// --Dark - Grayish - Blue: hsl(236, 9 %, 61 %);
// --Very - Dark - Grayish - Blue: hsl(235, 19 %, 35 %);

// /* Dark Theme */
// --Very - Dark - Blue: hsl(235, 21 %, 11 %);
// --Very - Dark - Desaturated - Blue: hsl(235, 24 %, 19 %);
// --Light - Grayish - Blue: hsl(234, 39 %, 85 %);
// --Light - Grayish - Blue(hover): hsl(236, 33 %, 92 %);
// --Dark - Grayish - Blue: hsl(234, 11 %, 52 %);
// --Very - Dark - Grayish - Blue: hsl(233, 14 %, 35 %);
// --Very - Dark - Grayish - Blue: hsl(237, 14 %, 26 %);

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;