import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArtworkSection from "@/components/ArtworkSection";
import CommissionSection from "@/components/CommissionSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jacob Lang</title>
        <meta name="description" content="Jacob Lang's Art Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <HeroSection />
        <ArtworkSection />
        <CommissionSection />
      </main>
      <Footer />
      <p className="copyright">Copyright © 2023 Zachary Maynor</p>
    </>
  );
}
