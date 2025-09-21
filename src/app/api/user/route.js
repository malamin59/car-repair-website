import { collections, dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const userCollection = await dbConnect(collections.UserCollection);
    const result = await userCollection.find().sort({ _id: -1 }).toArray();
    return NextResponse.json(result);
  } catch (error) {
    console.error("API ERROR:", error);
    return NextResponse.json(
      { message: "Error fetching services", error: error.message },
      { status: 500 }
    );
  }
}
