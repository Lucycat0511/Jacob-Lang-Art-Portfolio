import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function ContactForm() {
  const form = useRef();
  return (
    <form
      ref={form}
      onSubmit={(e) => {
        const { name, subject, email, message, type } = form.current;
        const formData = {
          subject: subject.value,
          name: name.value,
          email: email.value,
          message: message.value,
          type: type.value,
        };

        console.log(formData);
        e.preventDefault();
        emailjs.send(
          "service_n4t5zur",
          "template_wlw4bxn",
          formData,
          "oAEv0ovRcAVzeb9JQ"
        );
      }}
    >
      <label htmlFor="name">Name:</label>
      <input id="name" required min="3"></input>
      <label htmlFor="email">Email:</label>
      <input id="email" required></input>
      <label htmlFor="type">Commission or Contact?</label>
      <select id="type">
        <option>Commission</option>
        <option>Contact</option>
      </select>
      <label htmlFor="subject">Subject:</label>
      <input id="subject" max="50" required></input>
      <label htmlFor="message">Comment:</label>
      <textarea id="message" required min="10" max="500"></textarea>
      <button>Submit</button>
    </form>
  );
}
