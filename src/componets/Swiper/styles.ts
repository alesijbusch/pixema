import { ArrowNextIcon, ArrowPrevIcon } from "assets";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { spaces, tokens, typography } from "ui";

const { color, layout } = tokens;

const StyledSlider = styled.div`
  display: grid;
`;
const SwiperContainer = styled(Swiper)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 68px;
  ${layout.media.mobile} {
    width: 100%;
  }
  ${layout.media.tablet} {
    padding-top: 76px;
  }
  .swiper-button-next {
    background-image: url(${ArrowNextIcon});
    background-repeat: no-repeat;
    background-position: center;
    right: 0;
    top: 15px;
    ${layout.media.tablet} {
      top: 25px;
    }
  }
  .swiper-button-next::after {
    display: none;
  }
  .swiper-button-prev {
    background-image: url(${ArrowPrevIcon});
    background-repeat: no-repeat;
    background-position: center;
    left: auto;
    right: 40px;
    top: 15px;
    ${layout.media.tablet} {
      top: 25px;
    }
  }
  .swiper-button-prev::after {
    display: none;
  }
`;
const SwiperSlideItem = styled(SwiperSlide)``;
const StyledLinkSwiper = styled(Link)`
  ${color.text.white};
  text-decoration: none;
  :hover {
    p {
      ${color.text.primary};
    }
  }
`;

export { StyledSlider, SwiperContainer, SwiperSlideItem, StyledLinkSwiper };
