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
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link, useNavigate, generatePath } from "react-router-dom";
import { ProfileImg } from "assets";
import { useDebounce, useToggle, useWindowSize } from "hooks";

export const Header = () => {
  const [search, setSearch] = useState<string>("");
  const [isMenuOpen, toggleMenu] = useToggle();
  const { width = 0 } = useWindowSize();
  const isMobile = width < 1440;

  const navigate = useNavigate();
  const debaunceSearch = useDebounce(search);

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  useEffect(() => {
    debaunceSearch && navigate(generatePath(ROUTE.SEARCH, { title: debaunceSearch }));
  }, [debaunceSearch]);

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
        <form onSubmit={handleSearch}>
          <InputSearch
            value={search}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)}
            type="text"
            placeholder="Search"
          />
        </form>

        <IconFilter />
      </InputWrapper>
    </StyledHeader>
  );
};
