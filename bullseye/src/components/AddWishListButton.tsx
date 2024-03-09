"use client";

import { IProduct } from "../types";

interface AddWishListButtonProps {
  product: IProduct;
}

export default function AddWishListButton({ product }: AddWishListButtonProps) {
  async function handleWishListButton(productId: string) {
    console.log("wishlist di click");
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
  return (
    <button
      className="px-6 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700"
      onClick={() => handleWishListButton(product._id)}
    >
      Add to Wishlist
    </button>
  );
}
