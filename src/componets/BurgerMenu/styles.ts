import styled from "styled-components";
import { motion } from "framer-motion";
import { BurgerCloseIcon } from "assets";

import { Color, tokens } from "ui";

const { color, layout } = tokens;

const Hamburger = styled.div`
  padding: 15px 16px;
  border-radius: 10px;
  cursor: pointer;
  ${color.background.primary};
  ${layout.media.smallTablet} {
    order: 3;
  }
`;
const BurgerNav = styled(motion.div)`
  box-shadow: -16px 20px 20px 0px rgba(0, 0, 0, 0.5);
  padding: 45px 50px 0 40px;
  width: 220px;
  position: fixed;
  top: 0;
  z-index: 20;
  display: flex;
  flex-flow: column;
  height: 100%;
  ${color.background.black};
  overflow-y: auto;
  right: 0;
  transition: 0.4s all ease-in-out;
  transform: translateX(100%);
  ${layout.media.tablet} {
    width: 288px;
  }
`;
const StyledBurgerClose = styled(BurgerCloseIcon)`
  cursor: pointer;
  fill: #80858b;
  margin-bottom: 20px;
  margin-left: auto;
  transition: 0.3s all ease-in-out;
  :hover {
    fill: ${Color.primaryLight};
  }
`;

export { Hamburger, BurgerNav, StyledBurgerClose };
