import React from "react";
// import Swiper core and required modules
import { Pagination, Navigation, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import module from "./testimonials.module.css";

const data = [
  {
    id: 1,
    name: "Ernext Achiever",
    image: "/static/assets/avatar1.jpg",
    review: " Lorem ipsum ",
  },
  {
    id: 2,
    name: "Ernext Achiever",
    image: "/static/assets/avatar2.jpg",
    review: " Lorem ipsum ",
  },
  {
    id: 3,
    name: "Ernext Achiever",
    image: "/static/assets/avatar3.jpg",
    review: " Lorem ipsum ",
  },
  {
    id: 4,
    name: "Ernext Achiever",
    image: "/static/assets/avatar4.jpg",
    review: " Lorem ipsum ",
  },
];

const Testimonials = () => {
  return (
    <section>
      <h5>Review</h5>
      <h2>Testimonials</h2>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className={`container ${module.testimonials_container}`}
      >
        {data.map((ele) => (
          <SwiperSlide key={ele.id} className={module.testimonial}>
            <div className={module.client_avatar}>
              <img src={ele.image} alt="client img" />
            </div>
            <h5 className={module.client_name}>{ele.name}</h5>
            <small className={module.client_review}>{ele.review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
