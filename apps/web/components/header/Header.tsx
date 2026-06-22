import TopBar from "./top-bar/TopBar";
import Navbar from "./navbar/Navbar";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header} role="banner">
      <TopBar />
      <Navbar />
    </header>
  );
}
