import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const headerList = headers();
    const authorId = parseInt(headerList.get("id"));
    const reqBody = await req.json();
    const prisma = new PrismaClient({ log: ["error"] });
    const result = await prisma.blog.create({
      data: { ...reqBody, authorId: authorId },
    });

    if (result) {
      return NextResponse.json({ status: "success", data: result });
    } else {
      return NextResponse.json({ status: "fail", data: result });
    }
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.toString() });
  }
}
export async function PUT(req, res) {
  try {
    const headerList = headers();
    const authorId = parseInt(headerList.get("id"));
    const reqBody = await req.json();
    const prisma = new PrismaClient({ log: ["error"] });
    const result = await prisma.blog.update({
      where: { authorId, slug: reqBody.slug },
      data: { ...reqBody },
    });
    if (result) {
      return NextResponse.json({ status: "success", data: result });
    } else {
      return NextResponse.json({ status: "fail", data: result });
    }
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.toString() });
  }
}
export async function DELETE(req, res) {
  try {
    const headerList = headers();
    const authorId = parseInt(headerList.get("id"));
    const reqBody = await req.json();
    const prisma = new PrismaClient({ log: ["error"] });
    const result = await prisma.blog.delete({
      where: { authorId, id: reqBody.id },
    });
    if (result) {
      return NextResponse.json({ status: "success", data: result });
    } else {
      return NextResponse.json({ status: "fail", data: result });
    }
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.toString() });
  }
}
