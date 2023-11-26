import dotenv from "dotenv";
import { verifyToken } from "../utilitis/tokenManager.js";

dotenv.config();

const authenticate = (req, res, next) => {
  const accessToken = req.headers["authorization"];
  if (!accessToken) {
    return res.status(401).send("Access Denied. No token provided.");
  }
  try {
    const decoded = verifyToken(accessToken);
    console.log(decoded)
    res.body.email = decoded.email;
    next();
  } catch (error) {
    return res.status(401).send("Access Denied. No token provided.");
  }
};

export default authenticate;
