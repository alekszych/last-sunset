import { NextResponse } from "next/server";
import { connectMongoDB } from "lib/mongodb";
import Task from "@/models/task";

export async function GET(req) {
	try {
		await connectMongoDB();
		let user = await Task.find()
		return NextResponse.json( user, { status: 200 });
	} catch (error) {
		return NextResponse.json(
				{ message: "An error occurred while logging the user." },
				{ status: 500 }
		);
	}
}
