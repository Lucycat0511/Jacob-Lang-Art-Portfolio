import Image from "next/image";
import styles from "./Section.module.css";

import mock from "../assets/mock-image.jpg";

export default function ArtworkSection() {
  return (
    <section id={styles.artworkSection}>
      <div className={styles.artwork}>
        <div className={styles.artworkContainer}>
          <Image src={mock} alt="image" />
          <div className={styles.info}>
            <h2>Medium</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className={styles.artworkContainer}>
          <Image src={mock} alt="image" />
          <div className={styles.info}>
            <h2>Medium</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className={styles.artworkContainer}>
          <Image src={mock} alt="image" />
          <div className={styles.info}>
            <h2>Medium</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      <button>More Art</button>
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
