import styles from "./Section.module.css";

export function ContactForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label htmlFor="name">Name:</label>
      <input id="name" required min="3"></input>
      <label htmlFor="email">Email:</label>
      <input id="email" required></input>
      <label htmlFor="type">Commission or Contact?</label>
      <select>
        <option>Commission</option>
        <option>Contact</option>
      </select>
      <label htmlFor="subject">Subject:</label>
      <input id="subject" required></input>
      <label htmlFor="comment">Comment:</label>
      <textarea id="comment" required min="10" max="250"></textarea>
      <button>Submit</button>
    </form>
  );
}

export default function CommissionSection() {
  return (
    <section id={styles.commissionSection} className="accent">
      <h1>Let's Make Art</h1>
      <ContactForm />
    </section>
  );
}
