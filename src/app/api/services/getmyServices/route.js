// get the user data

import { authOptions } from "@/lib/authOptions";
import { collections, dbConnect } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    console.log(session)
    const email = session?.user?.email;
    const bookingCollection = await dbConnect(collections.Services_data);
    const result = await bookingCollection.find({ email }).toArray();
    return NextResponse.json(result);
  }

  return NextResponse.json({});
};
