import React from "react";
import { Outlet } from "react-router-dom";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <>
      me header
      <Outlet />
    </>
  );
};

export default Layout;
