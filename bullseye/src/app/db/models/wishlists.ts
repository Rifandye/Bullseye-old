import { getCollection } from "../config";
import { ObjectId } from "mongodb";

type Wishlist = {
  _id: ObjectId;
  userId: string;
  productId: string;
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
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return {
      _id: result.insertedId,
      ...body,
    };
  }

  static async getAllWishlist(userId: string) {
    const agg = [
      {
        $match: {
          userId: new ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: "Users",
          localField: "userId",
          foreignField: "_id",
          as: "userDetail",
        },
      },
      {
        $unwind: {
          path: "$userDetail",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $project: {
          "userDetail.password": 0,
        },
      },
      {
        $lookup: {
          from: "Products",
          localField: "productId",
          foreignField: "_id",
          as: "productDetail",
        },
      },
    ];

    const wishlist = await this.getCollection().aggregate(agg).toArray();

    return wishlist;
  }

  static async deleteWishList(_id: string) {
    const result = await this.getCollection().deleteOne({
      _id: new ObjectId(_id),
    });
  }
}

export default WishlistModel;
