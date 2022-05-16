import React from "react";

import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
import module from "./header.module.css";

const HeaderSocials = () => {
  return (
    <div className={module.header__socials}>
      <a href="https://www.linkedin.com/in/shubhamkarki/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://www.github.com/shubhamkarki/" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.dribbble.com/" target="_blank">
        <FiDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
