import React from "react";
import module from "./header.module.css";

const CTA = () => {
  return (
    <div className={module.cta}>
      <a href="/static/assets/cv.pdf" download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
