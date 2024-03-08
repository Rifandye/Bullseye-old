import Footer from "../../components/Footer";
import CardProduct from "../../components/CardProduct";
import Navbar from "../../components/Navbar";
import { IProduct } from "../../types";
import { useEffect, useState } from "react";

export default async function Products() {
  const response = await fetch("http://localhost:3000/api/products");
  const products: IProduct[] = await response.json();

  return (
    <main>
      <Navbar />
      <div className="flex justify-center">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
          style={{ maxWidth: "1280px" }}
        >
          {products.map((product) => (
            <CardProduct product={product} key={product.id} />
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
