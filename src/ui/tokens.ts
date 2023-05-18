import { Color } from "ui";

interface Token {
  color: TokenColor;
  layout: TokenLayout;
  size: TokenSize;
}
interface TokenColor {
  text: TokenColorText;
  background: TokenColorBackground;
}
interface TokenColorText {
  primary: string;
  primaryLight: string;
  secondary: string;
  error: string;
  white: string;
  graphite: string;
  light: string;
}
interface TokenColorBackground {
  primary: string;
  primaryLight: string;
  secondary: string;
  error: string;
  white: string;
  graphite: string;
  green: string;
  dark: string;
}

interface TokenLayout {
  media: TokenLayoutMedia;
}
interface TokenLayoutMedia {
  largeDesktop: string;
  desktop: string;
  smallDesktop: string;
  largeTablet: string;
  tablet: string;
  smallTablet: string;
  largeMobile: string;
  mobile: string;
}

interface TokenSize {
  font: TokenSizeFont;
  fontWeight: TokenFontWeight;
  lineHeight: TokenLineHeight;
  spaces: TokenSizeSpaces;
}
interface TokenSizeFont {
  fs14: string;
  fs16: string;
  fs18: string;
  fs20: string;
  fs24: string;
  fs28: string;
  fs32: string;
  fs40: string;
}
interface TokenFontWeight {
  medium: string;
  semiBold: string;
  bold: string;
}
interface TokenLineHeight {
  lh24: string;
  lh28: string;
  lh32: string;
  lh36: string;
  lh42: string;
  lh48: string;
  lh60: string;
}
interface TokenSizeSpaces {
  mb64: string;
  mb56: string;
  mb48: string;
  mb40: string;
  mb32: string;
  mb24: string;
  mb20: string;
  mb16: string;
  mb8: string;
}
const tokens: Token = {
  color: {
    text: {
      primary: `color: ${Color.primary}`,
      primaryLight: `color: ${Color.primaryLight}`,
      secondary: `color: ${Color.secondary}`,
      error: `color: ${Color.error}`,
      white: `color: ${Color.white}`,
      graphite: `color: ${Color.graphite}`,
      light: `color: ${Color.light}`,
    },
    background: {
      primary: `background: ${Color.primary}`,
      primaryLight: `background: ${Color.primaryLight}`,
      secondary: `background: ${Color.secondary}`,
      error: `background: ${Color.error}`,
      white: `background: ${Color.white}`,
      graphite: `background-color: ${Color.graphite}`,
      green: `background-color: ${Color.green}`,
      dark: `background-color: ${Color.dark}`,
    },
  },
  layout: {
    media: {
      largeDesktop: "@media (min-width: 1920px)",
      desktop: "@media (min-width: 1440px)",
      smallDesktop: "@media (min-width: 1280px)",
      largeTablet: "@media (min-width: 1024px)",
      tablet: "@media (min-width: 768px)",
      smallTablet: "@media (min-width: 568px)",
      largeMobile: "@media (min-width: 375px)",
      mobile: "@media (min-width: 320px)",
    },
  },
  size: {
    font: {
      fs14: "font-size: 14px",
      fs16: "font-size: 16px",
      fs18: "font-size: 18px",
      fs20: "font-size: 20px",
      fs24: "font-size: 24px",
      fs28: "font-size: 28px",
      fs32: "font-size: 32px",
      fs40: "font-size: 40px",
    },
    fontWeight: {
      medium: "font-weight: 500",
      semiBold: "font-weight: 600",
      bold: "font-weight: 700",
    },
    lineHeight: {
      lh24: "line-height: 24px",
      lh28: "line-height: 28px",
      lh32: "line-height: 32px",
      lh36: "line-height: 36px",
      lh42: "line-height: 42px",
      lh48: "line-height: 48px",
      lh60: "line-height: 60px",
    },
    spaces: {
      mb64: "margin-bottom: 64px",
      mb56: "margin-bottom: 56px",
      mb48: "margin-bottom: 48px",
      mb40: "margin-bottom: 40px",
      mb32: "margin-bottom: 32px",
      mb24: "margin-bottom: 24px",
      mb20: "margin-bottom: 20px",
      mb16: "margin-bottom: 16px",
      mb8: "margin-bottom: 8px",
    },
  },
};

export { tokens };
