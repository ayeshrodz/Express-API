import express from "express";
import { config } from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

//Load env variables
config({ path: "./config/config.env" });

const app = express();

app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));
app.use(cors());

app.get("/api/v1/jobs", (req, res) => {
  res.status(200).json({ success: true, msg: "Show all jobs" });
});

app.get("/api/v1/jobs/:id", (req, res) => {
  res.status(200).json({ success: true, msg: `Get job ${req.params.id}` });
});

app.post("/api/v1/jobs", (req, res) => {
  res.status(200).json({ success: true, msg: "Create new job" });
});

app.put("/api/v1/jobs/:id", (req, res) => {
  res.status(200).json({ success: true, msg: `Update job ${req.params.id}` });
});

app.delete("/api/v1/jobs/:id", (req, res) => {
  res.status(200).json({ success: true, msg: `Delete job ${req.params.id}` });
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
