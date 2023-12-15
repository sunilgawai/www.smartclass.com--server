import mongoose, { Schema, now } from "mongoose";

const vehicalSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    isAvailable: {
      type: Boolean,
      required: true,
      default: true,
    },
    image: {
      type: String,
      required: false,
    },
    images: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    vehical_number: {
        type: String,
        required: true,
    },
    owned_by_count: {
        type: String,
        required: true,
    },
    registration_date: {
        type: Date,
        required: false,
        default: now
    },
  },
  { timestamps: true }
);

export default mongoose.model("Vehical", vehicalSchema);
