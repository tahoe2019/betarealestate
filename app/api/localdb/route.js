
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client/edge";


const prisma = new PrismaClient();

export async function GET() {
  try {
      const users = await prisma.mytable.findMany();
      return NextResponse.json(users);
  } catch (error) {
      console.error("Error fetching users:", error);
      return NextResponse.error("Internal Server Error", 500);
  }
}

