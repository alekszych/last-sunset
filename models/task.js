import mongoose, { Schema, models } from "mongoose";

const taskSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        userId: {
            type: String,
            required: false
        }
    },
    { timestamps: true }
);

const Task = models.Task || mongoose.model("Task", taskSchema);
export default Task;
