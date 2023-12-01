
import { NextResponse } from "next/server";
import userDb from "../users.json"
import { connectMongoDB } from "lib/mongodb";
import bcrypt from "bcryptjs";
import User from "@/models/user";

export async function POST(req) {
    try {
        await connectMongoDB();
        const { email, password } = await req.json();
        const hashedPassword = await bcrypt.hash(password, 10);
        let role ="astro"
        let user = await User.findOne({ email });
        if(user == null)
            return NextResponse.json(
                { message: "An error occurred while login." },
                { status: 400 }
            );
        const passwordsMatch = await bcrypt.compare(password, user.password);
        if (!passwordsMatch) {
            return NextResponse.json(
                { message: "invalid login." },
                { status: 400 }
            );
        }
        return NextResponse.json( {"id": user._id, "role":user.role}, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: "An error occurred while logging the user." },
            { status: 500 }
        );
    }
}
