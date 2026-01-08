import dotenv from "dotenv";
<<<<<<< HEAD
dotenv.config(); 

import app from "./app"; 
import { connectDB } from "./config/db";

=======
import app from "./app";
import { connectDB } from "./config/db";

dotenv.config();

>>>>>>> 6a0f76b656fc8c09e1087ed2565299de89bd1aee
const PORT = process.env.PORT || 3000;
connectDB()

<<<<<<< HEAD
  app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
=======
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
>>>>>>> 6a0f76b656fc8c09e1087ed2565299de89bd1aee
