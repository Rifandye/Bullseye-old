import { getCollection } from "../config";
import { ObjectId } from "mongodb";
import { hashPass, comparePass } from "../helpers/bcrypt";
import { z } from "zod";
import { signToken } from "../helpers/jwt";

type User = {
  _id: ObjectId;
  name: string;
  username: string;
  email: string;
  password: string;
};

type NewUserInput = Omit<User, "_id">;
type UserLoginInput = Omit<User, "_id" | "username">;

const UserInputSchema = z.object({
  name: z.string(),
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(5),
});

const LoginInputSchema = z.object({
  email: z.string().email(),
  password: z.string(),
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

    const result = await this.getCollection().insertOne({
      ...newUser,
      password: hashPass(newUser.password),
    });

    return {
      _id: result.insertedId,
      ...newUser,
    } as User;
  }

  static async login(userInput: UserLoginInput) {
    const parseResult = LoginInputSchema.safeParse(userInput);

    if (!parseResult.success) {
      throw parseResult.error;
    }

    const findUser = await this.getCollection().findOne({
      email: userInput.email,
    });

    if (!findUser) {
      throw new Error("Account does not exist");
    }

    const comparedPass = comparePass(userInput.password, findUser.password);

    if (!comparedPass) {
      throw new Error("Email/Password is invalid");
    }

    const access_token = signToken({
      id: findUser._id.toString(),
      username: findUser.username,
      email: findUser.email,
    });

    return access_token;
  }
}

export default UserModel;
