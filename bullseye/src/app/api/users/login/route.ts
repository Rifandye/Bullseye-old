import { ZodError } from "zod";
import UserModel from "../../../db/models/user";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await UserModel.login(body);

    return Response.json({
      access_token: result,
    });
  } catch (error) {
    console.log(error);
  }
}
