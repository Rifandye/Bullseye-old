import { getCollection } from "../config";
import { ObjectId } from "mongodb";

type Product = {
  _id: ObjectId;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: [string];
  thumbnail: string;
  image: [string];
  createdAt: string;
  updatedAt: string;
};

class ProductModel {
  static getCollection() {
    return getCollection("Products");
  }

  static async getAllProduct(page = 1, limit = 10, searchQuery?: string) {
    const skips = limit * (page - 1);
    let query = {};

    if (searchQuery) {
      query = {
        name: { $regex: searchQuery, $options: "i" },
      };
    }

    const data = await this.getCollection()
      .find(query)
      .skip(skips)
      .limit(limit)
      .toArray();

    const count = await this.getCollection().countDocuments(query);

    return {
      data,
      totalData: count,
      page,
      totalPage: Math.ceil(count / limit),
      limit,
    };
  }

  static async getProductBySlug(slug: string) {
    const product = await this.getCollection().findOne({ slug: slug });
    return product as string;
  }
}

export default ProductModel;
