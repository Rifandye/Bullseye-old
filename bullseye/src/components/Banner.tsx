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
import Link from "next/link";


export default function Banner() {
  const bannerImages = ["/banner5.jpg", "/banner1.avif", "/banner3.jpg"];

  return (
    <div className="relative">
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
      <Link href={"/products"}>
        <button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none"
          type="button"
        >
          Go Shops
        </button>
      </Link>
    </div>
  );
}
