import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

export const generateAccessToken = (payload) => {
  return jwt.sign(payload, accessTokenSecret, { expiresIn: "15m" });
};

export const verifyToken = (token) => {
  return jwt.verify(token, accessTokenSecret);
};
