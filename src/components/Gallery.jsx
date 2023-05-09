import { useState } from "react";
import styles from "./Galleries.module.css";
import Image from "next/image";

export default function Gallery(props) {
  const [fullImage, setFullImage] = useState({ src: "#", fullImage: false });
  const imgSize = 200;

  return (
    <>
      <section
        className={`${styles.gallerySection} ${
          fullImage.fullImage && styles.setToBackground
        }`}
      >
        <h1>{props.galleryTitle}</h1>
        <div className={styles.galleryGrid}>
          {props.images.map((img, index) => {
            return (
              <Image
                key={index}
                src={img.address}
                width={imgSize}
                height={imgSize}
                alt="art"
                address={img.address}
                onClick={() => {
                  setFullImage((prev) => {
                    return { ...prev, src: img.address, fullImage: true };
                  });
                }}
              />
            );
          })}
        </div>
      </section>
      {fullImage.fullImage && (
        <div className={styles.fullImageZoom}>
          <div className={styles.fullImageItem}>
            <span
              onClick={() => {
                setFullImage((prev) => {
                  return { ...prev, src: "#", fullImage: false };
                });
              }}
            >
              X
            </span>
            <Image
              src={fullImage.src}
              width={imgSize}
              height={imgSize}
              alt="art"
            />
          </div>
        </div>
      )}
    </>
  );
}
