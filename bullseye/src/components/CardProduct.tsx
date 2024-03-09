"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { IProduct } from "../types";
import Link from "next/link";
import { useState } from "react";

interface ProductCardProps {
  product: IProduct;
}

export default function CardProduct({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState<boolean>(false);

  async function handleWishList(productId: string) {
    console.log("Wishlist clicked");
    setIsWishlisted(!isWishlisted);

    if (!isWishlisted) {
      await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/wishlists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: productId,
        }),
      });
    }
  }

  return (
    <div className="w-70 h-100 bg-gray-800 p-3 flex flex-col gap-1 rounded-br-3xl relative my-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <div className="flex-grow">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
        >
          {product.images.map((image, index) => (
            <SwiperSlide key={index}>
              <Link href={`/products/${product.slug}`}>
                <div className="relative w-full h-full">
                  <img src={image} alt={`Product Image ${index + 1}`} />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-col gap-4 mt-4 flex-grow">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col">
            <span className="text-xl text-gray-50 font-bold">
              {product.name}
            </span>
            <p className="text-xs text-gray-400">{product.excerpt}</p>
          </div>
          <span className="font-bold text-red-600">${product.price}</span>
        </div>
        <div className="flex flex-wrap justify-start gap-2 text-gray-400 text-sm">
          {product.tags.map((tag, index) => (
            <span key={index} className="bg-gray-700 rounded-md px-2">
              #{tag}
            </span>
          ))}
        </div>
        <Link href={`/products/${product.slug}`}>
          <button className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-br-xl self-start mt-auto">
            See Detail
          </button>
        </Link>
      </div>
      <div className="absolute top-0 right-0 p-4 z-10">
        {isWishlisted ? (
          <HeartIconSolid
            className="h-6 w-6 text-red-500 hover:text-red-700 cursor-pointer"
            onClick={() => handleWishList(product._id)}
          />
        ) : (
          <HeartIconOutline
            className="h-6 w-6 text-red-500 hover:text-red-700 cursor-pointer"
            onClick={() => handleWishList(product._id)}
          />
        )}
      </div>
    </div>
  );
}
