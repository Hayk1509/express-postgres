import express from "express";
import router from "./src/routes/studentsRoutes.js";
import registerRouter from "./src/routes/registerRoutes.js";
import cors from 'cors';

const app = express();

const port = 3000;
app.use(cors({
  origin: '*'
}));
app.use(express.json());

app.use("/api/v1/", registerRouter);
app.use("/api/v1/students", router);

app.listen(port, () => console.log(`Server is running on port ${port}`));
