import handleApiError from "@/app/shard/handleApiError";
import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const collection = await dbConnect(collections.SERVICES);

    const service = await collection.findOne({ _id: new ObjectId(params.id) });

    return NextResponse.json(service);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

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
