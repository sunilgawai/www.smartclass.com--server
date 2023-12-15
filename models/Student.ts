import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  middle_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  full_name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  roll_no: {
    type: Number,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Student", studentSchema);
