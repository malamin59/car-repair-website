import handleApiError from "@/app/shard/handleApiError";
import { authOptions } from "@/lib/authOptions";
import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

// export async function DELETE(req, { params }) {
//   try {
//     const p =  params;
//     const session = await getServerSession(authOptions);
//     const currentBooking = await dbConnect(collections.Services_data);
//     const isAdminOk = session?.user?.email == currentBooking.email;
//     const id = { _id: new ObjectId(p.id) };
//     if (isAdminOk) {
//       const result = await currentBooking.deleteOne(id);
//       revalidatePath("/myBookings")
//       return NextResponse.json(result);
//     } else {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Failed to delete data",
//         },
//         { status: 201 }
//       );
//     }
//   } catch (error) {
//     console.log(error);
//     return handleApiError();
//   }
// }

export async function DELETE(req, { params }) {
  try {
    const { id } = params; // ✅ use params.id, no await
    if (!id || !ObjectId.isValid(id)) {
      return NextResponse.json({ message: "Invalid ID" }, { status: 400 });
    }

    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const collection = await dbConnect(collections.Services_data);

    // Optional: check if the current user owns the booking
    const service = await collection.findOne({ _id: new ObjectId(id) });
    if (!service) {
      return NextResponse.json({ message: "Service not found" }, { status: 404 });
    }

    const isAdminOk = session.user.email === service.email; // check ownership
    if (!isAdminOk) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }

    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    // Revalidate page if using ISR / App Router caching
    revalidatePath("/myBookings");

    return NextResponse.json({ message: "Deleted successfully", result });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function GET(req, { params }) {
  try {
    // params is NOT a promise here → no need to await
    const { id } =  params;

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
