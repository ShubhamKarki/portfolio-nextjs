import React, { useRef } from "react";
import emailjs from "emailjs-com";

import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

import module from "./contact.module.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_g2lkcan",
      "template_blt19ac",
      form.current,
      "RMB2dFn0svdNcSmfC"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className={`container ${module.contact__container}`}>
        <div className={module.contact__options}>
          <article className={module.contact__option}>
            <MdOutlineEmail className={module.contact__option_icon} />
            <h4>Email</h4>
            <h5>shubhamkarkiworking@gmail.com</h5>
            <a href="mailto:shubhamkarkiworking@gmail.com" target="_blank">
              {" "}
              Send a Message
            </a>
          </article>
          <article className={module.contact__option}>
            <RiMessengerLine className={module.contact__option_icon} />
            <h4>Messenger</h4>
            <h5>Shubham Karki</h5>
            <a href="https://m.me/sasuke.casey" target="_blank">
              Send a Message
            </a>
          </article>
          <article className={module.contact__option}>
            <BsWhatsapp className={module.contact__option_icon} />
            <h4>Whatsapp</h4>
            <a
              href="https://api.whatsapp.com/send?phone=+918007679593"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>
        {/* End of Contact Options */}
        <form ref={form} onSubmit={sendEmail} className={module.form}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            className={module.input}
          />
          <input
            className={module.input}
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
            className={module.textarea}
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
