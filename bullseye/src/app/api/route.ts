import UserModel from "../db/models/user";

export async function GET(request: Request) {
  const data = await UserModel.findUser();
  return Response.json({
    data,
  });
}
