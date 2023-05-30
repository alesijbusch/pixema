import styled from "styled-components";
import { tokens, typography } from "ui";
import { FilterIcon, ProfileArrowIcon } from "assets";
import { Link } from "react-router-dom";
import { Color } from "ui";

const { color, layout } = tokens;

const StyledHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 2;
  padding-top: 32px;
  padding-bottom: 40px;
  ${layout.media.tablet} {
    padding-bottom: 48px;
  }
  ${layout.media.largeDesktop} {
    padding-bottom: 56px;
    padding-top: 40px;
  }
  ${color.themeBackground.primaryBg};

  :last-child {
    margin-bottom: 0;
  }
  ${layout.media.smallTablet} {
    flex-wrap: nowrap;
  }
`;
// const StyledLink = styled(Link)`
//   margin: 5px;
// `;

const Hamburger = styled.div`
  padding: 21px 20px;
  border-radius: 10px;
  cursor: pointer;
  ${color.background.primary};
  ${layout.media.smallTablet} {
    order: 3;
  }
  ${layout.media.desktop} {
    display: none;
  }
`;
const HamburgerLine = styled.div`
  width: 16px;
  height: 2px;
  ${color.background.white};
  display: block;
  margin: 4px 0 0 0;
  border-radius: 2px;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  :first-child {
    margin: 0;
  }
`;
const InputWrapper = styled.div`
  position: relative;
  /* display: flex;
  justify-content: space-between; */
  margin-top: 32px;
  width: 100%;
  transition: 0.3s all ease-in-out;
  ${layout.media.smallTablet} {
    margin-top: 0;
    margin: 0px 32px 0 0;
  }
  ${layout.media.desktop} {
    margin: 0px 42px 0 0;
    width: 572px;
  }
  ${layout.media.largeDesktop} {
    width: 1184px;
  }
`;
const IconFilter = styled(FilterIcon)`
  position: absolute;
  right: 0;
  top: 50%;
  margin-bottom: -50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  //display: inline-block;
`;
const ProfileDropList = styled.ul`
  ${color.themeBackground.blockBg};
  opacity: 0;
  position: absolute;
  top: 55px;
  width: 100%;
  z-index: 1;
  border-radius: 10px;
  transition: 0.3s all ease-in-out;
`;
const StyledArrowIcon = styled(ProfileArrowIcon)`
  font-size: 13px;
  transform: rotate(-90deg);
  transition: 0.3s all ease-in-out;
`;
const Profile = styled.div`
  display: none;
  cursor: pointer;
  position: relative;
  ${layout.media.desktop} {
    display: flex;
    align-items: center;
    width: 264px;
    order: 3;
    padding-right: 20px;
  }
  :hover {
    ${ProfileDropList} {
      opacity: 1;
    }
    ${StyledArrowIcon} {
      transform: rotate(0deg);
    }
  }
`;
const ProfileIcon = styled.div`
  padding: 15px 16px;
  border-radius: 10px;
  margin-right: 20px;
  ${color.background.primary};
`;
const ProfileNameWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const ProfileName = styled.span`
  ${typography.S3};
`;
const ProfileDropLink = styled(Link)`
  ${color.text.white};
  text-decoration: none;
  transition: 0.3s all ease-in-out;
`;
const ProfileDropItem = styled.li`
  padding: 17px 20px;
  border-bottom: 1px solid ${Color.graphite};
  ${color.text.primaryLight};
  ${typography.B1};
  :last-child {
    border-bottom: 0;
  }
  :hover {
    ${ProfileDropLink} {
      ${color.text.primaryLight};
    }
  }
`;

const SearchForm = styled.form``;
export {
  StyledHeader,
  Hamburger,
  HamburgerLine,
  InputWrapper,
  IconFilter,
  Profile,
  ProfileIcon,
  ProfileNameWrap,
  StyledArrowIcon,
  ProfileName,
  SearchForm,
  ProfileDropList,
  ProfileDropItem,
  ProfileDropLink,
};
