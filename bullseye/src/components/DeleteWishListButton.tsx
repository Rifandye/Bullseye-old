"use client";

import { useRouter } from "next/navigation";

interface DeleteWishlistButtonProps {
  _id: string;
  onDeleteSuccess: () => void;
}

export default function DeleteWishlistButton({
  _id,
  onDeleteSuccess,
}: DeleteWishlistButtonProps) {
  const router = useRouter(); //tidak jalan
  async function handleDelete() {
    await fetch(`http://localhost:3000/api/wishlists/${_id}`, {
      method: "DELETE",
    });
    onDeleteSuccess();
  }
  return (
    <button
      onClick={handleDelete}
      className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-br-xl self-start mt-auto"
    >
      Delete
    </button>
  );
}
