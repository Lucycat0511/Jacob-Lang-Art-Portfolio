import Link from "next/link";
import styles from "./HeaderFooter.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img className={styles.logo} src="" alt="Jacob's Signature"></img>

      <nav className={styles.nav}>
        <ul className={styles.footerLinks}>
          <Link href="#">Artwork</Link>
          <Link href="#">Commissions</Link>
          <Link href="#">About</Link>
        </ul>
      </nav>

      <div className={styles.socialMedia}>
        <ul className={styles.footerLinks}>
          <Link href="#">Instagram</Link>
          <Link href="#">Facebook</Link>
          <Link href="#">Twitter</Link>
        </ul>
      </div>
    </footer>
  );
}
