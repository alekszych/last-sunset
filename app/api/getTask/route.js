import { connectMongoDB } from "@/lib/mongodb";
import Task from "@/models/task";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        await connectMongoDB();
        const userId = req.nextUrl.searchParams.get("userId");
        console.log(userId)
        const task = await Task.find({ userId: userId });
        return NextResponse.json(task);
    } catch (error) {
        console.log(error);
    }
}
