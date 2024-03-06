import CardProduct from "../../components/CardProduct";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { IProduct } from "../types/Product";

export default async function HomePage() {
  const response = await fetch("http://localhost:3001/products");
  const products: IProduct[] = await response.json();

  return (
    <main>
      <Navbar />
      <div className="flex justify-center">
        <img src="/background.jpg" alt="Banner" className="max-w-full h-80" />
      </div>
      <div className="flex justify-center">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
          style={{ maxWidth: "1280px" }}
        >
          {products.map((products) => (
            <CardProduct product={products} key={products.id} />
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
