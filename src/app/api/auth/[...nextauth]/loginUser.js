"use server";

import bcrypt from "bcrypt";
import { collections, dbConnect } from "@/lib/dbConnect";

export const loginUser = async (payload) => {
  const { email, password } = payload;

  const userCollection = await dbConnect(collections.UserCollection);
  const user = await userCollection.findOne({ email });
  if (!user) return null;
  const isPasswordOK = bcrypt.compare(user.password, password);
  if (!isPasswordOK) null;
  return user;
};
