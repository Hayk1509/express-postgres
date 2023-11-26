import { Router } from "express";
import {
  createNewUserController,
  loginController,
} from "../controlers/registrController.js";
import authenticate from "../middelwares/tokenChecker.js";

const registerRouter = Router();

registerRouter.post("/register", createNewUserController);

registerRouter.post("/login", loginController);

export default registerRouter;
