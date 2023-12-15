import mongoose, { Schema } from "mongoose";

const classroomSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
    students: {
      type: [Schema.Types.ObjectId],
      required: false,
    },
    teachers: {
      type: [Schema.Types.ObjectId],
      required: false,
    },
    class_teacher: {
      type: String,
      required: false,
    },
    images: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Classroom", classroomSchema);
