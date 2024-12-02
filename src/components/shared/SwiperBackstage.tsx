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
              alt=""
              className="w-full object-contain h-[897px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center mt-8 max-w-[19rem] gap-12 mx-auto">
        <button className="custom-prev">
          <svg
            width="54"
            height="19"
            viewBox="0 0 54 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3.5 9.5L53.5 9.5" stroke="#7A2E2F" stroke-width="3" />
            <path d="M10.5 2L3 9.5L10.5 17" stroke="#7A2E2F" stroke-width="3" />
          </svg>
        </button>
        <div className="custom-pagination flex space-x-2"></div>
        <button className="custom-next">
          <svg
            width="53"
            height="19"
            viewBox="0 0 53 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 9.5L3.8743e-07 9.5"
              stroke="#7A2E2F"
              stroke-width="3"
            />
            <path d="M43 2L50.5 9.5L43 17" stroke="#7A2E2F" stroke-width="3" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default SwiperBackstage;
