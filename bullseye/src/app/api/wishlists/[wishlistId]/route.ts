import WishlistModel from "@/app/db/models/wishlists";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { wishlistId: string } }
) {
  try {
    const _id = params.wishlistId;
    console.log(_id, "<<id");

    await WishlistModel.deleteWishList(_id);

    return NextResponse.json("Successfully Deleted");
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
