import Link from "next/link";

export default function Navbar() {
  return (
    <main>
      <nav className="bg-black text-white p-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-lg font-semibold">Bullseye</div>
          <div className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m-5 0a2 2 0 100-4 2 2 0 000 4zm-6 0a2 2 0 11-4 0 2 2 0 014 0zm6-6V7a2 2 0 00-2-2H5.4M5.4 5H7m10 0h.6a2 2 0 012 2v2a2 2 0 01-2 2H7"
              />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-md text-black"
            />
            <Link href={"/profile"}>
              <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                Profile
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  );
}
