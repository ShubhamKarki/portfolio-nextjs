import React from "react";

import module from "./portfolio.module.css";

const data = [
  {
    id: 1,
    image: "/static/assets/portfolio1.jpg",
    title: "",
    github: "",
    demo: "",
  },
  {
    id: 2,
    image: "/static/assets/portfolio1.jpg",
    title: "",
    github: "",
    demo: "",
  },
  {
    id: 3,
    image: "/static/assets/portfolio1.jpg",
    title: "",
    github: "",
    demo: "",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className={`container ${module.portfolio__container}`}>
        {data.map((ele) => (
          <article key={ele.id} className={module.portfolio__item}>
            <div className={module.portfolio__item_image}>
              <img src={ele.image} alt="image" />
            </div>
            <h3>{ele.title}</h3>
            <div className={module.portfolio__item_cta}>
              <a href={ele.github} className="btn " target="_blank">
                Github
              </a>
              <a href={ele.demo} className="btn btn-primary " target="_blank">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
