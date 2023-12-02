import mongoose, { Schema, models } from "mongoose";

const missionSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        length: {
            type: Number,
            required: true
        },
        startDate: {
            type: String,
            required: true
        },
        milestones: {
            type: Array,
            required: true
        },
        status: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

const Mission = models.Mission || mongoose.model("Mission", missionSchema);
export default Mission;
