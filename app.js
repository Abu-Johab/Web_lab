import express from "express";
import cors from "cors";

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json()); // JSON request parsing

// Basic route
app.get("/", (req, res) => {
  res.send("Welcome to Project");
});

// Exporting the app correctly
export { app };  // Named export
