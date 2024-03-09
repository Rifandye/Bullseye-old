import { IProduct, ProductDetailPageProps } from "@/types";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { cookies } from "next/headers";
import AddWishListButton from "@/components/AddWishListButton";
import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const product = await fetchProductData(slug);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.name,
    openGraph: {
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  };
}

async function fetchProductData(slug: string): Promise<IProduct> {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + `/api/products/${slug}`,
    {
      headers: {
        Cookie: cookies().toString(),
      },
    }
  );

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
              <Image
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
