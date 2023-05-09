import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

const images = [
  { address: "/assets/animal-portraits/IMG_4776.jpg" },
  { address: "/assets/animal-portraits/IMG_4780.jpg" },
  { address: "/assets/animal-portraits/IMG_4781.jpg" },
  { address: "/assets/animal-portraits/IMG_4782.jpg" },
  { address: "/assets/animal-portraits/IMG_4783.jpg" },
];

export default function AnimalPortraits() {
  return (
    <>
      <Header />
      <Gallery images={images} galleryTitle="Animal Portraits" />
      <Footer />
    </>
  );
}
