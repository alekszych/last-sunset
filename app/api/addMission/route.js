import { connectMongoDB } from "@/lib/mongodb";
import Mission from "@/models/mission";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectMongoDB();
        const { title, length, startDate, milestones } = await req.json();
        const mission = await Mission.create({title: title, length: length, startDate: startDate, milestones: milestones, status: "Pending"});
        console.log("added mission: ", mission);
        return NextResponse.json({ mission });
    } catch (error) {
        console.log(error);
    }
}
