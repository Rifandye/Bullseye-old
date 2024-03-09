"use client";

import Footer from "@/components/Footer";
import CardProduct from "@/components/CardProduct";
import Navbar from "@/components/Navbar";
import { IProduct } from "@/types";
import { useEffect, useState } from "react";
import Pagination from "@/components/Pagination";

export default function Products() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/products?page=${currentPage}&limit=${productsPerPage}`
        );
        const responseData = await response.json();
        const productsData: IProduct[] = responseData;
        console.log(productsData);
        setProducts(productsData);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [currentPage, productsPerPage]);

  const totalProducts = 21;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

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
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
        <Footer />
      </div>
    </main>
  );
}
