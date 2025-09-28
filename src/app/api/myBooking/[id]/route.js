import handleApiError from "@/app/shard/handleApiError";
import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    const {id} =  params;
    const bookingCollection = await dbConnect(collections.Services_data);
    const query = { _id: new ObjectId(id) };
    const singleBooking = await bookingCollection.findOne(query);
    return NextResponse.json(singleBooking);
  } catch (error) {
    return handleApiError();
  }
};
