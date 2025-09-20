import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

import { loginUser } from "./loginUser";
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
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
