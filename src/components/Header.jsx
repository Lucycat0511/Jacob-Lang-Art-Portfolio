import Link from "next/link";
import Image from "next/image";
import styles from "./HeaderFooter.module.css";
import signature from "../assets/unreadable-letters-signaturely.svg";

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
      <Image src={signature} alt="Jacob's Signature" />
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
