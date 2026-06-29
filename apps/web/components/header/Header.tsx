import TopBar from "./TopBar";
import Navbar from "./Navbar";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header} role="banner">
      <TopBar />
      <Navbar />
    </header>
  );
}
