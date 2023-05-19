import { ROUTE } from "routes";
import {
  Hamburger,
  HamburgerLine,
  InputWrapper,
  Profile,
  IconFilter,
  StyledHeader,
  // StyledLink,
  StyledLogo,
  ProfileIcon,
  ProfileNameWrap,
  StyledArrowIcon,
  ProfileName,
} from "./style";
import { InputSearch } from "componets";
import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { ProfileImg } from "assets";
export const Header = () => {
  const [search, setSearch] = useState("");

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
          {/* <StyledArrowIcon icon={faChevronDown} /> */}
        </ProfileNameWrap>
      </Profile>
      <Hamburger>
        <HamburgerLine />
        <HamburgerLine />
        <HamburgerLine />
      </Hamburger>
      <InputWrapper>
        <InputSearch value={search} onChange={handleSearch} type="text" placeholder="Search" />
        <IconFilter />
      </InputWrapper>
    </StyledHeader>
  );
};
