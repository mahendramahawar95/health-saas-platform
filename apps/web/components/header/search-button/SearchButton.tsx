import { Button } from "@repo/ui";
import styles from "./SearchButton.module.css";

export default function SearchButton() {
  return (
    <div className={styles.actions}>
      <Button type="button" className={styles.searchButton} aria-label="Search">
        Search
      </Button>
    </div>
  );
}
