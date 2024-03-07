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

type NewProductInput = Omit<Product, "_id" | "createdAt" | "updatedAt">;

class ProductModel {
  static getCollection() {
    return getCollection("Products");
  }

  static async findProduct() {
    return (await this.getCollection().find().toArray()) as Product[];
  }

  static async addProduct(newProduct: NewProductInput) {}
}

export default ProductModel;
