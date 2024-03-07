import { ZodError } from "zod";
import UserModel from "../../../db/models/user";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await UserModel.register(body);

    return Response.json({
      body,
    });
  } catch (error) {
    console.log(error);

    if (error instanceof ZodError) {
      const err = error.issues[0].path + " " + error.issues[0].message;
      return Response.json(
        {
          error: err,
        },
        {
          status: 400,
        }
      );
    }
    if (error instanceof Error) {
      return Response.json(
        {
          error: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}
