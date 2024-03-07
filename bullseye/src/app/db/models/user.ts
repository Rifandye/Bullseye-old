import { getCollection } from "../config";
import { ObjectId } from "mongodb";
import { hashPass, comparePass } from "../helpers/bcrypt";

type User = {
  _id: ObjectId;
  name: string;
  username: string;
  email: string;
  password: string;
};

type NewUserInput = Omit<User, "_id">;

class UserModel {
  static getCollection() {
    return getCollection("Users");
  }

  static async findUser() {
    return (await this.getCollection().find().toArray()) as User[];
  }

  static async register(newUser: NewUserInput) {
    try {
      return await this.getCollection().insertOne({
        ...newUser,
        password: hashPass(newUser.password),
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default UserModel;
