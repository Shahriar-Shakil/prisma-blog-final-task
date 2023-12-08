import { prisma } from "@/lib/prismaConfig";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function PUT(req) {
  try {
    const headerList = headers();
    const userID = parseInt(headerList.get("id"));
    const reqBody = await req.json();
    const result = await prisma.users.update({
      where: { id: userID },
      data: { ...reqBody },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.toString() });
  }
}
