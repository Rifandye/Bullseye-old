"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

export default function Banner() {
  const bannerImages = ["/banner1.jpg", "/banner2.jpg", "/banner3.jpg"];

  return (
    <div className="swiper-container my-8">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        {bannerImages.map((imageSrc, index) => (
          <SwiperSlide key={index}>
            <img
              src={imageSrc}
              alt={`Banner ${index + 1}`}
              className="w-full max-h-[450px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
