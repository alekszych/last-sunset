import mongoose, { Schema, models } from "mongoose";
import {ST} from "next/dist/shared/lib/utils";

const vitalsSchema = new Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        heartBeat: {
            type: String,
            required: true,
        },
        feeling: {
            type: String,
            required: true,
        },
        sugar: {
            type: String,
            required: true,
        },
        sleep:{
            type:String,
            required:true
        },
        exercise:{
            type:String,
            required:true
        }
    },
    { timestamps: true }
);

const Vitals = models.Vitals || mongoose.model("Vitals", vitalsSchema);
export default Vitals;
