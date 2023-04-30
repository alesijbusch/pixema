import { css } from 'styled-components';
import { tokens } from 'ui';

const { layout, size } = tokens;

const H1 = css`
  ${size.fontWeight.semiBold};
  ${size.font.lg5};
  ${size.lineHeight.extraLarge};
  ${layout.media.tablet} {
    ${size.font.lg4};
  }
  ${layout.media.mobile} {
    ${size.font.lg3};
  }
`;
const H2 = css`
  ${size.fontWeight.semiBold};
  ${size.font.lg2};
  ${size.lineHeight.large};
  ${layout.media.mobile} {
    ${size.font.lg1};
  }
`;
const H3 = css`
  ${size.fontWeight.semiBold};
  ${size.font.lg1};
  ${size.lineHeight.medium};
  ${layout.media.mobile} {
    ${size.font.sm3};
  }
`;
const S1 = css`
  ${size.fontWeight.semiBold};
  ${size.font.sm3};
  ${size.lineHeight.sm1};
`;
const S2 = css`
  ${size.fontWeight.bold};
  ${size.font.sm2};
  ${size.lineHeight.sm1};
`;
const S3 = css`
  ${size.fontWeight.semiBold};
  ${size.font.sm2};
  ${size.lineHeight.sm1};
`;
const B1 = css`
  ${size.fontWeight.medium}; // 400
  ${size.font.sm2}
  ${size.lineHeight.sm1};
`;

export const typography = {
  H1,
  H2,
  H3,
  S1,
  S2,
  S3,
  B1,
};
