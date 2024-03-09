"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import LogoutButton from "@/components/LogoutButton";
import Link from "next/link";
import DeleteWishlistButton from "@/components/DeleteWishListButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


interface UserDetailType {
  _id: string;
  name: string;
  username: string;
  email: string;
}

interface ProductType {
  _id: string;
  name: string;
  slug: string;
  price: number;
  tags: string[];
  images: string[];
  thumbnail: string;
}

interface WishListType {
  _id: string;
  productId: string;
  userId: string;
  userDetail: UserDetailType;
  createdAt: string;
  updatedAt: string;
  productDetail: ProductType[];
}

export default function ProfilePage() {
  const [wishlists, setWishList] = useState<WishListType[]>([]);
  const [user, setUser] = useState({ username: "", email: "" });

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_BASE_URL + "/api/wishlists",
          {
            cache: "no-store",
          }
        );
        const responseData = await response.json();
        const wishListData: WishListType[] = responseData.data;

        if (wishListData.length > 0) {
          const userDetails = wishListData[0].userDetail;
          setUser({ username: userDetails.username, email: userDetails.email });
        }

        console.log(wishListData);
        setWishList(wishListData);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  //tidak bisa pakai route.refresh karna fetching terjadi di client side component, harus SSR
  const fetchWishLists = async () => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + "/api/wishlists",
        {
          cache: "no-store",
        }
      );
      const responseData = await response.json();
      const wishListData = responseData.data;

      if (wishListData.length > 0) {
        const userDetails = wishListData[0].userDetail;
        setUser({ username: userDetails.username, email: userDetails.email });
      }

      setWishList(wishListData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWishLists();
  }, []);

  return (
    <>
      <Navbar />
      <main className="p-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-4">Profile</h1>
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6 bg-white shadow-md rounded-lg overflow-hidden p-6">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-gray-300 rounded-full overflow-hidden"></div>
            </div>
            <div className="mt-4 md:mt-0">
              <h2 className="text-xl text-black font-semibold">
                {user.username}
              </h2>
              <p className="text-black">{user.email}</p>
              <LogoutButton />
            </div>
          </div>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 flex-grow"
          style={{ maxWidth: "1280px" }}
        >
          {wishlists.map((wishlistItem) =>
            wishlistItem.productDetail.map((product) => (
              <div
                key={product._id}
                className="w-70 h-100 bg-gray-800 p-3 flex flex-col gap-1 rounded-br-3xl relative my-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                <div className="flex-row">
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                  >
                    {product.images.map((image, imgIndex) => (
                      <SwiperSlide key={imgIndex}>
                        <Link href={`/products/${product.slug}`}>
                          <img
                            src={image}
                            alt={`Product Image ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
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
                      <p className="text-xs text-gray-400">ID: {product._id}</p>
                    </div>
                    <span className="font-bold text-red-600">
                      ${product.price / 100}
                    </span>
                  </div>
                  <div className="flex flex-wrap justify-start gap-2 text-gray-400 text-sm">
                    {product.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-700 rounded-md px-2">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <DeleteWishlistButton
                    _id={wishlistItem._id}
                    onDeleteSuccess={fetchWishLists}
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
