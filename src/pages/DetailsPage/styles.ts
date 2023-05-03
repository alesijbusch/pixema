import styled from "styled-components";
import { ImdbIcon } from "assets";

import { spaces, tokens, typography } from "ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const { color, layout } = tokens;

const Details = styled.div`
  ${layout.media.tablet} {
    display: grid;
    grid-template-areas:
      "my-poster my-genre"
      "my-poster my-title"
      "my-poster my-sticker"
      "my-poster my-plot"
      "my-poster my-table";
  }
`;
const DetailsGenre = styled.p`
  ${typography.B1};
  ${color.text.light};
  ${layout.media.tablet} {
    grid-area: my-genre;
  }
`;
const DetailsTitle = styled.h1`
  ${typography.H1};
  ${spaces.mb24};
  ${layout.media.tablet} {
    grid-area: my-title;
  }
`;
const StickersGroup = styled.div`
  display: flex;
  ${spaces.mb40}
  ${layout.media.tablet} {
    grid-area: my-sticker;
  }
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
  ${spaces.mb40};

  ${layout.media.tablet} {
    width: 208px;
    margin-right: 32px;
    grid-area: my-poster;
  }
  ${layout.media.desktop} {
    width: 266px;
    margin-right: 42px;
  }
`;
const DetailsPoster = styled.img`
  width: 100%;
  border-radius: 20px;
  display: block;
  ${spaces.mb24}
  ${layout.media.smallTablet} {
    width: 60%;
  }
  ${layout.media.tablet} {
    width: 100%;
  }
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
  ${layout.media.tablet} {
    padding: 19px 45px;
  }
`;
const Plot = styled.p`
  ${typography.B1};
  ${spaces.mb40};
  grid-area: my-plot;
  ${layout.media.largeDesktop} {
    margin-right: 310px;
  }
`;
const Table = styled.table`
  ${spaces.mb56};

  ${layout.media.tablet} {
    grid-area: my-table;
  }
`;
const Tbody = styled.tbody``;
const Tr = styled.tr`
  display: grid;
  grid-template-columns: 148px auto;
  margin-bottom: 16px;
  :last-child {
    margin-bottom: 0;
  }
  ${layout.media.tablet} {
    margin-bottom: 20px;
    grid-template-columns: 136px auto;
  }
`;
const TdCellName = styled.td`
  ${typography.S3};
  ${color.text.light};
`;
const TdCellValue = styled.td`
  flex-basis: auto;
  ${typography.B1};
  ${color.text.white};
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
  Table,
  Tbody,
  Tr,
  TdCellName,
  TdCellValue,
  Details,
};
