import { connectMongoDB } from "@/lib/mongodb";
import Mission from "@/models/mission";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectMongoDB();
        const { title, length, startDate, milestones } = await req.json();
        const mission = await Mission.create({title: title, length: length, startDate: startDate, milestones: milestones, status: "Pending"});
        console.log("added missions: ", mission);
        return NextResponse.json({ mission });
    } catch (error) {
        console.log(error);
    }
}

export async function GET(req) {
    try {
        await connectMongoDB();
        const mission = await Mission.find({ status: "In progress" });
        return NextResponse.json({ mission });
    } catch (error) {
        console.log(error);
    }
}

export async function PUT(req) {
    try {
        await connectMongoDB();
        const { title, changedElement, changeValueTo } = await req.json();
        let mission;
        switch (changedElement){
            case "title":
                mission = await Mission.findOneAndUpdate({title: title}, {title: changeValueTo});
                break;
            case "startDate":
                mission = await Mission.findOneAndUpdate({title: title}, {startDate: changeValueTo});
                break;
            case "length":
                mission = await Mission.findOneAndUpdate({title: title}, {length: changeValueTo});
                break;
            case "status":
                mission = await Mission.findOneAndUpdate({title: title}, {status: changeValueTo});
                break;
            default:
                console.log("No such element exists");
                break;
        }
        console.log("updated missions: ", mission);
        return NextResponse.json({ mission });
    } catch (error) {
        console.log(error);
    }
}

