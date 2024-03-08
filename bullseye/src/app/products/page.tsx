"use client";

import Footer from "@/components/Footer";
import CardProduct from "@/components/CardProduct";
import Navbar from "@/components/Navbar";
import { IProduct } from "@/types";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/products");
        const responseData = await response.json();
        const productsData: IProduct[] = responseData;
        console.log(productsData);
        setProducts(productsData);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return (
    <main>
      <Navbar />
      <div className="flex justify-center">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 flex-grow"
          style={{ maxWidth: "1280px" }}
        >
          {products.map((products) => (
            <CardProduct product={products} key={products._id} />
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
