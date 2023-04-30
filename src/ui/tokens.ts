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
}
interface TokenColorBackground {
  primary: string;
  primaryLight: string;
  secondary: string;
  error: string;
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
  mobile: string;
}

interface TokenSize {
  font: TokenSizeFont;
  fontWeight: TokenFontWeight;
  lineHeight: TokenLineHeight;
  spaces: TokenSizeSpaces;
}
interface TokenSizeFont {
  sm1: string;
  sm2: string;
  sm3: string;
  lg1: string;
  lg2: string;
  lg3: string;
  lg4: string;
  lg5: string;
}
interface TokenFontWeight {
  medium: string;
  semiBold: string;
  bold: string;
}
interface TokenLineHeight {
  sm1: string;
  medium: string;
  large: string;
  extraLarge: string;
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
    },
    background: {
      primary: `color: ${Color.primary}`,
      primaryLight: `color: ${Color.primaryLight}`,
      secondary: `color: ${Color.secondary}`,
      error: `color: ${Color.error}`,
    },
  },
  layout: {
    media: {
      largeDesktop: "@media (max-width: 1920px)",
      desktop: "@media (max-width: 1440px)",
      smallDesktop: "@media (max-width: 1280px)",
      largeTablet: "@media (max-width: 1024px)",
      tablet: "@media (max-width: 768px)",
      smallTablet: "@media (max-width: 568px)",
      mobile: "@media (max-width: 375px)",
    },
  },
  size: {
    font: {
      sm1: "font-size: 14px",
      sm2: "font-size: 16px",
      sm3: "font-size: 18px",
      lg1: "font-size: 20px",
      lg2: "font-size: 24px",
      lg3: "font-size: 28px",
      lg4: "font-size: 32px",
      lg5: "font-size: 40px",
    },
    fontWeight: {
      medium: "font-weight: 500",
      semiBold: "font-weight: 600",
      bold: "font-weight: 700",
    },
    lineHeight: {
      sm1: "line-height: 24px",
      medium: "line-height: 32px",
      large: "line-height: 36px",
      extraLarge: "line-height: 60px",
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
