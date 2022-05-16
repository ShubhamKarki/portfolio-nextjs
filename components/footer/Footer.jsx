import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

import module from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={module.footer}>
      <a href="#" className={module.footer__logo}>
        Shubham
      </a>

      <ul className={module.permalinks}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className={module.footer__socials}>
        <a href="https://facebook.com">
          {" "}
          <FaFacebookF />
        </a>
        <a href="https://facebook.com">
          {" "}
          <FiInstagram />
        </a>
        <a href="https://facebook.com">
          {" "}
          <IoLogoTwitter />
        </a>
      </div>
      <div className={module.footer__copyright}>
        <small> &copy; Shubham Karki All rights reserved </small>
      </div>
    </footer>
  );
};

export default Footer;
