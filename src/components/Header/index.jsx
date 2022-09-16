import React from "react";
import Logo from "../Logo";
import Navigation from "../Navigation";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_wrapper}>
        <div className={styles.container}>
          <div className={styles.header_inner}>
            <Logo />
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
