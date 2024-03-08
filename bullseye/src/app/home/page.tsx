import Banner from "../../components/Banner";
import CardProduct from "../../components/CardProduct";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { IProduct } from "../../types";

export default async function HomePage() {
  const response = await fetch("http://localhost:3000/api/products");
  const products: IProduct[] = await response.json();

  return (
    <div>
      <Navbar />
      <Banner />
      <div className="flex justify-center">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
          style={{ maxWidth: "1280px" }}
        >
          {products.map((product) => (
            <CardProduct product={product} key={product._id} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
