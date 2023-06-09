import Link from "next/link";
import Image from "next/image";
import styles from "./HeaderFooter.module.css";
import { useState } from "react";

export default function Header() {
  const [galleryTabView, setGalleryTabView] = useState(false);
  const [sidebarVisible, setSideBarVisible] = useState(false);
  return (
    <header id={styles.header}>
      <div className={styles.header}>
        <h1>Jacob Lang</h1>
      </div>
      <div className={styles.navbar}>
        <nav className={styles.nav}>
          <ul>
            <Link href="/">Home</Link>
            <span
              className={styles.galleryButton}
              onClick={() => {
                setGalleryTabView(!galleryTabView);
              }}
            >
              Galleries
            </span>
            <Link href="/Contact">Contact</Link>
            <Link href="/About">About</Link>
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
      <span
        className={styles.navMobileView}
        onClick={() => {
          setSideBarVisible(true);
        }}
      >
        =
      </span>
      {sidebarVisible && (
        <div className={`${styles.navSideBar}`}>
          <div>
            <ul>
              <Link href="/">Home</Link>
              <span
                className={styles.galleryButton}
                onClick={() => {
                  setGalleryTabView(!galleryTabView);
                }}
              >
                Galleries
              </span>
              {galleryTabView && (
                <ul className={styles.sideBarGalleries}>
                  <Link href="/galleries/AnimalPortraits">
                    Animal Portraits
                  </Link>
                  <Link href="#">Filmography</Link>
                  <Link href="#">Human Anatomy</Link>
                  <Link href="#">Commissions</Link>
                  <Link href="#">Photography</Link>
                </ul>
              )}
              <Link href="/Contact">Contact</Link>
              <Link href="/About">About</Link>
            </ul>
            <span
              className={styles.clickableSpan}
              onClick={() => {
                setSideBarVisible(false);
              }}
            >
              X
            </span>
          </div>
          <div></div>
        </div>
      )}
      {galleryTabView && (
        <ul className={styles.galleries}>
          <Link href="/galleries/AnimalPortraits">Animal Portraits</Link>
          <Link href="#">Filmography</Link>
          <Link href="#">Human Anatomy</Link>
          <Link href="#">Commissions</Link>
          <Link href="#">Photography</Link>
        </ul>
      )}
    </header>
  );
}
