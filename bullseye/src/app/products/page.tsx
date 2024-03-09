"use client";

import Footer from "@/components/Footer";
import CardProduct from "@/components/CardProduct";
import Navbar from "@/components/Navbar";
import { IProduct } from "@/types";
import { useEffect, useState } from "react";
import Pagination from "@/components/Pagination";

export default function Products() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [totalProducts, setTotalProducts] = useState<number>(0);

  useEffect(() => {
    const getProducts = async () => {
      const query = `?page=${currentPage}&limit=${productsPerPage}&search=${searchQuery}`;
      try {
        const response = await fetch(
          `http://localhost:3000/api/products/${query}`
        );
        const { data, totalData } = await response.json();
        setProducts(data);
        setTotalProducts(totalData);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    getProducts();
  }, [currentPage, productsPerPage, searchQuery]);

  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleSearchChange = (event: any) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  return (
    <main>
      <Navbar />
      <div className="search-bar p-4">
        <div className="flex items-center max-w-md mx-auto bg-white rounded-full shadow-md overflow-hidden">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full py-2 px-4 leading-tight focus:outline-none"
          />
          <div className="p-4">
            <button className="text-gray-600 focus:outline-none focus:text-gray-900">
              <svg
                className="h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 flex-grow"
          style={{ maxWidth: "1280px" }}
        >
          {products.map((product) => (
            <CardProduct key={product._id} product={product} />
          ))}
        </div>
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      <Footer />
    </main>
  );
}
