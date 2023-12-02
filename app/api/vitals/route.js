import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { connectMongoDB } from "lib/mongodb";
import bcrypt from "bcryptjs";
import Vitals from "@/models/vitals";
import User from "@/models/user";
import { useParams } from 'next/navigation'

export async function POST(req) {
    try {
        await connectMongoDB();
        const { userId, heartBeat, feeling, sugar, sleep, exercise, mood} = await req.json();
        console.log(userId +" "+ heartBeat)
        let user = await User.findOne({ _id:userId });
        if(user == null)
            return NextResponse.json(
                { message: "Invalid id" },
                { status: 400 }
            );
        await Vitals.find({userId: user}).deleteOne()
        await Vitals.create({userId, heartBeat, feeling, sugar, sleep, exercise, mood})
        return NextResponse.json({ message: "Vitals added." }, { status: 201 });    }
    catch (error) {
        console.log(error)
        return NextResponse.json(
            { message: "An error occurred while adding the vitals." },
            { status: 500 }
        );
    }
}

export async function GET(req) {
    try {
        await connectMongoDB();
        let id = req.nextUrl.searchParams.get("userId")
        console.log("id", id)
        let vitals = await Vitals.findOne({ userId:id });
        console.log(vitals +"----------")
        if(vitals == null)
            return NextResponse.json(
                { message: "Invalid id" },
                { status: 400 }
            );
        return NextResponse.json({ "heartBeat": vitals.heartBeat, "feeling":vitals.feeling, "sugar":vitals.sugar, "sleep": vitals.sleep, "exercise":vitals.exercise }, { status: 200 });    }
    catch (error) {
        console.log(error)
        return NextResponse.json(
            { message: "An error occurred while adding the vitals." },
            { status: 500 }
        );
    }
}