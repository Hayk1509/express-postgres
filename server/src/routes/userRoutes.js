import {
  addUerPictureController,
  createNewUserController,
  loginController,
} from "../controlers/userController.js";

import { Router } from "express";
import authenticate from "../middelwares/tokenChecker.js";

const userRoutes = Router();

userRoutes.post("/register", createNewUserController);

userRoutes.post('/picture', [authenticate], addUerPictureController);
userRoutes.get('/picture', [authenticate], addUerPictureController);

userRoutes.post("/login", loginController);

export default userRoutes;
