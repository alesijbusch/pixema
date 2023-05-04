import { css } from 'styled-components';
import { tokens } from 'ui';

const { layout, size } = tokens;

const H1 = css`
  ${size.font.fs28};
  ${size.fontWeight.semiBold};
  ${size.lineHeight.lh42};
  ${layout.media.tablet} {
    ${size.font.fs32};
    ${size.lineHeight.lh48};
  }
  ${layout.media.largeDesktop} {
    ${size.font.fs40};
    ${size.lineHeight.lh60};
  }
`;

const H2 = css`
  ${size.font.fs20};
  ${size.fontWeight.semiBold};
  ${size.lineHeight.lh36};
  ${layout.media.tablet} {
    ${size.font.fs24};
    ${size.lineHeight.lh36};
  }
`;
const H3 = css`
  ${size.font.fs18};
  ${size.fontWeight.semiBold};
  ${size.lineHeight.lh28};
  ${layout.media.tablet} {
    ${size.font.fs20};
    ${size.lineHeight.lh32};
  }
`;
const S1 = css`
  ${size.font.fs18};
  ${size.fontWeight.semiBold};
  ${size.lineHeight.lh24};
`;
const S2 = css`
  ${size.font.fs16};
  ${size.fontWeight.bold};
  ${size.lineHeight.lh24};
`;
const S3 = css`
  ${size.font.fs16};
  ${size.fontWeight.semiBold};
  ${size.lineHeight.lh24};
`;
const B1 = css`
  ${size.font.fs16};
  ${size.fontWeight.medium};
  ${size.lineHeight.lh24};
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
