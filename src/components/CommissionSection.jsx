import ContactForm from "./ContactForm";
import styles from "./Section.module.css";

export default function CommissionSection() {
  return (
    <section id={styles.commissionSection} className="accent">
      <h1>Let's Make Art</h1>
      <ContactForm />
    </section>
  );
}
