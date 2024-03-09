import { NextResponse } from "next/server";
import ProductModel from "../../db/models/products";

export async function GET(request: Request) {
  const url = new URL(request.url);

  const page = parseInt(url.searchParams.get("page") || "1", 10);
  const limit = parseInt(url.searchParams.get("limit") || "10", 10);
  const searchQuery = url.searchParams.get("search") || "";

  const { data, totalData, totalPage } = await ProductModel.getAllProduct(
    page,
    limit,
    searchQuery
  );

  return NextResponse.json({
    page,
    limit,
    totalData,
    totalPage,
    data,
  });
}
