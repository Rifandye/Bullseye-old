import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

const product = {
  id: 1,
  name: "Awesome Gadget",
  description:
    "This is an awesome gadget you definitely want to have. It comes with state-of-the-art features and a sleek design.",
  price: "$99.99",
  imageUrl: "https://via.placeholder.com/400",
};

export default function ProductDetail() {
  return (
    <main>
      <div>
        <Navbar />
      </div>
      <div className="container mx-auto mt-10">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img src={product.imageUrl} alt={product.name} className="w-full" />
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
