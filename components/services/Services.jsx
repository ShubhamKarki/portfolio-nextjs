import React from "react";

import { BiCheck } from "react-icons/bi";
import module from "./services.module.css";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className={`container ${module.services__container}`}>
        <article className={module.services}>
          <div className={module.service__head}>
            <h3> UI/UX Design </h3>
          </div>
          <ul className={module.service__list}>
            <li>
              <BiCheck className={module.service__list_icon} />
              <p>Lorem, ipsum</p>
            </li>
            <li>
              <BiCheck className={module.service__list_icon} />
              <p>Lorem, ipsum</p>
            </li>{" "}
            <li>
              <BiCheck className={module.service__list_icon} />
              <p>Lorem, ipsum</p>
            </li>{" "}
            <li>
              <BiCheck className={module.service__list_icon} />
              <p>Lorem, ipsum</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX */}
        <article className={module.services}>
          <div className={module.service__head}>
            <h3> Web Development </h3>
          </div>
          <ul className={module.service__list}>
            <li>
              <BiCheck className={module.service__list_icon} />
              <p>Lorem, ipsum</p>
            </li>
            <li>
              <BiCheck className={module.service__list_icon} />
              <p>Lorem, ipsum</p>
            </li>
            <li>
              <BiCheck className={module.service__list_icon} />
              <p>Lorem, ipsum</p>
            </li>
            <li>
              <BiCheck className={module.service__list_icon} />
              <p>Lorem, ipsum</p>
            </li>{" "}
            <li>
              <BiCheck className={module.service__list_icon} />
              <p>Lorem, ipsum</p>
            </li>{" "}
            <li>
              <BiCheck className={module.service__list_icon} />
              <p>Lorem, ipsum</p>
            </li>
          </ul>
        </article>
        {/* End of  Web Development */}
        <article className={module.services}>
          <div className={module.service__head}>
            <h3> Content Creation</h3>
          </div>
          <ul className={module.service__list}>
            <li>
              <BiCheck className={module.service__list_icon} />
              <p>Lorem, ipsum</p>
            </li>
            <li>
              <BiCheck className={module.service__list_icon} />
              <p>Lorem, ipsum</p>
            </li>{" "}
            <li>
              <BiCheck className={module.service__list_icon} />
              <p>Lorem, ipsum</p>
            </li>{" "}
            <li>
              <BiCheck className={module.service__list_icon} />
              <p>Lorem, ipsum</p>
            </li>
          </ul>
        </article>
        {/*  End of Content Creation */}
      </div>
    </section>
  );
};

export default Services;
