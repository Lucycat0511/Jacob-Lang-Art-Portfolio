import Link from "next/link";
import styles from "./HeaderFooter.module.css";

export default function Header() {
  return (
    <header className={styles.navbar}>
      <nav className={styles.nav}>
        <ul>
          <Link href="#">Artwork</Link>
          <Link href="#">Commissions</Link>
          <Link href="#">About</Link>
        </ul>
      </nav>
      <img className={styles.logo} src="" alt="Jacob's Signature"></img>
      <div className={styles.socialMedia}>
        <ul>
          <Link href="#">Instagram</Link>
          <Link href="#">Facebook</Link>
          <Link href="#">Twitter</Link>
        </ul>
      </div>
    </header>
  );
}
