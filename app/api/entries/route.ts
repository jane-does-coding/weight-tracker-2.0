import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	const body = await req.json();
	const { weight, userId } = body;

	if (!weight || !userId) {
		return new NextResponse("Weight and userId are required", { status: 400 });
	}

	try {
		const entry = await prisma.entry.create({
			data: {
				weight: parseInt(weight),
				userId,
			},
		});

		return NextResponse.json(entry);
	} catch (error) {
		console.error("Error creating entry:", error);
		return new NextResponse("Failed to create entry", { status: 500 });
	}
}
