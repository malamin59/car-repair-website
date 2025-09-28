import handleApiError from "@/app/shard/handleApiError";
import { collections, dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    body.createAt = new Date();
    const servicesCollection = await dbConnect(collections.SERVICES);
    const res = await servicesCollection.insertOne(body);
    return NextResponse.json(
      {
        success: true,
        message: "Data sent successfully!",
        insertedId: res.insertedId,
      },
      { status: 201 }
    );
  } catch (error) {
    return handleApiError();
  }
}   

/* GET THE SERVICES ALL COLLECTION  */

export async function GET() {
  try {
    const collection = await dbConnect(collections.SERVICES);
    const services = await collection.find().toArray();
    return NextResponse.json(services);
  } catch (error) {
    console.error("API ERROR:", error);
    return NextResponse.json(
      { message: "Error fetching services", error: error.message },
      { status: 500 }
    );
  }
}

// /* GET THE SINGLE SERVICES COLLECTION */
