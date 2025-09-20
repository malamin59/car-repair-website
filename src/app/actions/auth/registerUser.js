"use server";

import { collections, dbConnect } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
    /* VALIDATION */
  const { email, password } = payload;
  if (!email || !password) return { success: false, message: "Email and password required" };

  const userCollection = await dbConnect(collections.UserCollection);

  const user = await userCollection.findOne({ email });
  if (user) return { success: false, message: "User already exists" };

  const result = await userCollection.insertOne(payload);
console.log(result)
  return { 
    success: true, 
    insertedId: result.insertedId.toString() 
  };
}