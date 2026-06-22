import Logo from "../logo/Logo";
import DesktopNavigation from "../desktop-navigation/DesktopNavigation";
import HeaderActions from "../header-actions/HeaderActions";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar} aria-label="Main Navigation">
      <div className="container mx-auto px-4">
        <div className={styles.flexbetween}>
          <Logo />

          <DesktopNavigation />

          <HeaderActions />
        </div>
      </div>
    </nav>
  );
}
