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
  ProfileName,
} from "./style";
import { Input } from "componets";
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
        <ProfileName>Sign In</ProfileName>
      </Profile>
      <Hamburger>
        <HamburgerLine />
        <HamburgerLine />
        <HamburgerLine />
      </Hamburger>
      <InputWrapper>
        <Input
          value={search}
          onChange={handleSearch}
          type="text"
          placeholder="Search"
        />
        <IconFilter />
      </InputWrapper>
    </StyledHeader>
  );
};
