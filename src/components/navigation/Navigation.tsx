import { useState } from "react";
import { Link } from "react-router-dom";
import navJson from "./nav.json";

import styles from "./Navigation.module.scss";

interface Navigation {
  index: number;
  path: string;
  label: string;
  searchValue: string;
  isActive: boolean;
}

function Navigation() {
  const [navigation, setNavigation] = useState<Navigation[]>(navJson);

  const navLinks = navigation.map((item: Navigation) => {
    return (
      <Link
        to={item.path}
        className={
          item.isActive
            ? `${styles.navigation__menu} ${styles.active}`
            : `${styles.navigation__menu} ${styles.inactive}`
        }
        key={item.path}
      >
        <span className={styles.navigation__menu__label}>{item.label}</span>
      </Link>
    );
  });

  return <nav className={styles.navigation}>{navLinks}</nav>;
}

export default Navigation;
