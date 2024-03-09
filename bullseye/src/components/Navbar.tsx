import Link from "next/link";

export default function Navbar() {
  return (
    <main>
      <nav className="bg-gray-800 text-white p-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-lg font-semibold">Bullseye</div>
          <div className="flex items-center space-x-4">
            <Link href="/">
              <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                Home
              </button>
            </Link>
            <Link href="/products">
              <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                Products
              </button>
            </Link>
            <Link href="/wishlists">
              <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                Wishlist
              </button>
            </Link>
            <Link href="/about">
              <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                About
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  );
}
