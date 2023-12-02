import { connectMongoDB } from "@/lib/mongodb";
import Mission from "@/models/mission";
import { NextResponse } from "next/server";

export async function PUT(req) {
    try {
        await connectMongoDB();
        const { missionTitle, title, description } = await req.json();
        let milestones = await Mission.find({ title: missionTitle });
        milestones = milestones[0].milestones;
        milestones.push({title: title, description: description, status: "Pending"});
        const mission = await Mission.findOneAndUpdate({title: missionTitle}, {milestones: milestones});
        console.log("updated missions: ", mission);
        return NextResponse.json({ mission });
    } catch (error) {
        console.log(error);
    }
}

