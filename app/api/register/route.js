import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    await connectMongoDB();
    const { email, password, name, surname } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    let role ="astro"
    await User.create({ role, email, password: hashedPassword, name: name, surname: surname });
    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
        { message: "An error occurred while registering the user." },
        { status: 500 }
    );
  }
}