import React from "react";
import { BurgerNav, Hamburger, StyledBurgerClose } from "./styles";
import { BurgerCloseIcon, BurgerOpenIcon } from "assets";
import { Navigation } from "componets";

interface BurgerMenuProps {
  handleClose: () => void;
  isOpen: boolean;
  isMobile: boolean;
}
const menuVariants = {
  open: { x: 0 },
  closed: { x: "100%" },
  idle: {},
};

export const BurgerMenu = ({ handleClose, isOpen, isMobile }: BurgerMenuProps) => {
  const currentVariant = isMobile ? (isOpen ? "open" : "closed") : "idle";
  return (
    <>
      <Hamburger onClick={handleClose}>
        {isOpen ? <BurgerCloseIcon /> : <BurgerOpenIcon />}
      </Hamburger>
      {isOpen && (
        <BurgerNav animate={currentVariant} variants={menuVariants} initial="idle">
          <StyledBurgerClose onClick={handleClose} />
          <Navigation handleClose={handleClose} />
        </BurgerNav>
      )}
    </>
  );
};
