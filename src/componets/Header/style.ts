import styled from "styled-components";
import { Link } from "react-router-dom";
import { spaces, tokens } from "ui";
import { Logo, FilterIcon } from "assets";
const { color, layout, size } = tokens;

const StyledHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  ${spaces.mb56}
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

const StyledLogo = styled(Logo)`
  width: 152px;
  ${layout.media.smallTablet} {
    width: 162px;
    margin-right: 78px;
  }
  ${layout.media.desktop} {
    width: 158px;
    margin-right: 146px;
  }
`;
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
const Profile = styled.div`
  display: none;
  cursor: pointer;
  ${layout.media.desktop} {
    display: flex;
    align-items: center;
    width: 264px;
    order: 3;
    position: relative;
    padding-right: 20px;
    :before {
      content: ">";
      display: block;
      position: absolute;
      top: 50%;
      right: 0;
      top: 50%;
      margin-bottom: -50%;
      transform: translate(-50%, -50%);
      line-height: 1;
      color: #fff;
      text-decoration: none;
      /* -webkit-transform: rotate(270deg); */
      /* -o-transform: rotate(270deg);
    transform: rotate(270deg); */
    }
  }
`;
const ProfileIcon = styled.div`
  padding: 15px 16px;
  border-radius: 10px;
  margin-right: 20px;
  ${color.background.primary};
`;
const ProfileName = styled.div`
  ${size.font.fs16};
  ${size.fontWeight.semiBold};
  ${size.lineHeight.lh24};
`;
export {
  StyledHeader,
  // StyledLink,
  StyledLogo,
  Hamburger,
  HamburgerLine,
  InputWrapper,
  IconFilter,
  Profile,
  ProfileIcon,
  ProfileName,
};
