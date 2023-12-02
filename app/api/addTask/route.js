import { connectMongoDB } from "@/lib/mongodb";
import Task from "@/models/task";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectMongoDB();
        const { taskName, taskDescription, userId } = await req.json();
        if(userId === undefined)
        {
            const task = await Task.create({title: taskName, description: taskDescription, status: "Pending"});
            console.log("added task: ", task);
            return NextResponse.json({ task });
        }
        else {
            console.log(userId);
            const task = await Task.create({title: taskName, description: taskDescription, status: "Pending", userId: userId});
            console.log("added task: ", task);
            return NextResponse.json({ task });
        }
    } catch (error) {
        console.log(error);
    }
}
