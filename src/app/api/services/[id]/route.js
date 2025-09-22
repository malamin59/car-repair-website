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
