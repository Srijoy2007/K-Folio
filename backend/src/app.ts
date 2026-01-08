import express, { Request, Response } from "express";
import cors from "cors";

<<<<<<< HEAD

dotenv.config();
=======
import authRouter from "./routes/auth";
import postRouter from "./routes/post";

import userRouter from "./routes/user";
>>>>>>> 6a0f76b656fc8c09e1087ed2565299de89bd1aee

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// health check
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Backend Server is running",
    success: true,
  });
});

<<<<<<< HEAD


// Basic health check
app.get('/', (req, res) => res.send('API running'));
=======
// routes
app.use("/auth", authRouter);
app.use("/posts", postRouter);
app.use("/users", userRouter);
>>>>>>> 6a0f76b656fc8c09e1087ed2565299de89bd1aee

export default app;
