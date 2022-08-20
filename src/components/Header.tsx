import React from "react";
import styles from "../../styles/Home.module.css";

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
      <h1>Overreacted</h1>
      <label id="switch" className={styles.switch}>
        <input
          type="checkbox"
          onChange={() => dispatch(toggleTheme(!darkTheme))}
          id="slider"
        />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  );
};

export default Header;
