export default function ProfilePage() {
  const wishlistItems = [
    { id: 1, name: "Product 1", description: "This is Product 1" },
    { id: 2, name: "Product 2", description: "This is Product 2" },
    { id: 3, name: "Product 3", description: "This is Product 3" },
  ];

  return (
    <main className="p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Profile</h1>
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-4">
          <div className="flex-shrink-0">
            <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
          </div>
          <div className="mt-4 md:mt-0">
            <h2 className="text-xl font-semibold">Username</h2>
            <p>Email@example.com</p>
            <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">
              Logout
            </button>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Wishlist</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {wishlistItems.map((item) => (
            <div key={item.id} className="border rounded-lg p-4">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </main>
  );
}
