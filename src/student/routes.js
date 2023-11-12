import { Router } from "express";
import {
  getStudentController,
  getStudentsController,
  postStudentController,
  deleteStudentController,
  changeStudentController,
} from "./controller.js";

const router = Router();

router.get("/", getStudentsController);
router.get("/:id", getStudentController);
router.post("/", postStudentController);
router.delete("/:id", deleteStudentController);
router.put("/:id", changeStudentController);
export default router;
