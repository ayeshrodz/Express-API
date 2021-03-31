import express from "express";
import { config } from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
//const jobs = require("./routes/jobs");
//Route files
import jobs from "./routes/jobs.js";

//Load env variables
config({ path: "./config/config.env" });

const app = express();

app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));
app.use(cors());

app.use("/api/v1/jobs", jobs);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
