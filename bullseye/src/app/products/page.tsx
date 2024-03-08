import Footer from "../../components/Footer";
import CardProduct from "../../components/CardProduct";
import Navbar from "../../components/Navbar";
import { IProduct } from "../../types";
import { cookies } from "next/headers";

async function getData(): Promise<IProduct[]> {
  const response = await fetch("http://localhost:3000/api/products", {
    headers: {
      Cookie: cookies().toString(),
    },
  });

  if (!response.ok) {
    throw new Error("Fetch failed");
  }
  return response.json();
}

export default async function Products() {
  const products = await getData();

  return (
    <main>
      <Navbar />
      <div className="flex justify-center">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 flex-grow"
          style={{ maxWidth: "1280px" }}
        >
          {products.map((product) => (
            <CardProduct product={product} key={product._id} />
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
