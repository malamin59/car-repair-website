import handleApiError from "@/app/shard/handleApiError";
import { collections, dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET(params) {
    try{
        const collection = await dbConnect(collections.Services_data)
        const bookingData = await collection.find().toArray()
        return NextResponse.json(bookingData)
    }
    catch(error) {
        handleApiError()
    }
    
}