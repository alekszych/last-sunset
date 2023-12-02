import { connectMongoDB } from "@/lib/mongodb";
import Mission from "@/models/mission";
import { NextResponse } from "next/server";


export async function GET(req) {
    try {
        await connectMongoDB();
        const missions = await Mission.find();
        return NextResponse.json({ missions });
    } catch (error) {
        console.log(error);
    }
}