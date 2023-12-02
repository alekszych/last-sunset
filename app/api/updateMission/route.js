import { connectMongoDB } from "@/lib/mongodb";
import Mission from "@/models/mission";
import { NextResponse } from "next/server";

export async function PUT(req) {
    try {
        await connectMongoDB();
        const { missionName, changedElement, changeValueTo } = await req.json();
        let mission;
        switch (changedElement){
            case "title":
                mission = await Mission.findOneAndUpdate({title: missionName}, {title: changeValueTo});
                break;
            case "startDate":
                mission = await Mission.findOneAndUpdate({title: missionName}, {startDate: changeValueTo});
                break;
            case "length":
                mission = await Mission.findOneAndUpdate({title: missionName}, {length: changeValueTo});
                break;
            case "status":
                mission = await Mission.findOneAndUpdate({title: missionName}, {status: changeValueTo});
                break;
            default:
                console.log("No such element exists");
                break;
        }
        console.log("updated mission: ", mission);
        return NextResponse.json({ mission });
    } catch (error) {
        console.log(error);
    }
}
