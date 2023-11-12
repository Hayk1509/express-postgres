import express from "express";
import router from "./src/student/routes.js";
import { getStudentController } from "./src/student/controller.js";
const app = express();

const port = 3000;
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/students", router);




app.listen(port, () => console.log(`Server is running on port ${port}`));
