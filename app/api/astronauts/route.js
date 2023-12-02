import { NextResponse } from "next/server"

import { connectMongoDB } from "lib/mongodb"
import bcrypt from "bcryptjs";
import User from "@/models/user";

export async function GET(req) {
    try {
        await connectMongoDB();
        let user = await User.find({role:"astro"});

        return NextResponse.json( user, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: "An error occurred while logging the user." },
            { status: 500 }
        );
    }
}
