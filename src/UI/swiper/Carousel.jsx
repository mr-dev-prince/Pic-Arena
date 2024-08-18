import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import { Autoplay, Pagination } from "swiper/modules";

import img1 from "./swiper_assets/art1.webp";
import img2 from "./swiper_assets/art2.webp";
import img3 from "./swiper_assets/art3.webp";
import img4 from "./swiper_assets/art4.jpeg";
import img5 from "./swiper_assets/art5.webp";
import img6 from "./swiper_assets/art6.webp";
import img7 from "./swiper_assets/art3.webp";

const Carousel = () => {
  return (
    <div className=" h-[500px] w-[500px] overflow-hidden flex justify-center items-center carousel-container">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={true}
        loop={true}
        pagination={false}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="img-1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="img-2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="img-3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="img-4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="img-5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="img-6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="img-7" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
