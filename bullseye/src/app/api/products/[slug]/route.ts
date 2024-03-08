import { NextResponse } from "next/server";
import ProductModel from "../../../db/models/products";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const slug = url.pathname.split("/").pop() || "";

  const product = await ProductModel.getProductBySlug(slug);

  return NextResponse.json(product);
}
