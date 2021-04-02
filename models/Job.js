import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    unique: true,
    trim: true,
    maxLength: [100, "Name can not be more than 100 characters"],
  },
  slug: String,
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  status: {
    type: [String],
    required: true,
    enum: ["NEW", "NORM", "DELD", "HOLD"],
  },
  type: {
    type: String,
    required: [true, "Please add a type"],
    match: [/[^A-Za-z0-9]+/, "Please use a valid job type"],
    trim: true,
    maxLength: [8, "Type can not be more than 8 characters"],
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
    trim: true,
    maxLength: [500, "Description can not be more than 500 characters"],
  },
});

export default JobSchema;
