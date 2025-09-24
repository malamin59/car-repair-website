import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    // params is NOT a promise here → no need to await
    const { id } = await params;

    const collection = await dbConnect(collections.SERVICES);

    const service = await collection.findOne({ _id: new ObjectId(id) });

    if (!service) {
      return NextResponse.json({ message: "Service not found" }, { status: 404 });
    }

    return NextResponse.json(service);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
