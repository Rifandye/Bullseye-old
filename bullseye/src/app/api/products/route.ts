import { NextResponse } from "next/server";
import ProductModel from "../../db/models/products";
import { ZodError } from "zod";

export async function GET(request: Request) {
  const data = await ProductModel.getAllProduct();
  return NextResponse.json(data);
}
