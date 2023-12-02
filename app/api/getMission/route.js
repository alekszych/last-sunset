import { connectMongoDB } from "@/lib/mongodb";
import Mission from "@/models/mission";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        await connectMongoDB();
        const mission = await Mission.find({ status: "In progress" });
        return NextResponse.json({ mission });
    } catch (error) {
        console.log(error);
    }
}
