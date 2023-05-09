import Image from "next/image";
import styles from "./Section.module.css";
import mock from "../assets/mock-image.jpg";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export default function AboutSection() {
  const { ref: sectionRef, inView: sectionInView } = useInView();

  return (
    <section ref={sectionRef} id={styles.aboutSection}>
      <Image
        className={`${styles.aboutArtworkOne} ${
          sectionInView ? styles.showItemSlideUp : ""
        }`}
        src={mock}
        alt="art-image"
      ></Image>
      <div
        className={`${styles.aboutTitle} ${
          sectionInView ? styles.showInfo : ""
        }`}
      >
        <Image id={styles.profilepic} src={mock} alt="image of Jacob" />
        <h1>Jacob Lang</h1>
        <p>Artist</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <Link href="/About">Read More</Link>
        <h4>Awards</h4>
        <ul>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
        </ul>
      </div>

      <Image
        className={`${styles.aboutArtworkTwo} ${
          sectionInView ? styles.showItemSlideUp : ""
        }`}
        src={mock}
        alt="art-image"
      ></Image>
    </section>
  );
}
