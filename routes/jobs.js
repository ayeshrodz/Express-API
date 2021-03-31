import express from "express";

import {
  getJob,
  getJobs,
  createJob,
  updateJob,
  deleteJob,
} from "../controllers/jobs.js";

let router = express.Router();

router.route("/").get(getJobs).post(createJob);
router.route("/:id").get(getJob).put(updateJob).delete(deleteJob);

export default router;
