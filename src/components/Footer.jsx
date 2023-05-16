import Link from "next/link";
import Image from "next/image";
import styles from "./HeaderFooter.module.css";
import signature from "../assets/unreadable-letters-signaturely.svg";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <Image src={signature} alt="Jacob's Signature" />

        <div className={styles.links}>
          <nav className={styles.nav}>
            <ul className={styles.footerLinks}>
              <Link href="#">Artwork</Link>
              <Link href="#">Commissions</Link>
              <Link href="#">About</Link>
            </ul>
          </nav>

          <ul className={styles.footerLinks}>
            <Link href="#">Instagram</Link>
            <Link href="#">Facebook</Link>
            <Link href="#">Twitter</Link>
          </ul>
        </div>
      </footer>
      <p className="copyright">Copyright © 2023 Zachary Maynor</p>
    </>
  );
}
