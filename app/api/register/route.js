import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    await connectMongoDB();
    const { email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    let role ="astro"
    let userExists = User.findOne({email: email})
    if(userExists != null)
      return NextResponse.json({ message: "Useralready exists registered." }, { status: 400 });
    await User.create({ role, email, password: hashedPassword });
    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
        { message: "An error occurred while registering the user." },
        { status: 500 }
    );
  }
}