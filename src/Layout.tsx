import React from "react";
import { getThemeState } from "./redux/features/themeSlice";
import { useSelector } from "./redux/store";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { darkTheme } = useSelector(getThemeState);

  return <div data-theme={darkTheme ? "dark" : "light"}>{children}</div>;
};

export default Layout;
