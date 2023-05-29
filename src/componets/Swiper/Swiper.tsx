import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-flip";

import SwiperCore, { EffectFlip, Navigation } from "swiper";
import { StyledLinkSwiper, StyledSlider, SwiperContainer, SwiperSlideItem } from "./styles";
import { CardItem } from "componets/CardItem/CardItem";
import { Movie } from "types";
import { generatePath } from "react-router-dom";
import { ROUTE } from "routes";

interface SliderProps {
  name: Movie[];
}
export const Slider = ({ name }: SliderProps) => {
  SwiperCore.use([EffectFlip, Navigation]);

  return (
    <StyledSlider>
      <SwiperContainer
        spaceBetween={40}
        slidesPerView={4}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          568: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 2,
          },
          1920: {
            slidesPerView: 4,
          },
        }}
        loop={true}
        direction={"horizontal"}
        navigation={true}
        className="mySwiper"
      >
        {name.map((film) => {
          return (
            <SwiperSlideItem key={film.imdbID}>
              <StyledLinkSwiper
                to={generatePath(ROUTE.RECOMMENDATIONS, { imdb: film.imdbID })}
                key={film.imdbID}
              >
                <CardItem film={film} />
              </StyledLinkSwiper>
            </SwiperSlideItem>
          );
        })}
      </SwiperContainer>
    </StyledSlider>
  );
};
