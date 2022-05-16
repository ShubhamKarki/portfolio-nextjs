import React, { useState } from "react";

import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServerLine } from "react-icons/ri";

import module from "./nav.module.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav className={module.nav}>
      <a
        href="#"
        className={activeNav === "#" ? module.active : ""}
        onClick={() => setActiveNav("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? module.active : ""}
        onClick={() => setActiveNav("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={activeNav === "#experience" ? module.active : ""}
        onClick={() => setActiveNav("#experience")}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        className={activeNav === "#services" ? module.active : ""}
        onClick={() => setActiveNav("#services")}
      >
        <RiServerLine />
      </a>
      <a
        href="#contact"
        className={activeNav === "#contact" ? module.active : ""}
        onClick={() => setActiveNav("#contact")}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
