import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

import module from "./about.module.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get To know</h5>
      <h2>About Me </h2>
      <div className={`container ${module.about__container}`}>
        <div className={module.about__me}>
          <div className={module.about__me_image}>
            <img src="/static/assets/me-about.jpg" alt="About Image" />
          </div>
        </div>
        <div className={module.about__content}>
          <div className={module.about__cards}>
            <article className={module.about__card}>
              <FaAward className={module.about__icon} />
              <h5>Experience </h5>
              <small>3+ Years Working</small>
            </article>

            <article className={module.about__card}>
              <FiUsers className={module.about__icon} />
              <h5>Clients </h5>
              <small>20+ Worldwide</small>
            </article>

            <article className={module.about__card}>
              <VscFolderLibrary className={module.about__icon} />
              <h5>Projects </h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>Lorem</p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
