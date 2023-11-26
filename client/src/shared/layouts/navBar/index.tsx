import { LayoutContainer, LayoutRoot } from "./components/StyledNavBar";
import { useCallback, useEffect, useState } from "react";

import React from "react";
import { SideNav } from "./components/side-nav";
import { TopNav } from "./components/TopNav";
import useAuth from "../../hooks/useAuth";

export const Layout = (props: any) => {
  const { children } = props;

  const [openNav, setOpenNav] = useState(false);
  useAuth();

  const handlePathnameChange = useCallback(() => {
    if (openNav) {
      setOpenNav(false);
    }
  }, [openNav]);

  useEffect(() => {
    handlePathnameChange();
  }, [handlePathnameChange]);

  return (
    <>
      <TopNav onNavOpen={() => setOpenNav(true)} />
      <SideNav onClose={() => setOpenNav(false)} open={openNav} />
      <LayoutRoot>
        <LayoutContainer>{children}</LayoutContainer>
      </LayoutRoot>
    </>
  );
};
