import { ContactForm } from "@/components/CommissionSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="formContainer">
        <h1>Contact Form</h1>
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}
