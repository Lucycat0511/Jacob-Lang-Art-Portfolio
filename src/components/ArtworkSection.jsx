import Image from "next/image";
import styles from "./Section.module.css";

import mock from "../assets/mock-image.jpg";

import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

export default function ArtworkSection() {
  const { ref: galleryTwoRef, inView: twoInView } = useInView();
  const { ref: galleryThreeRef, inView: threeInView } = useInView();

  let twoViewed = useRef(false);
  let threeViewed = useRef(false);
  useEffect(() => {
    if (twoInView) {
      twoViewed.current = true;
    } else if (threeInView) {
      threeViewed.current = true;
    }
  }, [twoInView, threeInView]);

  return (
    <section id={styles.artworkSection} className="accent">
      <h2>Galleries</h2>
      <div className={styles.artwork}>
        <div className={styles.artworkContainer}>
          <Image src={mock} alt="image" />
          <div className={styles.info}>
            <h3>Animal Portraits</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link href="#">See More</Link>
          </div>
        </div>
        <div
          ref={galleryTwoRef}
          className={`${styles.artworkContainer} ${
            twoViewed.current
              ? styles.showArtworkTwoContainer
              : styles.hiddenArtworkContainer
          }`}
        >
          <Image src={mock} alt="image" />
          <div className={styles.info}>
            <h3>Filmography</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link href="#">See More</Link>
          </div>
        </div>
        <div
          ref={galleryThreeRef}
          className={`${styles.artworkContainer} ${
            threeViewed.current
              ? styles.showArtworkThreeContainer
              : styles.hiddenArtworkContainer
          }`}
        >
          <Image src={mock} alt="image" />
          <div className={styles.info}>
            <h3>Human Anatomy</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link href="#">See More</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

//grid template option
{
  /*
<div className={styles.artworkContainer}>
          <Image src={mock} alt="image" />
          <div className={styles.info}>
            <h2>Medium</h2>
          </div>
        </div>
        <div className={styles.artworkContainer}>
          <Image src={mock} alt="image" />
          <div className={styles.info}>
            <h2>Medium</h2>
          </div>
        </div>
        <div className={styles.artworkContainer}>
          <Image src={mock} alt="image" />
          <div className={styles.info}>
            <h2>Medium</h2>
          </div>
        </div>
        <div className={styles.artworkContainer}>
          <Image src={mock} alt="image" />
          <div className={styles.info}>
            <h2>Medium</h2>
          </div>
        </div>
        <div className={styles.artworkContainer}>
          <Image src={mock} alt="image" />
          <div className={styles.info}>
            <h2>Medium</h2>
          </div>
        </div>
        <div className={styles.artworkContainer}>
          <Image src={mock} alt="image" />
          <div className={styles.info}>
            <h2>Medium</h2>
          </div>
        </div>
        <div className={styles.artworkContainer}>
          <Image src={mock} alt="image" />
          <div className={styles.info}>
            <h2>Medium</h2>
          </div>
        </div>
        <div className={styles.artworkContainer}>
          <Image src={mock} alt="image" />
          <div className={styles.info}>
            <h2>Medium</h2>
          </div>
        </div>
        <div className={styles.artworkContainer}>
          <Image src={mock} alt="image" />
          <div className={styles.info}>
            <h2>Medium</h2>
          </div>
        </div>
        <div className={styles.artworkContainer}>
          <Image src={mock} alt="image" />
          <div className={styles.info}>
            <h2>Medium</h2>
          </div>
        </div>
        <div className={styles.artworkContainer}>
          <Image src={mock} alt="image" />
          <div className={styles.info}>
            <h2>Medium</h2>
          </div>
        </div>
</div>
</> */
}
