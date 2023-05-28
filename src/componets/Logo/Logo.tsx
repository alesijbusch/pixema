import { Link } from "react-router-dom";
import { ROUTE } from "routes";
import { StyledLogo } from "./styles";

export const Logo = () => {
  return (
    <Link to={ROUTE.HOME}>
      <StyledLogo />
    </Link>
  );
};
