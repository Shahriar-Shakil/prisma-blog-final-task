import { prisma } from "@/lib/prismaConfig";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const result = await prisma.team.findMany({});

    if (result) {
      return NextResponse.json({ status: "success", data: result });
    } else {
      return NextResponse.json({ status: "fail", data: result });
    }
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.toString() });
  }
}
export async function POST(req, res) {
  try {
    const reqBody = await req.json();
    const result = await prisma.team.create({
      data: { ...reqBody },
    });
    revalidatePath("/api/dashboard/team");

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
    const reqBody = await req.json();
    const result = await prisma.team.update({
      where: { id: reqBody.id },
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
    const reqBody = await req.json();

    const result = await prisma.team.delete({
      where: { id: reqBody.id },
    });

    if (result) {
      return NextResponse.json({
        status: "success",
        data: `Success fully delete Team Member - ${result.name}`,
      });
    } else {
      return NextResponse.json({ status: "fail", data: result });
    }
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.toString() });
  }
}
