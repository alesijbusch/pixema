import styled from 'styled-components';
import { ImdbIcon } from 'assets';

import { spaces, tokens, typography } from 'ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const { color, layout } = tokens;

const DetailsGenre = styled.p`
  ${typography.B1}
  ${color.text.light};
`;
const DetailsTitle = styled.h1`
  ${typography.H1}
  ${spaces.mb24}
`;
const StickersGroup = styled.div`
  display: flex;
  ${spaces.mb40}
`;
const StickerReating = styled.div`
  border-radius: 6px;
  padding: 2px 7px;
  margin-right: 20px;
  ${color.background.green};
  ${typography.S3}
`;
const StickerDefault = styled.div`
  border-radius: 6px;
  padding: 2px 7px;
  margin-right: 20px;
  ${color.background.graphite};
  ${typography.S3}
`;
const StyledImdbIcon = styled(ImdbIcon)`
  margin-right: 8px;
`;
const DetailsPosterGroup = styled.div`
  ${spaces.mb40}
`;
const DetailsPoster = styled.img`
  width: 100%;
  ${spaces.mb24}
`;
const StyledFavoritesIcon = styled(FontAwesomeIcon)`
  font-size: 18px;
  ${color.text.light};
`;
const StyledFavorites = styled.div`
  padding: 19px 60px;
  border-radius: 10px;
  display: inline-block;
  cursor: pointer;
  ${color.background.graphite};
  :hover {
    ${StyledFavoritesIcon} {
      ${color.text.white};
    }
  }
`;
const Plot = styled.p`
  ${typography.B1};
`;

export {
  DetailsGenre,
  DetailsTitle,
  StickersGroup,
  StickerReating,
  StickerDefault,
  DetailsPoster,
  StyledImdbIcon,
  StyledFavoritesIcon,
  StyledFavorites,
  DetailsPosterGroup,
  Plot,
};
