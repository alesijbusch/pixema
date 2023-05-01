import { css } from "styled-components";
import { tokens } from "ui";

const { layout } = tokens;

const mb64 = css`
  margin-bottom: 48px;
  ${layout.media.tablet} {
    margin-bottom: 56px;
  }
  ${layout.media.largeDesktop} {
    margin-bottom: 64px;
  }
`;
const mb56 = css`
  margin-bottom: 40px;
  ${layout.media.tablet} {
    margin-bottom: 48px;
  }
  ${layout.media.largeDesktop} {
    margin-bottom: 56px;
  }
`;
const mb48 = css`
  margin-bottom: 40px;
  ${layout.media.tablet} {
    margin-bottom: 48px;
  }
`;
const mb40 = css`
  margin-bottom: 32px;
  ${layout.media.tablet} {
    margin-bottom: 40px;
  }
`;
const mb32 = css`
  margin-bottom: 24px;
  ${layout.media.tablet} {
    margin-bottom: 32px;
  }
`;
const mb24 = css`
  margin-bottom: 20px;
  ${layout.media.tablet} {
    margin-bottom: 24px;
  }
`;
const mb20 = css`
  margin-bottom: 16px;
  ${layout.media.tablet} {
    margin-bottom: 20px;
  }
`;
const mb16 = css`
  margin-bottom: 16px;
`;
const mb8 = css`
  margin-bottom: 8px;
`;

const spaces = {
  mb64,
  mb56,
  mb48,
  mb40,
  mb32,
  mb24,
  mb20,
  mb16,
  mb8,
};

export { spaces };
