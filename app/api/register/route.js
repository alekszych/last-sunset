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
    let userExixts = await User.find({email: email})
    console.log(userExixts.length)
    if(userExixts.length==0){
      await User.create({ role, email, password: hashedPassword, name: name, surname: surname });
      return NextResponse.json({ message: "User registered." }, { status: 201 });
    }
      return NextResponse.json({ message: "User exixts." }, { status: 400 });
  } catch (error) {
    console.log(error)
    return NextResponse.json(
        { message: "An error occurred while registering the user." },
        { status: 500 }
    );
  }
}