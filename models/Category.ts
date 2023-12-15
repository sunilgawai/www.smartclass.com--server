import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    isActive: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    images: {
        type: String,
        required: true,
    },
}, {timestamps: true});

export default mongoose.model("Category", categorySchema);