"use client";

import Footer from "@/components/Footer";
import CardProduct from "@/components/CardProduct";
import Navbar from "@/components/Navbar";
import { IProduct } from "@/types";
import { useEffect, useState } from "react";
import Pagination from "@/components/Pagination";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Products() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage] = useState<number>(8);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [useInfiniteScroll, setUseInfiniteScroll] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    const getProducts = async () => {
      const query = `?page=${currentPage}&limit=${productsPerPage}&search=${searchQuery}`;
      try {
        const response = await fetch(
          `http://localhost:3000/api/products${query}`
        );
        const { data, totalData } = await response.json();
        if (useInfiniteScroll && currentPage > 1) {
          setProducts((prevProducts) => [...prevProducts, ...data]);
        } else {
          setProducts(data);
        }
        setTotalProducts(totalData);
        setHasMore(products.length < totalData);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    getProducts();
  }, [currentPage, productsPerPage, searchQuery, useInfiniteScroll]);

  useEffect(() => {
    if (!useInfiniteScroll) {
      fetchInitialProducts();
    }
  }, [useInfiniteScroll]);

  const fetchInitialProducts = async () => {
    setCurrentPage(1);
    setHasMore(true);
  };

  const fetchMoreData = () => {
    if (products.length >= totalProducts) {
      setHasMore(false);
      return;
    }
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleInfiniteScrollToggle = () => {
    setUseInfiniteScroll((prevState) => !prevState);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <main>
      <Navbar />
      <div className="p-4 flex flex-col items-center">
        <div className="search-bar mb-4">
          <div className="relative max-w-md mx-auto bg-white rounded-full overflow-hidden shadow-lg">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-3 px-4 pl-10 text-gray-700 leading-tight focus:outline-none"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        <button
          onClick={handleInfiniteScrollToggle}
          className="mb-4 p-2 bg-blue-500 text-white rounded-md"
        >
          {useInfiniteScroll
            ? "Switch to Pagination"
            : "Switch to Infinite Scroll"}
        </button>
      </div>
      {useInfiniteScroll ? (
        <InfiniteScroll
          dataLength={products.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>You have seen all products</b>
            </p>
          }
        >
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
        </InfiniteScroll>
      ) : (
        <>
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
            totalPages={Math.ceil(totalProducts / productsPerPage)}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
      <Footer />
    </main>
  );
}
