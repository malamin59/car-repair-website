import handleApiError from "@/app/shard/handleApiError";
import { collectionName, collections, dbConnect } from "@/lib/dbConnect";

export async function POST(req) {
  try {
    const body = await req.json();
    body.createAt = new Date();
    const servicesCollection = await dbConnect(collections.SERVICES);
    const res = await servicesCollection.insertOne(body);
    return Response.json(
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
