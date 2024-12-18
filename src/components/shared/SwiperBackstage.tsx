import React from "react";
import { swiperImages } from "../../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SwiperBackstage: React.FC = () => {
  return (
    <>
      <Swiper
        className="w-11/12 h-96 sm:h-[470px] md:h-[650px] lg:h-[700px]"
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={50}
        pagination={{
          el: ".custom-pagination",
          clickable: false,
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        loop={true}
      >
        {swiperImages.map((image) => (
          <SwiperSlide key={image}>
            <img
              src={image}
              alt="Backstage Photo"
              className="object-cover w-full h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center mt-1 mini:mt-4 w-fit gap-3 md:gap-12 mx-auto">
        <button className="custom-prev">
          <svg
            className="w-12 h-3 md:w-14 md:h-4"
            viewBox="0 0 54 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3.5 9.5L53.5 9.5" stroke="#7A2E2F" strokeWidth="3" />
            <path d="M10.5 2L3 9.5L10.5 17" stroke="#7A2E2F" strokeWidth="3" />
          </svg>
        </button>
        <div className="custom-pagination flex space-x-2"></div>
        <button className="custom-next">
          <svg
            className="w-12 h-3 md:w-14 md:h-4"
            viewBox="0 0 53 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M50 9.5L3.8743e-07 9.5" stroke="#7A2E2F" strokeWidth="3" />
            <path d="M43 2L50.5 9.5L43 17" stroke="#7A2E2F" strokeWidth="3" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default SwiperBackstage;
