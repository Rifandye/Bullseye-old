import jwt, { JwtPayload } from "jsonwebtoken";
const secret = process.env.JWT_SECRET as string;

const signToken = (payload: JwtPayload) => {
  return jwt.sign(payload, secret);
};

const verifyToken = (token: string) => {
  return jwt.verify(token, secret);
};

export { signToken, verifyToken };
