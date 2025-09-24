import handleApiError from "@/app/shard/handleApiError";
import { authOptions } from "@/lib/authOptions";
import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    const p = await params;
    const session = await getServerSession(authOptions);
    const currentBooking = await dbConnect(collections.Services_data);
    const isAdminOk = session?.user?.email == currentBooking.email;
    const id = { _id: new ObjectId(p.id) };
    if (isAdminOk) {
      const result = await currentBooking.deleteOne(id);
      return NextResponse.json(result);
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to delete data",
        },
        { status: 201 }
      );
    }
  } catch (error) {
    console.log(error);
    return handleApiError();
  }
}

export async function GET(req, { params }) {
  try {
    // params is NOT a promise here → no need to await
    const { id } = await params;

    const collection = await dbConnect(collections.SERVICES);

    const service = await collection.findOne({ _id: new ObjectId(id) });

    if (!service) {
      return NextResponse.json(
        { message: "Service not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(service);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
