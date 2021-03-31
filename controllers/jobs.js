// @desc    Get all Jobs
// @route   GET /api/v1/jobs
// @access  Public
export const getJobs = (req, res) => {
  res.status(200).json({ success: true, msg: "Show all jobs" });
};

// @desc    Get single Job
// @route   GET /api/v1/jobs/:id
// @access  Public
export const getJob = (req, res) => {
  res.status(200).json({ success: true, msg: `Get job ${req.params.id}` });
};

// @desc    Create a Job
// @route   POST /api/v1/jobs/:id
// @access  Public
export const createJob = (req, res) => {
  res.status(200).json({ success: true, msg: "Create new job" });
};

// @desc    Update a Job
// @route   PUT /api/v1/jobs/:id
// @access  Public
export const updateJob = (req, res) => {
  res.status(200).json({ success: true, msg: `Update job ${req.params.id}` });
};

// @desc    Delete a Job
// @route   DELETE /api/v1/jobs/:id
// @access  Public
export const deleteJob = (req, res) => {
  res.status(200).json({ success: true, msg: `Delete job ${req.params.id}` });
};
