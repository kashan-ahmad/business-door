import NavbarLink from "../navbar-link";
import navItems from "../navbar-utils";
import styles from "./navbar-mobile.module.scss";

function NavbarMobile() {
  return (
    <nav className={styles.navbar}>
      <ul>
        {navItems.map((item, key) => (
          <NavbarLink key={key} {...item} activeClassName={styles.active} />
        ))}
      </ul>
    </nav>
  );
}

export default NavbarMobile;
