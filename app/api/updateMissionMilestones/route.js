import { connectMongoDB } from "@/lib/mongodb";
import Mission from "@/models/mission";
import { NextResponse } from "next/server";

export async function PUT(req) {
    try {
        await connectMongoDB();
        const { title, changedMilestone, changedElement,changeValueTo } = await req.json();
        let oldMilestones = await Mission.find({ title: title });
        oldMilestones = oldMilestones[0].milestones;
        let newMilestones = oldMilestones;
        oldMilestones.forEach((milestone, i)=>{
            if(milestone.title===changedMilestone)
            {
                switch (changedElement)
                {
                    case "title":
                        newMilestones[i].title = changeValueTo;
                        break;
                    case "description":
                        newMilestones[i].description = changeValueTo;
                        break;
                    case "status":
                        newMilestones[i].status = changeValueTo;
                        break;
                    default:
                        console.log("Milestones have no such parameter");
                        break;
                }
            }
        });

        const mission = await Mission.findOneAndUpdate({title: title}, {milestones: newMilestones});

        console.log("updated mission: ", mission);
        return NextResponse.json({ mission });
    } catch (error) {
        console.log(error);
    }
}
