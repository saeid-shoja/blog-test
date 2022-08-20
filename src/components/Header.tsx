import React from "react";
import styles from "../styles/Home.module.css";

import {
  getThemeState,
  toggleTheme,
} from "../../src/redux/features/themeSlice";
import { useDispatch, useSelector } from "../../src/redux/store";

const Header = () => {
  const dispatch = useDispatch();
  const { darkTheme } = useSelector(getThemeState);
  return (
    <div className={styles.header}>
      <h2>Overreacted</h2>
      <button onClick={() => dispatch(toggleTheme(!darkTheme))}>click</button>
    </div>
  );
};

export default Header;
