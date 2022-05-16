import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import module from "./experience.module.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I have</h5>
      <h2> My Experience</h2>

      <div className={`container ${module.experience__container}`}>
        <div className={module.experience__forntend}>
          <h3>Frontend Development</h3>
          <div className={module.experience__content}>
            <article className={module.experience__details}>
              <BsPatchCheckFill className={module.experience__details_icon} />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced </small>
              </div>
            </article>
          </div>
        </div>
        <div className="module.experience__backend"></div>
      </div>
    </section>
  );
};

export default Experience;
