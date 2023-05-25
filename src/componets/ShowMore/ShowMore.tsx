import React from "react";
import { StyledMoreProps } from "./styles";

interface ShowMoreProps {
  onClick: () => void;
}

export const ShowMore = ({ onClick }: ShowMoreProps) => {
  return (
    <StyledMoreProps type="button" onClick={onClick}>
      Show more
    </StyledMoreProps>
  );
};
