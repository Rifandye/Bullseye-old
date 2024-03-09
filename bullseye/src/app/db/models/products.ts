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

  static async getAllProduct(page = 1, limit = 10) {
    const skips = limit * (page - 1);
    return (await this.getCollection()
      .find()
      .skip(skips)
      .limit(limit)
      .toArray()) as Product[];
  }

  static async getProductBySlug(slug: string) {
    const product = await this.getCollection().findOne({ slug: slug });
    return product as string;
  }
}

export default ProductModel;
