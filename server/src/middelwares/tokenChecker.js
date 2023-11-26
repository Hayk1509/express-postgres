import dotenv from "dotenv";
import { generateAccessToken, verifyToken } from "../utilitis/tokenManager.js";

dotenv.config();

const authenticate = (req, res, next) => {
  const accessToken = req.headers["authorization"];
  if (!accessToken) {
    return res.status(401).send("Access Denied. No token provided.");
  }
  try {
    const decoded = verifyToken(accessToken);
    next();
  } catch (error) {
    return res.status(401).send("Access Denied. No token provided.");
  }
};

export default authenticate;
