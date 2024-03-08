import { IProduct, ProductDetailPageProps } from "@/types";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { cookies } from "next/headers";
import AddWishListButton from "@/components/AddWishListButton";

async function fetchProductData(slug: string): Promise<IProduct> {
  const response = await fetch(`http://localhost:3000/api/products/${slug}`, {
    headers: {
      Cookie: cookies().toString(),
    },
  });

  if (!response.ok) {
    throw new Error("Fetch failed");
  }
  const products: IProduct = await response.json();
  console.log(products);
  return products;
}

export default async function ProductDetail({
  params,
}: ProductDetailPageProps) {
  const product = await fetchProductData(params.slug);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
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
              <p className="mt-4 text-xl font-semibold">${product.price}</p>
              <AddWishListButton product={product} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
