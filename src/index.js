import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js";
import errorHandlingMiddleware from "./middlewares/errorHandler.js";

import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

//middleware

app.use(express.json());
app.use(cors()); 

//testing postgres connection 
app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT current_database()");
    res.send(`The database name is : ${result.rows[0].current_database}`);
  } catch (error) {
    console.error("Error connecting to the database:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Routes
app.use('/api', userRoutes);

// error handling
app.use(errorHandlingMiddleware);

//server running
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Server is running at http://localhost:${port}`);
});