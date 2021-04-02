import express from "express";
import { config } from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import colors from "colors";
import connectDB from "./config/db.js";

// Route files
import jobs from "./routes/jobs.js";

// Load env variables
config({ path: "./config/config.env" });

const app = express();

app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));
app.use(cors());

// Connect to database
connectDB();

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/jobs", jobs);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);

  // Close the server
  server.close(() => process.exit(1));
});
