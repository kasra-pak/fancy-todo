import mobileBG from "@assets/images/bg-mobile-light.jpg";
import desktopBG from "@assets/images/bg-desktop-light.jpg";
import darkMobileBG from "@assets/images/bg-mobile-dark.jpg";
import darkDesktopBG from "@assets/images/bg-desktop-dark.jpg";

const generalColors = {
  color1: "hsl(220, 98%, 61%)",
  color2:
    "linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
  white: "hsl(0, 0%, 100%)",
};

const fonts = {
  font1: "clamp(.65rem, 2.25vw, 1rem)",
  font2: ".75rem",
  font3: "clamp(1.5rem, 5vw, 2.3rem)",
  font4: "clamp(.65rem, 2.25vw, .75rem)",
};

const circleSizes = {
  size1: "clamp(19px, 3vw, 25px)",
};

const roundBorder = ".35rem";
const letterSpace = "clamp(-.25px, calc(1px - .15vw), 0px)";

const rest = {
  generalColors,
  fonts,
  circle: circleSizes,
  roundBorder,
  letterSpace,
};

const lightTheme = {
  name: "light",
  backgrounds: {
    mobile: `url(${mobileBG})`,
    desktop: `url(${desktopBG})`,
  },
  variationColors: {
    bg1: "hsl(0, 0%, 98%)",
    bg2: "hsl(0, 0%, 100%)",
    border1: "hsl(236, 33%, 92%)",
    border2: "hsl(233, 11%, 84%)",
    text1: "hsl(235, 19%, 35%)",
    text2: "hsl(235, 19%, 35%)",
    text3: "hsl(233, 11%, 84%)",
    text4: "hsl(236, 9%, 61%)",
    shadow1: "0 25px 50px -12px hsla(0, 100%, 0%, .15)",
  },
  ...rest,
};

const darkTheme = {
  name: "dark",
  backgrounds: {
    mobile: `url(${darkMobileBG})`,
    desktop: `url(${darkDesktopBG})`,
  },
  variationColors: {
    bg1: "hsl(235, 21%, 11%)",
    bg2: "hsl(235, 24%, 19%)",
    border1: "hsl(237, 14%, 26%)",
    border2: "hsl(235, 19%, 35%)",
    text1: "hsl(236, 33%, 92%)",
    text2: "hsl(234, 39%, 85%)",
    text3: "hsl(233, 14%, 35%)",
    text4: "hsl(234, 11%, 52%)",
    shadow1: "0 25px 50px -12px hsla(0, 100%, 0%, .5)",
  },
  ...rest,
};

export { lightTheme, darkTheme };
