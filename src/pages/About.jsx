import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Header />
      <section className="aboutPageSection">
        <Image
          src="/assets/mock-image.jpg"
          height={500}
          width={500}
          alt="image of Jacob Lang"
        />
        <div className="aboutInfo">
          <h1>Jacob Lang</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Sollicitudin ac orci phasellus egestas tellus rutrum. Etiam non quam
            lacus suspendisse faucibus interdum posuere. Mauris cursus mattis
            molestie a. In pellentesque massa placerat duis. Ligula ullamcorper
            malesuada proin libero nunc. Quis imperdiet massa tincidunt nunc
            pulvinar sapien. Et netus et malesuada fames ac turpis egestas sed.
            Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla.
          </p>
          <p>
            Arcu non sodales neque sodales ut. Quam pellentesque nec nam aliquam
            sem et tortor consequat id. Non tellus orci ac auctor augue mauris
            augue. Sed pulvinar proin gravida hendrerit lectus a. Interdum
            varius sit amet mattis vulputate. Ante in nibh mauris cursus mattis
            molestie a iaculis. Nam libero justo laoreet sit amet cursus sit
            amet. Habitant morbi tristique senectus et netus et malesuada fames.
            A pellentesque sit amet porttitor eget dolor. Mauris pharetra et
            ultrices neque ornare aenean. Urna condimentum mattis pellentesque
            id. Arcu felis bibendum ut tristique et egestas quis ipsum.
            Tincidunt ornare massa eget egestas purus viverra.
          </p>
          <h3>Awards</h3>
          <ul>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}
