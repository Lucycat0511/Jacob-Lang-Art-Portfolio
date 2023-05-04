import Link from "next/link";
import Image from "next/image";
import styles from "./HeaderFooter.module.css";

export default function Header() {
  return (
    <header id={styles.header}>
      <div className={styles.header}>
        <h1>Jacob Lang</h1>
      </div>
      <div className={styles.navbar}>
        <nav className={styles.nav}>
          <ul>
            <Link href="#">Home</Link>
            <Link href="#">Galleries</Link>
            <Link href="#">Contact</Link>
            <Link href="#">About</Link>
          </ul>
        </nav>
        <div className={styles.socialMedia}>
          <ul>
            <Link href="#">Instagram</Link>
            <Link href="#">Facebook</Link>
            <Link href="#">Twitter</Link>
          </ul>
        </div>
      </div>
    </header>
  );
}
