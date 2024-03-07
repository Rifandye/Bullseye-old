import { ZodError } from "zod";
import UserModel from "../../../db/models/user";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await UserModel.register(body);

    return NextResponse.json({
      data: result,
    });
  } catch (error) {
    console.log(error);

    if (error instanceof ZodError) {
      const err = error.issues[0].path + " " + error.issues[0].message;
      return NextResponse.json(
        {
          error: err,
        },
        {
          status: 400,
        }
      );
    }
    if (error instanceof Error) {
      return NextResponse.json(
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
