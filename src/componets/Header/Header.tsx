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
  SearchForm,
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
  const handleSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
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
        <SearchForm onSubmit={handleSearch}>
          <InputSearch
            value={search}
            onChange={handleSearchValue}
            type="text"
            placeholder="Search"
          />
        </SearchForm>
        <IconFilter />
      </InputWrapper>
    </StyledHeader>
  );
};
