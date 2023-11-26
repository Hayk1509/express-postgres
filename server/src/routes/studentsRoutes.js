import { Router } from "express";
import {
  getStudentController,
  getStudentsController,
  postStudentController,
  deleteStudentController,
  changeStudentController,
} from "../controlers/studentsController.js";
import authenticate from "../middelwares/tokenChecker.js";

const router = Router();

router.get("/",[authenticate], getStudentsController);
router.get("/:id", getStudentController);
router.post("/", postStudentController);
router.delete("/:id", deleteStudentController);
router.put("/:id", changeStudentController);
export default router;
