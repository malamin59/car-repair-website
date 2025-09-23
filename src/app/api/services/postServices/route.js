import handleApiError from "@/app/shard/handleApiError";
import { collections, dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    body.createAt = new Date();
    const userServices = await dbConnect(collections.Services_data);
    const result = await userServices.insertOne(body);
    return NextResponse.json(
      {
        success: true,
        message: "Data sent successfully!",
        insertedId: result.insertedId,
      },
      { status: 201 }
    );
  } catch (error) {
    return handleApiError();
  }
}
