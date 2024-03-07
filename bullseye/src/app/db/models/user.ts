import { getCollection } from "../config";
import { ObjectId } from "mongodb";
import { hashPass, comparePass } from "../helpers/bcrypt";
import { z } from "zod";

type User = {
  _id: ObjectId;
  name: string;
  username: string;
  email: string;
  password: string;
};

type NewUserInput = Omit<User, "_id">;

const UserInputSchema = z.object({
  name: z.string(),
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(5),
});

class UserModel {
  static getCollection() {
    return getCollection("Users");
  }

  static async findUser() {
    return (await this.getCollection().find().toArray()) as User[];
  }

  static async register(newUser: NewUserInput) {
    const parseResult = UserInputSchema.safeParse(newUser);
    console.log(parseResult);

    if (!parseResult.success) {
      throw parseResult.error;
    }

    const emailUniqueness = await this.getCollection().findOne({
      email: newUser.email,
    });

    if (emailUniqueness) {
      throw new Error("Email already in use");
    }

    return await this.getCollection().insertOne({
      ...newUser,
      password: hashPass(newUser.password),
    });
  }
}

export default UserModel;
