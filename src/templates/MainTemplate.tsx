import React from "react";
import { Outlet } from "react-router-dom";

export const MainTemplate = () => {
  return (
    <div>
      <h1>Header</h1>
      <Outlet />
    </div>
  );
};
