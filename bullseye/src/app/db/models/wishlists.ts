import { getCollection } from "../config";
import { ObjectId } from "mongodb";

type Wishlist = {
  _id: ObjectId;
  userId: string;
  productId: string;
  createdAt: Date;
  updatedAt: Date;
};

type WishlistInput = Omit<Wishlist, "_id">;

class WishlistModel {
  static getCollection() {
    return getCollection("Wishlists");
  }

  static async addWishlist(body: WishlistInput) {
    const result = await this.getCollection().insertOne({
      productId: new ObjectId(body.productId),
      userId: new ObjectId(body.userId),
    });
    return {
      _id: result.insertedId,
      ...body,
    };
  }
}

export default WishlistModel;
