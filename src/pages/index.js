import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Jacob's Art Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <section id="hero"></section>
        <section id="artwork-display"></section>
        <section id="commissions"></section>
        <section id="about"></section>
      </main>
      <Footer />
    </>
  );
}
