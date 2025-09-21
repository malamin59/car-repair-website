import { loginUser } from "@/app/api/auth/[...nextauth]/loginUser";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

import { collections, dbConnect } from "./dbConnect";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      async authorize(credentials, req) {
        const user = await loginUser(credentials);
        console.log(credentials);
        console.log(user);

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log({ user, account, profile, email, credentials });
      if (account) {
        const { providerAccountId, provider } = account;
        const { name, email: user_email, image } = user;
        const userCollection = await dbConnect(collections.UserCollection);
        const existingUser = await userCollection.findOne({ providerAccountId });

        if (!existingUser) {
          const payload = {
            providerAccountId,
            image,
            name,
            user_email,
            provider,
          };
          await userCollection.insertOne(payload);
        }
        
      }
      return true;
    },
  },
};
