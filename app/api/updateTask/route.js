import { connectMongoDB } from "@/lib/mongodb";
import Task from "@/models/task";
import { NextResponse } from "next/server";

export async function PUT(req) {
    try {
        await connectMongoDB();
        const { taskId, changedElement, changeValueTo } = await req.json();
        let task;
        switch (changedElement){
            case "title":
                task = await Task.findOneAndUpdate({_id: taskId}, {title: changeValueTo});
                break;
            case "description":
                task = await Task.findOneAndUpdate({_id: taskId}, {description: changeValueTo});
                break;
            case "userId":
                task = await Task.findOneAndUpdate({_id: taskId}, {userId: changeValueTo});
                break;
            default:
                console.log("No such element exists");
                break;
        }
        console.log("task: ", task);
        return NextResponse.json({ task });
    } catch (error) {
        console.log(error);
    }
}
