import { connectMongoDB } from "@/lib/mongodb";
import Task from "@/models/task";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectMongoDB();
        const { title, description, userId } = await req.json();
        if(userId === undefined)
        {
            const task = await Task.create({title: title, description: description, status: "Pending"});
            console.log("added task: ", task);
            return NextResponse.json({ task });
        }
        else {
            console.log(userId);
            const task = await Task.create({title: title, description: description, status: "Pending", userId: userId});
            console.log("added task: ", task);
            return NextResponse.json({ task });
        }
    } catch (error) {
        console.log(error);
    }
}

export async function GET(req) {
    try {
        await connectMongoDB();
        const userId = req.nextUrl.searchParams.get("userId");
        console.log("userID", userId)
        const task = await Task.find({ userId: userId });
        return NextResponse.json(task);
    } catch (error) {
        console.log(error);
    }
}

export async function PUT(req) {
    try {
        await connectMongoDB();
        const { title, changedElement, changeValueTo } = await req.json();
        let task;
        switch (changedElement){
            case "title":
                task = await Task.findOneAndUpdate({title: title}, {title: changeValueTo});
                break;
            case "description":
                task = await Task.findOneAndUpdate({title: title}, {description: changeValueTo});
                break;
            case "userId":
                task = await Task.findOneAndUpdate({title: title}, {userId: changeValueTo});
                break;
            case "status":
                task = await Task.findOneAndUpdate({title: title}, {status: changeValueTo});
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