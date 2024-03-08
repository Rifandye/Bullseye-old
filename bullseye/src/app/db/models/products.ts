import { getCollection } from "../config";
import { ObjectId } from "mongodb";

type Product = {
  _id: ObjectId;
  slug: string;
  desciption: string;
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

  static async getAllProduct() {
    return (await this.getCollection().find().toArray()) as Product[];
  }

  static async getProductBySlug(slug: string) {
    const product = await this.getCollection().findOne({ slug: slug });
    return product;
  }
}

export default ProductModel;
