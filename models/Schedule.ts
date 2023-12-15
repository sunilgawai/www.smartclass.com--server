import mongoose, { Schema } from "mongoose";

const scheduleSchema = new mongoose.Schema({
  days: { type: [String], required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
});

const Schedule = mongoose.model("Schedule", scheduleSchema);

module.exports = Schedule;
