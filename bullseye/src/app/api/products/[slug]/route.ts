import { NextResponse } from "next/server";
import ProductModel from "../../../db/models/products";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;

  const product = await ProductModel.getProductBySlug(slug);

  return NextResponse.json(product);
}
