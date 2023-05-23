import { ROUTE } from "routes";
import {
  InputWrapper,
  Profile,
  IconFilter,
  StyledHeader,
  StyledLogo,
  ProfileIcon,
  ProfileNameWrap,
  StyledArrowIcon,
  ProfileName,
} from "./style";
import { BurgerMenu, InputSearch } from "componets";
import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { ProfileImg } from "assets";
import { useToggle, useWindowSize } from "hooks";
export const Header = () => {
  const [search, setSearch] = useState("");
  const [isMenuOpen, toggleMenu] = useToggle();
  const { width = 0 } = useWindowSize();
  const isMobile = width < 1440;
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <StyledHeader>
      <Link to={ROUTE.HOME}>
        <StyledLogo />
      </Link>
      <Profile>
        <ProfileIcon>
          <ProfileImg />
        </ProfileIcon>
        <ProfileNameWrap>
          <ProfileName>Sign In</ProfileName>
          <StyledArrowIcon />
        </ProfileNameWrap>
      </Profile>
      {isMobile && <BurgerMenu isMobile={isMobile} handleClose={toggleMenu} isOpen={isMenuOpen} />}
      <InputWrapper>
        <InputSearch value={search} onChange={handleSearch} type="text" placeholder="Search" />
        <IconFilter />
      </InputWrapper>
    </StyledHeader>
  );
};
