import Image from "next/image";
import styles from "./Section.module.css";
import mock from "../assets/mock-image.jpg";

export default function AboutSection() {
  return (
    <section id={styles.aboutSection}>
      <Image
        className={`${styles.aboutArtworkOne} ${"show"}`}
        src={mock}
        alt="art-image"
      ></Image>
      <div className={styles.aboutTitle}>
        <Image id={styles.profilepic} src={mock} alt="image of Jacob" />
        <h1>Jacob Lang</h1>
        <p>Artist</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <h4>Awards</h4>
        <ul>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
        </ul>
      </div>

      <Image
        className={`${styles.aboutArtworkTwo} ${"show2"}`}
        src={mock}
        alt="art-image"
      ></Image>
    </section>
  );
}
