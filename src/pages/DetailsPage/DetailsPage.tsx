import React from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "routes/routes";

export const DetailsPage = () => {
  return (
    <div>
      <h1>Details</h1>
      <Link to={ROUTE.HOME}>go to home</Link>
    </div>
  );
};
