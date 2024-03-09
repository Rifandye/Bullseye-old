import Banner from "@/components/Banner";
import CardProduct from "@/components/CardProduct";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { IProduct } from "@/types";
import { useEffect } from "react";

async function fethData() {
  try {
    const response = await fetch(`http://localhost:3000/api/products`);
    const { data } = await response.json();

    if (!response.ok) {
      throw new Error("Fetch failed");
    }
    console.log(data, "<<< data");
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default async function HomePage() {
  const products = await fethData();
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="flex justify-center my-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 underline decoration-pink-500 decoration-4 underline-offset-8">
          Featured Products
        </h2>
      </div>
      <div className="flex justify-center">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
          style={{ maxWidth: "1280px" }}
        >
          {products.map((product: IProduct) => (
            <CardProduct product={product} key={product._id} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
