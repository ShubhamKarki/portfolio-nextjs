import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

import module from "./header.module.css";

const Header = () => {
  return (
    <header className={module.header}>
      <div className={`container ${module.header__container}`}>
        <h5>Hello I'm </h5>
        <h1>Shubham Karki</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className={module.me}>
          <img src="/static/assets/me.png" alt="me" />
        </div>
        <a href="#contact" className={module.scroll__down}>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
