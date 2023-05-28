import { ROUTE } from "routes";
import {
  InputWrapper,
  Profile,
  IconFilter,
  StyledHeader,
  ProfileIcon,
  ProfileNameWrap,
  StyledArrowIcon,
  ProfileName,
  SearchForm,
  ProfileDropList,
  ProfileDropItem,
  ProfileDropLink,
} from "./style";
import { BurgerMenu, InputSearch, Logo } from "componets";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link, useNavigate, generatePath } from "react-router-dom";
import { ProfileImg } from "assets";
import { useDebounce, useToggle, useWindowSize } from "hooks";
import { fetchLogout, selectUser, useAppDispatch, useAppSelector } from "store";

export const Header = () => {
  const [search, setSearch] = useState<string>("");
  const [isMenuOpen, toggleMenu] = useToggle();
  const { width = 0 } = useWindowSize();
  const isMobile = width < 1440;
  const dispatch = useAppDispatch();

  const { name, loading, error, isAuth } = useAppSelector(selectUser);

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

  const handleLogout = () => {
    dispatch(fetchLogout());
  };

  return (
    <StyledHeader>
      {error && <div>{error}</div>}
      <Logo />
      <Profile>
        <ProfileIcon>
          <ProfileImg />
        </ProfileIcon>
        <ProfileNameWrap>
          {isAuth ? <ProfileName>{name}</ProfileName> : <ProfileName>Sign In</ProfileName>}
          <StyledArrowIcon />
        </ProfileNameWrap>
        <ProfileDropList>
          {isAuth && (
            <ProfileDropItem>
              <ProfileDropLink to={ROUTE.ACCOUNT}>Edit profile</ProfileDropLink>
            </ProfileDropItem>
          )}

          {isAuth ? (
            <ProfileDropItem onClick={handleLogout}>Log Out</ProfileDropItem>
          ) : (
            <ProfileDropItem>
              <ProfileDropLink to={ROUTE.SIGN_IN}>Log In</ProfileDropLink>
            </ProfileDropItem>
          )}
        </ProfileDropList>
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
