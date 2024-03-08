import { NextResponse } from "next/server";
import WishlistModel from "../../db/models/wishlists";

export async function POST(request: Request) {
  try {
    const userId = request.headers.get("x-id-user") as string;
    console.log(userId, "<<< userid API");
    const body = await request.json();
    const wishlist = await WishlistModel.addWishlist({
      productId: body.productId,
      userId: userId,
    });
    return NextResponse.json({ data: wishlist });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request: Request) {
  try {
    const userId = request.headers.get("x-id-user") as string;
    const wishlist = await WishlistModel.getAllWishlist(userId);
    return NextResponse.json({ data: wishlist });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}
