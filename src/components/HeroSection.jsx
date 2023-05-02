import Image from "next/image";
import styles from "./Section.module.css";
import mock from "../assets/mock-image.jpg";

export default function HeroSection() {
  return (
    <section id={styles.hero} className="accent">
      <div>
        <Image
          className={`${styles.artworkOne} ${"show"}`}
          src={mock}
          alt="art-image"
        ></Image>
        <div className={styles.heroTitle}>
          <Image src={mock} alt="image of Jacob" />
          <h1>Jacob Lang</h1>
          <p>Artist</p>
        </div>

        <Image
          className={`${styles.artworkTwo} ${"show2"}`}
          src={mock}
          alt="art-image"
        ></Image>
      </div>
      <Image
        className={`${styles.artworkThree} ${"show3"}`}
        src={mock}
        alt="art-image"
      ></Image>
    </section>
  );
}
