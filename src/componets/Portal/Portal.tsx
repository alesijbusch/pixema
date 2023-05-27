import React, { ReactNode } from "react";
import { createPortal } from "react-dom";
import { PortalTarget } from "types";

interface PortalProps {
  target: PortalTarget;
  children: ReactNode;
}
export const Portal = ({ target, children }: PortalProps) => {
  const root = document.getElementById(target);
  return root ? createPortal(children, root) : null;
};
