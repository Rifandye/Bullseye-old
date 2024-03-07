import { IProduct, ProductDetailPageProps } from "../../../types";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

export default async function ProductDetail({
  params,
}: ProductDetailPageProps) {
  const response = await fetch(
    `http://localhost:3001/products?slug=${params.slug}`
  );
  const products: IProduct[] = await response.json();

  const product = products[0];

  return (
    <main>
      <div>
        <Navbar />
      </div>
      <div className="container mx-auto mt-10">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src={product.thumbnail}
              alt={product.name}
              className="w-full"
            />
          </div>
          <div className="md:w-1/2 md:pl-10">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="mt-4 text-lg">{product.description}</p>
            <p className="mt-4 text-xl font-semibold">{product.price}</p>
            <button className="px-6 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
